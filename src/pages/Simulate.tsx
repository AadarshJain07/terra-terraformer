import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { FlaskConical, Plus, Minus, TrendingDown, TrendingUp, Save } from "lucide-react";
import { toast } from "sonner";

interface Intervention {
  id: string;
  type: string;
  count: number;
  icon: string;
  label: string;
}

const Simulate = () => {
  const [interventions, setInterventions] = useState<Intervention[]>([
    { id: "parks", type: "parks", count: 0, icon: "🌳", label: "Green Parks" },
    { id: "solar", type: "solar", count: 0, icon: "☀️", label: "Solar Panels" },
    { id: "housing", type: "housing", count: 0, icon: "🏘️", label: "Eco Housing" },
    { id: "health", type: "health", count: 0, icon: "🏥", label: "Health Centers" },
  ]);

  const [metrics, setMetrics] = useState({
    heat: 45,
    co2: 320,
    water: 65,
    air: 72,
  });

  const updateIntervention = (id: string, delta: number) => {
    setInterventions(prev =>
      prev.map(i => i.id === id ? { ...i, count: Math.max(0, i.count + delta) } : i)
    );
    
    // Simulate metric updates
    setMetrics(prev => ({
      heat: Math.max(0, prev.heat - delta * 2),
      co2: Math.max(0, prev.co2 - delta * 5),
      water: Math.min(100, prev.water + delta * 3),
      air: Math.min(100, prev.air + delta * 2),
    }));
  };

  const handleSave = () => {
    toast.success("Scenario saved successfully!");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-space/20 border border-purple-space/40 mb-4">
              <FlaskConical className="w-4 h-4 text-purple-space" />
              <span className="text-sm text-purple-space font-semibold">Simulation Studio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Urban Resilience Simulator
            </h1>
            <p className="text-muted-foreground text-lg">
              Add interventions and watch metrics update in real-time
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Interventions Panel */}
            <Card className="glass-card p-6 space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Plus className="w-6 h-6 text-eco-green" />
                Add Interventions
              </h2>

              <div className="space-y-4">
                {interventions.map((intervention) => (
                  <div key={intervention.id} className="p-4 rounded-lg bg-muted/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{intervention.icon}</span>
                        <div>
                          <h3 className="font-semibold">{intervention.label}</h3>
                          <p className="text-sm text-muted-foreground">Count: {intervention.count}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => updateIntervention(intervention.id, -1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <Button
                          size="icon"
                          className="bg-eco-green hover:bg-eco-green-bright"
                          onClick={() => updateIntervention(intervention.id, 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                className="w-full bg-eco-green hover:bg-eco-green-bright"
                onClick={handleSave}
              >
                <Save className="w-4 h-4 mr-2" />
                Save Scenario
              </Button>
            </Card>

            {/* Metrics Panel */}
            <Card className="glass-card p-6 space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-cyber-cyan" />
                Impact Metrics
              </h2>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Heat Island Effect</Label>
                    <Badge variant={metrics.heat < 40 ? "default" : "destructive"}>
                      {metrics.heat}°C
                    </Badge>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-eco-green to-warning-amber"
                      initial={{ width: 0 }}
                      animate={{ width: `${metrics.heat}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <TrendingDown className="w-3 h-3 text-eco-green" />
                    Lower is better
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>CO₂ Emissions</Label>
                    <Badge variant={metrics.co2 < 300 ? "default" : "destructive"}>
                      {metrics.co2} ppm
                    </Badge>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-eco-green to-destructive"
                      initial={{ width: 0 }}
                      animate={{ width: `${(metrics.co2 / 500) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <TrendingDown className="w-3 h-3 text-eco-green" />
                    Reduction target: 250 ppm
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Water Conservation</Label>
                    <Badge variant="default">
                      {metrics.water}%
                    </Badge>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyber-cyan to-ocean-blue"
                      initial={{ width: 0 }}
                      animate={{ width: `${metrics.water}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-eco-green" />
                    Higher is better
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Air Quality Index</Label>
                    <Badge variant="default">
                      {metrics.air}/100
                    </Badge>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-ocean-blue to-eco-green"
                      initial={{ width: 0 }}
                      animate={{ width: `${metrics.air}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-eco-green" />
                    Target: 80+
                  </p>
                </div>
              </div>

              {/* Summary */}
              <div className="p-4 rounded-lg bg-eco-green/20 border border-eco-green/40">
                <h3 className="font-semibold text-eco-green mb-2">Projected Impact</h3>
                <p className="text-sm">
                  With {interventions.reduce((sum, i) => sum + i.count, 0)} interventions, you could reduce heat by{" "}
                  <span className="font-bold text-eco-green">{55 - metrics.heat}°C</span> and save{" "}
                  <span className="font-bold text-eco-green">{metrics.water}%</span> more water!
                </p>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Simulate;
