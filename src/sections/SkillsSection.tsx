import { motion } from "framer-motion"
import { Badge } from "../components/ui/Badge"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand", "Redux", "Vite"]
  },
  {
    title: "Backend",
    skills: ["ASP.NET Core", "C#", "Node.js", "Express", "REST APIs", "Clean Architecture"]
  },
  {
    title: "AI / ML",
    skills: ["RAG Pipelines", "LangChain", "Vector DBs", "Knowledge Graphs", "LLM Integration"]
  },
  {
    title: "Systems & DB",
    skills: ["PostgreSQL", "SQL Server", "RabbitMQ", "Hangfire", "SignalR", "WebSockets", "Redis"]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 border-y border-white/[0.08] bg-black relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-center text-[#f2f2f2]">Technical Arsenal</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-xl border border-white/[0.08] bg-[#0a0a0a] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] relative overflow-hidden group hover:border-white/[0.15] transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-lg font-medium mb-6 text-[#f2f2f2]">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <Badge key={sIdx} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
