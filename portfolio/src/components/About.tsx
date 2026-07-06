"use client";

import React, { JSX } from 'react';
import { motion } from 'framer-motion';

export default function About(): JSX.Element {
  // Social media links
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Manujaravishka',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/manuja-ravishka-4206a9232/',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://web.facebook.com/manuja.ravishka.2025',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@manujaravishka2004',
      icon: (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 6.5c0-.4.2-.7.5-.9L7 4.2v15.6l-2.5-1.4c-.3-.2-.5-.5-.5-.9V6.5zm6.5-.3l4 7.3 4-7.3V18l-2-1.1V9.7l-4 7.2-4-7.2v7.2L6.5 18V6.2l4 7.3z"/>
  </svg>
)
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/27146289/manuja-ravishka',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.13H6.111v2.13zm.259-4.852l10.48 2.189.451-2.07-10.48-2.187-.451 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.95zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.36 1.618zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.75 0z" />
        </svg>
      )
    }
  ];

  // Expertise data
  const expertiseItems = [
    { 
      title: 'STRATEGIC', 
      desc: 'Working with a clear plan and purpose, not randomly.',
      icon: (
        <svg className="h-8 w-8 text-black/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      title: 'DESIGNING', 
      desc: 'Creating visually appealing and user-friendly interfaces.',
      icon: (
        <svg className="h-8 w-8 text-black/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      )
    },
    { 
      title: 'BRANDING', 
      desc: 'Developing a strong and consistent brand identity.',
      icon: (
        <svg className="h-8 w-8 text-black/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      )
    },
  ];

  return (
    <section id="about" className="w-full bg-gray-100 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Right Column - Image + Social Icons (appears first on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="order-1 flex flex-col items-center justify-center gap-10 lg:order-2"
          >
            {/* Profile Image */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-md"
            >
              <div className="relative overflow-hidden rounded-3xl border-2 border-black/10 bg-black/5 shadow-2xl">
                <motion.img
                  src="/pictures/profileimage.jpg"
                  alt="Profile"
                  className="h-[400px] w-full object-cover sm:h-[500px]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 left-0 right-0 h-1 bg-black" />
            </motion.div>

            {/* Social Icons Row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap justify-center gap-5"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow on ${social.name}`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-black/5 p-2 text-black/60 transition hover:bg-black hover:text-white"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Left Column - About Text, Expertise, CTA (appears second on mobile - below image) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="order-2 flex flex-col justify-center lg:order-1"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-center text-xs font-bold uppercase tracking-[0.4em] text-black/50 sm:text-left"
            >
              About Me
            </motion.h3>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 text-center font-black leading-[1.1] text-black sm:text-left md:text-6xl lg:text-7xl text-5xl"
            >
              UI/UX Designer<br />& Frontend<br />Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-8 text-center text-lg leading-relaxed text-black/75 sm:text-left md:text-xl"
            >
              I craft human‑centred digital experiences that blend beautiful design
              with seamless functionality. With a passion for usability and modern
              frontend technologies, I turn complex ideas into intuitive, responsive
              interfaces.
            </motion.p>

            {/* Expertise Boxes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="grid w-full grid-cols-1 gap-5 sm:grid-cols-3"
            >
              {expertiseItems.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="rounded-2xl border border-black/10 bg-white/50 p-5 shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-3 flex justify-between items-start">
                    {item.icon}
                  </div>
                  <h4 className="mb-2 text-base font-black tracking-wide text-black">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-black/70">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Get In Touch + Download CV - FIXED FOR MOBILE VISIBILITY */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:justify-start mt-6"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                whileTap={{ scale: 0.98 }}
                className="inline-block w-full sm:w-auto text-center rounded-full bg-black px-6 sm:px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition duration-300"
              >
                Get In Touch
              </motion.a>

              {/* Download CV Button - Now visible on mobile */}
              <motion.a
                href="/cv.pdf"
                download
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-black bg-transparent px-6 sm:px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition duration-300 hover:bg-black hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}