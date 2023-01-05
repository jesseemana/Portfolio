import { useTypewriter } from "react-simple-typewriter";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

export const Hero = () => {
  const [text] = useTypewriter({
    words: ["tech enthusiast,", "software engineer,", "frontend developer."],
    loop: 1,
    typeSpeed: 90,
    delaySpeed: 2000,
  });

  return (
    <div className="text-[#ccd6f6] py-1 lg:py-[50px] ">
      <div className="capitalize py-5 flex flex-col items-start content-center">
        <h1 className="text-3xl md:text-[50px] font-semibold">Hello, </h1>
        <h2 className="text-[45px] md:text-[90px] uppercase text-[#8892b0] font-semibold">
        i am jesse.
        </h2>
        <h3 className="text-[27px] font-semi-bold md:text-[50px] lg:text-[63px] h-1">
          {text}{" "}
        </h3>
        <div className="mt-[60px] md:mt-[100px]">
          <button className="text-md text-blue-300 hover:bg-blue-300 hover:text-black border border-blue-300 uppercase rounded-full px-3 py-2 mb-5">
            <a href="#contact"> get in touch</a>
          </button>
          {/* SOCIAL ICONS */}
          <div className="text-gray-500 flex gap-x-4 text-sm ml-2">
            <a href="https://twitter.com/jesseemana" target="_blank">
              <BsTwitter className="icons" />
            </a>
            <a
              href="https://www.instagram.com/jesse.emana/"
              target="_blank"
              className="icons"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/jesse-emana-91604a236/"
              target="_blank"
              className="icons"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/jesseemana"
              target="_blank"
              className="icons"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
