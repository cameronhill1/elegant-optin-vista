import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Inbox, Zap, Shield } from "lucide-react";

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
    <div className="min-h-screen bg-white">
      <main className="container max-w-6xl mx-auto px-6 py-16">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Build something amazing today
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of developers who are already creating the future with our platform. Start your journey today.
          </p>

          <div className="max-w-md mx-auto mb-16">
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

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
            <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="mt-1">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Built for speed and efficiency, deploy your projects in seconds.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="mt-1">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Secure by Default</h3>
                <p className="text-gray-600">Enterprise-grade security built into every layer of the platform.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="mt-1">
                <Inbox className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Easy Integration</h3>
                <p className="text-gray-600">Seamlessly integrate with your existing tools and workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;