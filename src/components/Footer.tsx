import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-background/50 backdrop-blur-md relative z-10">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-medium">
          © {new Date().getFullYear()} Mehul Kataria. Engineered with precision.
        </p>
        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: "https://github.com/MehulK711" }, // <-- Add your GitHub URL
            { icon: Linkedin, href: "https://linkedin.com/in/mehul-k711/" }, // <-- Add your LinkedIn URL
            { icon: Mail, href: "mailto:mehulk711@gmail.com" },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_10px_rgba(var(--primary),0.3)] hover:-translate-y-1 transition-all duration-300"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;