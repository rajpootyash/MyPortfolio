import { motion } from "framer-motion"
import { Database, Server, Network } from "lucide-react"

const architectures = [
  {
    title: "Distributed Email System",
    description: "Event-driven architecture for real-time delivery and high-throughput processing.",
    flow: [
      { step: "API Gateway", icon: <Network size={16} />, desc: "Rate limiting & auth" },
      { step: "RabbitMQ", icon: <Server size={16} />, desc: "Message queuing" },
      { step: "Workers", icon: <Database size={16} />, desc: "Async processing" }
    ]
  },
  {
    title: "AI RAG Pipeline",
    description: "Enterprise document retrieval using vector databases and knowledge graphs.",
    flow: [
      { step: "LangChain", icon: <Network size={16} />, desc: "Orchestration" },
      { step: "Vector DB", icon: <Database size={16} />, desc: "Semantic search" },
      { step: "LLM Agent", icon: <Server size={16} />, desc: "Generation" }
    ]
  },
  {
    title: "Event-Driven Processing",
    description: "Reliable asynchronous workflows utilizing RabbitMQ for scalable message brokering.",
    flow: [
      { step: "Producer API", icon: <Network size={16} />, desc: "Publishes events" },
      { step: "RabbitMQ", icon: <Server size={16} />, desc: "Exchange & Queues" },
      { step: "Consumer", icon: <Database size={16} />, desc: "Processes events" }
    ]
  }
]

export function ArchitectureSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-[var(--foreground)]">How I Design Scalable Systems</h2>
          <p className="text-[var(--muted)] font-light max-w-2xl mx-auto text-lg">
            A glimpse into the architectural patterns I use to build resilient, high-performance applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {architectures.map((arch, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--border-hover)] transition-colors"
            >
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">{arch.title}</h3>
              <p className="text-[var(--muted)] text-sm mb-8">{arch.description}</p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2">
                {arch.flow.map((node, nIdx) => (
                  <div key={nIdx} className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto flex-1">
                    <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-[var(--border)] bg-[var(--background)] w-full text-center relative group">
                      <div className="text-blue-500 mb-2 group-hover:scale-110 transition-transform">{node.icon}</div>
                      <span className="text-sm font-medium text-[var(--foreground)]">{node.step}</span>
                      <span className="text-xs text-[var(--muted)] mt-1">{node.desc}</span>
                    </div>
                    {nIdx < arch.flow.length - 1 && (
                      <div className="hidden sm:block text-[var(--border-hover)] animate-pulse">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    )}
                    {nIdx < arch.flow.length - 1 && (
                      <div className="block sm:hidden text-[var(--border-hover)] animate-pulse my-2 rotate-90">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
