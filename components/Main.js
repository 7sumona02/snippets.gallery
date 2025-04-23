'use client'
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react"
import { useState } from "react";

const Main = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='z-10 flex flex-col items-center h-screen w-screen overflow-hidden relative md:px-0 px-5'>
      <div className="flex flex-col py-20 space-y-8">
        <div>
          <div className='text-3xl text-white font-serif'>snippets.gallery</div>
        </div>
        <div className='space-y-4'>
          <div className='max-w-lg text-neutral-300'>Copy, paste beautiful, minimal UI components built with Tailwind CSS and Motion</div>
          {/* <button className='bg-black py-3 px-4 rounded-full text-sm cursor-pointer'>Browse Components</button> */}
        </div>
        <Link href='/components'>
          <div 
            className="w-full h-44 relative group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="border border-white/20 rounded-lg p-1.5 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/15">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src='/components.jpg' 
                  alt='components' 
                  className='w-full h-[40vh] rounded-lg transition-all duration-500 ease-out group-hover:blur-[1.2px] group-hover:scale-105 transform-gpu' 
                />
              </div>
            </div>
            <div className="absolute top-6 right-6">
              <ArrowRight className="group-hover:-rotate-45 duration-500 transition-all text-neutral-300 group-hover:text-white" />
            </div>
            <div className="absolute md:-bottom-[15.5vh] -bottom-[12vh] left-7 transform transition-all duration-300">
              <TextHoverEnter isHovered={isHovered}>Browse Components</TextHoverEnter>
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

const Footer = () => {
  return (
    <div className="flex space-x-1 md:text-[200px] text-[150px] absolute -bottom-[12vh] opacity-20 font-semibold">
      {'snippets.gallery'.split('').map((letter, index) => (
        <motion.span
          key={index}
          whileHover={{ 
            y: Math.random() * -50,
            rotate: (Math.random() - 0.5) * 20,
            transition: { 
              type: "spring",
              stiffness: 400,
              damping: 10,
              mass: 1
            }
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

import { cn } from "@/utils/cn";
import Link from "next/link";

export function TextHoverEnterExample() {
  return <TextHoverEnter>Browse Components</TextHoverEnter>;
}

const DURATION = 0.25;
const STAGGER = 0.025;

// Update TextHoverEnter component to accept isHovered prop
function TextHoverEnter({ children, className, isHovered }) {
  if (typeof children !== "string") {
    return null;
  }

  const letters = children
    .split("")
    .map((letter) => (letter === " " ? "\u00A0" : letter));

  return (
    <motion.div
      className={cn(
        "relative block select-none overflow-hidden whitespace-nowrap text-base font-medium text-neutral-300",
        className,
      )}
      style={{ lineHeight: 0.9 }}
    >
      <div>
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: 0 }}
            animate={isHovered ? { y: "-100%" } : { y: 0 }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: "100%" }}
            animate={isHovered ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default Main