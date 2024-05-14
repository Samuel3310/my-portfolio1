import React from "react";

const Projects = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              My Projects
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Welcome to the section where you get to see the works I've done in
            the past. 😁
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <a href="https://iphone-site-clone-jet.vercel.app/">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="./iphone.PNG"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Iphone Website Clone
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Built with React, GSAP, Tailwind and Sensory
                </h2>
                <p className="leading-relaxed text-base">
                  It can track activities going on on the website by the help of
                  sensory
                </p>
              </a>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <a href="https://proect-management-app.vercel.app/">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="./projectMan.PNG"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Project Management app (todo)
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Built with React
                </h2>
                <p className="leading-relaxed text-base">
                  You can save different todos. Edit, clear and delete them
                </p>
              </a>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <a href="https://nike-landing-page-nine-pi.vercel.app/">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="./nikeLanding.PNG"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Nike Landing Page
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Built with React and Tailwind CSS
                </h2>
                <p className="leading-relaxed text-base">
                  This is a Nike landing page built beautifully with the power
                  of React and Tailwind CSS
                </p>
              </a>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <a href="https://omnifood-clone-indol.vercel.app/">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="./omnifood.PNG"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Omnifood Clone
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Built with pure HTML and CSS
                </h2>
                <p className="leading-relaxed text-base">
                  Feel free to glance through to know the meaning of creative
                  design
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
