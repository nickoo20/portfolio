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
        As a final-year <span className='font-medium'>Computer Science</span> student pursuing a <span className='font-medium italic underline'>B.Tech</span>, I'm currently looking for work as a software engineer or in full-stack development.  My favorite part of programming is solving problems, <span className='italic'>  which is why I love it so much. </span>  I take pleasure in solving issues . In addition to TypeScript and Next.js, my core stack consists of <span className='font-medium'> React, Node.js, and MongoDB</span>. I am presently <span className='italic'>looking for a full-time job as a software engineer</span>  because I am constantly excited to <span className='underline'>learn</span>  new technologies .
        </p>
        <p>In addition to coding, I like to <span className='font-medium'>dance, play sports</span>, and strike up discussions with new people.</p>
        
    </motion.section>
  )
}
