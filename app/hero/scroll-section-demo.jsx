'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'

const ScrollSection = () => {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    
    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: ref1,
        offset: ["start end", "center start"]
    });
    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: ref2,
        offset: ["start end", "center start"]
    });
    const { scrollYProgress: scrollYProgress3 } = useScroll({
        target: ref3,
        offset: ["start end", "center start"]
    });

    // Opacity animation (0 to 1)
    const opacityContent1 = useTransform(scrollYProgress1, [0, 0.7], [0, 1])
    const opacityContent2 = useTransform(scrollYProgress2, [0, 0.7], [0, 1])
    const opacityContent3 = useTransform(scrollYProgress3, [0, 0.7], [0, 1])
    
    // Clip-path animation (reveal from left)
    const clipProgress1 = useTransform(scrollYProgress1, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])
    const clipProgress2 = useTransform(scrollYProgress2, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])
    const clipProgress3 = useTransform(scrollYProgress3, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])

    return (
        <div className="flex flex-col">
            <div ref={ref1} className="h-screen flex items-center justify-center">
                <motion.div 
                    style={{ 
                        opacity: opacityContent1,
                        clipPath: clipProgress1,
                    }}
                    className="relative"
                >
                    <img 
                        src='https://images.unsplash.com/photo-1640680608781-2e4199dd1579?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                        className="size-80 object-cover" 
                    />
                </motion.div>
            </div>
            <div ref={ref2} className="h-screen flex items-center justify-center">
                <motion.div 
                    style={{ 
                        opacity: opacityContent2,
                        clipPath: clipProgress2,
                    }}
                    className="relative"
                >
                    <img 
                        src='https://images.unsplash.com/photo-1640680608781-2e4199dd1579?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                        className="size-80 object-cover" 
                    />
                </motion.div>
            </div>
            <div ref={ref3} className="h-screen flex items-center justify-center">
                <motion.div 
                    style={{ 
                        opacity: opacityContent3,
                        clipPath: clipProgress3,
                    }}
                    className="relative"
                >
                    <img 
                        src='https://images.unsplash.com/photo-1640680608781-2e4199dd1579?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                        className="size-80 object-cover" 
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default ScrollSection