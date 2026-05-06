import { SUGGESTED_QUESTIONS } from "../../lib/botLogic";

export function SuggestedQuestions({ onSelect }: { onSelect: (q: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {SUGGESTED_QUESTIONS.map((q, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(q)}
          className="text-xs font-medium px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--background)] hover:bg-[var(--border-hover)] text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-left"
        >
          {q}
        </button>
      ))}
    </div>
  );
}
