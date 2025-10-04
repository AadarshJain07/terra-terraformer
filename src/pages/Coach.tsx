import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Send, Sparkles, Building2, Globe } from "lucide-react";
import { toast } from "sonner";

const Coach = () => {
  const [mode, setMode] = useState<"citizen" | "planner" | "government">("citizen");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([
    {
      role: "assistant",
      content: "Hi! I'm your AI Climate Coach powered by Gemini. I can help you with eco-missions, climate tips, and urban planning advice. What mode would you like to use today?"
    }
  ]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const newMessage = { role: "user", content: message };
    setMessages(prev => [...prev, newMessage]);
    setMessage("");

    // TODO: Connect to Gemini edge function
    toast.info("AI response coming soon!");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-cyan/20 border border-cyber-cyan/40 mb-4">
              <Sparkles className="w-4 h-4 text-cyber-cyan" />
              <span className="text-sm text-cyber-cyan font-semibold">Powered by Gemini 2.5 Flash</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              AI Climate Coach
            </h1>
            <p className="text-muted-foreground text-lg">
              Get personalized eco-missions and climate action guidance
            </p>
          </div>

          {/* Mode Selector */}
          <Tabs value={mode} onValueChange={(v: any) => setMode(v)} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="citizen" className="gap-2">
                <Bot className="w-4 h-4" />
                Citizen
              </TabsTrigger>
              <TabsTrigger value="planner" className="gap-2">
                <Building2 className="w-4 h-4" />
                Planner
              </TabsTrigger>
              <TabsTrigger value="government" className="gap-2">
                <Globe className="w-4 h-4" />
                Government
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Chat Interface */}
          <Card className="glass-card p-6 space-y-4">
            <div className="h-[500px] overflow-y-auto space-y-4 pr-2">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      msg.role === "user"
                        ? "bg-eco-green text-white"
                        : "bg-muted/50"
                    }`}
                  >
                    {msg.role === "assistant" && (
                      <div className="flex items-center gap-2 mb-2">
                        <Bot className="w-4 h-4 text-cyber-cyan" />
                        <span className="text-xs font-semibold text-cyber-cyan">AI Coach</span>
                      </div>
                    )}
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-2">
              <Textarea
                placeholder="Ask for eco-missions, climate tips, or planning advice..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                className="resize-none"
                rows={3}
              />
              <Button
                size="icon"
                className="h-auto bg-eco-green hover:bg-eco-green-bright"
                onClick={handleSend}
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Get eco-mission",
              "Climate tips",
              "Urban planning",
              "Policy advice"
            ].map((action) => (
              <Button
                key={action}
                variant="outline"
                className="border-eco-green/40 hover:bg-eco-green/20"
                onClick={() => setMessage(action)}
              >
                {action}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Coach;
