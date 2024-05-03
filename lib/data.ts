import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import SearchXImg from '../public/SearchXImg.jpg' ;
import ShopSavvyImg from '../public/ShopSavvyImg.jpg';
import NestNexusImg from '../public/NestNexusImg.jpg' ;
import NikeImg from '../public/NikeImg.jpg' ;

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
        title: "NestNexus",
        description : "Crafting secure pathways and delightful experiences, I've woven together advanced authentication systems using JWT, Firebase, and GoogleOAuth. In the realm of property management.!.",
        tags:["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind"],
        imageUrl: NestNexusImg,
    },
    {
        title: "Search-X",
        description : "Crafted a dynamic web application mirroring the intuitive design and functionality of Google search. Integrated seamlessly with the Google Custom Search API, enabling users to explore both text and image-based queries.",
        tags:["React", "Tailwind"],
        imageUrl: SearchXImg,
    },
    {
        title: "ShopSavvy",
        description : "Crafted a dynamic web application mirroring the intuitive design and functionality of Google search. Integrated seamlessly with the Google Custom Search API, ",
        tags:["React", "Tailwind"],
        imageUrl: ShopSavvyImg,
    },
    {
        title: "Search-X",
        description : "Crafted a dynamic web application mirroring the intuitive design and functionality of Google search.",
        tags:["React", "Tailwind"],
        imageUrl: NikeImg,
    },
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
