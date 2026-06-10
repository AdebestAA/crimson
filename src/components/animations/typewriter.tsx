"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

type Props = {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
};

export function Typewriter({
  text,
  className,
  speed = 50,
  delay = 300,
  showCursor = true,
}: Props) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    setDisplayed("");
    setDone(false);
    let i = 0;
    const start = setTimeout(() => {
      const timer = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(timer);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(start);
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayed}
      {showCursor && (
        <motion.span
          animate={{ opacity: done ? [1, 0, 1] : 1 }}
          transition={done ? { repeat: Infinity, duration: 1 } : {}}
          className="inline-block w-[2px] h-[1em] bg-current ml-0.5 align-middle"
        />
      )}
    </span>
  );
}
