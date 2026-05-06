import { motion } from "framer-motion"
import { Mail, Phone, Send } from "lucide-react"
import { FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { Button } from "../components/ui/Button"
import { Card, CardContent } from "../components/ui/Card"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] text-sm font-medium mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Freelance / Full-time</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-[var(--foreground)]">Let's Build Something Powerful</h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto font-light mb-2">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <p className="text-[var(--muted-fg)] text-sm font-mono">I usually respond within 24 hours.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <a href="mailto:contact@akashdeep.com" className="flex items-center gap-4 group cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] group-hover:text-[var(--foreground)] group-hover:bg-[var(--border)] transition-colors shadow-sm">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-[var(--muted)] text-xs uppercase tracking-wider font-medium">Email</h4>
                <p className="text-sm font-medium text-[var(--foreground)]">contact@akashdeep.com</p>
              </div>
            </a>
            
            <a href="tel:+911234567890" className="flex items-center gap-4 group cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] group-hover:text-[var(--foreground)] group-hover:bg-[var(--border)] transition-colors shadow-sm">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-[var(--muted)] text-xs uppercase tracking-wider font-medium">Phone</h4>
                <p className="text-sm font-medium text-[var(--foreground)]">+91 (123) 456-7890</p>
              </div>
            </a>

            <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer" className="flex items-center gap-4 group cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] group-hover:text-emerald-500 group-hover:bg-[var(--border)] transition-colors shadow-sm">
                <FaWhatsapp size={20} />
              </div>
              <div>
                <h4 className="text-[var(--muted)] text-xs uppercase tracking-wider font-medium">WhatsApp</h4>
                <p className="text-sm font-medium text-[var(--foreground)]">+91 (123) 456-7890</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/akashdeep" target="_blank" rel="noreferrer" className="flex items-center gap-4 group cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] group-hover:text-[#0077B5] group-hover:bg-[var(--border)] transition-colors shadow-sm">
                <FaLinkedin size={20} />
              </div>
              <div>
                <h4 className="text-[var(--muted)] text-xs uppercase tracking-wider font-medium">LinkedIn</h4>
                <p className="text-sm font-medium text-[var(--foreground)]">linkedin.com/in/akashdeep</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[var(--card)] border-[var(--border)] shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <form 
                  className="space-y-6" 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get("name")?.toString() || "";
                    const message = formData.get("message")?.toString() || "";
                    const subject = `Portfolio Contact from ${name}`;
                    window.location.href = `mailto:contact@akashdeep.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
                  }}
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-medium text-[var(--muted)] uppercase tracking-wider">Name</label>
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      required
                      className="w-full bg-[var(--background)] border border-[var(--border)] rounded-md px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-fg)] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors shadow-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-medium text-[var(--muted)] uppercase tracking-wider">Email</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      required
                      className="w-full bg-[var(--background)] border border-[var(--border)] rounded-md px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-fg)] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors shadow-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-medium text-[var(--muted)] uppercase tracking-wider">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full bg-[var(--background)] border border-[var(--border)] rounded-md px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-fg)] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors shadow-sm resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <Button type="submit" variant="primary" className="w-full h-10 gap-2 group mt-2 font-medium shadow-md hover:shadow-lg transition-shadow">
                    Send Message
                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-90" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
