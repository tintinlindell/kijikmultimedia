"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Camera, PlayCircle, Users, AtSign } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Placeholder: integrate with Formspree, Resend, or similar on launch
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setFormState("success");
  };

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
            Let&apos;s Talk
          </span>
          <h1
            className="text-[clamp(3rem,7vw,6rem)] text-white leading-none mb-4"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            Contact Us
          </h1>
          <p className="text-[#666] text-lg max-w-xl">
            Tell us about your project. We&apos;d love to help you find your fire.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {formState === "success" ? (
              <div className="border border-[#1a7a08] bg-[#39FF14]/5 p-12 text-center">
                <div
                  className="text-5xl text-[#39FF14] flame-glow mb-4"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  Message Sent!
                </div>
                <p className="text-[#666]">
                  We&apos;ll be in touch shortly. The fire is already burning.
                </p>
                <button
                  onClick={() => {
                    setFormState("idle");
                    setFormData({ name: "", email: "", company: "", service: "", message: "" });
                  }}
                  className="mt-8 text-[#39FF14] text-sm tracking-widest uppercase hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    label="Your Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Smith"
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@company.com"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    label="Company / Project"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Optional"
                  />
                  <div className="flex flex-col gap-2">
                    <label className="text-[#555] text-xs tracking-widest uppercase">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="bg-[#0a0a0a] border border-[#1e1e1e] text-[#f0f0f0] text-sm px-4 py-3 focus:outline-none focus:border-[#39FF14] transition-colors duration-300 appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="production">Film & Production</option>
                      <option value="animation">Animation</option>
                      <option value="branding">Branding</option>
                      <option value="immersive">AR / VR / XR</option>
                      <option value="photography">Photography</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#555] text-xs tracking-widest uppercase">
                    Tell Us About Your Project{" "}
                    <span className="text-[#39FF14]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="What's your story? What's your fire?"
                    className="bg-[#0a0a0a] border border-[#1e1e1e] text-[#f0f0f0] text-sm px-4 py-3 focus:outline-none focus:border-[#39FF14] transition-colors duration-300 resize-none placeholder:text-[#333]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full sm:w-auto px-10 py-4 bg-[#39FF14] text-black text-sm tracking-widest uppercase font-bold hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flame-box-glow"
                >
                  {formState === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-10"
          >
            {/* Direct email */}
            <div className="border border-[#1e1e1e] p-6">
              <div className="flex items-start gap-4">
                <Mail size={16} className="text-[#39FF14] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#555] text-xs tracking-widest uppercase mb-2">Email Us</p>
                  <a
                    href="mailto:innovate@kijikmultimedia.com"
                    className="text-white text-sm hover:text-[#39FF14] transition-colors break-all"
                  >
                    innovate@kijikmultimedia.com
                  </a>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="space-y-4">
              <p className="text-[#555] text-xs tracking-widest uppercase">Locations</p>
              {[
                { city: "Miami", desc: "Primary Production & HQ" },
                { city: "Atlanta", desc: "Production Hub" },
              ].map((loc) => (
                <div
                  key={loc.city}
                  className="flex items-start gap-4 border border-[#1e1e1e] p-5"
                >
                  <MapPin size={14} className="text-[#39FF14] mt-0.5 flex-shrink-0" />
                  <div>
                    <p
                      className="text-white text-lg leading-none mb-1"
                      style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                    >
                      {loc.city}
                    </p>
                    <p className="text-[#444] text-xs">{loc.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-[#555] text-xs tracking-widest uppercase mb-4">Follow</p>
              <div className="flex gap-3">
                {[
                  { href: "https://instagram.com/kijikmultimedia", icon: <Camera size={16} />, label: "Instagram" },
                  { href: "https://youtube.com", icon: <PlayCircle size={16} />, label: "YouTube" },
                  { href: "https://facebook.com/KijikMultimediaInc", icon: <Users size={16} />, label: "Facebook" },
                  { href: "https://twitter.com/kijikmultimedia", icon: <AtSign size={16} />, label: "Twitter" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 border border-[#1e1e1e] flex items-center justify-center text-[#555] hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Podcast link */}
            <div className="border border-[#1e1e1e] p-6">
              <p className="text-[#555] text-xs tracking-widest uppercase mb-3">Our Podcast</p>
              <a
                href="http://www.screenheatmiami.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#39FF14] text-sm hover:text-white transition-colors"
              >
                Screen Heat Miami →
              </a>
              <p className="text-[#444] text-xs mt-2">
                Interviews with Oscar winners, Emmy winners, and the best in the industry.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FormField({
  label,
  name,
  type,
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[#555] text-xs tracking-widest uppercase">
        {label} {required && <span className="text-[#39FF14]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="bg-[#0a0a0a] border border-[#1e1e1e] text-[#f0f0f0] text-sm px-4 py-3 focus:outline-none focus:border-[#39FF14] transition-colors duration-300 placeholder:text-[#333]"
      />
    </div>
  );
}
