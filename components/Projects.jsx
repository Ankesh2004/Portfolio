import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"
import AnimatedText from "../utils/AnimateText"
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

const Projects = () => {
    const {ref,inView} = useInView({
        threshold: 0.5,
    });
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div ref={ref} id="projects" className={`flex flex-col items-center p-[2rem] text-center gap-[2rem] ${isMobile?'w-[100%]':'w-[90%]'}`}>
        <AnimatedText word={"Projects"} size={"4rem"} inView={inView}/>
        <div className="flex flex-col gap-[2rem]">
        {
            projects.map((project) => (
                <ProjectCard project={project} key={project.id} left={(project.id%2)===0}/>
            ))
        }
        </div>
    </div>
  )
}

export default Projects