"use client" ;
import React from 'react'
import { useSectionInView } from '@/lib/hooks';
import {motion} from 'framer-motion' ;
import NitLogo from "@/public/Nit_logo.jpg";
import Image from 'next/image' ;

export default function Education() {
    const {ref} = useSectionInView("About") ;
  return (
    <motion.section
  ref={ref}
  id="education"
  className="scroll-mt-28 mb-28 sm:mb-20 max-w-[53rem] text-left"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  <h3 className="font-sora text-center uppercase tracking-[2px] text-sm font-semibold text-gray-500 dark:text-gray-400 mb-10 underline">
    Education
  </h3>

  <div className="flex flex-col gap-10 font-inter">
    {/* NIT Srinagar */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex flex-col gap-2">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
          National Institute of Technology, Srinagar
        </h4>
        <p className="text-sm text-gray-700 dark:text-white/80">
          B.Tech in Computer Science and Engineering
        </p>
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 font-grotesk mt-1">
          <span>CGPA: 8.13 / 10</span>
          <span>2020 – 2024</span>
        </div>
      </div>

      <div className="shrink-0">
        <Image
          src={NitLogo}
          alt="NIT Srinagar Logo"
          className="w-16 h-16 object-contain rounded-full"
        />
      </div>
    </div>
  </div>
</motion.section>
  )
}
