import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.2, 0, 0, 1] as const },
};

const Education = () => {
  return (
    <section id="education" className="section-spacing relative bg-background/50">
      <div className="container relative z-10">
        <motion.div {...fadeInUp}>
          <h2 className="text-display text-3xl mb-4">Education & Achievements</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12 shadow-[0_0_10px_hsl(var(--primary))]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-[24px]"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-2">B.Tech in Computer Science (AI & ML)</h3>
            <p className="text-muted-foreground mb-4">Jodhpur Institute of Engineering and Technology</p>
            <div className="flex justify-between items-center text-sm font-medium border-t border-white/10 pt-4">
              <span className="text-primary">2023 - 2027</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">CGPA: 9.48/10</span>
            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-[24px]"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-4">Key Achievements</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-0.5">✦</span>
                <p><strong className="text-foreground">Coding Profile:</strong> 5-Star Badge in Python & C on HackerRank; Solved 150+ DSA problems on LeetCode/HackerRank.</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-0.5">✦</span>
                <p><strong className="text-foreground">Hackathons:</strong> Secured 2 wins and achieved Finalist status in 10+ national-level hackathons.</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-0.5">✦</span>
                <p><strong className="text-foreground">CodeVita:</strong> Cracked TCS CodeVita Season 13 round 1 against 500k+ participants.</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;