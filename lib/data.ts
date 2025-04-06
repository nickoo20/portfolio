import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import SearchXImg from '../public/SearchXImg.jpg' ;
import ShopSavvyImg from '../public/ShopSavvyImg.jpg';
import NestNexusImg from '../public/NestNexusImg.jpg' ;
import NikeImg from '../public/NikeImg.jpg' ;
import MessPortalImg from '../public/MessPortal.png' ;
import TwitterImg from '../public/TwitterImg.png' ;
import { StaticImageData } from "next/image";



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

export const experiencesData = [
    {
        title: "CaaStle",
        designation: "Software Engineer - Data",
        location: "Bengaluru, India",
        description: [
          "Designed and developed a scalable ETL pipeline using Java and Apache Spark to process large-scale financial datasets and integrate real-time interest rate APIs.",
          "Improved data reliability by 40% through robust unit and integration testing using JUnit and Mockito, resolving inconsistencies in upstream API responses.",
        ],
        icon: React.createElement(CgWorkAlt),
        date: "Mar'25 to Present",
    },
    {
      title: "UrbanMatch Tech Pvt Ltd",
      designation: "Software Developer - Backend",
      location: "Remote",
      description: [
        "Built and maintained core RESTful APIs supporting 10K+ users on a matchmaking platform.",
        "Reduced query execution latency by 55% by optimizing high-load database queries.",
        "Implemented a personalized recommendation engine, increasing matches by 20%.",
        "Managed AWS EC2 deployments, ensuring smooth and reliable production releases.",
      ],
      icon: React.createElement(CgWorkAlt),
      date: "Aug'24 to Feb'25",
    },
    {
        title: "Indian Institute Of Technology, Patna",
        designation: "Fullstack Developer Intern",
        location: "Remote",
        description: [
          "Revamped frontend using React.js with dynamic routing and reusable components, boosting navigation speed by 30%.",
          "Developed and integrated RESTful APIs using Node.js and Express.js, ensuring real-time data flow with MongoDB."
        ],
        icon: React.createElement(CgWorkAlt),
        date: "Dec '22 – Feb '23"
      }
      
  ] as const;
  

  export const projectsData = [
    {
      title: "MessPortal - NIT SRINAGAR",
      description:[
        "Secure student portal with role-based auth & two-factor verification for 500+ users.\n",
        "Automated complaint & leave management (72 hrs ➝ 2 hrs resolution).\n",
        "Built billing system with 99% accuracy for 1,000+ accounts using RESTful APIs."],
      tags: ["React.js", "Node.js", "MongoDb", "TailwindCSS", "Redux Toolkit"] as string[],
      imageUrl: MessPortalImg as StaticImageData,
      link: "https://github.com/nickoo20/messPortal",
    },
    {
      title: "NestNexus",
      description:[
        "Property management platform with JWT, Firebase & Google OAuth for secure auth.\n" ,
        // "Boosted CRUD efficiency by 50% with optimized backend logic.\n" ,
        "Enhanced property discovery via advanced filters & search algorithms."],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind"] as string[],
      imageUrl: NestNexusImg as StaticImageData,
      link: "https://github.com/nickoo20/mern-estate",
    },
    {
      title: "Tweeter",
      description:[
        "Full-stack social platform inspired by Twitter (X) using MERN stack.\n",
        "Secured user sessions with JWT auth; optimized data fetching with React Query.\n",
        "Integrated Cloudinary for real-time image uploads & notifications."],
      tags: ["MERN Stack Development", "Cloudinary"] as string[],
      imageUrl: TwitterImg as StaticImageData,
      link: "https://github.com/nickoo20/Twitter-prog",
    },
    {
      title: "Search-X",
      description:[
        "Google-style search app with seamless text & image query experience.\n", 
        "Integrated Google Custom Search API with sleek UI and responsive design."],
      tags: ["React", "Tailwind", "Google API", "responsive design"] as string[],
      imageUrl: SearchXImg as StaticImageData,
      link: "http://searchxx.netlify.app/",
    },
    {
      title: "ShopSavvy",
      description:[
        "Product discovery platform with intuitive UI inspired by Google search.\n",
        "Integrated real-time search and filtering with a focus on user experience."],
      tags: ["React", "Tailwind", "JSON_API", "UI/UX"] as string[],
      imageUrl: ShopSavvyImg as StaticImageData,
      link: "https://shopsavvy20.netlify.app",
    },
  ] as const;
  

export const skillsData=[
    "HTML", "CSS", "JavaScript", "TypeScript", "React"," Next.js"," Node.js","Express.js"," Redux","Java", "Python", "DjangoRestFramework", "FastAPI", "MongoDB", "SQL", "AWS", "Docker", "CI/CD", "Git", "Machine Learning","Framer Motion"
] as const ;

