import { motion } from "framer-motion";
import { PenLine, ArrowRight, Clock } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const posts = [
  {
    title:
      "Tim Politeknik Negeri Sriwijaya Raih Medali Perunggu di Kompetisi Internasional World Vocational College Skills Competition 2025",
    excerpt:
      "Dalam ajang Kompetisi Online Grup Internasional Grand Final World Vocational College Skills Competition 2025, tim delegasi dari Politeknik Negeri Sriwijaya berhasil meraih Medali Perunggu melalui proyek berjudul “直播赋能，“电”亮印尼” (Streaming Cerdas: Menerangi Indonesia dengan Listrik Digital). ...",
    date: "22 Oktober 2025",
    readTime: "5 menit",
    tags: ["Kompetisi", "Polsri", "Marketing"],
    link: "https://www.polsri.ac.id/news/tim-politeknik-negeri-sriwijaya-raih-medali-perunggu-di-kompetisi-internasional-world-vocational-college-skills-competition-2025/19222/",
  },
  {
    title: "Polsri Raih Juara pada Kompetisi ASEAN Bussiness Plan 2023",
    excerpt:
      "Inovasi makanan dari Tim The Jombang berupa Pentol Tiwul Mercon (PETON) Polsri Raih Juara 3 ASEAN Business Plan Competition tahun 2023. Tiga orang mahasiswa Politeknik Negeri Sriwijaya ...",
    date: "9 Oktober 2023",
    readTime: "5 menit",
    tags: ["Inovasi", "Business Plan", "Kompetisi"],
    link: "https://www.polsri.ac.id/news/polsri-raih-juara-pada-kompetisi-asean-bussiness-plan-2023/17020/",
  },
  {
    title:
      "Polsri Raih Juara 1 Business Plan untuk Perpaduan Makanan Khas Jawa Palembang Pempek Tiwul",
    excerpt:
      "Politeknik Negeri Sriwijaya berhasil menjuarai lomba Business Plan Perbanas Entrepreneur Awards yang diadakan oleh Universitas Hayam Wuruk Perbanas Surabaya, pada hari Sabtu, 18 Juni 2023. ...",
    date: "21 Juni 2023",
    readTime: "5 menit",
    tags: ["Inovasi", "Business Plan", "Kompetisi"],
    link: "https://www.polsri.ac.id/news/polsri-raih-juara-1-business-plan-untuk-perpaduan-makanan-khas-jawa-palembang-pempek-tiwul/16436/",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="bg-background py-16 md:py-20 lg:py-24">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="section-title uppercase tracking-wider text-primary font-medium"
          >
            Tulisan Terbaru
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="section-heading mt-2 mb-10 md:mb-12"
          >
            Blog & Insight
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <motion.article
                key={post.link}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group h-full"
              >
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="material-card p-6 md:p-8 flex flex-col h-full transition-shadow hover:shadow-xl rounded-xl border border-border/60 hover:border-primary/30"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="material-chip text-xs px-2.5 py-1 bg-muted/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm flex-1 line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/60 text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span>{post.date}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;