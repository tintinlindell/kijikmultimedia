"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Award } from "lucide-react";

export type ProjectItem = {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  description: string;
  achievements: string[];
  credits: string[];
  href: string;
  external: boolean;
};

export function ProjectsList({ items }: { items: ProjectItem[] }) {
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
            In-House
          </span>
          <h1
            className="text-[clamp(3rem,7vw,6rem)] text-white leading-none mb-6"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            Original Projects
          </h1>
          <p className="text-[#666] text-lg max-w-2xl">
            Beyond client work — these are the stories we had to tell. Award-winning films,
            sold-out documentaries, and multi-platform series born from KijiK&apos;s own fire.
          </p>
        </motion.div>
      </div>

      {/* Projects */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 space-y-px">
        {items.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="border border-[#1e1e1e] bg-[#0a0a0a] hover:bg-[#0d0d0d] transition-colors duration-300 group"
          >
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {/* Left: Title + meta */}
                <div className="md:col-span-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-[10px] tracking-[0.3em] uppercase px-2 py-1 border ${
                        project.status === "Coming Soon"
                          ? "border-[#333] text-[#555]"
                          : "border-[#1a7a08] text-[#39FF14]"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h2
                    className="text-[clamp(1.8rem,3vw,2.5rem)] text-white leading-tight mb-2 group-hover:text-[#39FF14] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    {project.title}
                  </h2>
                  <p className="text-[#444] text-xs tracking-widest uppercase mb-6">
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.credits.map((c) => (
                      <span
                        key={c}
                        className="text-[#333] text-[10px] tracking-widest uppercase"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  {project.href &&
                    (project.external ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#39FF14] text-xs tracking-widest uppercase hover:text-white transition-colors"
                      >
                        Visit Site <ExternalLink size={12} />
                      </a>
                    ) : project.status !== "Coming Soon" ? (
                      <Link
                        href={project.href}
                        className="inline-flex items-center gap-2 text-[#39FF14] text-xs tracking-widest uppercase hover:text-white transition-colors"
                      >
                        Learn More <ArrowRight size={12} />
                      </Link>
                    ) : (
                      <span className="text-[#333] text-xs tracking-widest uppercase">
                        More info soon
                      </span>
                    ))}
                </div>

                {/* Right: Description + achievements */}
                <div className="md:col-span-2">
                  <p className="text-[#777] text-base leading-relaxed mb-8">
                    {project.description}
                  </p>
                  {project.achievements.length > 0 && (
                    <div>
                      <h3 className="text-[#333] text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
                        <Award size={12} className="text-[#39FF14]" />
                        Achievements
                      </h3>
                      <ul className="space-y-2">
                        {project.achievements.map((a) => (
                          <li key={a} className="flex items-start gap-3 text-[#555] text-sm">
                            <span className="text-[#39FF14] mt-1 text-xs">▸</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Archive teaser */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 border-t border-[#1e1e1e]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3
              className="text-2xl text-[#333] mb-1"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              Also in the archive
            </h3>
            <p className="text-[#333] text-sm">
              Lifeline · Kanna · Rose of Nashville · Browne Babies · Midtown Tow · Boris World
            </p>
          </div>
          <Link
            href="/contact"
            className="text-[#555] text-xs tracking-widest uppercase hover:text-[#39FF14] transition-colors flex items-center gap-2"
          >
            Inquire about archived projects <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}
