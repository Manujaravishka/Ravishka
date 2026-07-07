"use client";

import { JSX, useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Button from "./Button";

export default function Contact(): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    // ✅ REPLACE THESE THREE VALUES WITH YOUR REAL ONES
    const YOUR_SERVICE_ID = "service_1g3684q";    // from EmailJS dashboard
    const YOUR_TEMPLATE_ID = "template_ncx4zln";  // from EmailJS dashboard
    const YOUR_PUBLIC_KEY = "gBhHGLER1f1aiDpBI";       // from EmailJS Account → API Keys

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formRef.current, YOUR_PUBLIC_KEY)
      .then(
        () => {
          setIsSending(false);
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setIsSending(false);
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-gray-100 text-zinc-900 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-3 py-1 text-xs font-semibold text-zinc-800 backdrop-blur-md mb-4 shadow-sm">
            <span className="flex h-1.5 w-1.5 rounded-full bg-zinc-900 animate-pulse" />
            GET IN TOUCH
          </div>
          <h2 className="text-4xl font-black tracking-tight uppercase sm:text-5xl bg-gradient-to-b from-zinc-950 to-zinc-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="mt-4 text-sm text-zinc-500 max-w-sm mx-auto leading-relaxed">
            Have a project in mind or just want to chat? Drop a message and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5 bg-white p-8 rounded-2xl border border-zinc-200/80 hover:border-zinc-300 transition-all duration-300 shadow-sm"
          >
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3.5 rounded-xl bg-gray-50 border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900/10 transition-all duration-200"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="hello@example.com"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3.5 rounded-xl bg-gray-50 border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900/10 transition-all duration-200"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3.5 rounded-xl bg-gray-50 border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900/10 transition-all duration-200 resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              fullWidth
              loading={isSending}
              disabled={isSending}
              variant="secondary"
              rightIcon={
                !isSending ? (
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 19L19 5M19 5H9M19 5v10" />
                  </svg>
                ) : undefined
              }
            >
              {isSending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}