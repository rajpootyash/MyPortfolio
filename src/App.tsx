import { HomePage } from './pages/HomePage'
import { ThemeProvider } from './store/ThemeContext'
import { Navbar } from './components/ui/Navbar'
import { ChatbotWrapper } from './components/chat/ChatbotWrapper'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-blue-500/30 transition-colors duration-300">
        <Navbar />
        <HomePage />
        <ChatbotWrapper />
      </div>
    </ThemeProvider>
  )
}

export default App
