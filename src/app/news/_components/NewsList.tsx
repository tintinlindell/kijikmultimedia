"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export type NewsItem = {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  href: string;
  external: boolean;
};

export function NewsList({ items }: { items: NewsItem[] }) {
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
            Latest
          </span>
          <h1
            className="text-[clamp(3rem,7vw,6rem)] text-white leading-none"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            News
          </h1>
        </motion.div>
      </div>

      {/* News list */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 space-y-px">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
          >
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-8 border border-[#1e1e1e] bg-[#0a0a0a] hover:bg-[#0d0d0d] p-8 transition-all duration-300"
              >
                <NewsCard item={item} external />
              </a>
            ) : (
              <Link
                href={item.href}
                className="group flex items-start justify-between gap-8 border border-[#1e1e1e] bg-[#0a0a0a] hover:bg-[#0d0d0d] p-8 transition-all duration-300"
              >
                <NewsCard item={item} />
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      {/* Newsletter / CTA */}
      <div className="border-t border-[#1e1e1e] py-20 bg-[#0a0a0a]">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="text-[#555] text-xs tracking-widest uppercase mb-4">Stay Connected</p>
          <h2
            className="text-3xl text-white mb-4"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            Listen to Screen Heat Miami
          </h2>
          <p className="text-[#555] text-sm mb-8">
            Our podcast featuring interviews with Oscar winners, Emmy winners, and the
            sharpest minds in the industry.
          </p>
          <a
            href="http://www.screenheatmiami.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#39FF14] text-[#39FF14] text-sm tracking-widest uppercase hover:bg-[#39FF14] hover:text-black transition-all duration-300"
          >
            Visit Screen Heat Miami <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

function NewsCard({
  item,
  external,
}: {
  item: NewsItem;
  external?: boolean;
}) {
  return (
    <>
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-[#39FF14] text-[10px] tracking-[0.3em] uppercase border border-[#1a7a08] px-2 py-1">
            {item.category}
          </span>
          <span className="text-[#333] text-xs">{item.date}</span>
        </div>
        <h3 className="text-white text-base md:text-lg mb-3 group-hover:text-[#39FF14] transition-colors duration-300 leading-snug">
          {item.title}
        </h3>
        <p className="text-[#555] text-sm leading-relaxed">{item.excerpt}</p>
        <div className="flex items-center gap-2 mt-4 text-[#333] text-xs uppercase tracking-widest group-hover:text-[#39FF14] transition-colors">
          Read more <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
      {external && (
        <ExternalLink
          size={16}
          className="text-[#333] group-hover:text-[#39FF14] transition-colors flex-shrink-0 mt-1"
        />
      )}
    </>
  );
}
