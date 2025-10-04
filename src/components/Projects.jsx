import React from 'react'
import { motion } from 'framer-motion';
import codebattle from '../assets/codebattle.png';
import mindspark from '../assets/mindspark.png';
import chathub from '../assets/chathub (2).png';
import chatbot from '../assets/chathub.png';
import xera from '../assets/xera4.png';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const projectsData = [
    {
      title: 'CodeBattle',
      description: 'A real-time competitive programming platform where users can solve challenges and compete head-to-head. Features a collaborative code editor and live chat.',
      image: codebattle,
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO','Framer-motion'],
      github: 'https://github.com/aryan10092/Codebattle',
      live: 'https://codebattle-1.onrender.com/',  },
     {
      title: 'Xera',
      description:'A social media app where user can connect with others and share their thoughts and ideas and can search and post based on different categories.',
      image:xera,
      tech: ['Expo', 'Supabase', 'Nativewind', 'Lottie', 'Tanstack'],
      github: 'https://github.com/aryan10092/Xera',
      live: 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/bc05aaf6d9b45d4867c66254575aa2ee1b250010_0825.mp4',
    },
    {
      title: 'MindSpark',

      description: 'An innovative AI-powered brainstorming and mind-mapping application. It helps users generate, organize, and visualize ideas seamlessly with generative AI.',
      image: mindspark,
      tech: ['Next.js', 'Clerk', 'Tailwind CSS', 'OpenAI API', 'Shadcn','Drizzle ORM'],
      github: 'https://github.com/aryan10092/MindSpark',
      live: 'https://mindspark-36uh.onrender.com/',
    },{
      title: 'Attendify',
      description: 'A cross-platform mobile app built with Expo that provides student and teacher features such as class lists, attendance management, and an AI assistant chatbot.',
      image: chathub,
      tech: ['Expo','Supabase','Nativewind', 'Typescript', 'Bluetooth-BLE','Lottie'],
      github: 'https://github.com/aryan10092/Attendify',
      live: 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/8eab0a883f86e3ff4a4f3d693c1ef19701c2b9cf_1004.mp4',
      
    },{

     title: 'TaskFlow',
      description: 'A full-stack Trello clone with real-time collaboration, drag-and-drop functionality, and advanced conflict resolution. Built with React, Node.js, Express, and MongoDB.',
      image: chathub,
      tech: ['React','Node.js','MongoDB', 'Socket.IO', 'React Beautiful DnD'],
      github: 'https://github.com/aryan10092/Trello-clone',
      live: 'https://trello-clone-one-mu.vercel.app/',
    } ,   {
      title: 'ChatGpt',
      description: 'A conversational AI application powered by OpenAI\'s GPT-3 model. It can engage in natural language conversations, answer questions, and provide information on a wide range of topics.',
      image: chatbot,
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Lucide'],
      github: 'https://github.com/aryan10092/chathub',
      live: 'https://chathub-3.onrender.com/',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
     },
    }, };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6,
         ease: 'easeOut' } },
  };

  return (
    <div
      id='projects'
      className='w-full min-h-screen  
       text-gray-100 py-24 px-4 sm:px-6 lg:px-8'>

      <div className='max-w-7xl mx-auto'>
        <motion.div
          className='text-center mb-20'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}  >

          <h2 className='text-4xl sm:text-5xl font-extrabold tracking-tight text drop-shadow-lg'>
            Featured Projects
          </h2>

          <p className='mt-4 max-w-2xl mx-auto text-lg text-gray-400'>
            A selection of&nbsp;  
               <div className="relative inline-block "> 
                         projects  
                                               
                         <motion.span
                           className="absolute  left-0 top-7 h-[2px] 
                            bg-gradient-to-r from-purple-500 to-pink-500 w-full "
                           style={{ originX: 0 }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                           transition={{
                          duration: 1.4,
                           ease: "easeInOut", }}   />
                                              </div>
             &nbsp;that showcase my skills and passion for development.   </p>
        </motion.div>

        <motion.div
          className='space-y-24'
          variants={containerVariants}
          initial="hidden"
          animate="visible" >

          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center  rounded-3xl shadow-2xl border border-gray-800`} >
              
              <div className={`absolute -inset-2 rounded-3xl pointer-events-none z-0 '}`}></div>
              
              <motion.div
              
                className={`relative z-10 rounded-2xl overflow-hidden shadow-xl border-2 border-gray-800 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}  >
                <a href={project.live} target='_blank' rel='noopener noreferrer'>
                  <motion.img
                  whileHover={{ scale: 1.05 }}
                    src={project.image}
                    alt={project.title}

                    className='object-cover w-full h-70 lg:h-full  transition-all duration-300' />
                </a>
              </motion.div>


              <div className={`relative z-10 flex flex-col justify-center px-4 py-8 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <motion.h3
                 className='text-2xl sm:text-3xl font-bold sm:mb-2  drop-shadow sm:px-3 px-3'
                 initial={{ opacity: 0, x: -10 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.5,delay:0.2} }
                 >
                  {project.title}
                </motion.h3>
                <div className='bg-gray-80 p-4 rounded-xl shadow-lg mb-6 px-3'>
                  <motion.p
                  initial={{ opacity: 0, x: -10 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.5, delay:0.2 } }
                   className='text-base text-gray-300'>
                    {project.description}</motion.p>
                </div>

                <div className='flex flex-wrap gap-2 mb-6 px-2'>
                  {project.tech.map((tech, i) => (
                    <motion.span
                    whileHover={{ }}
                    transition={{ duration: 0.2 }}
                      key={i}
                      className=' text-indigo-200 px-3  py-1 rounded-full text-xs font-semibold border border-indigo-700 shadow'   >
                     <motion.div
                      whileHover={{ scale: 1.2 }}
                     transition={{
                      type: "spring",
                      stiffness: 400,
                     damping: 10, }}
                     > 
                      {tech}</motion.div>    </motion.span>
                  ))}
                </div>

                <div className='flex items-center space-x-3 px-2'>
                  <motion.a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-3 py-1  rounded-lg  transition-colors 
                    duration-300 font-semibold border border-gray-700 shadow'
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }} >
                    <FaGithub size={17} />

                    <span>Code</span>
                  </motion.a>

                  <motion.a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-3 py-1 bg-indig text-white rounded-lg  transition-colors duration-300 font-semibold border border-gray-700 shadow'
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}  >

                    <FaExternalLinkAlt size={15} />
                    <span>Demo</span>
                  </motion.a>

                </div>  </div>
            </motion.div>
          ))}  </motion.div>

   </div>
    </div>
  );
}

export default Projects
