import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

const Admin = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-8 pt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold gradient-text mb-8 flex items-center gap-2"><Shield className="w-10 h-10 text-cyber-cyan" />Admin Dashboard</h1>
          <Card className="glass-card p-8"><p className="text-muted-foreground">Admin controls for managing users, eco-actions, and challenges.</p></Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Admin;
