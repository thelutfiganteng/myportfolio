import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const achievements = [
  { title: "Finalis YELP 2025", event: "Bank Indonesia Institute", description: "As a Delegate Representing Bank Indonesia, South Sumatra Representative Office, at the Youth Economic Leadership Program(YELP)", medal: "🏆" },
  { title: "Bronze Medalist Business & Marketing 2026", event: "Liuzhou  Polytechnic  University  (LZPU), Tiongkok", description: "Bronze Medalist in Business & Marketing at the World Vocational Student Competition", medal: "🥉" },
  { title: "ASEAN Business Plan Competition 2023", event: "Universitas Sriwijaya", description: "3rd Place, ASEAN Business Plan Competition, organized by University of Sriwijaya", medal: "🥉" },
  { title: "Winner National Entrepreneur Awards 2023", event: "University Hayam Wuruk Perbanas Surabaya", description: "1st Place, National Entrepreneur Awards, organized by University Hayam Wuruk Perbanas Surabaya", medal: "🥇" },
  { title: "Juara 2 Cepat Tepat Akuntansi 2022", event: "Ikatan Akuntansi Indonesia", description: "Mengerjakan persoalan akuntansi dalam waktu dan kecepatan yang singkat  ", medal: "🥈" },
  { title: "Penerima Beasiswa Berprestasi Bank Indonesia 2024 - 2025", event: "Bank Indonesia", description: "Penerima Beasiswa berprestasi Bank Indonesia selama 2 Periode", medal: "🏆" },
  { title: "Program Mahasiswa Wirausaha (PMW) 2025", event: "Politeknik Negeri Sriwijaya", description: "Penerima pendanaan wirausaha oleh Politeknik Negeri Sriwijaya", medal: "🏆" },
];

const AchievementsSection = () => {
  return (
    <section id="kejuaraan" className="bg-background">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="section-title">Prestasi</motion.p>
          <motion.h2 variants={fadeUp} className="section-heading">Kejuaraan</motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            {achievements.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="material-card p-8 text-center">
                <div className="text-4xl mb-4">{item.medal}</div>
                <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm font-medium text-muted-foreground mb-3">{item.event}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
