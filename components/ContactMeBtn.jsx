import { FaPeopleArrows } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import {motion} from "framer-motion";
const ContactMeBtn = () => {

    const handleClick = () => {
        const element = document.getElementById("contact");
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    const contactVariant = {
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
        <motion.btn className="flex cursor-pointer text-white items-center gap-[0.5rem] rounded-full p-[0.8rem] bg-cyan-600"
        initial="hidden"
        animate="visible"
        variants={contactVariant}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px cyan" }}
        onClick={handleClick}
        >
            <FaPeopleArrows size={"1.5rem"}/>
            <p>Contact Me Here</p>
            <FaArrowRight size={"1.5rem"}/>
        </motion.btn>
      )
}

export default ContactMeBtn