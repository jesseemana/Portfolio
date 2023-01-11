import { data } from "../data";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <div className="py-5">
      <h2 className="h2 text-center">services</h2>
      <h1 className="text-lg text-gray-400 text-center">
        Below is a peak of what I offer
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col gap-y-4 gap-x-4 md:flex-row py-4"
      >
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="services group"
            >
              <img
                src={item.icon}
                alt="icon"
                className="mx-auto font-bold py-2 h-[70px]"
              />
              <h2 className="text-center capitalize text-lg text-[#ccd6f6] py-2">
                {item.title}
              </h2>
              <p className="paragraph text-center text-gray-500 py-2 group-hover:text-black">
                {item.desc}
              </p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
