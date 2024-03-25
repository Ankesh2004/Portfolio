"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import "./styles/Navbar.css";

let tabs = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const  Navbar = ()=>{
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex flex-wrap space-x-1 border-2 p-1 rounded-[2rem]">
      {tabs.map((tab) => (
        <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`${
          activeTab === tab.id ? `` : `hover:text-var(--foreground-rgb) /50`
        } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
        style={{
          WebkitTapHighlightColor: "transparent",
        }}
      >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className={`absolute inset-0 z-10 bg-white mix-blend-difference`}
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
export default Navbar;