import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.2, 0, 0, 1] as const },
};

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C", "C++", "SQL"],
  },
  {
    title: "Frameworks & ML",
    skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-Learn", "OpenCV", "Pandas", "NumPy", "NLTK"],
  },
  {
    title: "Web & Databases",
    skills: ["Django", "Flask", "Streamlit", "MySQL", "MongoDB", "HTML/CSS"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "RESTful APIs", "SMTP", "Hugging Face"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-spacing relative">
      <div className="container relative z-10">
        <motion.div {...fadeInUp}>
          <h2 className="text-display text-3xl mb-4">Technical Toolkit</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12 shadow-[0_0_10px_hsl(var(--primary))]" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="rounded-[24px] p-6 glass-card glass-card-hover"
            >
              <h3 className="text-lg font-display font-semibold text-foreground mb-5">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2 }}
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-medium cursor-default shadow-sm backdrop-blur-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;