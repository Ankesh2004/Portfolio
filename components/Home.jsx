"use client";
import Image from "next/image";
import profilePic from "../public/profile-pic.jpg"
import { motion } from "framer-motion";
import AnimatedText from "../utils/AnimateText";
import ResumeBubble from "./ResumeBubble";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ContactMeBtn from "./ContactMeBtn";


const imageVariants = {
  hidden: {
    opacity: 0,
    x: -100,
    y: -100,

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
};

const Home = () => {
  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      console.log('Home is in view');
    }
  }, [inView]);
  return (
    <div ref={ref} id="home" className={`flex flex-wrap items-center p-[4rem] justify-center bg-[#111a] mt-[4rem] rounded-lg w-[90%] gap-[6rem]`}>
      {/* Profile Picture and CV  */}
      <motion.div className="z-10 flex items-center rounded-full"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        whileHover={{ scale: 1.2, boxShadow: "0px 0px 10px white" }}>
        <Image
          src={profilePic}
          alt="Profile Picture"
          width={250}
          height={250}
          className="rounded-full"
        />
      </motion.div>
      {/* Intro  */}
      <div className="z-10 flex flex-col items-center justify-center">
        <AnimatedText word="Hello I am," size={"2rem"} inView={inView} />
        <AnimatedText word="ANKESH GUPTA" size={"4rem"} inView={inView}/>
        <AnimatedText word="A" size={"1.5rem"} inView={inView}/>
        <AnimatedText word="Sophomore at IIIT Gwalior" inView={inView}/>
        <AnimatedText word="Full Stack Developer" inView={inView}/>
        <AnimatedText word="Competitive Programmer" inView={inView}/>
      </div>
      
      <div className="flex flex-wrap gap-[2rem] items-center justify-center">
        <ResumeBubble />
        <ContactMeBtn />
      </div>
      
    </div>
  )
}

export default Home;