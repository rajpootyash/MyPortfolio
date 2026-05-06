import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "../../store/ThemeContext"

export function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-xl border-b border-[var(--border)] bg-[var(--background)]/80"
    >
      <div className="font-bold text-lg tracking-tight">
        Akash Deep Verma
      </div>
      
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--muted)]">
        <a href="#about" className="hover:text-[var(--foreground)] transition-colors">About</a>
        <a href="#projects" className="hover:text-[var(--foreground)] transition-colors">Projects</a>
        <a href="#experience" className="hover:text-[var(--foreground)] transition-colors">Experience</a>
      </nav>

      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-[var(--border)] transition-colors text-[var(--foreground)]"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <a 
          href="#contact"
          className="px-4 py-2 text-sm font-medium rounded-md bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 transition-opacity"
        >
          Contact Me
        </a>
      </div>
    </motion.header>
  )
}
