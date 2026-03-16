import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowDown, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const transition = { duration: 0.4, ease: [0.2, 0, 0, 1] as const };

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium backdrop-blur-sm">
                Actively seeking AI/ML Internships
              </span>
              <span className="flex items-center text-sm text-muted-foreground glass-card px-3 py-1.5 rounded-full">
                <MapPin className="w-3 h-3 mr-1" /> Udaipur, India
              </span>
            </div>
            
            <h1 className="text-display mb-4">
              Hello, I'm{" "}
              <span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.3)]">Mehul Kataria</span>
            </h1>
            <p className="text-body max-w-[50ch] mb-8 text-lg">
              CS (AI & ML) student and AI/ML Engineer. Proficient in Python, C++, and deep learning, with a strong problem-solving background. I engineer intelligent systems and data-driven solutions.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_20px_hsl(var(--primary))] hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-full glass-card text-primary font-semibold text-sm hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>

            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com/" },
                { icon: Linkedin, href: "https://linkedin.com/" },
                { icon: Twitter, href: "#" },
                { icon: Mail, href: "mailto:mehulk711@gmail.com" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground glass-card hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_rgba(var(--primary),0.2)] hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...transition, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative group">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 glass-card group-hover:border-primary/50 transition-colors duration-500 relative z-10">
                <img
                  src={profilePhoto}
                  alt="Mehul Kataria"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-colors duration-500 z-0" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="w-10 h-10 rounded-full glass-card text-primary flex items-center justify-center animate-bounce hover:border-primary/50 transition-colors"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;