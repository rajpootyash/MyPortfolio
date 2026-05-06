import { motion } from "framer-motion"
import { Button } from "../components/ui/Button"
import { AnimatedText } from "../components/ui/AnimatedText"
import { ArrowRight, Terminal } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
      {/* Subtle Linear-style Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Copy & CTAs */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] text-sm font-medium mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
          >
            <Terminal size={14} className="text-[var(--foreground)]" />
            <span>Akash Deep Verma • Full Stack Architect</span>
          </motion.div>

          <AnimatedText
            text="I Engineer Scalable Systems & AI Products That Handle Real-World Load"
            el="h1"
            className="text-5xl sm:text-6xl lg:text-6xl font-semibold tracking-tighter mb-6 text-gradient leading-[1.1]"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg sm:text-xl text-[var(--muted)] font-light tracking-tight max-w-xl mb-10"
          >
            3.5+ years building distributed systems, real-time architectures, and AI SaaS platforms that scale seamlessly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <div className="relative group w-full sm:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 dark:block hidden" />
              <Button variant="primary" size="lg" className="relative w-full h-11 text-base px-8 font-semibold dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                <a href="#projects" className="flex items-center justify-center gap-2 w-full">
                  View Projects
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-11 px-8 font-medium text-base hover:bg-[var(--border-hover)]">
              <a href="#contact" className="w-full flex justify-center">Hire Me</a>
            </Button>
          </motion.div>
        </div>

        {/* Right Column: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          {/* Decorative Elements */}
          <div className="absolute w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[100px] mix-blend-normal" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-10 w-80 h-80 rounded-full p-2 border border-[var(--border)] bg-[var(--card)] shadow-2xl group"
          >
            {/* Inner Glow Border on Hover */}
            <div className="absolute inset-0 rounded-full border border-blue-500/0 group-hover:border-blue-500/50 transition-colors duration-500" />

            <div className="w-full h-full rounded-full overflow-hidden bg-[var(--background)] flex items-center justify-center relative">
              {/* Replace the src with actual photo later */}
              <img
                src="/public/aa.jpeg"
                alt="Akash Deep Verma"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent mix-blend-overlay" />
            </div>
          </motion.div>

          {/* Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute top-10 -right-4 bg-[var(--card)] border border-[var(--border)] px-4 py-2 rounded-lg shadow-xl backdrop-blur-md"
          >
            <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">TOP 5%</span>
            <span className="text-xs text-[var(--muted)] ml-1">ENGINEER</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
