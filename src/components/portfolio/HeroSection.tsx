import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { fadeUp, heroContainer } from "@/lib/animations";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background">
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(var(--gradient-start) / 0.08), transparent 70%)' }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(var(--gradient-end) / 0.08), transparent 70%)' }}
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="section-container relative z-10 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div variants={fadeUp} className="mb-6">
            <span className="material-chip">👋 Selamat Datang</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4 sm:mb-6 text-balance"
          >
            <span className="text-foreground">Nama </span>
            <span className="bg-gradient-to-r from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] bg-clip-text text-transparent">Lengkap</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-3 sm:mb-4 font-light"
          >
            Software Engineer · UI/UX Designer · Problem Solver
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-12"
          >
            Berpengalaman dalam membangun produk digital yang berdampak.
            Passionate terhadap teknologi dan inovasi.
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-4 justify-center lg:justify-start flex-wrap">
            <a
              href="#tentang"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-[hsl(var(--gradient-start))/0.3] hover:scale-105"
              style={{ background: 'linear-gradient(135deg, hsl(var(--gradient-start)), hsl(var(--gradient-end)))' }}
            >
              Lihat Portfolio
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors duration-200"
            >
              Hubungi Saya
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          variants={fadeUp}
          className="flex-shrink-0 relative"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[360px] lg:h-[360px]">
            {/* Decorative ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-dashed border-border"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            {/* Gradient glow */}
            <div className="absolute -inset-3 rounded-full opacity-60 blur-2xl" style={{ background: 'linear-gradient(135deg, hsl(var(--gradient-start) / 0.3), transparent 50%, hsl(var(--gradient-end) / 0.3))' }} />
            {/* Photo container */}
            <div className="absolute inset-3 rounded-full overflow-hidden bg-secondary border-2 border-border shadow-lg">
              <img
                src={profilePhoto}
                alt="Profile photo"
                className="w-full h-full object-cover object-top scale-110"
              />
            </div>
            {/* Floating accent dots */}
            <motion.div
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-foreground"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-4 -left-3 w-3 h-3 rounded-full bg-muted-foreground/40"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </div>
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