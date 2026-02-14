import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, Twitter, Globe } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const socials = [
  // { icon: Github, label: "GitHub", url: "https://github.com/username", handle: "@username" },
  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-lutfi-kurniawan-b38761248/", handle: "Muhammad Lutfi Kurniawan" },
  { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/lulutfii/", handle: "@lulutfii" },
  // { icon: Twitter, label: "Twitter / X", url: "https://x.com/username", handle: "@username" },
  { icon: Mail, label: "Email", url: "mailto:kurniawanlutfi925@gmail.commailto:kurniawanlutfi925@gmail.com?subject=Kerja Sama&body=Halo%20Lutfi,%0A%0ASaya%20ingin%20menghubungi%20Anda.", handle: "kurniawanlutfi925@gmail.com" },
  // { icon: Globe, label: "Website", url: "https://example.com", handle: "example.com" },
];

const SocialSection = () => {
  return (
    <section id="kontak" className="bg-background">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="section-title">Kontak</motion.p>
          <motion.h2 variants={fadeUp} className="section-heading">Media Sosial</motion.h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                className="material-card p-6 flex items-center gap-4 group"
              >
                <div className="timeline-dot group-hover:bg-foreground transition-colors duration-300">
                  <social.icon className="w-5 h-5 text-foreground group-hover:text-background transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{social.label}</p>
                  <p className="text-muted-foreground text-sm">{social.handle}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSection;
