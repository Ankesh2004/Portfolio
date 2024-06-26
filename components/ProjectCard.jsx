import Image from "next/image"
import styles from '../styles/ProjectCard.module.css'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

const ProjectCard = ({ project, left }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    const controls = useAnimation();
    const leftCardVariant = {
        hidden: {
            opacity: 0,
            x: -100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 2,
                type: "spring",
                stiffness: 80,
                damping: 10,
            }
        }
    }
    const rightCardVariant = {
        hidden: {
            opacity: 0,
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 2,
                type: "spring",
                stiffness: 80,
                damping: 10,
            }
        }
    }
    useEffect(() => {
        if (inView) {
            console.log(`Project Card ${project.id} is in view`);
            controls.start("visible");
        }
    }, [inView, controls,project.id])
    return (
        <motion.div ref={ref} className={`flex flex-wrap group  ${styles['card']} justify-around ${left ? 'ml-auto' : 'mr-auto'} p-[1rem] bg-[#111a] gap-[1rem]`}
            initial="hidden"
            animate={controls}
            variants={left ? leftCardVariant : rightCardVariant}
            whileHover={{ scale: 1.1 }}>
            <div className="relative">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={400}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex flex-col items-center justify-center transition-all duration-300">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-4xl"><a href={project.liveLink}>Live Link</a></span>
                    <span className="opacity-0 group-hover:opacity-100 text-white text-4xl"><a href={project.sourceCode}>Source Code</a></span>
                </div>
            </div>
            <div className="flex flex-col gap-[0.75rem]">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <div className="flex flex-wrap justify-center gap-[0.2rem]">
                    {project.techstack.map((tech,index) => (
                        <span key={index} className="p-[0.3rem] text-black bg-cyan-400 rounded-2xl">{tech}</span>
                    ))}
                </div>
                <div className="flex flex-wrap gap-[1rem] justify-center items-center">
                <a href={project.sourceCode}>Source Code</a>
                <a href={project.liveLink}>Live Link</a>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard