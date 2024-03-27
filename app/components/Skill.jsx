"use client";
import { skills } from "../data/skills"
import Image from "next/image"
import { useAnimation, motion } from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

const Skill = ({ skill }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const controls = useAnimation();
    const {ref,inView}= useInView({
        threshold: 0.5,});

    const skillVariant = {
        hidden: {
            opacity: 0,
            y: 200,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                type: "spring",
                stiffness: 80,
                damping: 10,
            },
        },
    };
    useEffect(() => {
        controls.start("visible");
    },[controls,inView])
    return (
        <motion.div key={skill.title} ref={ref} className="z-10 group cursor-pointer flex flex-col items-center p-[0.5rem]"
            initial="hidden"
            animate={controls}
            variants={skillVariant}
            whileHover={{ scale: 1.1 }}
            >
            <div className={`bg-${skill.background} p-[0.2rem] rounded-xl`}>
            <Image src={skill.icon} alt={skill.title} width={`${isMobile ? '50':'75'}`} height={`${isMobile ? '50':'75'}`} background={skill.background} />
            </div>
            <div className="flex bg-blue-800 items-center rounded-xl p-[0.2rem] text-yellow-200 opacity-0 text-sm group-hover:opacity-100 transition-opacity duration-200">
                <p>{skill.title}</p>
            </div>
        </motion.div>
    )
}

export default Skill