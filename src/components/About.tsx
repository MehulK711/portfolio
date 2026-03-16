import { motion } from "framer-motion";
import { Code, Brain, Image as ImageIcon, Smartphone } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.2, 0, 0, 1] as const },
};

const highlights = [
  { icon: Brain, label: "Deep Learning", desc: "Neural networks, GANs & foundational models" },
  { icon: ImageIcon, label: "Computer Vision", desc: "Digital image processing & synthesis" },
  { icon: Smartphone, label: "App Development", desc: "Cross-platform mobile & backend APIs" },
  { icon: Code, label: "AI Integration", desc: "Deploying models into production environments" },
];

const About = () => {
  return (
    <section id="about" className="section-spacing relative">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -z-10" />

      <div className="container relative z-10">
        <motion.div {...fadeInUp}>
          <h2 className="text-display text-3xl mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8 shadow-[0_0_10px_hsl(var(--primary))]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div {...fadeInUp}>
            <p className="text-body mb-5 text-lg">
              I'm an AI/ML Engineer driven by a passion for computer vision, digital image processing, and deep learning. I specialize in taking complex, state-of-the-art models and bridging the gap between research and practical software applications.
            </p>
            <p className="text-body text-lg">
              Whether I'm implementing neural networks from scratch, experimenting with Generative Adversarial Networks (GANs), or integrating advanced vision models into mobile applications, I focus on building intelligent systems that are technically robust and beautifully user-centric.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, desc }, idx) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={label}
                className="rounded-[16px] p-5 glass-card glass-card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                </div>
                <h3 className="text-base font-display font-semibold text-foreground mb-1">{label}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;