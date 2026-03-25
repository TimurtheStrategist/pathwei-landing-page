import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--hero-gradient)]">
      {/* Subtle purple glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-sm font-medium text-primary">Intelligence Alignment</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight mb-6">
            Define your
            <br />
            <span className="text-primary">trajectory.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            pathwei.ai analyzes your skills, goals, and university to build a step-by-step career pathway — so you graduate ready.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="rounded-full text-base px-8 h-12">
              Start Your Pathway
            </Button>
            <Button variant="hero-outline" size="lg" className="rounded-full text-base px-8 h-12">
              See How It Works
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
