import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import SearchXImg from '../public/SearchXImg.jpg' ;
import ShopSavvyImg from '../public/ShopSavvyImg.jpg';
import NestNexusImg from '../public/NestNexusImg.jpg' ;
import NikeImg from '../public/NikeImg.jpg' ;
import MessPortalImg from '../public/MessPortal.png' ;
import TwitterImg from '../public/TwitterImg.png' ;

export const links= [
    {
        name:"Home",
        hash:"#home"
    },
    {
        name: "About",
        hash:"#about",
    },
    {
        name:"Projects",
        hash:"#projects",
    },
    {
        name:"Skills",
        hash:"#skills",
    },
    {
        name:"Experience",
        hash:"#experience",
    },
    {
        name:"Contact",
        hash:"#contact"
    }
] as const ;

export const educationData=[
    {
        name : "National Institute of Technology, Srinagar",
        duration: "2020-2024",
    }
] as const ;
export const experiencesData =[
    {
        title: "FrontEnd Developer Intern",
        location: "Remote",
        description: "Worked in a team of 2  and implemented user interfaces, utilizing dynamic routing to enhance user navigation.  ",
        icon: React.createElement(CgWorkAlt),
        date:"Dec'22 to Feb'23" 
    },
] as const ;
export const projectsData = [
    {
        title: "MessPortal - NIT SRINAGAR",
        description: "Developed a dynamic mess management system with React.js and Node.js, enhancing communication, transparency, and efficiency with interactive features and secure authentication.",
        tags:["React.js", "Node.js", "MongoDb", "TailwindCSS", "Redux Toolkit"],
        imageUrl: MessPortalImg,
        link:'https://github.com/nickoo20/messPortal',
    },
    {
        title: 'Tweeter',
        description:'Developed "X", a Twitter-inspired app with React, Node.js, JWT authentication, and Cloudinary integration, boosting security, performance, and user engagement.',
        tags: ['MERN Stack Development'],
        imageUrl: TwitterImg,
        link:'https://github.com/nickoo20/Twitter-prog',
    },
    {
        title: "NestNexus",
        description : "Boosted security with JWT, Firebase, Google OAuth; optimized data management with CRUD operations, image uploads; enhanced UX with advanced search and filters..",
        tags:["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind"],
        imageUrl: NestNexusImg,
        link:'https://github.com/nickoo20/mern-estate'
    },
    {
        title: "Search-X",
        description : "Crafted a dynamic web application mirroring the intuitive design and functionality of Google search. Integrated seamlessly with the Google Custom Search API, enabling users to explore both text and image-based queries.",
        tags:["React", "Tailwind"],
        imageUrl: SearchXImg,
        link:'http://searchxx.netlify.app/'
    },
    {
        title: "ShopSavvy",
        description : "Crafted a dynamic web application mirroring the intuitive design and functionality of Google search. Integrated seamlessly with the Google Custom Search API, ",
        tags:["React", "Tailwind"],
        imageUrl: ShopSavvyImg,
        link:'https://shopsavvy20.netlify.app'
    },
    // {
    //     title: "Search-X",
    //     description : "Crafted a dynamic web application mirroring the intuitive design and functionality of Google search.",
    //     tags:["React", "Tailwind"],
    //     imageUrl: NikeImg,
    // },
]as const ;

export const skillsData=[
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Redux",
    "Python",
    "TypeScript",
    "FastAPI",
    "Framer Motion",
    "Git",
] as const ;

