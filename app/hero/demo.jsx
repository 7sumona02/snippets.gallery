'use client'

import { ArrowUpRight } from "lucide-react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'

const Page = () => {
    const revealRef = useRef(null)
    
    const { scrollYProgress } = useScroll({
        target: revealRef,
        offset: ["start end", "end start"]
    })

    const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0])

    return (
        <div className="h-[150vh] w-screen overflow-hidden flex flex-col py-20 relative">
            <div className="ml-80 relative">
                <div className="text-7xl font-['Instrument'] font-light">
                    A <span className="font-['InstrumentItalic']">(Journey)</span> <br />through time
                </div>
                <div className="mt-10 ml-20">
                    <div className="text-white/70 max-w-lg font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus eum maxime nemo libero voluptates earum sapiente voluptate esse necessitatibus vel, delectus quia obcaecati itaque nesciunt facere reprehenderit, fuga non.
                    </div>
                    <div className="flex items-center gap-6 mt-10">
                        <div className="text-white/70 font-light border-[0.8px] border-white rounded-full p-2">
                            <ArrowUpRight size={20} />
                        </div>
                        <div>About Us</div>
                    </div>
                    <div ref={revealRef} className="absolute -left-[14rem] -bottom-16 w-60 h-60 overflow-hidden">
                        <motion.img 
                            style={{
                                clipPath: `inset(0 ${clipProgress}% 0 0)`,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }}
                            src="https://images.unsplash.com/photo-1640680608781-2e4199dd1579?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="Journey through time"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page