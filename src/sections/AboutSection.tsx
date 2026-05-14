import { motion } from "framer-motion"
import { Server, Zap, Database } from "lucide-react"
import { Card, CardContent } from "../components/ui/Card"

const highlights = [
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Performance Optimization",
    desc: "Consistent 35-40% improvement in API response times through efficient caching and DB indexing."
  },
  {
    icon: <Server className="w-6 h-6 text-blue-400" />,
    title: "System Design",
    desc: "Controller → Service → Repository pattern for highly maintainable and scalable enterprise apps."
  },
  {
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    title: "Distributed Systems",
    desc: "Event-driven engineering using RabbitMQ, Hangfire, and PostgreSQL for real-time processing."
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-[#f2f2f2]">Engineering Philosophy</h2>
          <p className="text-[#8a8f98] max-w-2xl mx-auto text-lg font-light tracking-tight">
            I don't just write code; I engineer solutions that scale. With over 3.5 years of experience building products from zero to production, I focus on system reliability, clean code, and pushing the boundaries of AI SaaS.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card className="h-full group">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-6 group-hover:bg-white/[0.06] transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-medium text-[#f2f2f2] mb-3">{item.title}</h3>
                  <p className="text-[#8a8f98] text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
