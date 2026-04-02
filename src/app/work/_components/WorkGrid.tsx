"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export type WorkItem = {
  title: string;
  client: string;
  category: string;
  filters: string[];
  description: string;
  tags: string[];
  href: string;
  external: boolean;
};

const FILTER_OPTIONS = [
  "All",
  "Film & TV",
  "Animation",
  "Documentary",
  "Branding",
  "Music Video",
  "Immersive",
];

export function WorkGrid({ items }: { items: WorkItem[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? items
      : items.filter((item) => item.filters.includes(activeFilter));

  return (
    <div className="bg-[#060606] min-h-screen pt-24">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 border-b border-[#1e1e1e]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#39FF14] text-xs tracking-[0.4em] uppercase mb-6 block">
            Portfolio
          </span>
          <h1
            className="text-[clamp(3rem,7vw,6rem)] text-white leading-none mb-6"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            Our Work
          </h1>
          <p className="text-[#666] text-lg max-w-2xl">
            Over 20 years of storytelling across film, animation, branding, documentary,
            music video, and immersive technology.
          </p>
        </motion.div>
      </div>

      {/* Filter bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 border-b border-[#1e1e1e]">
        <div className="flex flex-wrap gap-3">
          {FILTER_OPTIONS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs tracking-widest uppercase transition-all duration-300 border ${
                activeFilter === filter
                  ? "border-[#39FF14] text-[#39FF14] bg-[#39FF14]/5"
                  : "border-[#1e1e1e] text-[#555] hover:border-[#333] hover:text-[#888]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e1e1e]"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-[#0a0a0a] hover:bg-[#0f0f0f] p-8 h-full transition-all duration-300 relative overflow-hidden"
                  >
                    <WorkCard item={item} external />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="group block bg-[#0a0a0a] hover:bg-[#0f0f0f] p-8 h-full transition-all duration-300 relative overflow-hidden"
                  >
                    <WorkCard item={item} />
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 border-t border-[#1e1e1e] text-center">
        <p className="text-[#666] mb-6">Ready to add your story to this list?</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#39FF14] text-black text-sm tracking-widest uppercase font-bold hover:bg-white transition-all duration-300"
        >
          Start a Project <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

function WorkCard({
  item,
  external,
}: {
  item: WorkItem;
  external?: boolean;
}) {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39FF14]/0 to-transparent group-hover:via-[#39FF14]/30 transition-all duration-500" />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <span className="text-[#39FF14] text-[10px] tracking-[0.3em] uppercase border border-[#1a7a08] px-2 py-1">
            {item.category}
          </span>
          {external && (
            <ExternalLink
              size={14}
              className="text-[#333] group-hover:text-[#39FF14] transition-colors"
            />
          )}
        </div>
        <h3
          className="text-2xl text-white mb-1 group-hover:text-[#39FF14] transition-colors duration-300"
          style={{ fontFamily: "var(--font-bebas), sans-serif" }}
        >
          {item.title}
        </h3>
        <p className="text-[#444] text-xs tracking-widest uppercase mb-4">{item.client}</p>
        <p className="text-[#666] text-sm leading-relaxed mb-6">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[#333] text-[10px] tracking-widest uppercase border border-[#1a1a1a] px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
