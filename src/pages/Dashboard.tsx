import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import { BarChart3, Droplets, Wind, Leaf, ThermometerSun } from "lucide-react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const mockData = [
  { month: "Jan", air: 65, water: 72, vegetation: 58, heat: 45 },
  { month: "Feb", air: 68, water: 70, vegetation: 62, heat: 48 },
  { month: "Mar", air: 70, water: 75, vegetation: 65, heat: 52 },
  { month: "Apr", air: 72, water: 78, vegetation: 68, heat: 55 },
  { month: "May", air: 75, water: 80, vegetation: 72, heat: 58 },
  { month: "Jun", air: 78, water: 82, vegetation: 75, heat: 62 },
];

const Dashboard = () => {
  const [selectedCity, setSelectedCity] = useState("San Francisco");

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              Resilience Dashboard
            </h1>
            <p className="text-muted-foreground text-lg">
              Real-time environmental data for {selectedCity}
            </p>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass-card p-6 space-y-2">
              <div className="flex items-center justify-between">
                <Wind className="w-8 h-8 text-ocean-blue" />
                <span className="text-2xl font-bold">72</span>
              </div>
              <h3 className="text-sm text-muted-foreground">Air Quality Index</h3>
              <p className="text-xs text-eco-green">+5% vs last month</p>
            </Card>

            <Card className="glass-card p-6 space-y-2">
              <div className="flex items-center justify-between">
                <Droplets className="w-8 h-8 text-cyber-cyan" />
                <span className="text-2xl font-bold">85%</span>
              </div>
              <h3 className="text-sm text-muted-foreground">Water Quality</h3>
              <p className="text-xs text-eco-green">+3% improvement</p>
            </Card>

            <Card className="glass-card p-6 space-y-2">
              <div className="flex items-center justify-between">
                <Leaf className="w-8 h-8 text-eco-green" />
                <span className="text-2xl font-bold">68%</span>
              </div>
              <h3 className="text-sm text-muted-foreground">Vegetation Index</h3>
              <p className="text-xs text-eco-green">+8% growth</p>
            </Card>

            <Card className="glass-card p-6 space-y-2">
              <div className="flex items-center justify-between">
                <ThermometerSun className="w-8 h-8 text-warning-amber" />
                <span className="text-2xl font-bold">+2.3°C</span>
              </div>
              <h3 className="text-sm text-muted-foreground">Heat Island Effect</h3>
              <p className="text-xs text-destructive">-2% from target</p>
            </Card>
          </div>

          {/* Charts Section */}
          <Tabs defaultValue="trends" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="trends">Environmental Trends</TabsTrigger>
              <TabsTrigger value="satellite">Satellite Data</TabsTrigger>
              <TabsTrigger value="risks">Climate Risks</TabsTrigger>
            </TabsList>

            <TabsContent value="trends">
              <Card className="glass-card p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-eco-green" />
                  6-Month Environmental Metrics
                </h3>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={mockData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--foreground))" />
                    <YAxis stroke="hsl(var(--foreground))" />
                    <Tooltip
                      contentStyle={{
                        background: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="air" stroke="hsl(var(--ocean-blue))" strokeWidth={2} name="Air Quality" />
                    <Line type="monotone" dataKey="water" stroke="hsl(var(--cyber-cyan))" strokeWidth={2} name="Water Quality" />
                    <Line type="monotone" dataKey="vegetation" stroke="hsl(var(--eco-green))" strokeWidth={2} name="Vegetation" />
                    <Line type="monotone" dataKey="heat" stroke="hsl(var(--warning-amber))" strokeWidth={2} name="Heat Index" />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </TabsContent>

            <TabsContent value="satellite">
              <Card className="glass-card p-6">
                <h3 className="text-xl font-bold mb-6">NASA Satellite Overlays</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["MODIS", "Landsat", "SMAP", "TEMPO", "Worldview", "GHSL"].map((layer) => (
                    <button
                      key={layer}
                      className="glass-card p-4 rounded-lg hover:bg-eco-green/20 transition-colors border border-eco-green/40"
                    >
                      <div className="text-sm font-semibold">{layer}</div>
                      <div className="text-xs text-muted-foreground mt-1">Click to toggle</div>
                    </button>
                  ))}
                </div>
                <div className="mt-6 aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive satellite map will load here</p>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="risks">
              <Card className="glass-card p-6">
                <h3 className="text-xl font-bold mb-6">Climate Risk Assessment</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={mockData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--foreground))" />
                    <YAxis stroke="hsl(var(--foreground))" />
                    <Tooltip
                      contentStyle={{
                        background: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                    <Area type="monotone" dataKey="heat" stackId="1" stroke="hsl(var(--warning-amber))" fill="hsl(var(--warning-amber) / 0.3)" name="Heat Risk" />
                    <Area type="monotone" dataKey="water" stackId="1" stroke="hsl(var(--cyber-cyan))" fill="hsl(var(--cyber-cyan) / 0.3)" name="Flood Risk" />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
