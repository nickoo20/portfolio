"use client" ;
import React  from 'react'
import SectionHeading from './section-heading'
import {motion} from 'framer-motion' ;
import { useSectionInView } from '@/lib/hooks';

export default function About() {
   const {ref} = useSectionInView("About") ;
  return (
    <motion.section ref={ref} id='about' className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{opacity:0,y:100}} 
    animate={{opacity:1,y:0}} 
    transition={{delay:0.175}}>
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3'>
        I'm Niyati, a passionate Full-stack Developer with expertise in Python, Django, React, and cloud technologies. I thrive on creating scalable, high-performance applications that enhance user experience and engagement. With a strong foundation in software development, I aim to build innovative solutions and continuously improve my technical skills.
        </p>
        <p>In addition to coding, I like to <span className='font-medium'>dance, play sports</span>, and strike up discussions with new people.</p>
        
    </motion.section>
  )
}
