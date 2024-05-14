import React from "react";
import { FaUserGraduate } from "react-icons/fa6";

const Step = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="text-center text-3xl underline underline-offset-8 my-5 font-bold">
        Educational Qualification and Certifications
      </h1>
      <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
        <div className="lg:py-6 lg:pr-16">
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <FaUserGraduate />
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">
                BSc. Physics and Electonics
              </p>
              <p className="text-gray-700">
                Adekunle Ajasin University Akungba, Nigeria <br />
                <small className="italic">2015 - 2021</small>
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <FaUserGraduate />
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Zuri Team Inc.</p>
              <p className="text-gray-700">
                Backend Development with Node Js <br />
                <small className="italic">Mar 2024 - Present</small>
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <FaUserGraduate />
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Freecodecamp</p>
              <p className="text-gray-700">
                JavaScript structure and algorithms <br />
                <small className="italic">Jan - June 2023</small>
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <FaUserGraduate />
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">
                Maximilian Schwarzmiller - Udemy
              </p>
              <p className="text-gray-700">
                React (The complete guide ) <br />
                <small className="italic">Jun - Oct 2023</small>
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <FaUserGraduate />
                </div>
              </div>
            </div>
            <div className="pt-1">
              <p className="mb-2 text-lg font-bold">
                JavaScript pro (Mastering advanced techniques and concepts) by
                Colt Steele- Udemy
              </p>
              <p className="text-gray-700" />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="inset-0 object-cover object-top w-full rounded shadow-lg h-[400px] lg:absolute lg:h-full"
            src="./avatar.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Step;
