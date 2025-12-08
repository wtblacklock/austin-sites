"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export function TextGenerateEffect({
  words,
  className,
}: {
  words: string;
  className?: string;
}) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
      },
      {
        duration: 0.5,
        delay: stagger(0.1),
      }
    );
  }, [animate]);

  return (
    <motion.div ref={scope} className={cn("font-bold", className)}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="opacity-0"
          style={{ filter: "blur(10px)" }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
}

export function TypewriterEffect({
  words,
  className,
  cursorClassName,
}: {
  words: { text: string; className?: string }[];
  className?: string;
  cursorClassName?: string;
}) {
  return (
    <div className={cn("flex items-center space-x-1", className)}>
      <motion.div
        className="overflow-hidden"
        initial={{ width: "0%" }}
        animate={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 0.5 }}
      >
        <div className="flex whitespace-nowrap text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          {words.map((word, idx) => (
            <span key={idx} className={cn("text-white", word.className)}>
              {word.text}
            </span>
          ))}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block h-12 w-1 rounded-sm bg-green-500 sm:h-14 md:h-16 lg:h-20",
          cursorClassName
        )}
      />
    </div>
  );
}

