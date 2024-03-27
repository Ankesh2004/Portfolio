"use client";
import { skills } from "../data/skills";
import Skill from "./Skill";
import { useMediaQuery } from "react-responsive";
import AnimatedText from "./utils/AnimateText";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Skills = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const {ref,inView} = useInView({
    threshold: 0.5,
  });
  return (  
  <div ref={ref} id="skills" className="flex flex-col text-center items-center">
    <AnimatedText word={"Skills"} size={"3rem"} inView={inView}/>
    <div className={`flex flex-wrap items-center justify-center ${isMobile?'':'w-[80%]'}`}>
      {skills.map((skill) => (
        <Skill key={skill.title} skill={skill} />
      ))}
    </div>
  </div>
  );
};

export default Skills;