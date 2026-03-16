import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.2, 0, 0, 1] as const },
};

const experiences = [
  {
    role: "ML Engineer Intern",
    company: "Tech Startup",
    period: "Jun 2024 – Present",
    description: "Developing and deploying ML models for production. Engineered data pipelines processing 1M+ records daily. Improved model accuracy by 15% through feature engineering.",
  },
  {
    role: "Research Assistant",
    company: "University AI Lab",
    period: "Jan 2023 – May 2024",
    description: "Conducted research on transformer architectures for NLP tasks. Published findings on efficient fine-tuning methods. Collaborated with cross-functional teams on applied ML projects.",
  },
  {
    role: "Data Science Intern",
    company: "Analytics Corp",
    period: "May 2022 – Dec 2022",
    description: "Built predictive models for customer churn analysis. Automated reporting workflows reducing manual effort by 40%. Created dashboards for real-time business intelligence.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-spacing bg-surface">
      <div className="container">
        <motion.div {...fadeInUp}>
          <h2 className="text-display text-3xl mb-4">Experience</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <motion.div
                key={exp.role}
                {...fadeInUp}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-1 w-10 h-10 rounded-full bg-primary/10 items-center justify-center">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>

                <div className="rounded-[24px] bg-card p-6 card-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-xs font-medium text-muted-foreground tabular-nums">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
