import { logos } from "../logos";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react";
import { motion } from "framer-motion";

export const Skills = ({ directionLeft }) => {
  return (
    <div className="py-5 z-[-1] containers">
      <h2 className="h2 text-center">skills</h2>
      <p className="text-gray-400 text-lg text-center ">
        Here is my tech stack consisting of the tools I use and getting familiar
        with.
      </p>
      <motion.div
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1, delay: 0 }}
        animate={{ opacity: 1, x: 0 }}
        className="grid grid-cols-3 gap-y-3 gap-x-2 py-10"
      >
        {logos.map((skill, index) => {
          return (
            <Tippy content={skill.name} key={index}>
              <div className="group relative flex justify-center">
                <img
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  className="images"
                />
                <div className="levels">
                  <div className="flex items-center justify-center h-full">
                    <p className="font-bold text-sm opacity-100 ">
                      {skill.level}
                    </p>
                  </div>
                </div>
              </div>
            </Tippy>
          );
        })}
      </motion.div>
    </div>
  );
};
