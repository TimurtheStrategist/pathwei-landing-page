import { motion } from "framer-motion";
import { Target, Route, Rocket } from "lucide-react";

const steps = [
  {
    icon: Target,
    number: "01",
    title: "Tell us your goal",
    description: "Share your dream job, current skills, and where you are in your degree.",
  },
  {
    icon: Route,
    number: "02",
    title: "Get your pathway",
    description: "Our AI maps out courses, internships, projects, and skills you need — semester by semester.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Track & adapt",
    description: "Check off milestones and watch your pathway update in real time as you grow.",
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
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
            Three steps to your future
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-6xl font-heading font-bold text-muted/80 absolute top-4 right-6 select-none">
                {step.number}
              </span>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-accent" />
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
