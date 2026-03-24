import { motion } from "framer-motion";
import { Brain, Calendar, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Personalized Plans",
    description: "Every pathway is unique — built from your degree, interests, and the job market in your field.",
  },
  {
    icon: Calendar,
    title: "Semester-by-Semester",
    description: "Know exactly what to focus on each term: courses, clubs, side projects, and certifications.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Adaptation",
    description: "As you complete milestones or change goals, your pathway evolves with you.",
  },
  {
    icon: Users,
    title: "Mentor Matching",
    description: "Get connected with professionals and alumni who walked a similar path before you.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
            Built for ambitious students
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
