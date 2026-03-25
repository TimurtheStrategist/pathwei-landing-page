import { motion } from "framer-motion";
import { Target, Route, Rocket } from "lucide-react";

const steps = [
  {
    icon: Target,
    number: "01",
    title: "Define your target",
    description: "Share your dream role, current skills, and where you are in your degree. Wei calibrates your trajectory.",
  },
  {
    icon: Route,
    number: "02",
    title: "Generate your pathway",
    description: "Our AI maps courses, internships, projects, and certifications — semester by semester.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Track & adapt",
    description: "Complete milestones and watch your pathway evolve in real time as the market shifts.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
            Three phases to alignment
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <span className="text-6xl font-heading font-bold text-muted/60 absolute top-4 right-6 select-none">
                {step.number}
              </span>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
