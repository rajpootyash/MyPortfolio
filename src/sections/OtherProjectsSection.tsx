import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "../components/ui/Card"

const otherProjects = [
  {
    title: "Tech Podio",
    desc: "A centralized pod management tool for technical teams.",
    tech: "React, ASP.NET Core",
    link: "#"
  },
  {
    title: "Workflow Management System",
    desc: "Enterprise workflow automation with custom rule engines.",
    tech: "C#, PostgreSQL",
    link: "#"
  },
  {
    title: "Aura LMS",
    desc: "Modern learning management system with video tracking.",
    tech: "Next.js, Tailwind",
    link: "#"
  },
  {
    title: "Asset Management System",
    desc: "Track physical and digital assets across company branches.",
    tech: "ASP.NET Core",
    link: "#"
  }
]

export function OtherProjectsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--background)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] mb-2">Other Systems I've Built</h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <a href={project.link} className="block h-full group">
                <Card className="h-full bg-[var(--card)] hover:bg-[var(--border)] border-[var(--border)] transition-colors cursor-pointer">
                  <CardContent className="p-5 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-medium text-[var(--foreground)] group-hover:text-blue-500 transition-colors">{project.title}</h4>
                      <ExternalLink size={14} className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1" />
                    </div>
                    <p className="text-sm text-[var(--muted)] mb-4 flex-1">{project.desc}</p>
                    <span className="text-[10px] uppercase tracking-wider text-[var(--muted-fg)] font-mono">{project.tech}</span>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
