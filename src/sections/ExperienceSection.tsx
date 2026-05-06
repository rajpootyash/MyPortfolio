import { motion } from "framer-motion"
import { CheckCircle2, TrendingUp } from "lucide-react"

const experiences = [
  {
    role: "Full Stack Engineer",
    company: "Current Company",
    period: "2022 - Present",
    achievements: [
      "Architected event-driven systems using RabbitMQ and Hangfire, improving background job processing reliability.",
      "Optimized API performance by 35% through robust caching strategies and database query tuning.",
      "Spearheaded the integration of AI capabilities including RAG pipelines with LangChain and Vector DBs.",
      "Implemented Controller → Service → Repository patterns for highly maintainable codebase."
    ]
  },
  {
    role: "Software Developer",
    company: "Previous Company",
    period: "2020 - 2022",
    achievements: [
      "Built modern frontend applications using React and TypeScript, focusing on component reusability.",
      "Reduced DB query latency by 40% using strategic indexing and optimized stored procedures.",
      "Developed real-time features using SignalR and WebSockets for concurrent user collaboration.",
      "Mentored junior developers and established code review guidelines."
    ]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 border-y border-[var(--border)] bg-[var(--background)] relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-[var(--foreground)]">Experience Trajectory</h2>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-[var(--border)]">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[var(--border-hover)] bg-[var(--card)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--border-hover)] transition-colors shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-medium text-lg text-[var(--foreground)]">{exp.role}</h3>
                  <span className="text-[var(--muted)] font-mono text-xs tracking-wider uppercase">{exp.period}</span>
                </div>
                <h4 className="text-[var(--muted)] text-sm mb-4">{exp.company}</h4>
                <ul className="space-y-3 text-[var(--muted)] text-sm leading-relaxed">
                  {exp.achievements.map((ach, aIdx) => {
                    const isMetric = ach.includes("%") || ach.includes("+");
                    return (
                      <li key={aIdx} className="flex gap-3 items-start">
                        {isMetric ? (
                          <TrendingUp size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                        ) : (
                          <CheckCircle2 size={16} className="text-blue-500/50 mt-0.5 shrink-0" />
                        )}
                        <span className={isMetric ? "text-[var(--foreground)] font-medium" : ""}>{ach}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
