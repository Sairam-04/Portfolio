import ReactLogo from "../assets/react.svg";
import ExpressLogo from "../assets/express.svg";
import GithubLogo from "../assets/Github.svg";
import MongoDbLogo from "../assets/icon-mongodb.svg";
import NodejsLogo from "../assets/icon-nodejs.svg";
import PostgreSQL from "../assets/icon-postgresql.svg";
import SassLogo from "../assets/icon-sass.svg";
import JSLogo from "../assets/JavaScript.svg";
import NextjsLogo from "../assets/Nextjs.svg";
import PythonLogo from "../assets/Python.svg";
import TailwindLogo from "../assets/TailwindCSS.svg";
import VercelLogo from "../assets/Vercel.svg";
import Git from "../assets/icon-git.svg";

import taskbuddyLogo from "../assets/taskbuddylogo.svg";
import connectverseLogo from "../assets/connectverselogo.svg";
import taskbuddy from "../assets/taskbuddy.svg";
import storevillaLogo from "../assets/storevilla-logo.svg"
import connectverse from "../assets/connectverse.svg";
import g3nLogo from "../assets/g3nlogo.png";
import g3n from "../assets/g3nai.svg";
import storevilla from "../assets/storevilla.svg";

export const skillsJson = [
  {
    icon: ReactLogo,
    title: "React.js",
    tag: "Library",
  },
  {
    icon: JSLogo,
    title: "JavaScript",
    tag: "Language",
  },
  {
    icon: NodejsLogo,
    title: "Node.js",
    tag: "Environment",
  },
  {
    icon: ExpressLogo,
    title: "Express.js",
    tag: "Framework",
  },
  {
    icon: TailwindLogo,
    title: "TailwindCSS",
    tag: "CSS",
  },
  {
    icon: MongoDbLogo,
    title: "MongoDB",
    tag: "NoSQL DB",
  },
  {
    icon: PostgreSQL,
    title: "PostgreSQL",
    tag: "SQL DB",
  },
  {
    icon: SassLogo,
    title: "Sass/Scss",
    tag: "Library",
  },
  {
    icon: Git,
    title: "Git",
    tag: "Version Control",
  },
  {
    icon: NextjsLogo,
    title: "Next.js",
    tag: "Framework",
  },
  {
    icon: VercelLogo,
    title: "Vercel",
    tag: "Deployment",
  },
  {
    icon: PythonLogo,
    title: "Python",
    tag: "Language",
  },
];

export const projectsJson = [
  {
    logo: storevillaLogo,
    title: "StoreVilla",
    desc: `StoreVilla is a streamlined e-commerce platform built using Next.js, React, and TailwindCSS. It offers dynamic product listings, efficient pagination, and user-friendly cart management, complete with discount calculations and localized currency formatting, ensuring a seamless and engaging shopping experience.`,
    github_url: "https://github.com/Sairam-04/E-Commerce",
    live_url: "https://storevilla.vercel.app/",
    image: storevilla,
  },
  {
    logo: connectverseLogo,
    title: "Connect Verse",
    desc: `ConnectVerse is an innovative web application designed to simplify the way users manage and share their social media profiles. By aggregating all social media handles in one place, ConnectVerse provides a centralized platform for users to generate a public URL for easy sharing, enhancing their online presence and connectivity.`,
    github_url: "https://github.com/Sairam-04/Linktre",
    live_url: "https://connectverse-five.vercel.app/",
    image: connectverse,
  },
  {
    logo: taskbuddyLogo,
    title: "Task Buddy",
    desc: `Task Buddy is a robust task management application developed using
            the MERN (MongoDB, Express.js, React.js, Node.js) stack, designed to
            enhance productivity and organization. This application provides
            users with an intuitive platform to manage their tasks effectively,
            ensuring a seamless and efficient workflow.`,
    github_url: "https://github.com/Sairam-04/Todo-MERN-Stack",
    live_url: "https://task-management-mern-stack.vercel.app/",
    image: taskbuddy,
  },
  {
    logo: g3nLogo,
    title: "G3n.ai",
    desc: `G3n.ai is an innovative platform designed to harness the power of artificial intelligence to create unique and creative solutions in the realms of text-to-image, music generation, and speech synthesis. This project aims to push the boundaries of AI capabilities, offering users a suite of tools to generate visual, musical, and auditory content from textual input.`,
    github_url: "https://github.com/m-techy/G3n.ai",
    live_url: "https://g3n-ai.vercel.app/",
    image: g3n,
  },
];
