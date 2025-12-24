"use client"
import {motion} from "framer-motion";
import React from "react";
import {useState} from "react";
import {AuroraBackground} from "@/components/ui/aurora-background";
import NavBar from "@/components/ui/NavBar";

export default function Home() {
  const [dark, setDark] = useState(true)
  const toggleClass = () => {
    setDark(prevDark => !prevDark);
  };
  return (
    <div className={dark ? "dark" : ""}>
      <AuroraBackground>
        <motion.div
          initial={{opacity: 0.0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <NavBar toggleClass={toggleClass} dark={dark}/>
          <div className="b-container h-screen mx-auto flex items-center relative">
            <div className="grid md:grid-cols-2 grid-cols-1 w-full">
              <div className="text-3xl md:text-4xl font-bold dark:text-white text-center">
                A software Engineer
              </div>
            </div>
            <div className="grid absolute inset-y-0 md:grid-cols-4 grid-cols-3 items-center justify-center w-full pointer-events-none">
              <div className="md:col-span-2 col-span-1"></div>
              <div className="text-5xl font-bold text-gray-500 dark:text-gray-300 rotate-text animate-rotate-text">
                Joshua Taye
              </div>
            </div>
          </div>

        </motion.div>
      </AuroraBackground>
    </div>
  );
}
