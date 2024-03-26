"use client";
import { useInView } from 'react-intersection-observer';
import AnimatedText from './utils/AnimateText';
import { useEffect } from 'react';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      console.log('About Me is in view');
    }
  }, [inView]);

  return (
    <div className='p-[6rem]' ref={ref}>
      <AnimatedText word="About Me" size="4rem" inView={inView} />
    </div>
  );
};

export default About;