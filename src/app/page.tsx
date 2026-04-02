"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "20+", label: "Years of Storytelling" },
  { value: "14", label: "Festival Selections" },
  { value: "4", label: "Grand Jury Awards" },
  { value: "\u221e", label: "Stories to Tell" },
];

const featuredWork = [
  {
    title: "Above Ground",
    category: "Animation",
    tags: ["Levin Grand Jury Award", "14 Festivals"],
    href: "https://stayaboveground.com",
    external: true,
  },
  {
    title: "The Beach Chronicles",
    category: "Film & TV",
    tags: ["Daryl Hannah", "Michael Chiklis"],
    href: "https://www.thebeachchronicles.com",
    external: true,
  },
  {
    title: "David Lynch Foundation",
    category: "Branding",
    tags: ["Narrated by David Lynch", "Non-Profit"],
    href: "/work",
    external: false,
  },
  {
    title: "Ayiti Trilogie",
    category: "Documentary",
    tags: ["Danny Glover", "Wyclef Jean"],
    href: "/projects",
    external: false,
  },
];

const services = [
  { title: "Film & TV Production", href: "/services" },
  { title: "Animation", href: "/services" },
  { title: "Brand Films", href: "/services" },
  { title: "Documentary", href: "/services" },
  { title: "AR / VR / XR", href: "/services" },
  { title: "Photography", href: "/services" },
];

const clients = [
  "David Lynch Foundation",
  "Bacardi",
  "US Air Force",
  "Hart Insurance",
  "Slamdance",
  "Sundance Institute",
  "Florida Supercon",
  "Wheaton Film Festival",
];

export default function HomePage() {
  return (
    <div className="bg-[#060606] min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#39FF14 1px, transparent 1px), linear-gradient(90deg, #39FF14 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(57,255,20,0.06),transparent)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <span className="text-[#39FF14] text-xs tracking-[0.5em] uppercase mb-8 block">
              Miami &middot; Atlanta
            </span>
            <h1
              className="text-[clamp(4rem,14vw,13rem)] text-white leading-[0.9] mb-8 flame-glow"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              THE FIRE
              <br />
              <span className="text-[#39FF14]">INSIDE</span>
            </h1>
            <p className="text-[#777] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Award-winning multimedia company crafting stories across film, animation,
              branding, documentary, and immersive technology for over two decades.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#39FF14] text-black text-sm tracking-widest uppercase font-bold hover:bg-white transition-all duration-300"
              >
                View Our Work <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 border border-[#333] text-[#888] text-sm tracking-widest uppercase hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#333]">
          <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#333] to-transparent" />
        </div>
      </section>

      {/* Awards ticker */}
      <section className="border-y border-[#1e1e1e] bg-[#0a0a0a] py-4 overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, rep) =>
            [
              "Levin Grand Jury Award",
              "Wheaton Film Festival",
              "Slamdance Emergence Festival",
              "Best Animated Film",
              "Sundance Development",
              "Best Crime Drama",
              "Best Musical Composition",
            ].map((item) => (
              <span
                key={`${rep}-${item}`}
                className="text-[#39FF14] text-[10px] tracking-[0.4em] uppercase flex-shrink-0"
              >
                &#9656; {item}
              </span>
            ))
          )}
        </div>
      </section>

      {/* Brand statement + stats */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#39FF14] text-xs tracking-[0.4em] uppercase mb-6 block">
              Who We Are
            </span>
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-tight mb-8"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              We Don&apos;t Tell Stories.
              <br />
              <span className="text-[#39FF14]">We Ignite Them.</span>
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6">
              Founded by Kevin Sharpley, KijiK Multimedia has spent 20+ years producing
              work that wins awards, sells out screenings, and changes the conversation.
              From branded content for global giants to original films on the festival
              circuit &mdash; every project carries The Fire Inside.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#39FF14] text-sm tracking-widest uppercase hover:text-white transition-colors"
            >
              Our Story <ArrowRight size={14} />
            </Link>
          </motion.div>
          <div className="grid grid-cols-2 gap-px bg-[#1e1e1e]">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#0a0a0a] p-8 text-center"
              >
                <div
                  className="text-[clamp(2.5rem,5vw,4rem)] text-[#39FF14] mb-2 flame-glow"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-[#444] text-xs tracking-[0.3em] uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="border-t border-[#1e1e1e] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[#39FF14] text-xs tracking-[0.4em] uppercase mb-4 block">
                Selected Work
              </span>
              <h2
                className="text-[clamp(2rem,4vw,3.5rem)] text-white leading-none"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                What We&apos;ve Built
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden md:inline-flex items-center gap-2 text-[#555] text-xs tracking-widest uppercase hover:text-[#39FF14] transition-colors"
            >
              Full Portfolio <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1e1e1e]">
            {featuredWork.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-[#0a0a0a] hover:bg-[#0d0d0d] p-10 transition-all duration-300"
                  >
                    <FeaturedCard item={item} />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="group block bg-[#0a0a0a] hover:bg-[#0d0d0d] p-10 transition-all duration-300"
                  >
                    <FeaturedCard item={item} />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-[#1e1e1e] py-24 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span className="text-[#39FF14] text-xs tracking-[0.4em] uppercase mb-4 block">
              Capabilities
            </span>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] text-white leading-none"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              What We Do
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#1e1e1e]">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link
                  href={s.href}
                  className="group block bg-[#0a0a0a] hover:bg-[#0d0d0d] p-8 transition-all duration-300"
                >
                  <h3
                    className="text-[#555] text-xl group-hover:text-[#39FF14] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    {s.title}
                  </h3>
                  <ArrowRight
                    size={14}
                    className="text-[#333] group-hover:text-[#39FF14] mt-3 group-hover:translate-x-1 transition-all duration-300"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#555] text-xs tracking-widest uppercase hover:text-[#39FF14] transition-colors"
            >
              View All Services <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="border-t border-[#1e1e1e] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[#333] text-[10px] tracking-[0.4em] uppercase mb-8 text-center">
            Trusted By
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {clients.map((c) => (
              <span key={c} className="text-[#2a2a2a] text-xs tracking-widest uppercase">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1e1e1e] py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-[clamp(3rem,8vw,7rem)] text-white leading-none mb-8 flame-glow"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              What&apos;s Your Fire?
            </h2>
            <p className="text-[#555] text-lg mb-10">
              Every great story starts with a spark. Let&apos;s find yours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-12 py-5 bg-[#39FF14] text-black text-sm tracking-widest uppercase font-bold hover:bg-white transition-all duration-300"
            >
              Let&apos;s Talk <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FeaturedCard({
  item,
}: {
  item: { title: string; category: string; tags: string[] };
}) {
  return (
    <>
      <span className="text-[#39FF14] text-[10px] tracking-[0.3em] uppercase border border-[#1a7a08] px-2 py-1 mb-6 inline-block">
        {item.category}
      </span>
      <h3
        className="text-[clamp(1.8rem,3vw,2.8rem)] text-white mb-4 group-hover:text-[#39FF14] transition-colors duration-300 leading-tight"
        style={{ fontFamily: "var(--font-bebas), sans-serif" }}
      >
        {item.title}
      </h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {item.tags.map((tag) => (
          <span key={tag} className="text-[#333] text-[10px] tracking-widest uppercase">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2 text-[#333] text-xs uppercase tracking-widest group-hover:text-[#39FF14] transition-colors">
        View Project{" "}
        <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </>
  );
}
