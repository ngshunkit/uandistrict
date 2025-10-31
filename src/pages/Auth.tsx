import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Lock, Mail, User, ArrowRight, Phone, Check, X, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { authSchema, signupRequestSchema } from "@/lib/validationSchemas";
import { verifyAdminStatus } from "@/lib/adminCheck";
import { z } from "zod";

const Auth = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [signupRequests, setSignupRequests] = useState<any[]>([]);

  // Check if current user is admin using server-side verification
  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        try {
          const { data, error } = await supabase.functions.invoke('verify-admin');
          
          if (error) {
            setIsAdmin(false);
          } else {
            setIsAdmin(!!data?.isAdmin);
            
            if (data?.isAdmin) {
              // Fetch pending signup requests
              const { data: requests } = await supabase
                .from("signup_requests")
                .select("*")
                .eq("status", "pending")
                .order("created_at", { ascending: false });
              
              setSignupRequests(requests || []);
            }
          }
        } catch (err) {
          setIsAdmin(false);
        }
      }
    };
    
    checkAdmin();
  }, []);

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/members");
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        navigate("/members");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate input data
      const validated = authSchema.parse({
        email: email.trim(),
        password,
        full_name: fullName.trim()
      });

      const { data, error } = await supabase.auth.signUp({
        email: validated.email,
        password: validated.password,
        options: {
          emailRedirectTo: `${window.location.origin}/members`,
          data: {
            full_name: validated.full_name
          }
        }
      });

      if (error) {
        // Generic error message to prevent account enumeration
        console.error('Signup error:', error.message);
        if (error.message.includes('not authorized')) {
          toast.error("Your email is not authorized. Please contact an administrator for access.");
        } else {
          toast.error("Unable to create account. Please check your email is authorized and try again.");
        }
        return;
      }

      if (data.user) {
        toast.success("Account created successfully! Redirecting to members area...");
      }
    } catch (error: any) {
      if (error.issues) {
        // Zod validation error
        const firstError = error.issues[0];
        toast.error(firstError?.message || "Invalid form data");
      } else {
        toast.error(error.message || "An error occurred during signup");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate input data
      const validated = authSchema.parse({
        email: email.trim(),
        password
      });

      const { data, error } = await supabase.auth.signInWithPassword({
        email: validated.email,
        password: validated.password,
      });

      if (error) {
        // Generic error message to prevent account enumeration
        console.error('Sign in error:', error.message);
        toast.error("Invalid email or password. Please try again.");
        return;
      }

      if (data.session) {
        toast.success("Welcome back!");
        navigate("/members");
      }
    } catch (error: any) {
      if (error.issues) {
        // Zod validation error
        const firstError = error.issues[0];
        toast.error(firstError?.message || "Invalid form data");
      } else {
        toast.error(error.message || "An error occurred during login");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRequestAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate input data
      const validated = signupRequestSchema.parse({
        email: email.trim(),
        full_name: fullName.trim(),
        phone: phone || '',
        message: message || ''
      });

      const { error } = await supabase
        .from("signup_requests")
        .insert({
          email: validated.email,
          full_name: validated.full_name,
          phone: validated.phone || null,
          message: validated.message || null,
        });

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast.error("A request with this email already exists.");
        } else {
          toast.error(error.message);
        }
        return;
      }

      toast.success("Access request submitted! An admin will review your request soon.");
      // Reset form
      setEmail("");
      setFullName("");
      setPhone("");
      setMessage("");
    } catch (error: any) {
      if (error.issues) {
        // Zod validation error
        const firstError = error.issues[0];
        toast.error(firstError?.message || "Invalid form data");
      } else {
        toast.error(error.message || "An error occurred while submitting your request");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleApproveRequest = async (request: any) => {
    try {
      // Add email to whitelist
      const { error: whitelistError } = await supabase
        .from("email_whitelist")
        .insert({
          email: request.email,
          notes: `Approved from signup request - ${request.full_name}`,
        });

      if (whitelistError && whitelistError.code !== '23505') {
        throw whitelistError;
      }

      // Update request status
      const { error: updateError } = await supabase
        .from("signup_requests")
        .update({
          status: "approved",
          approved_at: new Date().toISOString(),
        })
        .eq("id", request.id);

      if (updateError) throw updateError;

      toast.success(`Approved ${request.email}!`);
      
      // Refresh requests list
      const { data: requests } = await supabase
        .from("signup_requests")
        .select("*")
        .eq("status", "pending")
        .order("created_at", { ascending: false });
      
      setSignupRequests(requests || []);
    } catch (error: any) {
      toast.error(error.message || "Failed to approve request");
    }
  };

  const handleRejectRequest = async (request: any) => {
    try {
      const { error } = await supabase
        .from("signup_requests")
        .update({ status: "rejected" })
        .eq("id", request.id);

      if (error) throw error;

      toast.success(`Rejected request from ${request.email}`);
      
      // Refresh requests list
      const { data: requests } = await supabase
        .from("signup_requests")
        .select("*")
        .eq("status", "pending")
        .order("created_at", { ascending: false });
      
      setSignupRequests(requests || []);
    } catch (error: any) {
      toast.error("Failed to reject request");
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex flex-1 items-center justify-center bg-gradient-subtle py-12">
        <div className="container px-4">
          <div className="mx-auto max-w-md">
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                <Lock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="mb-2 text-3xl font-bold text-foreground">Member Access</h1>
              <p className="text-muted-foreground">
                Sign in or create an account to access the members area
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue={isAdmin && signupRequests.length > 0 ? "admin" : "signin"} className="w-full">
                  <TabsList className={`grid w-full ${isAdmin && signupRequests.length > 0 ? 'grid-cols-4' : 'grid-cols-3'}`}>
                    <TabsTrigger value="signin">Sign In</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    <TabsTrigger value="request">Request Access</TabsTrigger>
                    {isAdmin && signupRequests.length > 0 && (
                      <TabsTrigger value="admin">
                        <Shield className="h-4 w-4 mr-1" />
                        Admin ({signupRequests.length})
                      </TabsTrigger>
                    )}
                  </TabsList>
                  
                  <TabsContent value="signin">
                    <form onSubmit={handleSignIn} className="space-y-4">
                      <div>
                        <Label htmlFor="signin-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="signin-email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="signin-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="signin-password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10"
                            required
                            minLength={12}
                          />
                        </div>
                      </div>

                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Signing in..." : "Sign In"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="signup">
                    <form onSubmit={handleSignUp} className="space-y-4">
                      <div>
                        <Label htmlFor="signup-name">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="signup-name"
                            type="text"
                            placeholder="John Doe"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="signup-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="signup-email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Only whitelisted emails can register
                        </p>
                      </div>
                      
                      <div>
                        <Label htmlFor="signup-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="signup-password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10"
                            required
                            minLength={12}
                          />
                        </div>
                         <p className="mt-1 text-xs text-muted-foreground">
                          Min 12 chars with uppercase, lowercase, number, and special character
                        </p>
                      </div>

                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Creating account..." : "Create Account"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="request">
                    <div className="mb-4 rounded-lg bg-muted p-4">
                      <p className="text-sm text-foreground">
                        <strong>New to UAN District?</strong> Submit an access request and our team will review your application. You'll receive an email confirmation once approved.
                      </p>
                    </div>
                    <form onSubmit={handleRequestAccess} className="space-y-4">
                      <div>
                        <Label htmlFor="request-name">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="request-name"
                            type="text"
                            placeholder="John Doe"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="request-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="request-email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="request-phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="request-phone"
                            type="tel"
                            placeholder="+852 1234 5678"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="request-message">Why do you want to join?</Label>
                        <Textarea
                          id="request-message"
                          placeholder="Tell us about your interest in joining UAN District..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={4}
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Submitting..." : "Request Access"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="admin">
                    <div className="space-y-4">
                      <div className="mb-4 rounded-lg bg-muted p-4">
                        <p className="text-sm font-semibold text-foreground flex items-center">
                          <Shield className="h-4 w-4 mr-2 text-primary" />
                          Admin: Pending Signup Requests
                        </p>
                      </div>
                      
                      {signupRequests.length === 0 ? (
                        <p className="text-center text-muted-foreground py-8">No pending requests</p>
                      ) : (
                        <div className="space-y-3 max-h-96 overflow-y-auto">
                          {signupRequests.map((request) => (
                            <Card key={request.id} className="border-2">
                              <CardContent className="p-4">
                                <div className="space-y-3">
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-1">
                                        <User className="h-4 w-4 text-muted-foreground" />
                                        <span className="font-semibold text-sm">{request.full_name}</span>
                                      </div>
                                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <Mail className="h-3 w-3" />
                                        <span>{request.email}</span>
                                      </div>
                                      {request.phone && (
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                          <Phone className="h-3 w-3" />
                                          <span>{request.phone}</span>
                                        </div>
                                      )}
                                    </div>
                                    <Badge variant="secondary" className="text-xs">
                                      {new Date(request.created_at).toLocaleDateString()}
                                    </Badge>
                                  </div>
                                  
                                  {request.message && (
                                    <div className="rounded-md bg-muted p-2 text-xs">
                                      <p className="text-muted-foreground">{request.message}</p>
                                    </div>
                                  )}
                                  
                                  <div className="flex gap-2">
                                    <Button
                                      size="sm"
                                      onClick={() => handleApproveRequest(request)}
                                      className="flex-1 bg-green-600 hover:bg-green-700 text-xs h-8"
                                    >
                                      <Check className="h-3 w-3 mr-1" />
                                      Approve
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="destructive"
                                      onClick={() => handleRejectRequest(request)}
                                      className="flex-1 text-xs h-8"
                                    >
                                      <X className="h-3 w-3 mr-1" />
                                      Reject
                                    </Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              This portal is for authorized UAN District members only. 
              Contact your administrator if you need access.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Auth;
