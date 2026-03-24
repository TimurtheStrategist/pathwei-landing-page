import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-primary/60" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">AI-Powered Career Mapping</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight tracking-tight mb-6">
            Your personalized
            <br />
            <span className="text-accent">pathway to your</span>
            <br />
            dream career
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-xl mx-auto mb-10 leading-relaxed">
            pathwei.ai builds a step-by-step plan tailored to your skills, goals, and university — so you graduate career-ready.
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
