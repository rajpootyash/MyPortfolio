import { motion } from "framer-motion";
import type { ChatMessage } from "../../lib/botLogic";

// Simple text parser to handle line breaks and bold text (**text**)
const parseText = (text: string) => {
  return text.split("\n").map((line, i) => {
    const parts = line.split(/(\*\*.*?\*\*)/g);
    return (
      <span key={i} className="block mb-1 last:mb-0">
        {parts.map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={j} className="font-semibold">{part.slice(2, -2)}</strong>;
          }
          return <span key={j}>{part}</span>;
        })}
      </span>
    );
  });
};

export function MessageBubble({ message }: { message: ChatMessage }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`flex w-full ${message.isBot ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`relative max-w-[85%] px-4 py-3 text-sm leading-relaxed ${
          message.isBot
            ? "bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] rounded-2xl rounded-tl-sm"
            : "bg-blue-600 text-white rounded-2xl rounded-tr-sm shadow-md"
        }`}
      >
        {parseText(message.text)}
      </div>
    </motion.div>
  );
}
