'use client'

import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const phrases = [
  "It is a long established fact",
  "that a reader will be distracted",
  "by the readable content of a page",
  "when looking at its layout."
];

const animation = {
  initial: { y: "100%" },
  enter: (i) => ({
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.075 * i
    }
  })
};

export default function Home() {
  return (
    <div className="flex items-center flex-col mt-[300px] gap-[20vw] mb-[300px]">
      <MaskText/>
      <MaskText/>
      <MaskText/>
      <MaskText/>
      <MaskText/>
    </div>
  );
}

export function MaskText() {
  const [body, inView] = useInView({
    triggerOnce: true,
    rootMargin: '75% 0px'
  });

  return(
    <div ref={body} className="text-[5vw]">
      {phrases.map((phrase, index) => (
        <div key={index} className="overflow-hidden">
          <motion.p
            className="m-0 font-bold"
            custom={index}
            variants={animation}
            initial="initial"
            animate={inView ? "enter" : ""}
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
}