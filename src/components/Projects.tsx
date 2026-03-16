import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.2, 0, 0, 1] as const },
};

const projects = [
  {
    title: "AI Personal Stylist & Wardrobe Manager",
    description: "An AI-powered mobile application for wardrobe management featuring virtual try-on technology and smart, data-driven styling recommendations.",
    tags: ["Flutter", "FastAPI", "FashionCLIP", "IDM-VTON"],
    year: "2026",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800", // Placeholder: Fashion/Tech
  },
  {
    title: "Generative Image Synthesis (cGAN)",
    description: "Implemented and trained Conditional Generative Adversarial Networks (cGAN) for advanced computer vision and image generation tasks.",
    tags: ["PyTorch", "Deep Learning", "Computer Vision"],
    year: "2026",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800", // Placeholder: AI Art/Networks
  },
  {
    title: "Digital Image Processing Suite",
    description: "A comprehensive project implementing core image processing algorithms, filters, and mathematical transformations for visual data analysis.",
    tags: ["Python", "OpenCV", "NumPy", "Image Processing"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", // Placeholder: Cyber/Vision
  },
  {
    title: "Custom Neural Network Implementation",
    description: "Built a shallow neural network completely from scratch to develop a deep mathematical understanding of forward propagation and gradient descent.",
    tags: ["Python", "Mathematics", "Machine Learning"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800", // Placeholder: Circuit/Tech
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-spacing">
      <div className="container">
        <motion.div {...fadeInUp}>
          <h2 className="text-display text-3xl mb-4">Featured Work</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12 shadow-[0_0_10px_hsl(var(--primary))]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-[24px] overflow-hidden glass-card glass-card-hover flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full h-56 overflow-hidden">
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-semibold text-primary tabular-nums tracking-wider uppercase">{project.year}</span>
                  <div className="flex gap-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-foreground text-xs font-medium backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;