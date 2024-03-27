"use client";
import { useInView } from 'react-intersection-observer';
import AnimatedText from './utils/AnimateText';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';

const About = () => {
  const paraVariant = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 80,
        damping: 10,
      },
    },
  };
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      console.log('About Me is in view');
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className='p-[6rem]' ref={ref} id='about'>
      <AnimatedText word="About Me" size="4rem" inView={inView} />
      <motion.p
        initial="hidden"
        animate={controls}
        variants={paraVariant}
      >
        I am currently a student at IIIT Gwalior, where I am honing my skills in software development and competitive programming, passionate about building efficient, user-friendly web applications and solving complex problems through programming.
        <br></br>
        <br></br>
        I am always eager to learn new technologies and frameworks to enhance my skills and knowledge.
        I like to work on my problem solving skills by participating in contests and solving questions based on Data Structures and Algorithms. These problem-solving skills help me to optimize the applications that I develop.
        <br></br>
        <br></br>
        When I am not coding, I like to play video games 🎮, read books 📖, and watch movies 📽️. I also like to travel and explore new places.

      </motion.p>
    </div>
  );
};

export default About;