"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#060606]/95 backdrop-blur-md border-b border-[#1e1e1e]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <FlameIcon />
            <span
              className="font-['var(--font-bebas)'] text-xl tracking-widest text-white group-hover:text-[#39FF14] transition-colors duration-300"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              KIJIK
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-all duration-300 relative group ${
                  pathname === link.href
                    ? "text-[#39FF14]"
                    : "text-[#a0a0a0] hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#39FF14] transition-all duration-300 ${
                    pathname === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 border border-[#39FF14] text-[#39FF14] text-sm tracking-widest uppercase hover:bg-[#39FF14] hover:text-black transition-all duration-300"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white hover:text-[#39FF14] transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#060606] flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={link.href}
                  className={`text-4xl tracking-widest uppercase transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-[#39FF14] flame-glow"
                      : "text-[#666] hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: navLinks.length * 0.07 }}
            >
              <Link
                href="/contact"
                className="mt-4 px-8 py-3 border border-[#39FF14] text-[#39FF14] text-2xl tracking-widest uppercase hover:bg-[#39FF14] hover:text-black transition-all duration-300"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function FlameIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M14 2C14 2 8 8 8 14C8 17.314 10.686 20 14 20C17.314 20 20 17.314 20 14C20 12 19 10 19 10C19 10 18 13 16 13C16 13 18 10 16 7C16 7 15 10 13 11C13 11 14 8 14 2Z"
        fill="#39FF14"
        style={{ filter: "drop-shadow(0 0 6px #39FF14)" }}
      />
      <path
        d="M14 22C11.791 22 10 23.791 10 26H18C18 23.791 16.209 22 14 22Z"
        fill="#1a7a08"
      />
    </svg>
  );
}
