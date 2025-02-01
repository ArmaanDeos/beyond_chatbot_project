import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { XCircle, Share2, Mail, Copy } from "react-feather";
import Confetti from "react-confetti";
import { CheckCircle } from "lucide-react";

const ChatbotIntegration = () => {
  const navigate = useNavigate();
  const [showCode, setShowCode] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [integrationStatus, setIntegrationStatus] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [copied, setCopied] = useState(false);

  const dummyCode = `<script src="https://cdn.beyondchats.com/chatbot.js"></script>`;

  const handleTestIntegration = () => {
    // Simulate integration check
    setTimeout(() => {
      setIntegrationStatus(Math.random() > 0.3 ? "success" : "error");
      setShowEmail(true);
    }, 1500);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(dummyCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 ">
      {/* Confetti for success */}
      {integrationStatus === "success" && <Confetti recycle={false} />}

      <Card className="w-full max-w-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-800/50 hover:border-cyan-500/30 transition-all group relative overflow-hidden ">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold text-white">
            Chatbot Integration
          </CardTitle>
          <CardDescription className="text-md">
            Test and integrate your chatbot with your website
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Test Chatbot Button */}
          <div className="space-y-2">
            <Link to={"/chatbot/preview"} target="_blank">
              <Button className="w-full">Test Chatbot</Button>
            </Link>
            <div className="text-sm text-muted-foreground">
              Opens chatbot preview in new tab
            </div>
          </div>

          {/* Integration Options */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setShowCode(true)}
              >
                Integrate on Your Website
              </Button>
            </div>

            <div className="space-y-2">
              <Button className="w-full" onClick={handleTestIntegration}>
                Test Integration
              </Button>
            </div>
          </div>

          {/* Integration Status Display */}
          {integrationStatus && (
            <div className="mt-8">
              {integrationStatus === "success" ? (
                <div className="text-center space-y-4">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                  <h3 className="text-2xl font-bold text-white">
                    Integration Successful!
                  </h3>
                  <div className="flex flex-col md:flex-row gap-2 justify-center">
                    <Button onClick={() => navigate("/admin")}>
                      Explore Admin Panel
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => window.open("/chat")}
                    >
                      Start Talking to Chatbot
                    </Button>
                  </div>
                  <div className="flex gap-2 justify-center mt-4">
                    <Button variant="outline" className="gap-2">
                      <Share2 size={16} /> Twitter
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Share2 size={16} /> Facebook
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <XCircle className="h-16 w-16 text-red-500 mx-auto" />
                  <h3 className="text-2xl font-bold">
                    Integration Not Detected
                  </h3>
                  <p className="text-muted-foreground">
                    Please check the installation and try again
                  </p>
                  <Button onClick={() => setIntegrationStatus(null)}>
                    Try Again
                  </Button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Code Integration Modal */}
      {showCode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <Card className="w-full max-w-xl">
            <CardHeader>
              <CardTitle>Website Integration</CardTitle>
              <CardDescription>
                Add this code to your website's &lt;head&gt; section
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative bg-gray-100 rounded-lg p-4 font-mono">
                <code>{dummyCode}</code>
                <Button
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={copyToClipboard}
                >
                  {copied ? "Copied!" : <Copy size={16} />}
                </Button>
              </div>
            </CardContent>
            <CardContent className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowCode(false)}>
                Close
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Email Instructions Modal */}
      {showEmail && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <Card className="w-full max-w-xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-800/50 hover:border-cyan-500/30 transition-all group relative overflow-hidden ">
            <CardHeader>
              <CardTitle className="text-white ">Email Instructions</CardTitle>
              <CardDescription className="text-md">
                Send integration instructions to your developer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-white ">Developer Email</Label>
                <Input
                  type="email"
                  placeholder="developer@company.com"
                  className="text-white "
                />
              </div>
              <div className="space-y-2">
                <Label className="text-white ">Additional Notes</Label>
                <Input
                  placeholder="Optional instructions..."
                  className="text-white "
                />
              </div>
            </CardContent>
            <CardContent className="flex justify-end gap-2">
              <Button
                variant="outline"
                className="text-black "
                onClick={() => setShowEmail(false)}
              >
                Cancel
              </Button>
              <Button onClick={() => setShowEmail(false)}>
                <Mail size={16} className="mr-2" /> Send Instructions
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Chatbot Preview Topbar */}
      {window.location.pathname === "/chatbot-preview" && (
        <div className="fixed top-0 left-0 right-0 bg-yellow-100 p-2 text-center">
          <span className="flex items-center justify-center gap-2">
            Chatbot not working as intended?
            <Input
              className="w-48"
              placeholder="Share feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <Button size="sm" onClick={() => setFeedback("")}>
              Submit
            </Button>
          </span>
        </div>
      )}
    </div>
  );
};

export default ChatbotIntegration;
