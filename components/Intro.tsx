"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Intro() {
  const {ref} = useSectionInView("Home", 0.5);  
  const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();   
  const [typeEffect] = useTypewriter({
    words : ["Code", "Create", "Inspire"],
    loop:true,
    typeSpeed:100,
    deleteSpeed:40
}) ;

  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'> 
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzeJQ1JS7o0-z7cCgDyMdnK6ukzhnCE0QW2A&s' alt='my-portait'
              width={192} height={192} quality={95} priority={true}
              className='h-24 w-24 rounded-full border-[0.35rem] border-white  object-cover shadow-xl ' />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.4,
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >👋</motion.span>
        </div>
      </div>
      <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}
      >
        {/* <ul className='flex text-sm justify-center items-center my-2 hover:translate-x-1 dark:text-white/80 '>
          <li>&lt; Code.</li>
          <li>Create.</li>
          <li>Inspire /&gt;.</li>
        </ul> */}
        {/* <div>

        <h2><span>{typeEffect}</span></h2>
        </div> */}
        <span className='font-bold'>Hello, I'm Niyati .</span>I'm a <span className='underline'>Full-stack developer</span> . I enjoy building sites.'
      </motion.h1>
      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Link href='#contact' className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 
                  rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                  onClick={()=>{
                    setActiveSection("Contact") ; 
                    setTimeOfLastClick(Date.now());
                  }}>
                  Contact me here <BsArrowRight className = 'group-hover:translate-x-1 transition opacity-70' />
        </Link>
        <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 cursor-pointer active:scale-105 transition borderBlack dark:bg-white/10' 
        href='/CV.pdf' download>Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition ' /></a>
        <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full
        focus:scale-[1.15] hover:scale-[1.15] cursor-pointer active:scale-105 transition borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/60'
        href='https://www.linkedin.com/in/niyati20/' target='_blank'><BsLinkedin /></a>
        <a className='bg-white text-gray-700 p-4 text-[1.35rem] flex items-center gap-2 rounded-full hover:text-gray-950 focus:scale-[1.15] hover:scale-[1.15] cursor-pointer active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60'
        href='https://github.com/nickoo20' target='_blank'><FaGithubSquare /></a>
      </motion.div>
    </section>
  )
}
