"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const pressItems = [
  {
    title: "KijiK Founder arranges and mediates top film and tv composer panel at the Miami Media and Film Market",
    publication: "KijiK Multimedia",
    date: "September 2024",
    description:
      "Kevin Sharpley arranged and moderated a panel with 14-time Grammy Award winning composer Julio Reyes Copello and fellow maestros.",
    href: "https://kijikmultimedia.com/2024/09/05/kijik-founder-arranges-and-mediates-top-film-and-tv-composer-panel-at-the-miami-media-and-film-market/",
  },
  {
    title: "Ask Yourself These Questions When Developing Your Documentary Film",
    publication: "Sundance Institute",
    date: "2023",
    description:
      "An article by KijiK founder Kevin Sharpley published directly on the Sundance Institute website.",
    href: "https://www.sundance.org/blogs/ask-yourself-these-questions-when-developing-your-documentary-film-3/",
  },
  {
    title: "Above Ground and the Depths of Human Struggle",
    publication: "KijiK Multimedia",
    date: "January 2024",
    description:
      "An exploration of how Above Ground emerged as a powerful piece tackling the opioid crisis and human resilience.",
    href: "https://kijikmultimedia.com/2024/01/29/above-ground-and-the-depths-of-human-struggle/",
  },
];

const values = [
  {
    title: "The Fire Inside",
    description:
      "Every story has a spark at its core. We find that spark — whether it comes from an idea, a feeling, a movement, or a moment — and we build everything around it.",
  },
  {
    title: "Multi-Platform by Default",
    description:
      "We never think in single screens. Every story we tell is built to live across film, web, mobile, social, events, and emerging media simultaneously.",
  },
  {
    title: "Award-Winning Standards",
    description:
      "Festival selections, jury awards, and critical acclaim aren't goals — they're the natural result of never compromising on craft.",
  },
  {
    title: "Storytelling First",
    description:
      "Technology is a tool. Medium is a canvas. The story is always the thing. That's true whether we're making a 90-second commercial or a feature-length documentary.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#060606] min-h-screen pt-24">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 border-b border-[#1e1e1e]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end"
        >
          <div>
            <span className="text-[#39FF14] text-xs tracking-[0.4em] uppercase mb-6 block">
              Our Story
            </span>
            <h1
              className="text-[clamp(3rem,7vw,6rem)] text-white leading-none"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              About KijiK
            </h1>
          </div>
          <div>
            <p className="text-[#777] text-lg leading-relaxed">
              An award-winning storytelling company operating from Miami and Atlanta,
              working globally for over 20 years. Founded by Kevin Sharpley on a single
              belief: that the deepest connections come from finding the fire inside.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Origin story */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] text-white leading-tight mb-8"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              Remember When You Could Dream Anything?
            </h2>
            <p className="text-[#777] text-base leading-relaxed mb-6">
              The Fire Inside is the spark that generates the deepest connection. It can come
              from an idea, a feeling, or a mood — from an individual, a collective, a weather
              event, even a movement. The Fire Inside is insatiable.
            </p>
            <p className="text-[#777] text-base leading-relaxed mb-6">
              KijiK Multimedia was built on this philosophy. We produce content using The Fire
              Inside as the basis for everything we do — full-service branding and full-service
              production, telling the stories of our clients and our own stories across multiple
              media platforms.
            </p>
            <p className="text-[#777] text-base leading-relaxed">
              We work in Video, Online, Mobile, Graphics, Streaming, Social, Events, Product
              Design, Virtual and Augmented Reality. Our offerings span Film, Episodic Content,
              Documentary, Animation, Virtual and Augmented Reality, Comics, Gaming and more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-px"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-[#1e1e1e] bg-[#0a0a0a] p-6"
              >
                <h3
                  className="text-lg text-[#39FF14] mb-2"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  {value.title}
                </h3>
                <p className="text-[#555] text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder section */}
      <section className="border-t border-[#1e1e1e] bg-[#0a0a0a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="text-[#39FF14] text-xs tracking-[0.4em] uppercase mb-6 block">
              Leadership
            </span>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] text-white leading-none mb-6"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              Kevin Sharpley
              <br />
              <span className="text-[#333]">Founder & Creative Director</span>
            </h2>
            <p className="text-[#666] text-lg leading-relaxed mb-6">
              Kevin Sharpley is an award-winning storyteller, producer, and creative director
              with over 20 years in the multimedia industry. He has arranged and mediated
              panels at the Miami Media and Film Market featuring 14-time Grammy Award winning
              composers, published work on the Sundance Institute website, and led KijiK
              through festival wins on every continent.
            </p>
            <p className="text-[#666] text-base leading-relaxed">
              Kevin&apos;s work has brought together legends including Danny Glover, Daryl Hannah,
              Michael Chiklis, Tommy Flanagan, Dave Stewart, Peter Gabriel, Maria Bello, Josh
              Brolin, Wyclef Jean, Lenny Kravitz, Tyson Beckford, and many more under one
              creative vision: The Fire Inside.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Awards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 border-b border-[#1e1e1e]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#39FF14] text-xs tracking-[0.4em] uppercase mb-6 block">
            Recognition
          </span>
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] text-white leading-none mb-12"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            Awards & Festivals
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1e1e1e]">
          {[
            {
              award: "Levin Grand Jury Award",
              event: "Wheaton Film Festival",
              project: "Above Ground",
            },
            {
              award: "Best Animated Film",
              event: "Independent Shorts Awards",
              project: "Above Ground",
            },
            {
              award: "Best Crime Drama",
              event: "Independent Shorts Awards",
              project: "Peter Panties",
            },
            {
              award: "Best Musical Composition",
              event: "Independent Shorts Awards",
              project: "Peter Panties",
            },
            {
              award: "Emergence Official Selection",
              event: "Slamdance Film Festival",
              project: "Peter Panties",
            },
            {
              award: "Development Workshop",
              event: "Sundance Institute",
              project: "Young Pervis",
            },
          ].map((item, i) => (
            <motion.div
              key={item.award}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#060606] p-8"
            >
              <div className="text-[#39FF14] text-xs tracking-widest uppercase mb-2">
                {item.award}
              </div>
              <div className="text-white text-sm mb-1">{item.event}</div>
              <div className="text-[#444] text-xs">{item.project}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Press */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#39FF14] text-xs tracking-[0.4em] uppercase mb-6 block">
            Press
          </span>
          <h2
            className="text-[clamp(2rem,4vw,3rem)] text-white leading-none mb-12"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            In the News
          </h2>
        </motion.div>

        <div className="space-y-px">
          {pressItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-8 border border-[#1e1e1e] bg-[#0a0a0a] hover:bg-[#0d0d0d] p-6 md:p-8 transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[#39FF14] text-[10px] tracking-widest uppercase">
                      {item.publication}
                    </span>
                    <span className="text-[#333] text-[10px]">{item.date}</span>
                  </div>
                  <h3 className="text-white text-base mb-2 group-hover:text-[#39FF14] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#555] text-sm">{item.description}</p>
                </div>
                <ExternalLink
                  size={16}
                  className="text-[#333] group-hover:text-[#39FF14] transition-colors flex-shrink-0 mt-1"
                />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-[#555] text-sm tracking-widest uppercase hover:text-[#39FF14] transition-colors"
          >
            All News & Updates <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
