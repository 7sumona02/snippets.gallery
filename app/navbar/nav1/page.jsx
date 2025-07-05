'use client'
import { motion, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

const Page = () => {
    const [scope, animate] = useAnimate();

    async function textAnim() {
        await animate(scope.current,{ y: 0 },{duration: 0.8,ease: "easeInOut"});
        await animate(scope.current,{y: -600},{duration: 0.8,ease: "easeInOut",delay: 1.5});
    }

    useEffect(() => {
        textAnim();
    }, []);

    return (
        <div className='h-screen bg-white overflow-hidden w-full relative'>
            <motion.p 
                ref={scope} 
                initial={{ y: '50vh' }} 
                className='text-[15rem] absolute -bottom-20 left-7 text-black'
            >
                atoll
            </motion.p>
            <motion.div initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 1, ease: "easeInOut", delay: 4}} className='text-[2.5rem] font-medium max-w-lg leading-9 text-black absolute top-[5rem] left-[34rem] text-wide w-full flex'>
                <div>Distinctive website solutions for leading and rising companies</div>
            </motion.div>
            <motion.div initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 1, ease: "easeInOut", delay: 4}} className='absolute top-[1rem] left-[34rem]'>
                <div className='flex items-center gap-10 text-black text-xl font-medium'>
                    <div>about</div>
                    <div>work</div>
                    <div>blog</div>
                    <div>contact</div>
                </div>
            </motion.div>
            <motion.div
            className="h-[1.5px] bg-black absolute top-56 left-0 right-0 mx-auto w-full origin-center"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay:3.5 }}
            />
            <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '14rem', opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay:3.5 }}
            className="w-[1.5px] bg-black absolute top-0 left-[32rem] origin-top"
            />        
            <motion.div initial={{width: 0}} animate={{width: '58rem'}} transition={{ duration: 1, ease: "easeInOut", delay: 3.5 }} className='h-[1.5px] right-0 bg-black absolute top-[4rem]'></motion.div>    
            <motion.div 
            className='h-[1.5px] bg-black absolute bottom-4 left-[30rem]'
            initial={{ width: 0, opacity: 1 }}
            animate={{ width: "60rem", opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
            />
        </div>
    );
}

export default Page;