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
    role: "Python Development Intern",
    company: "Devnex Technologies, Bangaluru",
    date: "May 2025 - June 2025",
    bullets: [
      "Developed and maintained scalable RESTful APIs using Django and Flask to support web application features.",
      "Automated data processing pipelines using Python scripts, reducing manual entry time by 40%.",
      "Collaborated with the engineering team to debug and optimize existing codebases, improving application performance."
    ]
  },
  {
    role: "Data Analyst",
    company: "Local Business",
    date: "May 2024 - October 2024",
    bullets: [
      "Designed interactive dashboards using Matplotlib and Seaborn to visualize key business KPIs for senior leadership.",
      "Performed data cleaning and preprocessing on raw datasets using Pandas, ensuring 99% data accuracy.",
      "Transformed raw operational data into actionable business insights, driving a 15% increase in operational efficiency."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-spacing relative">
      <div className="container relative z-10">
        <motion.div {...fadeInUp}>
          <h2 className="text-display text-3xl mb-4">Experience</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12 shadow-[0_0_10px_hsl(var(--primary))]" />
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="glass-card p-6 md:p-8 rounded-[24px] border-l-4 border-l-primary"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" /> {exp.role}
                  </h3>
                  <p className="text-primary/80 font-medium text-sm mt-1">{exp.company}</p>
                </div>
                <span className="text-xs font-medium text-muted-foreground bg-white/5 px-3 py-1 rounded-full w-fit">
                  {exp.date}
                </span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;