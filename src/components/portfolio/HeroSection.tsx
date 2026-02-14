import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { fadeUp, heroContainer } from "@/lib/animations";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <motion.div
        className="section-container relative z-10 text-center"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp} className="mb-6">
          <span className="material-chip">Selamat Datang</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-6 text-balance"
        >
          Muhammad Lutfi Kurniawan
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 font-light"
        >
          Tech and Business Enthusiast
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-base text-muted-foreground max-w-xl mx-auto mb-12"
        >
          Berpengalaman dalam membangun produk digital yang berdampak.
          Passionate terhadap teknologi dan keuangan.
        </motion.p>

        <motion.div variants={fadeUp} className="flex gap-4 justify-center flex-wrap">
          <a
            href="#tentang"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity duration-200"
          >
            Lihat Portfolio
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#kontak"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors duration-200"
          >
            Hubungi Saya
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
