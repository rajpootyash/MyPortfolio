import { motion } from "framer-motion"
import { Database, Server, Shield } from "lucide-react"

const reasons = [
  {
    title: "Systems That Don't Fail",
    desc: "I engineer solutions designed to handle real-world scale, massive traffic spikes, and edge cases gracefully without downtime.",
    icon: <Database className="w-6 h-6 text-emerald-500" />
  },
  {
    title: "Engineering Over Features",
    desc: "Writing code is easy. Designing a distributed system that developers can maintain and scale for years is where I excel.",
    icon: <Server className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Production-Ready From Day 1",
    desc: "I don't just build MVPs. I build robust pipelines, secure endpoints, and automated deployments that are ready for enterprise clients.",
    icon: <Shield className="w-6 h-6 text-purple-500" />
  }
]

export function WhyHireMeSection() {
  return (
    <section id="why-hire-me" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[var(--background)]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-[var(--foreground)]">Why You Should Hire Me</h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto text-lg font-light tracking-tight">
            I bring a unique combination of enterprise reliability and startup agility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative p-8 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-300 group shadow-sm hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] group-hover:bg-[var(--border)] transition-colors duration-300">
                {point.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-[var(--foreground)] group-hover:text-blue-500 transition-colors">{point.title}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
