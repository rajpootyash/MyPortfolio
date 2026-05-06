import { motion } from "framer-motion";

export function TypingIndicator() {
  return (
    <div className="flex items-center space-x-1.5 p-4 rounded-2xl rounded-tl-sm bg-[var(--card)] border border-[var(--border)] max-w-[80px]">
      <motion.div
        className="w-1.5 h-1.5 rounded-full bg-[var(--muted)]"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
      />
      <motion.div
        className="w-1.5 h-1.5 rounded-full bg-[var(--muted)]"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
      />
      <motion.div
        className="w-1.5 h-1.5 rounded-full bg-[var(--muted)]"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
      />
    </div>
  );
}
