import { FaDownload } from "react-icons/fa";
import {motion} from "framer-motion";
const ResumeBubble = () => {
    const resumeVariant = {
    hidden: {
      opacity: 0,
      x: 100,
      y: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 5,
        type: "spring",
        stiffness: 80,
        damping: 10,
      },
    },
    }

  return (
    <motion.div className="flex cursor-pointer items-center gap-[0.5rem] rounded-full p-[0.8rem] bg-white text-black"
    initial="hidden"
    animate="visible"
    variants={resumeVariant}
    whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px white" }}
    >
        <FaDownload size={"1.5rem"}/>
        <p>My Resume</p>
    </motion.div>
  )
}

export default ResumeBubble