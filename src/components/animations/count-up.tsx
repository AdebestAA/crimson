"use client";

import { useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

export function CountUp({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  className,
}: Props) {
  const [display, setDisplay] = useState(from);
  const count = useMotionValue(from);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    const controls = animate(count, to, { duration, ease: "easeOut" });
    return () => {
      unsub();
      controls.stop();
    };
  }, [count, rounded, to, duration]);

  return (
    <span className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
