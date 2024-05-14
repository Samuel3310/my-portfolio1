import React, { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section className="text-gray-600 body-font md:pt-0">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-900">
            Welcome to My Portfolio
            <br />I am{"  "}
            <span className="font-bold text-pri text-4xl">
              Awolu Owolabi Samuel
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "A Web Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "A Web Designer",
                1000,
                "An aspiring Backend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-8 leading-relaxed">
            Collaborative and innovative frontend web developer with 5 years of
            experience in building responsive, scalable, and user-friendly web
            applications using React, JavaScript, and HTML/CSS. Seeking a
            dynamic collaboration with a forward-thinking company or
            organization to leverage my expertise in: Crafting seamless user
            experiences with reusable components and optimized website
            performance Harnessing modern frontend build tools like Webpack,
            Babel, and ESLint Fostering agile team environments and contributing
            to cutting-edge solutions Let's work together to drive digital
            transformation and deliver exceptional web experiences that engage
            and inspire!
          </p>
          <div className="flex justify-center">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Download CV
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pri hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Explore More
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-xl">
          <img
            className="w-full object-cover object-center rounded-xl "
            alt="hero"
            src="./avatar.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
