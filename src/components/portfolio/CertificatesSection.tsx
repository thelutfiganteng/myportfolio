import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const certificates = [
  { name: "KKNII Level II on Competence of Accounting & Financial Institution", issuer: "Badan Nasional Serifikasi Profesi (BNSP)", year: "2022", credentialId: "No. 69201 3913 2 0000636 2022" },
  { name: "Junior Mobile Programmer", issuer: "Badan Nasional Serifikasi Profesi (BNSP)", year: "2023", credentialId: "No. 62019 2514 25739 2023" },
  { name: "Digital Marketing", issuer: "Badan Nasional Serifikasi Profesi (BNSP)", year: "2025", credentialId: "No. 61929 2166 0 0117927 2025" },
];
const intellectualProperties = [
  {
    title: "Implementation of Face Recognition-Base Teacher Attendance Application at Al-Amalul Khair Islamic Boarding School through the Collaboration of Sriwijaya State Polytechnic and Merlimau Malacca Polytechnic, Malaysia",
    type: "Hak Cipta",
    institution: "Kemenkumham RI",
    year: "2025",
    registrationNumber: "EC002025190092",
  },
  {
    title: "APLIKASI POLSRIPAY (PEMBAYARAN HONORARIUM5DOSEN DAN PEGAWAI) dengan Menerapkan Metode RAD dan User Center Design",
    type: "Hak Cipta",
    institution: "Kemenkumham RI",
    year: "2025",
    registrationNumber: "EC002025188287",
  },
  {
    title: "Implementasi Etalase Digital sebagai Solusi Pemasaran dan Pelayanan UMKM Dapur Ummi Kyana Palembang di Era Transformasi Digital",
    type: "Hak Cipta",
    institution: "Kemenkumham RI",
    year: "2025",
    registrationNumber: "EC002025182246",
  },
];
const CertificatesSection = () => {
  return (
    <section id="sertifikat" className="bg-surface-bright">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="section-title">Kompetensi</motion.p>
          <motion.h2 variants={fadeUp} className="section-heading">Sertifikat</motion.h2>

          <div className="grid gap-4 sm:grid-cols-3">
            {certificates.map((cert, i) => (
              <motion.div key={i} variants={fadeUp} className="material-card p-6 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="timeline-dot bg-secondary">
                    <Award className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-bold text-foreground leading-snug">{cert.name}</h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-muted-foreground text-sm mt-1">{cert.issuer}</p>
                    <p className="text-muted-foreground text-xs mt-2">{cert.year} · ID: {cert.credentialId}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>


      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="section-title"></motion.p>
          <motion.h2 variants={fadeUp} className="section-heading">Hak Kekayaan Intelektual</motion.h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {intellectualProperties.map((ip, i) => (
              <motion.div key={i} variants={fadeUp} className="material-card p-6">
                <div className="flex items-start gap-4">
                  <div className="timeline-dot bg-secondary">
                    <Award className="w-5 h-5 text-foreground" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-foreground leading-snug">
                      {ip.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {ip.type} · {ip.institution}
                    </p>
                    <p className="text-muted-foreground text-xs mt-2">
                      {ip.year} · No. Pendaftaran: {ip.registrationNumber}
                    </p>
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

export default CertificatesSection;
