import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const experiences = [
  {
    role: "System Analysts & Business Intelligence",
    company: "Politeknik Negeri Sriwijaya",
    period: "Februari 2026 - Juni 2026 (Project Based)",
    description: "Bertanggung jawab menganalisis kebutuhan bisnis dan sistem pada project-based pengembangan APLIKASI PERJALANAN DINAS. Fokus pada perancangan alur proses, pemetaan kebutuhan pengguna, serta pengolahan dan analisis data keuangan untuk menghasilkan insight yang mendukung efisiensi, akurasi, dan transparansi pengelolaan perjalanan dinas di lingkungan Politeknik Negeri Sriwijaya.",
    skills: ["System Analysts", "Business Intelligence & Data Analysts", "Business Process Mapping", "Stakeholder Communication"],
  },
  {
    role: "System Analysts & Business Intelligence",
    company: "Politeknik Negeri Sriwijaya",
    period: "Oktober 2025 – Januari 2026 (Project Based)",
    description: "Bertanggung jawab dalam project-based pengembangan APLIKASI HONORARIUM DOSEN DAN PEGAWAI. Fokus pada analisis kebutuhan sistem, perancangan alur proses pembayaran honorarium, serta pengolahan dan analisis data keuangan guna meningkatkan akurasi, efisiensi, dan transparansi pengelolaan honorarium di lingkungan Politeknik Negeri Sriwijaya.",
    skills: ["System Analysts", "Business Intelligence & Data Analysts", "Business Process Mapping", "Stakeholder Communication"],
  },
  {
    role: "Website Developer & System Analysts",
    company: "Project Pengabdian Dosen(Pengabdian Masyarakat Internasional)",
    period: "September 2025 – November 2025",
    description: "Kolaborasi antara POLITEKNIK NEGERI SRIWIJAYA dan POLITEKNIK MERLIMAU MALAKA, MALAYSIA, yang ditujukan untuk PONDOK PESANTREN AL-AMALUL KHAIR Palembang. Bertanggung jawab dalam analisis kebutuhan sistem serta pengembangan APLIKASI ABSENSI GURU BERBASIS PENGENALAN WAJAH guna meningkatkan akurasi, efisiensi, dan digitalisasi proses kehadiran guru.",
    skills: ["Website Development", "System Analysts", "UI/UX Designer"],
  },
  {
    role: "Website Developer & System Analysts",
    company: "Project Pengabdian Dosen(PKM BIMA)",
    period: "September 2025 – November 2025",
    description: "Project pengabdian dosen PKM BIMA yang ditujukan untuk UMKM DAPUR UMMI KYANA. Bertanggung jawab dalam analisis kebutuhan sistem serta pengembangan APLIKASI E-CATALOG berbasis web untuk mendukung digitalisasi produk, meningkatkan visibilitas, dan memperluas jangkauan pemasaran UMKM.",
    skills: ["Website Development", "System Analysts", "UI/UX Designer"],
  },
  {
    role: "System Analysts & Data Entry",
    company: "Dinas Kominfo Provinsi Sumatera Selatan",
    period: "September 2025 – Desember 2025 (Magang)",
    description: "Berperan dalam analisis kebutuhan sistem informasi serta pengelolaan dan validasi data pada Aplikasi Satu Data. Bertanggung jawab melakukan input, pembaruan, dan pengecekan akurasi data, serta mendukung proses digitalisasi dan pengelolaan informasi di lingkungan pemerintahan daerah",
    skills: ["System Analysts", "Data Entry"],
  },
  {
    role: "Website Developer & System Analysts",
    company: "PT PLN UPDL Palembang",
    period: "Februari 2025 – Juni 2025",
    description: "Bertanggung jawab dalam analisis kebutuhan sistem serta pengembangan aplikasi inventarisasi alat dan bahan berbasis web untuk mendukung pencatatan, monitoring, dan pengelolaan inventaris secara terstruktur, akurat, dan efisien.",
    skills: ["Website Development", "System Analysts", "UI/UX Designer"],
  },
  {
    role: "UI/UX Designer & System Analysts",
    company: "ATR-BPN - Kabupaten Ogan Komering Ilir",
    period: "Januari 2025 – Juni 2025 (Project Based)",
    description: "Berperan dalam perancangan UI/UX dan analisis kebutuhan sistem pada aplikasi layanan administrasi pertanahan, dengan fokus pada kemudahan penggunaan, kejelasan alur layanan, serta peningkatan efisiensi dan kualitas pelayanan publik.",
    skills: ["System Analysts", "UI/UX Designer", "Stakeholder Communication"],
  },
  {
    role: "Assistant Human Resources Manager",
    company: "PT Jakabaring Sport City Palembang",
    period: "Juli 2021 – Oktober 2021 (Magang)",
    description: "Mendukung pengelolaan fungsi SDM, meliputi administrasi kepegawaian, pengelolaan data karyawan, serta koordinasi proses rekrutmen dan pengembangan sumber daya manusia guna menunjang operasional dan kinerja organisasi.",
    skills: ["Human Resources Administration", "Employee Data Management"],
  },
  {
    role: "Assistant General Accounting ",
    company: "Bank Sumsel Babel ",
    period: "Januari 2021 – Maret 2021 (Magang)",
    description: "Berperan dalam mendukung proses pencatatan dan administrasi akuntansi umum, termasuk pengolahan data transaksi dan laporan keuangan sederhana, serta membantu layanan customer service dalam menangani administrasi pelanggan dan komunikasi terkait informasi keuangan.",
    skills: ["Financial Data Administration", "General Accounting Support"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="pengalaman" className="bg-background">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="section-title">Karir</motion.p>
          <motion.h2 variants={fadeUp} className="section-heading">Pengalaman Kerja</motion.h2>

          <div className="relative">
            <div className="hidden md:block timeline-line !left-[19px] !top-5" />
            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-6">
                  <div className="hidden md:flex flex-col items-center">
                    <div className="timeline-dot">
                      <Briefcase className="w-5 h-5 text-foreground" />
                    </div>
                  </div>
                  <div className="material-card p-8 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                        <p className="text-muted-foreground font-medium">{exp.company}</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground whitespace-nowrap">
                        <Calendar className="w-3.5 h-3.5" />{exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="material-chip text-xs">{skill}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
