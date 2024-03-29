import eduverse from "../public/projects/eduverse.png";
import cipherforge from "../public/projects/cipherforge.png";
import weatherhq from "../public/projects/weatherhq.png";
import chatsphere from "../public/projects/chatsphere.png";

export const projects = [
    {
        id: 1,
        title: "Eduverse",
        description: "An E-learning platform for students and teachers to connect and learn together.",
        image: eduverse,
        techstack: ["ReactJS", "Tailwindcss","MongoDB","ExpressJS","NodeJS","Razorpay"],
        sourceCode: "www.github.com/Ankesh2004/Eduverse",
        liveLink: "https://eduverse-jet.vercel.app/"
    },
    {
        id: 2,
        title: "Chatsphere",
        description: "Online chatroom for people to connect and chat with each other.",
        image: chatsphere,
        techstack: ["ReactJS", "Tailwindcss","Firebase"],
        sourceCode: "https://github.com/Ankesh2004/chatSphere",
        liveLink: "https://chat-sphere-red.vercel.app/"
    },
    {
        id: 3,
        title: "WeatherHQ",
        description: "This is a project",
        image: weatherhq,
        techstack: ["Vanilla JS", "Tailwindcss","OpenWeatherAPI"],
        sourceCode: "www.github.com/Ankesh2004",
        liveLink: "https://weatherhq.netlify.app/"
    },
    {
        id: 4,
        title: "CipherForge",
        description: "A simple password genrator and strength checker.",
        image: cipherforge,
        techstack: ["Vanilla JS", "Tailwindcss","Netlify"],
        sourceCode: "www.github.com/Ankesh2004",
        liveLink: "https://cipherforge.netlify.app/"
    }
]