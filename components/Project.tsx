"use client";

import Image from 'next/image';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import { motion } from 'framer-motion';
import Link from 'next/link';

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
};

export default function Project({ title, description, tags, imageUrl, link }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className='group mb-3 sm:mb-8 last:mb-0'
        >
            <section className='bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] rounded-lg sm:group-even:pl-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'>
                {link ? (
                    <Link href={link} target='_blank'>
                        <div className='flex flex-col pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] h-full sm:group-even:ml-[18rem]'>
                            <h3 className='text-2xl font-semibold'>{title}</h3>
                            <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
                            <ul className='flex flex-wrap gap-2 mt-4 sm:mt-auto'>
                                {tags.map((tag, index) => (
                                    <li
                                        key={index}
                                        className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'
                                    >
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Image
                            src={imageUrl}
                            alt={`Project I worked on`}
                            quality={90}
                            className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition 
                                group-hover:scale-[1.04]  
                                group-hover:-translate-x-3
                                group-hover:-translate-y-3
                                group-hover:-rotate-2
                                group-even:group-hover:translate-x-3
                                group-even:group-hover:translate-y-3
                                group-even:group-hover:rotate-2
                                group-even:right-[initial]
                                group-even:-left-40'
                        />
                    </Link>
                ) : (
                    <div className='flex flex-col pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] h-full sm:group-even:ml-[18rem]'>
                        <h3 className='text-2xl font-semibold'>{title}</h3>
                        <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
                        <ul className='flex flex-wrap gap-2 mt-4 sm:mt-auto'>
                            {tags.map((tag, index) => (
                                <li
                                    key={index}
                                    className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                        <Image
                            src={imageUrl}
                            alt={`Project I worked on`}
                            quality={90}
                            className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition 
                                group-hover:scale-[1.04]  
                                group-hover:-translate-x-3
                                group-hover:-translate-y-3
                                group-hover:-rotate-2
                                group-even:group-hover:translate-x-3
                                group-even:group-hover:translate-y-3
                                group-even:group-hover:rotate-2
                                group-even:right-[initial]
                                group-even:-left-40'
                        />
                    </div>
                )}
            </section>
        </motion.div>
    );
}