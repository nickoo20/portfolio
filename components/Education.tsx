"use client" ;
import React from 'react'
import { useSectionInView } from '@/lib/hooks';
import {motion} from 'framer-motion' ;

export default function Education() {
    const {ref} = useSectionInView("About") ;
  return (
    <motion.section ref={ref} id='education' className='scroll-mt-28 mb-28 sm:mb-40 text-center max-w-[53rem]'
    initial={{opacity:0}} animate={{opacity:1}}>
        <h3 className='uppercase tracking-[2px] mb-8 underline'>Education</h3>
        <div className='flex items-start justify-center gap-4 leading-normal'>
        <div className='relative bg-gray-200 h-[10rem] w-1 rounded-full hidden sm:block dark:bg-opacity-20'>
        </div>
        <div className='flex flex-col gap-10 items-start'>
        <div>
            <h4 className=''>National Institute Of Technology, Srinagar</h4>
            <div className='flex justify-between items-center'>
            <p className='text-xs text-gray-500'>CGPA: 8/10</p>
            <p className='text-xs text-gray-500'>2020-2024</p>
            </div>
        </div>
        {/* <div className='relative -ml-5 bg-gray-200 h-[4rem] w-1 rounded-full hidden sm:block dark:bg-opacity-20'> */}
        {/* </div> */}
        <div className='w-full'>
            <h4 className=''>Class 12th</h4>
            <div className='flex justify-between items-center'>
            <p className='text-xs text-gray-500 uppercase'>Percentage: 94%</p>
            <p className='text-xs text-gray-500'>2019-2020</p>
            </div>
        </div>
        </div>
        </div>    
    </motion.section>
  )
}
