import { motion } from "framer-motion";
import { GraduationCap, Award, BadgeCheck } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.2, 0, 0, 1] as const },
};

const certifications = [
  {
    name: "AI Apprentice",
    issuer: "Intel & Digital India Foundation",
  },
  {
    name: "Data Analytics & Visualization",
    issuer: "Accenture, North America (Forage)",
  },
  {
    name: "Software Engineering Job Simulation",
    issuer: "Electronic Arts (Forage)",
  },
  {
    name: "Ethics in Engineering & Soft Skills",
    issuer: "NPTEL Elite Silver (Top 2%)",
  },
  {
    name: "CS201: Data Structures",
    issuer: "Saylor Academy",
  },
  {
    name: "CS205: Building with AI ",
    issuer: "Saylor Academy",
  },
  {
    name: "Database Design & ER Modeling ",
    issuer: "InfoSys Springboard",
  },
  {
    name: " C programming",
    issuer: "InfoSys Springboard",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
  },
  {
    name: "AI powered marketer",
    issuer: "Semrush Academy",
  },
  {
    name: "Front-End Development Libraries",
    issuer: "freeCodeCamp",
  },
  {
    name: "Responsive Web Design V8",
    issuer: "freeCodeCamp",
  }
];

const Education = () => {
  return (
    <section id="education" className="section-spacing relative bg-background/50">
      <div className="container relative z-10">
        <motion.div {...fadeInUp}>
          <h2 className="text-display text-3xl mb-4">Education & Achievements</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12 shadow-[0_0_10px_hsl(var(--primary))]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-[24px]"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
              <GraduationCap className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-2">B.Tech in Computer Science (AI & ML)</h3>
            <p className="text-muted-foreground mb-4">Jodhpur Institute of Engineering and Technology</p>
            <div className="flex justify-between items-center text-sm font-medium border-t border-white/10 pt-4">
              <span className="text-primary">2023 - 2027</span>
              <span className="bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full shadow-sm">CGPA: 9.48/10</span>
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
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
              <Award className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-4">Key Achievements</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {/* GATE Qualification Added Here */}
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-0.5">✦</span>
                <p><strong className="text-foreground">GATE 2026 (DA):</strong> Qualified the Graduate Aptitude Test in Engineering in Data Science & Artificial Intelligence.</p>
              </li>
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

        {/* Certifications Section */}
        <motion.div {...fadeInUp}>
          <h3 className="text-2xl font-display font-semibold mb-6 flex items-center gap-2">
            <BadgeCheck className="w-6 h-6 text-primary" /> Licenses & Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="glass-card glass-card-hover p-5 rounded-[16px] flex flex-col justify-center"
              >
                <h4 className="text-sm font-semibold text-foreground mb-2 leading-tight">{cert.name}</h4>
                <p className="text-xs text-primary font-medium">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;