import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SocialLinks from './SocialLinks';

function About() {
  const [index, setIndex] = useState(0)
  const role=[{
    title:"FULL-STACK Developer",
  },
{
    title:"MERN Stack Developer",
},{ 
    title:"Java & DSA Enthusiast"
    ,
  } ,{
    title:"React & Node.js Enthusiast",
  }

]

useEffect(() => {
  const timer = setInterval(() => {
    setIndex((prevIndex) => (prevIndex + 1) % role.length)
  }, 2000)

  return () => clearInterval(timer)
}, [role.length])

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className='absolute inset-0 top-[145px] sm:top-[100px] max-w-7xl mx-auto sm:px-16 px-6 flex 
           flex-col items-center justify-center text-center gap-5'>
        <div>

      <motion.h1
      // initial={{ opacity: 0,  }}
      // animate={{ opacity: 1,  }}  
      // transition={{ duration: 1, delay: 0.2 }}
       className='font-bold text-4xl sm:text-5xl lg:text-6xl'>
            Hey, I'm{' '}  <span 
            className='bg-gradient-to-r from-[#915eff] to-pink-500 bg-clip-text text-transparent'>
              Aryan Gupta
        </span>
          </motion.h1>

       <AnimatePresence mode='wait'>
            <motion.h2
              key={index}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className='mt-3 font-bold text-2xl sm:text-3xl
               md:text-4xl h-16 flex items-center justify-center'  >

              {role[index].title}
            </motion.h2>

          </AnimatePresence>

          <p className='mt-12 text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed'>
            A Full Stack Developer building real-time web applications with the MERN stack.
               Passionate about 
             solving
            problems through code and 
            I have
            worked as a   &nbsp; 
            <div className="relative inline-block">
                backend 
             
             <motion.span
               className="absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 w-full"
               style={{ originX: 0 }}
               initial={{ scaleX: 0 }}
               animate={{ scaleX: 1 }}
               transition={{
                 duration: 1.2,
                 ease: "easeInOut",
                //  repeat: Infinity,
                //  repeatType: "yoyo",
                //  repeatDelay: 0.5,
               }}
             /> 
            </div>

       &nbsp; intern in OddlyAI

         </p>
      </div>
      <SocialLinks />
    </div>
    </section>
  );
}

export default About
