import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2 } from "lucide-react";

const Games = () => {
  const games = [
    { id: 1, name: "Climate Trivia", icon: "🧠", xp: 50 },
    { id: 2, name: "Eco Runner", icon: "🏃", xp: 100 },
    { id: 3, name: "Waste Sorting", icon: "♻️", xp: 75 },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-8 pt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold gradient-text mb-8">Mini Games</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {games.map((game) => (
              <Card key={game.id} className="glass-card p-8 text-center space-y-4">
                <div className="text-6xl">{game.icon}</div>
                <h3 className="text-xl font-bold">{game.name}</h3>
                <p className="text-sm text-muted-foreground">Earn {game.xp} XP</p>
                <Button className="w-full bg-eco-green hover:bg-eco-green-bright">Play Now</Button>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Games;
