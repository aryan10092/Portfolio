import React from 'react'

import { motion } from 'framer-motion';

function Skill() {
    const skills = [
      "React",
      "Node.js",
      "Next.js",
    "React Native",
      "JavaScript",
        "Golang",
      "MongoDB",
        "AWS",
        "Docker",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Express.js","Socket.io",
      "Drizzle ORM",
      "DSA",
      "Shadcn UI",
      "Java"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
     opacity: 1,
        transition: {
        staggerChildren: 0.1,
         delayChildren: 0.3,
     },  },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
         opacity: 1,
         transition: {
          type: 'spring',
         stiffness: 100,}
        },  };

  return (
    <section id='skills' className='py-24 sm:py-16 scroll-mt-32 md:scroll-mt-24'>
         <div className='max-w-7xl mx-auto px-6 sm:px-16'>
            <motion.div
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5, type: "spring",delay:0.2 }}
            className='text-center mb-16' >
                <h2 className='font-bold text-slate-200 md:text-[60px]
                 sm:text-[50px] xs:text-[40px] text-[30px]'>

                     
           My Skills  
             </h2>

                <p className='mt-3 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]'>
                    A collection of&nbsp;
                      <div className="relative inline-block">
                         technologies  
                                  
                        <motion.span
                         className="absolute left-0 bottom-0 h-[2px] 
                         bg-gradient-to-r from-purple-500 to-pink-500 w-full"
                          style={{ originX: 0 }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: 1.4,
                            ease: "easeInOut",
                            repeat:Infinity,
                          repeatType:"yoyo",
                        repeatDelay: 0.5,}} 
                            />
                                 </div>
                     &nbsp;and tools I am proficient with. I'm always 
                    eager to learn more and expand my skillset.
                </p>
            </motion.div>

          
            

            <motion.div
                className='flex flex-wrap justify-center gap-6'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
           
                viewport={{ once: true, amount: 0.2 }} >

                 {skills.map((skill) => (
                         
       

                    <motion.div
                        key={skill}
                        variants={itemVariants}
                        whileHover={{ 
                          scale: 1.08, 
                           boxShadow: '0px 0px 12px rgb(145,94,255, 0.6)',
                      borderColor: 'rgba(145, 94, 255, 0.8)'
                    }}
                        whileDrag={{
                          scale: 1.1,
                          boxShadow: '0px 0px 20px rgb(145,94,255, 0.9)',
                          cursor: 'grabbing'

                    }}
                         drag
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                dragElastic={0.2}

                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        className='py-3 px-5 bg-black-gradient rounded-lg border border-transparent cursor-pointer'  >
                        <p className='text-secondary group-hover:text-white transition-colors 
                        duration-200 text-[16px] font-medium text-center'>
                            {skill}
                        </p>
    
         </motion.div> 

              ))} 
              </motion.div>

  <motion.p
  className="text-center text-slate-500 font-medium text-xs mt-8"
  animate={{ y: [0, -4, 0] }}
  transition={{ repeat: Infinity, duration: 1.5 }}
>
  Dragging may lead to uncontrollable fun.
</motion.p>



    
        </div>

    </section>
  )
}

export default Skill
