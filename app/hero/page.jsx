'use client'

import { useRef, useMemo } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from "lucide-react"
import { TextAnimate } from './TextAnimate'
import { easeInOut } from "motion"

const splitTextIntoLines = (text, maxCharsPerLine = 45) => {
  const words = text.split(' ')
  const lines = []
  let currentLine = words[0] || ''

  for (let i = 1; i < words.length; i++) {
    if (currentLine.length + words[i].length + 1 <= maxCharsPerLine) {
      currentLine += ' ' + words[i]
    } else {
      lines.push(currentLine)
      currentLine = words[i]
    }
  }

  if (currentLine) lines.push(currentLine)
  return lines
}

const Page = () => {
  const sections = [
    {
      id: 1,
      title: "Feature 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime sequi pariatur illum adipisci ullam optio quod tempora necessitatibus consectetur eaque deleniti id totam possimus unde dolorum inventore incidunt ea.",
      imageUrl: 'https://cdn.cosmos.so/6c4a7829-d16a-4a58-9ab9-93fbb3bacb9e.?format=jpeg',
      reverse: false
    },
    {
      id: 2,
      title: "Feature 2",
      description: "This is another feature section with different text that will automatically wrap based on the container width. The animation will make each line appear smoothly from the bottom.",
      imageUrl: 'https://cdn.cosmos.so/f827788c-038d-4257-8167-759e819f846d?format=jpeg',
      reverse: true
    },
    {
      id: 3,
      title: "Feature 3",
      description: "The final feature demonstrates how text can be dynamically split into lines without manual line breaks. Each line animates independently with a nice staggered effect.",
      imageUrl: 'https://cdn.cosmos.so/20351bef-4a9c-4dcc-81d8-e59c84058944?format=jpeg',
      reverse: false
    }
  ]

  const sectionsWithLines = useMemo(() => {
    return sections.map(section => ({
      ...section,
      lines: splitTextIntoLines(section.description)
    }))
  }, [sections])

  const sectionRefs = useRef(sections.map(() => useRef(null)))
  
  const scrollYProgress = sections.map((_, index) => {
    return useScroll({
      target: sectionRefs.current[index],
      offset: ["start end", "center start"]
    }).scrollYProgress
  })

  const opacityContents = scrollYProgress.map(progress => 
    useTransform(progress, [0, 0.7], [0, 1])
  )
  
  const clipProgresses = scrollYProgress.map(progress => 
    useTransform(progress, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])
  )
  
  const translateContents = scrollYProgress.map(progress => 
    useTransform(progress, [0, 1], [40, -40])
  )

  const lineContainerVariants = {
    hidden: { opacity: 0.6 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0,
        delayChildren: 0
      }
    }
  }

  const lineVariants = {
    hidden: { 
      y: "100%",
      opacity: 0 
    },
    visible: {
      y: "0%",
      opacity: 0.9,
      transition: {
        duration: 1.2,
        ease: easeInOut
      }
    }
  }

  return (
    <div className="bg-black text-white">
      <div className='min-h-screen w-screen flex flex-col items-center justify-center'>
        <h1 className='text-6xl max-w-2xl text-center'>PARALLAX SCROLL FEATURE SECTION</h1>
        <p className='mt-20 flex items-center gap-1.5 text-sm'>SCROLL <ArrowDown size={15} /></p>
      </div>
      
      <div className="flex flex-col">
        {sectionsWithLines.map((section, index) => (
          <div 
            key={section.id}
            ref={sectionRefs.current[index]} 
            className={`h-screen flex items-center justify-center gap-40 px-10 ${section.reverse ? 'flex-row-reverse' : ''}`}
          >
            <motion.div style={{ y: translateContents[index] }} className="flex-1 max-w-sm">
              <TextAnimate 
                text={section.title} 
                type="calmInUp"
                className="text-6xl pb-4"
                sectionRef={sectionRefs.current[index]}
              />
              
              <motion.div 
                className="mt-10"
                style={{y:translateContents[index]}}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-500px 0px 0px 0px" }}
                variants={lineContainerVariants}
              >
                {section.lines.map((line, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.p
                      className="text-white/70 text-[1.1rem]"
                      variants={lineVariants}
                    >
                      {line}
                    </motion.p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              style={{ 
                opacity: opacityContents[index],
                clipPath: clipProgresses[index],
              }}
              className="relative flex-1 max-w-md"
            >
              <img 
                src={section.imageUrl} 
                className="size-80 object-cover" 
                alt={`Section ${section.id}`}
              />
            </motion.div>
          </div>
        ))}
      </div>
      
      <div className='min-h-screen w-screen flex flex-col items-center justify-center'>
        <h1 className='text-8xl'>The End</h1>
      </div>
    </div>
  )
}

export default Page