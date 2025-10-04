import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Coins } from "lucide-react";

const Shop = () => {
  const items = [
    { id: 1, name: "Solar Panel Kit", price: 500, image: "☀️" },
    { id: 2, name: "Tree Planting Pack", price: 250, image: "🌳" },
    { id: 3, name: "Eco Water Filter", price: 350, image: "💧" },
    { id: 4, name: "Compost Bin", price: 150, image: "♻️" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-8 pt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold gradient-text mb-8">EcoCoin Shop</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <Card key={item.id} className="glass-card p-6 space-y-4">
                <div className="text-6xl text-center">{item.image}</div>
                <h3 className="font-bold text-center">{item.name}</h3>
                <div className="flex items-center justify-center gap-2 text-gold">
                  <Coins className="w-5 h-5" />
                  <span className="font-bold">{item.price}</span>
                </div>
                <Button className="w-full bg-eco-green hover:bg-eco-green-bright">Purchase</Button>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Shop;
