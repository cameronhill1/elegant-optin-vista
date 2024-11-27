import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Zap, Shield, Inbox } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for subscribing!");
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center">
      <main className="container max-w-4xl mx-auto px-6 py-24">
        <div className="text-center animate-fade-in space-y-20">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              Build something amazing today
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of developers who are already creating the future with our platform. Start your journey today.
            </p>

            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </form>
            </div>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            <div className="flex items-center gap-4 animate-fade-in text-left" style={{ animationDelay: "0.2s" }}>
              <Zap className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Lightning Fast:</span> Built for speed and efficiency, deploy your projects in seconds.
              </p>
            </div>
            
            <div className="flex items-center gap-4 animate-fade-in text-left" style={{ animationDelay: "0.4s" }}>
              <Shield className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Secure by Default:</span> Enterprise-grade security built into every layer of the platform.
              </p>
            </div>
            
            <div className="flex items-center gap-4 animate-fade-in text-left" style={{ animationDelay: "0.6s" }}>
              <Inbox className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Easy Integration:</span> Seamlessly integrate with your existing tools and workflows.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;