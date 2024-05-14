
import Step from "./components/Steps";

const About = () => {
  return (
    <div className="w-full h-screen p-10 max-w-[1200px] mx-auto shadow-sm">
      <div className=" text-white text-center p-3">
        <h1 className="text-4xl md:text-6xl text-pri text-bold">About Me</h1>
      </div>
      <Step />
      <section>
        <h1 className="text-center text-2xl font-bold underline underline-offset-8">
          Work Experience
        </h1>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    FRONT-END DEVELOPER
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">
                    07/2021 – present
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    FREELANCING
                  </h2>
                  <p className="leading-relaxed">
                    As a freelancer I' have specialized in Frontend React
                    Development, contributing to a diverse range of projects
                    that have showcased my skills and expertise.
                    <br />
                    Currently,I'm deeply involved in two significant endeavors:
                    <br />
                    1. Cokitchen: As the sole developer,I'm spearheading the
                    creation of a dynamic dashboard control web app. <br />
                    This project demands not only technical prowess but also a
                    keen eye for design and functionality, as it includes the
                    integration of a CMS to empower users with seamless content
                    management.
                    <br />
                    2. Healthsquarepay: Collaborating with fellow frontend
                    developers,I'm actively engaged in enhancing the user
                    experience and functionality of Healthsquarepay. Leveraging
                    React, we're striving to create a platform that delivers
                    intuitive interactions and streamlined processes to users.
                    <br />
                    My journey as a freelancer has been enriched by my
                    contributions to various projects, including notable ones
                    like onecap.africa and Trutab.com. These experiences have
                    honed my React development skills and equipped me with a
                    deep understanding of user-centric design principles
                  </p>
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    FRONT-END DEVELOPER
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">
                    June 2023 - Present
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    GLIDEX TECHNOLOGY
                  </h2>
                  <p className="leading-relaxed">
                    •I Led frontend development for Uber-like projects, ensuring
                    seamless user experiences through close collaboration with
                    designers, using React with a given API end.
                    <br />
                    •I Architect applications similar to Uber and Bolt,
                    emphasizing functionality and visual appeal using React with
                    a given API end. <br />
                    •I Maintain daily commitment to project execution,
                    delivering high-quality solutions promptly, leveraging React
                    with a given API end. <br />
                    •I Drive tech firm success through dedicated frontend
                    development, aligning efforts with organizational goals and
                    fostering innovation with React and a given API end.
                  </p>
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    FRONT-END TUTOR
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">
                    Mar - June 2023
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    ROTBUN INSTITUTE
                  </h2>
                  <p className="leading-relaxed">
                    •As a Frontend Developer,I design intuitive and visually
                    appealing user interfaces in collaboration with cross-
                    functional teams to fulfill project requirements.
                    <br />
                    •I mentor aspiring developers, offering personalized
                    guidance on mastering frontend development skills, including
                    core concepts, coding best practices, and industry trends.
                    <br />
                    •Balancing my responsibilities as both a developer and
                    tutor, I contribute to both product development and the
                    growth of future frontend developers.
                  </p>
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    FRONT-END DEVELOPER
                  </span>
                  <span className="text-sm text-gray-500">
                    May 2022 - Feb 2023
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    DOATPAY
                  </h2>
                  <p className="leading-relaxed">
                    • Developed a cryptocurrency exchange application using
                    React, JavaScript, CSS, and HTML, empowering clients to
                    seamlessly trade cryptocurrencies. <br />
                    •Employed React to create a responsive and user-friendly
                    interface, enhancing accessibility and usability for traders
                    engaging in cryptocurrency transactions. <br />
                    •Led frontend development, meticulously designing and
                    implementing interface functionalities to meet project
                    objectives and exceed client expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <div className="w-full flex justify-center items-center dark:bg-gray-800 my-10">
        <div className=" mx-auto w-full">
          <h4 className="text-4xl md:text-3xl dark:text-white font-bold text-center mb-6">
            Skills
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base text-gray-800 font-semibold dark:text-[#A6A6A6]">
                  React Js
                </span>
                <span className="text-base font-semibold text-gray-800 pr-5 dark:text-[#A6A6A6]">
                  80%
                </span>
              </div>
              <svg
                className="rc-progress-line"
                viewBox="0 0 100 1"
                preserveAspectRatio="none"
              >
                <path
                  className="rc-progress-line-trail"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#D9D9D9"
                  strokeWidth="1"
                  fillOpacity="0"
                ></path>
                <path
                  className="rc-progress-line-path"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#9272D4"
                  strokeWidth="1"
                  fillOpacity="0"
                  style={{
                    strokeDasharray: "79.2px, 100px",
                    strokeDashoffset: "0px",
                    transition:
                      "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                  }}
                ></path>
              </svg>
            </div>

            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base text-gray-800 font-semibold dark:text-[#A6A6A6]">
                  HTML
                </span>
                <span className="text-base font-semibold text-gray-800 pr-5 dark:text-[#A6A6A6]">
                  95%
                </span>
              </div>
              <svg
                className="rc-progress-line"
                viewBox="0 0 100 1"
                preserveAspectRatio="none"
              >
                <path
                  className="rc-progress-line-trail"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#D9D9D9"
                  strokeWidth="1"
                  fillOpacity="0"
                ></path>
                <path
                  className="rc-progress-line-path"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#9272D4"
                  strokeWidth="1"
                  fillOpacity="0"
                  style={{
                    strokeDasharray: "94.05px, 100px",
                    strokeDashoffset: "0px",
                    transition:
                      "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                  }}
                ></path>
              </svg>
            </div>

            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base text-gray-800 font-semibold dark:text-[#A6A6A6]">
                  Redux Toolkit
                </span>
                <span className="text-base font-semibold text-gray-800 pr-5 dark:text-[#A6A6A6]">
                  65%
                </span>
              </div>
              <svg
                className="rc-progress-line"
                viewBox="0 0 100 1"
                preserveAspectRatio="none"
              >
                <path
                  className="rc-progress-line-trail"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#D9D9D9"
                  strokeWidth="1"
                  fillOpacity="0"
                ></path>
                <path
                  className="rc-progress-line-path"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#9272D4"
                  strokeWidth="1"
                  fillOpacity="0"
                  style={{
                    strokeDasharray: "64.35px, 100px",
                    strokeDashoffset: "0px",
                    transition:
                      "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                  }}
                ></path>
              </svg>
            </div>

            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base text-gray-800 font-semibold dark:text-[#A6A6A6]">
                  Javascript
                </span>
                <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                  75%
                </span>
              </div>
              <svg
                className="rc-progress-line"
                viewBox="0 0 100 1"
                preserveAspectRatio="none"
              >
                <path
                  className="rc-progress-line-trail"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#D9D9D9"
                  strokeWidth="1"
                  fillOpacity="0"
                ></path>
                <path
                  className="rc-progress-line-path"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#9272D4"
                  strokeWidth="1"
                  fillOpacity="0"
                  style={{
                    strokeDasharray: "74.25px, 100px",
                    strokeDashoffset: "0px",
                    transition:
                      "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                  }}
                ></path>
              </svg>
            </div>

            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base text-gray-800 font-semibold dark:text-[#A6A6A6]">
                  Tailwind CSS
                </span>
                <span className="text-base font-semibold text-gray-800 pr-5 dark:text-[#A6A6A6]">
                  80%
                </span>
              </div>
              <svg
                className="rc-progress-line"
                viewBox="0 0 100 1"
                preserveAspectRatio="none"
              >
                <path
                  className="rc-progress-line-trail"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#D9D9D9"
                  strokeWidth="1"
                  fillOpacity="0"
                ></path>
                <path
                  className="rc-progress-line-path"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#9272D4"
                  strokeWidth="1"
                  fillOpacity="0"
                  style={{
                    strokeDasharray: "79.2px, 100px",
                    strokeDashoffset: "0px",
                    transition:
                      "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                  }}
                ></path>
              </svg>
            </div>

            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base text-gray-800 font-semibold dark:text-[#A6A6A6]">
                  CSS
                </span>
                <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                  75%
                </span>
              </div>
              <svg
                className="rc-progress-line"
                viewBox="0 0 100 1"
                preserveAspectRatio="none"
              >
                <path
                  className="rc-progress-line-trail"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#D9D9D9"
                  strokeWidth="1"
                  fillOpacity="0"
                ></path>
                <path
                  className="rc-progress-line-path"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#9272D4"
                  strokeWidth="1"
                  fillOpacity="0"
                  style={{
                    strokeDasharray: "74.25px, 100px",
                    strokeDashoffset: "0px",
                    transition:
                      "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                  }}
                ></path>
              </svg>
            </div>

            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base text-gray-800 font-semibold dark:text-[#A6A6A6]">
                  Typescript
                </span>
                <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                  75%
                </span>
              </div>
              <svg
                className="rc-progress-line"
                viewBox="0 0 100 1"
                preserveAspectRatio="none"
              >
                <path
                  className="rc-progress-line-trail"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#D9D9D9"
                  strokeWidth="1"
                  fillOpacity="0"
                ></path>
                <path
                  className="rc-progress-line-path"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#9272D4"
                  strokeWidth="1"
                  fillOpacity="0"
                  style={{
                    strokeDasharray: "74.25px, 100px",
                    strokeDashoffset: "0px",
                    transition:
                      "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                  }}
                ></path>
              </svg>
            </div>

            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base text-gray-800 font-semibold dark:text-[#A6A6A6]">
                  Bootstrap
                </span>
                <span className="text-base font-semibold text-gray-800 pr-5 dark:text-[#A6A6A6]">
                  80%
                </span>
              </div>
              <svg
                className="rc-progress-line"
                viewBox="0 0 100 1"
                preserveAspectRatio="none"
              >
                <path
                  className="rc-progress-line-trail"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#D9D9D9"
                  strokeWidth="1"
                  fillOpacity="0"
                ></path>
                <path
                  className="rc-progress-line-path"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#9272D4"
                  strokeWidth="1"
                  fillOpacity="0"
                  style={{
                    strokeDasharray: "79.2px, 100px",
                    strokeDashoffset: "0px",
                    transition:
                      "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                  }}
                ></path>
              </svg>
            </div>
            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base text-gray-800 font-semibold dark:text-[#A6A6A6]">
                  Node Js
                </span>
                <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                  50%
                </span>
              </div>
              <svg
                className="rc-progress-line"
                viewBox="0 0 100 1"
                preserveAspectRatio="none"
              >
                <path
                  className="rc-progress-line-trail"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#D9D9D9"
                  strokeWidth="1"
                  fillOpacity="0"
                ></path>
                <path
                  className="rc-progress-line-path"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#1bb394"
                  strokeWidth="1"
                  fillOpacity="0"
                  style={{
                    strokeDasharray: "50.25px, 100px",
                    strokeDashoffset: "0px",
                    transition:
                      "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                  }}
                ></path>
              </svg>
            </div>

            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base text-gray-800 font-semibold dark:text-[#A6A6A6]">
                  Express Js
                </span>
                <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                  50%
                </span>
              </div>
              <svg
                className="rc-progress-line"
                viewBox="0 0 100 1"
                preserveAspectRatio="none"
              >
                <path
                  className="rc-progress-line-trail"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#D9D9D9"
                  strokeWidth="1"
                  fillOpacity="0"
                ></path>
                <path
                  className="rc-progress-line-path"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#1bb394"
                  strokeWidth="1"
                  fillOpacity="0"
                  style={{
                    strokeDasharray: "50.25px, 100px",
                    strokeDashoffset: "0px",
                    transition:
                      "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                  }}
                ></path>
              </svg>
            </div>

            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base text-gray-800 font-semibold dark:text-[#A6A6A6]">
                  MongoDB
                </span>
                <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                  50%
                </span>
              </div>
              <svg
                className="rc-progress-line"
                viewBox="0 0 100 1"
                preserveAspectRatio="none"
              >
                <path
                  className="rc-progress-line-trail"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#D9D9D9"
                  strokeWidth="1"
                  fillOpacity="0"
                ></path>
                <path
                  className="rc-progress-line-path"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#1bb394"
                  strokeWidth="1"
                  fillOpacity="0"
                  style={{
                    strokeDasharray: "50.25px, 100px",
                    strokeDashoffset: "0px",
                    transition:
                      "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                  }}
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
