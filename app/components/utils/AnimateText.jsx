import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from 'framer-motion';

const wordVariants = {
  hidden: {
    opacity: 0,
    y:-200,
    transition: {
      staggerChildren: 0.05 // Stagger the animation of each letter
    }
  },
  visible: {
    opacity: 1,
    y:0,
    transition: {
      staggerChildren: 0.05 // Stagger the animation of each letter
    }
  }
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 20 // Move the letter downward when it appears
  },
  visible: {
    opacity: 1,
    y: 0 // Move the letter back to its original position
  }
};

const AnimatedText = ({ word, size, inView }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.span
      animate={controls}
      initial="hidden"
      variants={wordVariants}
      style={{ fontSize: size }}
    >
      {word.split("").map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
