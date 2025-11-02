import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Frontend',
    items: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Python (FastAPI)'],
  },
  {
    title: 'AI Tools',
    items: ['OpenAI API', 'Deepgram', 'Simli Avatar API', 'Custom LLM Integration'],
  },
  {
    title: 'DevOps',
    items: ['AWS EC2', 'Vercel', 'Docker'],
  },
  {
    title: 'Other',
    items: ['GitHub', 'Paywall Automation', 'WebSocket Messaging', 'Realtime Apps'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#0b0e14] text-white">
      <div className="container mx-auto px-6 py-20 sm:py-24">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold sm:text-3xl"
        >
          Skills
        </motion.h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5"
            >
              <h3 className="text-sm font-medium text-white/90">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
