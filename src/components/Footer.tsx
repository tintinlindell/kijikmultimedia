import Link from "next/link";
import { Camera, PlayCircle, Users, AtSign } from "lucide-react";

const footerLinks = {
  Work: [
    { href: "/work?filter=film", label: "Film & TV" },
    { href: "/work?filter=animation", label: "Animation" },
    { href: "/work?filter=branding", label: "Branding" },
    { href: "/work?filter=immersive", label: "AR / VR / XR" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Original Projects" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ],
  Services: [
    { href: "/services#production", label: "Production" },
    { href: "/services#animation", label: "Animation" },
    { href: "/services#branding", label: "Branding" },
    { href: "/services#immersive", label: "Immersive Tech" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] bg-[#060606]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span
                className="text-3xl text-[#39FF14] flame-glow"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                KIJIK MULTIMEDIA
              </span>
            </Link>
            <p className="text-[#666] text-sm leading-relaxed mb-6 max-w-xs">
              The Fire Inside is the spark that generates the deepest
              connection. Award-winning storytelling across every medium.
            </p>
            <p className="text-[#444] text-xs mb-2">Miami · Atlanta</p>
            <a
              href="mailto:innovate@kijikmultimedia.com"
              className="text-[#39FF14] text-sm hover:text-white transition-colors duration-300"
            >
              innovate@kijikmultimedia.com
            </a>

            {/* Social */}
            <div className="flex gap-4 mt-8">
              {[
                {
                  href: "https://instagram.com/kijikmultimedia",
                  icon: <Camera size={18} />,
                  label: "Instagram",
                },
                {
                  href: "https://youtube.com",
                  icon: <PlayCircle size={18} />,
                  label: "YouTube",
                },
                {
                  href: "https://facebook.com/KijikMultimediaInc",
                  icon: <Users size={18} />,
                  label: "Facebook",
                },
                {
                  href: "https://twitter.com/kijikmultimedia",
                  icon: <AtSign size={18} />,
                  label: "Twitter",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 border border-[#1e1e1e] flex items-center justify-center text-[#666] hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-xs text-[#39FF14] tracking-[0.2em] uppercase mb-4">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#666] text-sm hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#1e1e1e] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#444] text-xs">
            © {new Date().getFullYear()} KijiK Multimedia Inc. All rights reserved.
          </p>
          <p className="text-[#444] text-xs flex items-center gap-2">
            <span className="text-[#39FF14]">▲</span> Hosted on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
