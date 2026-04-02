"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "production",
    icon: "🎬",
    title: "Production",
    tagline: "From concept to screen",
    description:
      "Full-service production from pre-production through post. We work across every format — feature film, television, documentary, commercials, music videos, and events. We've produced for clients as varied as the US Air Force and Bacardi, and our own projects have screened at festivals worldwide.",
    offerings: [
      "Feature & Short Film",
      "Television & Episodic",
      "Documentary (Long & Short Form)",
      "Commercials",
      "Music Videos",
      "Event Production & Coverage",
      "Corporate Video",
      "Photography",
    ],
  },
  {
    id: "animation",
    icon: "✏️",
    title: "Animation",
    tagline: "Every style. Every story.",
    description:
      "KijiK Animation is an award-winning division spanning over 20 years of animated storytelling. From 2D to 3D, from short films to episodic series, we work with some of the top animators and story editors in the industry. Our animated original films have been selected at Slamdance, the Miami Film Festival, and festivals worldwide.",
    offerings: [
      "2D Animation",
      "3D Animation",
      "Episodic & Series Animation",
      "Short Film",
      "Feature Film Animation",
      "Music Video Animation",
      "Motion Comics",
      "Motion Graphics & CG",
    ],
  },
  {
    id: "branding",
    icon: "🔥",
    title: "Branding",
    tagline: "From concept to market presence",
    description:
      "We take companies from concept to a strong, distinct market presence. With 20+ years working with clients large and small — from startups to global brands — we build integrated campaigns that tell your story across every platform simultaneously.",
    offerings: [
      "Brand Strategy & Concept",
      "Logo & Visual Identity",
      "Website Design",
      "Social Media Design & Management",
      "Branded Video Content",
      "Branded Film",
      "3D Rendering",
      "App Development",
      "Print: Posters, Banners, Apparel",
      "Live Events & Activations",
    ],
  },
  {
    id: "immersive",
    icon: "🥽",
    title: "Immersive Tech",
    tagline: "AR · VR · XR · Gaming",
    description:
      "KijiK's Immersive division creates experiences that blur the line between story and reality. We build augmented reality campaigns, virtual reality environments, mixed reality experiences, and game integrations for brands and original projects alike.",
    offerings: [
      "Augmented Reality (AR)",
      "Virtual Reality (VR)",
      "Mixed Reality (XR)",
      "Gaming",
      "AR Brand Campaigns",
      "Immersive Event Experiences",
      "Interactive Storytelling",
    ],
  },
  {
    id: "photography",
    icon: "📸",
    title: "Photography",
    tagline: "The still that tells the whole story",
    description:
      "Commercial, editorial, and event photography at the standard set by two decades of high-profile multimedia production.",
    offerings: [
      "Commercial Photography",
      "Event Coverage",
      "Editorial Photography",
      "Corporate Photography",
      "Portrait & Talent Photography",
    ],
  },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "We learn your world — your goals, audience, and the fire that drives you." },
  { step: "02", title: "Concept", desc: "We develop a creative concept rooted in your brand truth and built for impact." },
  { step: "03", title: "Production", desc: "Our team executes with precision across every medium required." },
  { step: "04", title: "Delivery", desc: "Optimized for every platform and built to perform long after launch." },
];

export default function ServicesPage() {
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
            Capabilities
          </span>
          <h1
            className="text-[clamp(3rem,7vw,6rem)] text-white leading-none mb-6"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            Services
          </h1>
          <p className="text-[#666] text-lg max-w-2xl">
            Integrated, branded, convergent, and strategic media. We handle pre-production
            through post across every medium, then cross-platform it into something
            unforgettable.
          </p>
        </motion.div>
      </div>

      {/* Service sections */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 space-y-px">
        {services.map((service, i) => (
          <motion.section
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="border border-[#1e1e1e] bg-[#0a0a0a] scroll-mt-24"
          >
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
                {/* Left */}
                <div className="md:col-span-2">
                  <span className="text-3xl mb-4 block">{service.icon}</span>
                  <h2
                    className="text-[clamp(2rem,4vw,3.5rem)] text-white leading-none mb-2"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-[#39FF14] text-xs tracking-widest uppercase mb-6">
                    {service.tagline}
                  </p>
                  <p className="text-[#666] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Right: offerings */}
                <div className="md:col-span-3">
                  <h3 className="text-[#333] text-xs tracking-[0.3em] uppercase mb-6">
                    What&apos;s included
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.offerings.map((offering) => (
                      <div
                        key={offering}
                        className="flex items-center gap-3 text-[#666] text-sm"
                      >
                        <span className="w-1 h-1 bg-[#39FF14] rounded-full flex-shrink-0" />
                        {offering}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Process */}
      <section className="border-t border-[#1e1e1e] py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <span className="text-[#39FF14] text-xs tracking-[0.4em] uppercase mb-4 block">
              How We Work
            </span>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] text-white leading-none"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              The Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#1e1e1e]">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#0a0a0a] p-8"
              >
                <div
                  className="text-5xl text-[#1a1a1a] mb-4 leading-none"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  {step.step}
                </div>
                <h3
                  className="text-xl text-white mb-3"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#555] text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#555] mb-3 text-sm tracking-widest uppercase">
            Ready to get started?
          </p>
          <h2
            className="text-[clamp(2rem,5vw,4rem)] text-white mb-8 leading-none"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            Let&apos;s tell your story.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#39FF14] text-black text-sm tracking-widest uppercase font-bold hover:bg-white transition-all duration-300"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
