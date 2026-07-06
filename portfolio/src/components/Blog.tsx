"use client";

import { motion } from 'framer-motion';
import { JSX } from 'react';


 const blogPosts = [
  {
    id: 1,
    title: 'HTML Mastery – Part 01: Building the Foundation of the Web',
    excerpt: 'Learn HTML basics, structure, elements, and how every website starts with a solid HTML foundation.',
    date: 'April 15, 2026',
    readTime: '5 min read',
    category: 'UI/UX Design',
    link: 'https://medium.com/@manujaravishka2004/html-a-to-z-the-ultimate-masterclass-guide-for-beginners-0da743cf9362?sharedUserId=manujaravishka2004',

    image: '/blogs/html.png',
  },

  {
    id: 2,
    title: 'Flutter Development Essentials – Part 01: Getting Started with Flutter & Dart',
    excerpt:
      'Learn the basics of Flutter, Dart language fundamentals, and how to set up your first cross-platform app.',
    date: 'May 10, 2026',
    readTime: '10 min read',
    category: 'Flutter',
    link: 'https://medium.com/@manujaravishka2004/module-01-flutter-fundamentals-introduction-and-environment-setup-6d5d6d5fb346?sharedUserId=manujaravishka2004',

    // video file
    image: '/blogs/blog_3.png',
  },
  {
    id: 3,
    title: 'Flutter Development Essentials – Part 02: UI Design, Widgets & Layouts',
    excerpt:
      'Deep dive into Flutter widgets, responsive layouts, and building beautiful UI components step by step.',
    date: 'May 28, 2026',
    readTime: '15 min read',
    category: 'Flutter',
    link: 'https://medium.com/@manujaravishka2004/flutter-project-structure-and-clean-architecture-building-scalable-applications-like-a-1c6706844259?sharedUserId=manujaravishka2004',

    // video file
     image: '/blogs/blog_2.png',
  },
];

export default function Blog(): JSX.Element {
  return (
    <section
      id="blog"
      className="relative w-full bg-black px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.4em] text-white/50">
            Insights & Stories
          </span>

          <h2 className="mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-4xl font-black uppercase tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            Blog
          </h2>

          <p className="mx-auto max-w-2xl text-base text-white/70 sm:text-lg">
            Notes and insights from the intersection of product design, motion,
            and modern frontend development.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {blogPosts.map((post) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: 'easeOut',
                  },
                },
              }}
              whileHover={{ y: -8 }}
              className="group block h-full"
            >
              <article className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/5">
                {/* Video */}
                <div className="relative h-56 w-full overflow-hidden bg-white/5">
                 <img
  src={post.image}
  alt={post.title}
  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
/>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Category Badge */}
                  <span className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/90 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Date & Read Time */}
                  <div className="mb-3 flex items-center gap-2 text-xs text-white/40">
                    <span>{post.date}</span>

                    <span className="h-1 w-1 rounded-full bg-white/30" />

                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-white transition group-hover:text-white/90">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm leading-relaxed text-white/60 transition group-hover:text-white/80">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-white/50 transition group-hover:text-white">
                    Read more

                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <a
            href="https://medium.com/@manujaravishka2004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
          >
            View All Articles

            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}