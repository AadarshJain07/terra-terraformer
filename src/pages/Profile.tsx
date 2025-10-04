import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Trophy, Coins, Zap } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-8 pt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold gradient-text mb-8">User Profile</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-card p-6"><Zap className="w-8 h-8 text-cyber-cyan mb-2" /><h3>Level 5</h3><p className="text-2xl font-bold">2,450 XP</p></Card>
            <Card className="glass-card p-6"><Coins className="w-8 h-8 text-gold mb-2" /><h3>EcoCoins</h3><p className="text-2xl font-bold">1,250</p></Card>
            <Card className="glass-card p-6"><Trophy className="w-8 h-8 text-eco-green mb-2" /><h3>Badges</h3><p className="text-2xl font-bold">12</p></Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
