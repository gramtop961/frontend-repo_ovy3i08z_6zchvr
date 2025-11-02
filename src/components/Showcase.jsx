import { motion } from 'framer-motion';
import { ExternalLink, Github, Mail, Linkedin } from 'lucide-react';

const projects = [
  {
    title: 'AI Avatar Web App',
    description:
      'Voice-controlled web assistant with real-time API integration and full voice navigation.',
    stack: ['Next.js', 'OpenAI', 'Deepgram', 'WebSockets'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Business Marketplace Platform',
    description:
      'Verified listing hub connecting global buyers and sellers with messaging, reviews, and moderation.',
    stack: ['Next.js', 'MongoDB', 'AWS', 'Realtime'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'GitHub Paywall SaaS',
    description:
      'Monetize private repos via automated collaborator access and billing.',
    stack: ['Next.js', 'Stripe', 'GitHub API'],
    demo: '#',
    repo: '#',
  },
];

const experience = [
  {
    role: 'AI Developer',
    org: 'POS Provider Company',
    detail: 'Built AI-integrated POS features improving operational efficiency and automation.',
  },
  {
    role: 'Founder',
    org: 'Business Marketplace Startup',
    detail: 'Scalable global platform connecting entrepreneurs and investors with Next.js and MongoDB.',
  },
  {
    role: 'Freelance Full-Stack Developer',
    org: 'Independent',
    detail: 'Delivered APIs, dashboards, and web tools for startups and SMBs.',
  },
];

export default function Showcase() {
  return (
    <section id="projects" className="relative bg-[#0b0e14] text-white">
      <div className="container mx-auto px-6 py-20 sm:py-24">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold sm:text-3xl"
        >
          Projects
        </motion.h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]"
            >
              <div className="relative h-40 w-full bg-gradient-to-tr from-cyan-500/20 via-purple-500/10 to-amber-400/10" />
              <div className="p-5">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/75">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3 text-sm">
                  <a href={p.demo} className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300">
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-white/70 hover:text-white">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h2
          id="experience"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-2xl font-semibold sm:text-3xl"
        >
          Experience
        </motion.h2>
        <div className="mt-8 grid gap-4">
          {experience.map((e) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <h3 className="text-base font-medium">{e.role} – <span className="text-white/70">{e.org}</span></h3>
              </div>
              <p className="mt-1 text-sm text-white/70">{e.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          id="blog"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6"
        >
          <h3 className="text-lg font-medium">Insights</h3>
          <p className="mt-2 text-sm text-white/70">
            How I Built a Voice‑Navigated Web App with Next.js + OpenAI — coming soon.
          </p>
        </motion.div>

        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 rounded-xl border border-white/10 bg-white/[0.04] p-6"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">Let’s collaborate or talk tech.</h2>
          <p className="mt-2 text-white/70">Open to building platforms, consulting, or exploring AI ideas.</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <a href="mailto:hello@leanderjosh.dev" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">
              <Mail className="h-4 w-4 text-cyan-400" /> hello@leanderjosh.dev
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">
              <Github className="h-4 w-4 text-cyan-400" /> GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">
              <Linkedin className="h-4 w-4 text-cyan-400" /> LinkedIn
            </a>
          </div>
        </motion.div>

        <footer className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/60">
          © 2025 Leander Josh · Built with ❤️ using Next.js + TailwindCSS
        </footer>
      </div>
    </section>
  );
}
