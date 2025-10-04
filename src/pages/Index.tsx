import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Globe, TrendingUp, Users } from "lucide-react";

const EarthGlobe = () => {
  return (
    <Sphere args={[1, 64, 64]}>
      <MeshDistortMaterial
        color="#22c55e"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  );
};

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <EarthGlobe />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Particle overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-4xl"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-eco-green/20 border border-eco-green/40"
            >
              <Sparkles className="w-4 h-4 text-eco-green" />
              <span className="text-sm text-eco-green font-semibold">Powered by AI & Real-Time Data</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-eco-green via-cyber-cyan to-ocean-blue">
              Earth Resilience
              <br />
              Dashboard
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Build a climate-resilient future. Track real-time satellite data, simulate interventions, and earn rewards for eco-actions.
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-eco-green hover:bg-eco-green-bright glow-border-eco"
              onClick={() => navigate("/dashboard")}
            >
              <Globe className="mr-2 h-5 w-5" />
              Explore Dashboard
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/20"
              onClick={() => navigate("/auth")}
            >
              Get Started Free
            </Button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
              <TrendingUp className="w-12 h-12 text-eco-green mb-4 mx-auto" />
              <h3 className="text-lg font-bold mb-2">Real-Time Insights</h3>
              <p className="text-sm text-muted-foreground">
                NASA satellite data, weather risks, and urban resilience metrics
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
              <Sparkles className="w-12 h-12 text-cyber-cyan mb-4 mx-auto" />
              <h3 className="text-lg font-bold mb-2">AI Coach</h3>
              <p className="text-sm text-muted-foreground">
                Get personalized eco-missions and climate action guidance
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
              <Users className="w-12 h-12 text-gold mb-4 mx-auto" />
              <h3 className="text-lg font-bold mb-2">Gamified Impact</h3>
              <p className="text-sm text-muted-foreground">
                Earn XP, EcoCoins, and compete on city leaderboards
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
