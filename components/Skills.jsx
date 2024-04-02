"use client";
import { skills } from "../data/skills";
import Skill from "./Skill";
import { useMediaQuery } from "react-responsive";
import AnimatedText from "../utils/AnimateText";
import { useInView } from "react-intersection-observer";;

const Skills = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const {ref,inView} = useInView({
    threshold: 0.5,
  });
  return (  
  <div ref={ref} id="skills" className="flex flex-col text-center items-center mb-[4rem] p-[1rem] w-[100%]">
    {/* <AnimatedText word={"Skills"} size={"3rem"} inView={inView}/> */}
    <h1>Skills</h1>
    <div className={`flex flex-wrap items-center justify-center ${isMobile?'':'w-[80%]'}`}>
      {skills.map((skill) => (
        <Skill key={skill.title} skill={skill} />
      ))}
    </div>
  </div>
  );
};

export default Skills;