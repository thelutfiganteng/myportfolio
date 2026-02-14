import { motion } from "framer-motion";
import { Users, Calendar } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const organizations = [
  { role: "Anggota", name: "Generasi Baru Indonesia", period: "2024 – 2025", description: "" },
  { role: "Core Team", name: "Google Developer Student Club", period: "2024 – 2025", description: "" },
  { role: "Anggota", name: "Automation Robotics Club of Sriwijaya", period: "2022 – 2023", description: "" },
  { role: "Ketua Divisi Pioneering", name: "Hizbul Wathan", period: "2020 - 2021", description: "" },
];

const OrganizationsSection = () => {
  return (
    <section id="organisasi" className="bg-surface-bright">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="section-title">Komunitas</motion.p>
          <motion.h2 variants={fadeUp} className="section-heading">Organisasi</motion.h2>

          <div className="space-y-4">
            {organizations.map((org, i) => (
              <motion.div key={i} variants={fadeUp} className="material-card p-8">
                <div className="flex items-start gap-4">
                  <div className="timeline-dot">
                    <Users className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <div>
                        <h3 className="text-base font-bold text-foreground">{org.role}</h3>
                        <p className="text-muted-foreground font-medium text-sm">{org.name}</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground whitespace-nowrap">
                        <Calendar className="w-3.5 h-3.5" />{org.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-3">{org.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrganizationsSection;
