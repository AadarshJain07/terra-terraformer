import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const Leaderboard = () => {
  const cities = [
    { name: "San Francisco", score: 92 },
    { name: "Copenhagen", score: 89 },
    { name: "Singapore", score: 86 },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-8 pt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold gradient-text mb-8 flex items-center gap-2"><Trophy className="w-10 h-10 text-gold" />City Leaderboard</h1>
          <div className="space-y-4">
            {cities.map((city, idx) => (
              <Card key={city.name} className="glass-card p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-gold">#{idx + 1}</span>
                  <h3 className="text-xl font-bold">{city.name}</h3>
                </div>
                <span className="text-2xl font-bold text-eco-green">{city.score}</span>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Leaderboard;
