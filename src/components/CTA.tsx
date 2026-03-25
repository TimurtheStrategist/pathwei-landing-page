import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
            Don't leave your career to chance
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Join thousands of students mapping their futures with pathwei.ai. Early access is free.
          </p>
          <Button variant="hero" size="lg" className="rounded-full text-base px-10 h-12">
            Initialize Your Pathway
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
