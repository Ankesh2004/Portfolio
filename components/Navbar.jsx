"use client";
import { motion } from "framer-motion";
import { useState,useRef,useEffect} from "react";
import styles from "../styles/Navbar.module.css";

let tabs = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  const observer = useRef();

  const handleClick = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, { threshold: 0.7 });

    tabs.forEach((tab) => {
      const element = document.getElementById(tab.id);
      if (element) observer.current.observe(element);
    });

    return () => {
      tabs.forEach((tab) => {
        const element = document.getElementById(tab.id);
        if (element) observer.current.unobserve(element);
      });
    };
  }, []);

  return (
    <div className={styles.navbar}>
    <div className="flex flex-wrap space-x-1 border-2 p-1 rounded-[2rem]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleClick(tab.id)}
          className={`${
            activeTab === tab.id ? `` : `hover:text-var(--foreground-rgb) /50`
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
            position: "relative" 
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className={`absolute inset-0 z-50 bg-white mix-blend-difference`}
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
    </div>
  );
}
export default Navbar;