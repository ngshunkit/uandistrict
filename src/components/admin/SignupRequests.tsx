import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Check, X, Mail, Phone, Clock, User } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SignupRequest {
  id: string;
  email: string;
  full_name: string;
  phone: string | null;
  message: string | null;
  status: string;
  created_at: string;
}

export const SignupRequests = () => {
  const [requests, setRequests] = useState<SignupRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);

  const fetchRequests = async () => {
    try {
      const { data, error } = await supabase
        .from("signup_requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setRequests(data || []);
    } catch (error: any) {
      toast.error("Failed to load signup requests");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleApprove = async (request: SignupRequest) => {
    setProcessingId(request.id);
    try {
      // Add email to whitelist
      const { error: whitelistError } = await supabase
        .from("email_whitelist")
        .insert({
          email: request.email,
          notes: `Approved from signup request - ${request.full_name}`,
        });

      if (whitelistError) {
        if (whitelistError.code === '23505') {
          toast.error("Email is already whitelisted");
        } else {
          throw whitelistError;
        }
        return;
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

      toast.success(`Approved ${request.email}! They can now sign up.`);
      
      // TODO: Send confirmation email to user
      // You would call an edge function here to send the email
      
      fetchRequests();
    } catch (error: any) {
      toast.error(error.message || "Failed to approve request");
      console.error(error);
    } finally {
      setProcessingId(null);
    }
  };

  const handleReject = async (request: SignupRequest) => {
    setProcessingId(request.id);
    try {
      const { error } = await supabase
        .from("signup_requests")
        .update({
          status: "rejected",
        })
        .eq("id", request.id);

      if (error) throw error;

      toast.success(`Rejected request from ${request.email}`);
      fetchRequests();
    } catch (error: any) {
      toast.error("Failed to reject request");
      console.error(error);
    } finally {
      setProcessingId(null);
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Signup Requests</CardTitle>
          <CardDescription>Loading requests...</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const pendingRequests = requests.filter(r => r.status === 'pending');
  const processedRequests = requests.filter(r => r.status !== 'pending');

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Pending Signup Requests</CardTitle>
          <CardDescription>
            {pendingRequests.length} request{pendingRequests.length !== 1 ? 's' : ''} waiting for approval
          </CardDescription>
        </CardHeader>
        <CardContent>
          {pendingRequests.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">No pending requests</p>
          ) : (
            <div className="space-y-4">
              {pendingRequests.map((request) => (
                <Card key={request.id} className="border-2">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="font-semibold">{request.full_name}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          <span>{request.email}</span>
                        </div>
                        
                        {request.phone && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="h-4 w-4" />
                            <span>{request.phone}</span>
                          </div>
                        )}
                        
                        {request.message && (
                          <div className="mt-2 rounded-md bg-muted p-3 text-sm">
                            <p className="text-muted-foreground">{request.message}</p>
                          </div>
                        )}
                        
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>Requested {new Date(request.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 ml-4">
                        <Button
                          size="sm"
                          onClick={() => handleApprove(request)}
                          disabled={processingId === request.id}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <Check className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleReject(request)}
                          disabled={processingId === request.id}
                        >
                          <X className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {processedRequests.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Processed Requests</CardTitle>
            <CardDescription>Previously approved or rejected requests</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-64">
              <div className="space-y-3">
                {processedRequests.map((request) => (
                  <div key={request.id} className="flex items-center justify-between border-b pb-3">
                    <div>
                      <p className="font-medium">{request.full_name}</p>
                      <p className="text-sm text-muted-foreground">{request.email}</p>
                    </div>
                    <Badge variant={request.status === 'approved' ? 'default' : 'destructive'}>
                      {request.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
