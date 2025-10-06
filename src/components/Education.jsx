import React from 'react'
import { motion } from 'framer-motion'
import maitlogo from '../assets/mait.png'
import hackathon from '../assets/hackathon.jpg'
import certificate from '../assets/certificate.jpg'
import oddlyai from '../assets/oddlyai2.png'
import sync from '../assets/sync.png'

function Education() {
  return (
    <section id='experience' className='py-20 sm:py-24 scroll-mt-28'>
      <div className='max-w-7xl mx-auto px-6 sm:px-16'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, type: "spring", delay: 0.2 }}    className='text-center mb-12'>
          <h2 className='font-bold text-slate-200 md:text-[40px] sm:text-[40px] xs:text-[40px] text-[30px]'>
            Education & Experience   </h2>

          <p className='mt-3 text-secondary text-[17px]
           max-w-3xl mx-auto leading-[30px]'>
            My academic journey and key experiences that have shaped my development career.  </p>
        </motion.div>

        <div className='mt-16 flex flex-col gap-16'>
          
          <div>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              className='text-3xl font-semibold text-center mb-8 text-slate-100'>
                Education
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className='bg-neutral-90 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto
               flex flex-col sm:flex-row items-center gap-8 border border-white/10' >

              <img src={maitlogo} alt="MAIT College Logo" className='w-24 h-24 object-contain bg-white p-2 rounded-full flex-shrink-0' />
              <div>
                <h4 className='text-2xl font-bold text-white'>
                    Maharaja Agrasen Institute of Technology</h4>

                <p className='text-purple-400 font-medium mt-1'>
                    B.Tech in Computer Science & Engineering</p>

                <p className='text-slate-400 text-sm mt-1'>2023 - 2027</p>
                <p className='text-slate-300 mt-3'>
                  Focused on core computer science fundamentals including Data Structures, Algorithms, and Web Development.
                </p>
              </div>  </motion.div>
          </div>

          
          <div>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              className='text-3xl font-semibold text-center mb-8 text-slate-100'>
                Experience
            </motion.h3>
                      <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className='bg-neutral-90 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto 
              flex flex-col sm:flex-row items-center gap-8 border border-white/10 mb-8' >
            
              <img src={sync} alt="Sync and Explore Logo"
               className='w-24 h-24 object-contain bg-white p-2 rounded-full flex-shrink-0' />
              <div>
                <h4 className='text-xl font-bold text-white'>
                    Sync and Explore</h4>

                <p className='text-purple-400 font-medium mt-1'>Full Stack Intern</p>

                <p className='text-slate-400 text-sm mt-1'>
                     2025 October - Present</p>
                <p className='text-slate-300 mt-3'>
                 Working as a Full Stack Developer
                </p>
              </div>
            </motion.div>
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className='bg-neutral-90 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto 
              flex flex-col sm:flex-row items-center gap-8 border border-white/10 mb-8' >
            
              <img src={oddlyai} alt="OddlyAI Logo"
               className='w-24 h-24 object-contain bg-white p-2 rounded-full flex-shrink-0' />
              <div>
                <h4 className='text-xl font-bold text-white'>
                    OddlyAI</h4>

                <p className='text-purple-400 font-medium mt-1'>Full Stack Intern</p>

                <p className='text-slate-400 text-sm mt-1'>
                      July - September 2025</p>
                <p className='text-slate-300 mt-3'>
                 Developed clean frontend designs and worked on backend data handling.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }
            }
      viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, 
                delay: 0.1 }}
              className='bg-neutral-90 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto 
              flex flex-col sm:flex-row items-center gap-8 border border-white/10' >
            
              <img src={hackathon} alt="Level SuperMind Logo"
               className='w-24 h-24 object-contain bg-white p-2 rounded-full flex-shrink-0' />
              <div>
                <h4 className='text-2xl font-bold text-white'>
                    Level SuperMind - AI Hackathon</h4>

                <p className='text-purple-400 font-medium mt-1'>Hackathon Finalist</p>

                <p className='text-slate-400 text-sm mt-1'>
                    January 2025</p>
                <p className='text-slate-300 mt-3'>
                  Developed an innovative AI-powered application securing a position as a finalist among numerous teams.  </p>
               
                <a
                  href={certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='mt-4 inline-block  text-white font-bold py-2 px-5 rounded-lg 
                  transition-all duration-300 shadow-md hover:shadow-lg'  >
                    
                  View Certificate
                </a> </div>
            </motion.div>
          </div>  </div>
      </div>

    </section>
   
  )
}

export default Education
