import { motion } from "framer-motion"

import { Card, CardContent } from "../components/ui/Card"
import { Badge } from "../components/ui/Badge"
import { Button } from "../components/ui/Button"
import { TiltCard } from "../components/ui/TiltCard"

const projects = [
  {
    title: "Distributed Email Platform",
    tagline: "Gmail-like Scalable Email Service",
    problem: "Handling high-throughput email delivery and real-time syncing across distributed nodes.",
    solution: "Architected an event-driven system utilizing RabbitMQ for message queuing and SignalR for real-time client updates.",
    impact: "Achieved 99.9% uptime and reduced email processing latency by 40%.",
    tech: ["ASP.NET Core", "RabbitMQ", "SignalR", "PostgreSQL", "React"],
    link: "#"
  },
  {
    title: "KnowledgeMesh AI",
    tagline: "RAG + AI SaaS Platform",
    problem: "Enterprise documents were siloed, making intelligent retrieval impossible.",
    solution: "Built a sophisticated RAG pipeline with vector databases and knowledge graphs to ground LLM responses.",
    impact: "Improved document retrieval accuracy by 65% for enterprise clients.",
    tech: ["React TS", "LangChain", "Vector DB", "PostgreSQL", "Tailwind"],
    link: "#"
  },
  {
    title: "Workforce System",
    tagline: "Kumbh Authority Management",
    problem: "Managing thousands of personnel and resources during the world's largest gathering.",
    solution: "Developed a highly concurrent backend with scalable API endpoints to track real-time locations and assignments.",
    impact: "Successfully handled 10k+ concurrent users with zero downtime.",
    tech: ["ASP.NET Core", "SQL Server", "React", "Redis"],
    link: "#"
  },
  {
    title: "Samajkalyan System",
    tagline: "Government Welfare Portal",
    problem: "Legacy systems caused massive delays in welfare distribution and tracking.",
    solution: "Modernized the entire stack using Clean Architecture principles, ensuring robust security and role-based access.",
    impact: "Reduced processing times by 35% and digitized over 1M+ records.",
    tech: ["C#", ".NET 8", "PostgreSQL", "React", "Tailwind"],
    link: "#"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-[var(--foreground)]">Featured Products</h2>
          <p className="text-[var(--muted)] font-light max-w-2xl mx-auto text-lg">
            I build products, not just features. Here are some of the most impactful systems I've architected and delivered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <TiltCard>
                <Card className="h-full flex flex-col bg-[var(--card)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-300 shadow-xl overflow-hidden relative">
                  
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* SaaS Mock UI Visual Placeholder */}
                  <div className="relative h-48 w-full border-b border-[var(--border)] overflow-hidden bg-[var(--background)] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent)]" />
                    
                    {/* Abstract Mock App Window */}
                    <div className="relative w-full max-w-sm h-32 rounded-lg border border-white/[0.1] bg-[#111] shadow-2xl flex flex-col overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                      <div className="h-6 w-full border-b border-white/[0.1] bg-[#1a1a1a] flex items-center px-3 gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
                      </div>
                      <div className="flex-1 p-3 flex gap-3 opacity-50">
                        <div className="w-1/4 h-full rounded bg-white/[0.05]"></div>
                        <div className="w-3/4 flex flex-col gap-2">
                          <div className="w-full h-4 rounded bg-white/[0.05]"></div>
                          <div className="w-5/6 h-4 rounded bg-white/[0.05]"></div>
                          <div className="w-full h-full rounded bg-white/[0.03] mt-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-8 flex-1 flex flex-col relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-1 text-[var(--foreground)] group-hover:text-blue-500 transition-colors">{project.title}</h3>
                        <p className="text-[var(--muted)] text-sm">{project.tagline}</p>
                      </div>
                    </div>
                  
                  <div className="space-y-4 mb-8 flex-1">
                    <div>
                      <span className="text-[var(--foreground)] text-sm font-medium block mb-1">Problem:</span>
                      <p className="text-[var(--muted)] text-sm leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-[var(--foreground)] text-sm font-medium block mb-1">Solution:</span>
                      <p className="text-[var(--muted)] text-sm leading-relaxed">{project.solution}</p>
                    </div>
                    <div>
                      <span className="text-[var(--foreground)] text-sm font-medium block mb-1">Impact:</span>
                      <p className="text-emerald-500 text-sm font-medium">{project.impact}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, tIdx) => (
                        <Badge key={tIdx} variant="outline" className="text-[10px] uppercase tracking-wider">{t}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                      <Button variant="primary" size="sm" className="w-full sm:w-auto text-xs">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="w-full sm:w-auto text-xs">
                        Architecture
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
