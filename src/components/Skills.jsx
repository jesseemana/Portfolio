import { logos } from "../logos";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { motion } from "framer-motion";

export const Skills = ({ directionLeft }) => {
  return (
    <div className="py-5 z-[-1] container-sm lg:container-lg">
      <h2 className="h2 text-center">skills</h2>
      <p className="text-gray-400 text-lg text-center ">
        Here is my tech stack consisting of the tools I use and getting familiar
        with.
      </p>
      <motion.div
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1, delay: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="grid grid-cols-3 gap-y-3 gap-x-2 py-10"
      >
        {logos.map((skill, index) => {
          return (
            <Tippy content={skill.name} key={index}>
              <div className="group relative flex justify-center">
                <img
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  className="border z-[-1] border-gray-500 trasnsition duration-300 ease-in-out object-cover rounded-full w-24 h-24 md:w-24 md:h-24 lg:w-24 lg:h-24"
                />
                <div className="cursor-pointer absolute rounded-full z-0 opacity-0 hover:opacity-80 transition duration-300 hover:bg-white w-24 h-24 md:w-24 md:h-24 lg:w-24 lg:h-24">
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
