import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, XCircle, Mail, Phone, Clock, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import MembersHeader from "@/components/MembersHeader";
import Footer from "@/components/Footer";
import { verifyAdminStatus } from "@/lib/adminCheck";

interface SignupRequest {
  id: string;
  email: string;
  full_name: string;
  phone: string | null;
  message: string | null;
  status: string;
  created_at: string;
}

const AdminPanel = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<SignupRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    checkAdminAccess();
    loadRequests();
  }, []);

  const checkAdminAccess = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate("/auth");
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('verify-admin');
      
      if (error || !data?.isAdmin) {
        toast.error("Access denied. Admin privileges required.");
        navigate("/members");
        return;
      }

      setIsAdmin(true);
    } catch (err) {
      toast.error("Access denied. Admin privileges required.");
      navigate("/members");
    }
  };

  const loadRequests = async () => {
    try {
      const { data, error } = await supabase
        .from("signup_requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setRequests(data || []);
    } catch (error: any) {
      console.error('Error loading requests:', error);
      toast.error("Failed to load requests. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleApprove = async (request: SignupRequest) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Add to email whitelist
      const { error: whitelistError } = await supabase
        .from("email_whitelist")
        .insert({
          email: request.email,
          approved_by: user.id,
          notes: `Approved from signup request - ${request.full_name}`,
        });

      if (whitelistError) throw whitelistError;

      // Update signup request status
      const { error: updateError } = await supabase
        .from("signup_requests")
        .update({
          status: "approved",
          approved_by: user.id,
          approved_at: new Date().toISOString(),
        })
        .eq("id", request.id);

      if (updateError) throw updateError;

      toast.success(`Approved ${request.full_name}. They can now sign up!`);
      loadRequests();

      // TODO: Send confirmation email to the user
    } catch (error: any) {
      console.error('Error approving request:', error);
      toast.error("Failed to approve request. Please try again.");
    }
  };

  const handleReject = async (request: SignupRequest) => {
    try {
      const { error } = await supabase
        .from("signup_requests")
        .update({
          status: "rejected",
        })
        .eq("id", request.id);

      if (error) throw error;

      toast.success(`Rejected request from ${request.full_name}`);
      loadRequests();
    } catch (error: any) {
      console.error('Error rejecting request:', error);
      toast.error("Failed to reject request. Please try again.");
    }
  };

  if (isAdmin === null) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4" />
          <p className="text-muted-foreground">Verifying access...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <MembersHeader />
      
      <main className="flex-1 bg-gradient-subtle py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
            <p className="text-muted-foreground">Manage signup requests and user access</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Signup Requests</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="py-8 text-center text-muted-foreground">Loading requests...</div>
              ) : requests.length === 0 ? (
                <div className="py-8 text-center text-muted-foreground">No signup requests found</div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Submitted</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {requests.map((request) => (
                        <TableRow key={request.id}>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4 text-muted-foreground" />
                              {request.full_name}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-muted-foreground" />
                              {request.email}
                            </div>
                          </TableCell>
                          <TableCell>
                            {request.phone ? (
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-muted-foreground" />
                                {request.phone}
                              </div>
                            ) : (
                              <span className="text-muted-foreground">-</span>
                            )}
                          </TableCell>
                          <TableCell className="max-w-xs truncate">
                            {request.message || <span className="text-muted-foreground">-</span>}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                request.status === "approved"
                                  ? "default"
                                  : request.status === "rejected"
                                  ? "destructive"
                                  : "secondary"
                              }
                            >
                              {request.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              {new Date(request.created_at).toLocaleDateString()}
                            </div>
                          </TableCell>
                          <TableCell>
                            {request.status === "pending" && (
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  onClick={() => handleApprove(request)}
                                  className="flex items-center gap-1"
                                >
                                  <CheckCircle className="h-3 w-3" />
                                  Approve
                                </Button>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => handleReject(request)}
                                  className="flex items-center gap-1"
                                >
                                  <XCircle className="h-3 w-3" />
                                  Reject
                                </Button>
                              </div>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminPanel;
