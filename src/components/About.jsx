import React from "react";
import image from "../assets/image.jpg";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="py-5">
      <h2 className="h2 after:content-[''] after:bg-[#8892b0] after:h-[1px] after:w-[150px] after:relative after:inline-block after:align-middle after:translate-x-3">
        about me
      </h2>
      <div className="grid grid-row-2 grid-row-reverse lg:grid-cols-2 gap-y-7 py-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <p className="paragraph">
            I am a developer who enjoys building things that live on the web and
            will make your product/business stand out whilst providing an
            awesome digital experience. Need a site or got a design that needs
            to be made into a final product? I am your guy.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img
            src={image}
            alt="Jesse Emana's headshot"
            className="border border-gray-500 h-[280px] w-[280px] rounded-lg mx-auto text-white overflow-hidden"
          />
        </motion.div>
      </div>
    </div>
  );
};
