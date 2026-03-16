import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.2, 0, 0, 1] as const },
};

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "Indian Institute of Technology",
    period: "2021 – 2025",
    description: "Specialization in Artificial Intelligence and Machine Learning. Relevant coursework: Deep Learning, Computer Vision, NLP, Statistical Learning, Data Structures & Algorithms.",
  },
  {
    degree: "Higher Secondary (XII)",
    school: "Delhi Public School",
    period: "2019 – 2021",
    description: "Science stream with Mathematics and Computer Science. Achieved 95% aggregate with distinction in Mathematics.",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-spacing">
      <div className="container">
        <motion.div {...fadeInUp}>
          <h2 className="text-display text-3xl mb-4">Education</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="space-y-6 max-w-3xl">
          {education.map((edu) => (
            <motion.div
              key={edu.degree}
              {...fadeInUp}
              className="rounded-[24px] bg-card p-6 card-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="text-base font-semibold text-foreground">{edu.degree}</h3>
                    <span className="text-xs font-medium text-muted-foreground tabular-nums">{edu.period}</span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-2">{edu.school}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
