"use client";

import { useEffect, useRef } from "react";

type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  duration?: number;
  once?: boolean;
};

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export function ScrambleText({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  duration = 1.5,
  once = true,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const resolveRef = { current: null as (() => void) | null };
    const finalText = text;
    const totalFrames = Math.round((duration * 60) / (text.length || 1));

    const start = () => {
      frame = 0;
      const tick = () => {
        frame++;
        const progress = frame / totalFrames;
        let result = "";
        for (let i = 0; i < finalText.length; i++) {
          if (i < progress * finalText.length) {
            result += finalText[i];
          } else {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        el.textContent = result;
        if (frame < totalFrames) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = finalText;
          if (resolveRef.current) resolveRef.current();
        }
      };
      tick();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(start, delay * 1000);
          if (once) observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text, delay, duration, once]);

  return <Tag ref={ref as any} className={className} />;
}
