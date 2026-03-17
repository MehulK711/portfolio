import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Code2 } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.2, 0, 0, 1] as const },
};

const Contact = () => {
  return (
    <section id="contact" className="section-spacing relative">
      <div className="container relative z-10">
        <motion.div {...fadeInUp} className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-display text-3xl mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-8 shadow-[0_0_10px_hsl(var(--primary))]" />
          <p className="text-body text-lg">
            I'm currently seeking AI/ML and Software Development internships. 
            Whether you have an opportunity or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div {...fadeInUp} className="space-y-4">
            <a href="mailto:mehulk711@gmail.com" className="flex items-center gap-4 p-4 glass-card glass-card-hover rounded-2xl group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">Email</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">mehulk711@gmail.com</p>
              </div>
            </a>

            <a href="tel:+918302490871" className="flex items-center gap-4 p-4 glass-card glass-card-hover rounded-2xl group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">Phone</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">+91 8302490871</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 glass-card rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">Location</h3>
                <p className="text-sm text-muted-foreground">Udaipur, India</p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="glass-card p-8 rounded-[24px] flex flex-col justify-center text-center">
            <h3 className="text-xl font-display font-semibold mb-6">Connect With Me</h3>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/MehulK711" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-background/50 border border-white/10 flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(var(--primary),0.3)] transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/in/mehul-k711/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-background/50 border border-white/10 flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(var(--primary),0.3)] transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              {/* LeetCode Icon using Code2 from Lucide */}
              <a href="https://leetcode.com/MehulK7" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-background/50 border border-white/10 flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(var(--primary),0.3)] transition-all" title="LeetCode">
                <Code2 className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Let's build intelligent systems together.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;