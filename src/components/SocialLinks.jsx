import React from 'react';
import { motion } from 'framer-motion';

import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdMailOutline } from 'react-icons/md';
import { SlSocialLinkedin } from 'react-icons/sl';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      icon: <SlSocialLinkedin size={24} />,
      href: 'https://www.linkedin.com/in/aryan-gupta-6a700a341/?trk=public-profile-join-page',
    },
    {
      id: 2,
   icon: <FiGithub size={24} />,
      href: 'https://github.com/aryan10092',
    },
    {
      id: 3,
      icon: <MdMailOutline size={24} />,
      href: 'mailto:aryan9090900@gmail.com',
    }, ];

  const iconVariants = {
    hover: {
      y: [0, -10, 0],
    transition: {
     duration: 1,
     repeat: Infinity,
      }, },
  };

  return (


<div className="flex items-center mt-12  sm:mt-20  gap-4 px-5 py-3 mx-auto w-fit rounded-full 
  border border-white/20 bg-black/35 backdrop-blur-3xl shadow-md hover:shadow-lg">

  {links.map(({ id, icon, href }) => (
    <motion.a
      key={id}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      className="w-10 h-10 flex items-center justify-center hover:shadow-lg rounded-full 
      bg-neutral-800   transition-colors duration-300 "
    >
      {icon}
    </motion.a>
  ))}

  {/* Green Status Dot */}
  <motion.span
  animate={{ scale: [1, 1.2, 1] }}
  transition={{
    duration: 1,
    repeat: Infinity,
    repeatType: 'loop',
    ease: 'easeInOut',
    }}
  className="w-3 h-3 rounded-full bg-green-500 ml-1"></motion.span >
</div>



  );
};

export default SocialLinks; 