import { type ElementType } from "react"
import { motion, type HTMLMotionProps } from "framer-motion"

interface AnimatedTextProps extends HTMLMotionProps<"div"> {
  text: string
  el?: ElementType
  className?: string
  once?: boolean
  delay?: number
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
}

export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  once = true,
  delay = 0,
  ...props
}: AnimatedTextProps) => {
  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        transition={{ staggerChildren: 0.05, delayChildren: delay }}
        aria-hidden
        {...props as any}
      >
        {text.split(" ").map((word, wordIndex) => (
          <span className="inline-block" key={`${word}-${wordIndex}`}>
            {word.split("").map((char, charIndex) => (
              <motion.span
                className="inline-block"
                variants={defaultAnimations}
                key={`${char}-${charIndex}`}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  )
}
