import { motion } from 'framer-motion';
import { MapPin, Rocket, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative bg-[#0b0e14] text-white">
      <div className="container mx-auto px-6 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">About Me</h2>
            <p className="mt-4 text-white/70">
              I’m Leander Josh — a full‑stack web developer and AI engineer based in the Philippines. I specialize in
              building modern platforms with Next.js, MongoDB, and AWS. I’ve shipped SaaS products, AI‑powered tools,
              and full marketplace platforms. I also serve as an AI developer for a POS provider and I’m the founder of
              an upcoming startup focused on connecting business buyers and sellers worldwide.
            </p>
            <p className="mt-4 text-white/70">
              I love building platforms that connect people, automate processes, and push the limits of what’s possible
              with web technology.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/75">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"><MapPin className="h-4 w-4 text-cyan-400"/>Philippines</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"><Rocket className="h-4 w-4 text-cyan-400"/>Founder</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"><Cpu className="h-4 w-4 text-cyan-400"/>AI Engineer</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { title: 'Core', items: ['Next.js', 'MERN', 'AWS', 'AI Integration'] },
              { title: 'Voice & APIs', items: ['Voice Navigation', 'OpenAI', 'Deepgram', 'Custom LLMs'] },
              { title: 'DevOps', items: ['Vercel', 'Docker', 'EC2'] },
              { title: 'Product', items: ['SaaS', 'Marketplaces', 'Realtime Apps'] },
            ].map((group) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-lg border border-white/10 bg-white/5 p-4"
              >
                <h3 className="text-sm font-medium text-white/90">{group.title}</h3>
                <ul className="mt-2 space-y-1 text-sm text-white/70">
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
