import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const education = [
  {
    degree: "D4 Manajemen Informatika",
    institution: "Politeknik Negeri Sriwijaya",
    year: "2022 – 2026",
    location: "Palembang",
    description: "IPK 3.94/4.00.",
  },
  {
    degree: "Akuntansi",
    institution: "SMK Muhammadiyah 2 Palembang",
    year: "2019 – 2022",
    location: "Palembang",
    description: "Eligible No. 2",
  },
];

const BackgroundSection = () => {
  return (
    <section id="tentang" className="bg-surface-bright">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="section-title">Latar Belakang</motion.p>
          <motion.h2 variants={fadeUp} className="section-heading">Pendidikan</motion.h2>

          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu, i) => (
              <motion.div key={i} variants={fadeUp} className="material-card p-4 sm:p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="timeline-dot">
                    <GraduationCap className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-muted-foreground font-medium">{edu.institution}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{edu.description}</p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />{edu.year}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />{edu.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BackgroundSection;
