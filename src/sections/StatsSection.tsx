import { useEffect, useRef } from "react"
import { motion, useInView, useSpring } from "framer-motion"
import { Zap, Users, Server, Database } from "lucide-react"

function AnimatedCounter({ value, duration = 2 }: { value: number, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 })

  useEffect(() => {
    if (inView) {
      spring.set(value)
    }
  }, [inView, spring, value])

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString()
      }
    })
  }, [spring])

  return <span ref={ref}>0</span>
}

const stats = [
  {
    icon: <Zap size={24} className="text-yellow-500" />,
    value: 40,
    suffix: "%+",
    label: "API Performance Gains",
    bgGlow: "bg-yellow-500/10",
    borderGlow: "group-hover:border-yellow-500/30"
  },
  {
    icon: <Users size={24} className="text-blue-500" />,
    value: 100,
    suffix: "K+",
    label: "Users Impacted",
    bgGlow: "bg-blue-500/10",
    borderGlow: "group-hover:border-blue-500/30"
  },
  {
    icon: <Server size={24} className="text-purple-500" />,
    value: 10,
    suffix: "+",
    label: "AI SaaS Systems Built",
    bgGlow: "bg-purple-500/10",
    borderGlow: "group-hover:border-purple-500/30"
  },
  {
    icon: <Database size={24} className="text-emerald-500" />,
    value: 5,
    suffix: "+",
    label: "Years Distributed Exp.",
    bgGlow: "bg-emerald-500/10",
    borderGlow: "group-hover:border-emerald-500/30"
  }
]

export function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-[var(--border)] bg-[var(--background)] relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-colors group ${stat.borderGlow}`}
          >
            <div className={`p-4 rounded-xl mb-4 ${stat.bgGlow} transition-transform group-hover:scale-110`}>
              {stat.icon}
            </div>
            <div className="flex items-baseline gap-1 text-3xl font-bold text-[var(--foreground)] mb-2">
              <AnimatedCounter value={stat.value} />
              <span>{stat.suffix}</span>
            </div>
            <p className="text-sm text-[var(--muted)] text-center font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
