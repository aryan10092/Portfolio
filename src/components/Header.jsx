import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import mylogo from "../assets/mylogo.svg"
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"
import { AnimatePresence, motion } from "motion/react"
function Header() {
    const Links = [
      {
        id: "",
        title: "Home",
      },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Education ",
  },
];

const [active, setActive] = useState("");
const [toggle, setToggle] = useState(false);

 console.log(active);
 console.log(toggle);

  return (
    <div className='sm:px-16 px-16 w-full flex items-center py-5 
    fixed top-0 z-20'> 
     <div className='w-full flex justify-between items-center'> 
      <motion.div
       initial={{opacity:0,x:-40}}
          animate={{opacity:1,x:0}}
          transition={{
            duration:1,type:"spring", stiffness:100,damping:25,delay:0.2}}
          >
         <Link
          to='/'
         
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={mylogo} alt='logo' className='w-9 h-9 object-contain' />
          <p className=' text-[18px] font-bold cursor-pointer flex '>
            Aryan &nbsp;
            
          </p>
 </Link>  </motion.div>

  <ul className='list-none hidden sm:flex  gap-10'>
          {Links.map((link,index) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <motion.a
              initial={{opacity:0,y:-20}}
              animate={{opacity:1,y:0}} 
              transition={{
                type:"spring", stiffness:100,
                damping:20,
                delay:0.7+0.2*index}}

               href={`#${link.id}`}>{link.title}</motion.a>
            </li>
          ))}
        </ul>
      

         <div className='sm:hidden flex flex-1 justify-end items-center z-50'>
          <motion.img
            initial={{opacity:0,scale:0.}}
            animate={{opacity:1,scale:1}}
            transition={{delay:0.2,duration:0.8}}
            whileTap={{ scale: 0.7}}
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)
           
            }
          />

       <AnimatePresence>
        {toggle && (
          <motion.div
             initial={{ opacity: 0, height: 0 }}
             animate={{ opacity: 1, height: 'auto' }}
             exit={{ opacity: 0, height: 0 }}
             transition={{ duration: 0.3 }}

            className={`
              
             p-6 black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl border-t-2 border-purple-500`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>

              {Links.map((nav,index) => (
                <motion.li
                 initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 0.1 * index,
              type: 'spring',
              stiffness: 100,
              damping: 20,
            }}
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    
                    setActive(nav.title);
                    

                    const target = document.getElementById(nav.id);
                    if (target) {
                      const headerOffset = 120; // adjust based on your header height
                      const y = target.getBoundingClientRect().top + window.scrollY - headerOffset;
                  
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }

                    setTimeout(() => {
                      setToggle(false);
                    }, 1000);
                  }}
                >
                  <motion.a 
                  
                  
                  href={`#${nav.id}`}>{nav.title}</motion.a>

{/* <span>{nav.title}</span> */}
                </motion.li>
              ))}
            </ul>
          </motion.div>
 )}
 </AnimatePresence>
        </div>

     </div>
         

        
    </div>

  
  )
}

export default Header