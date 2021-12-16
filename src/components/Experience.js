// src/components/Experience.js

import React from "react";
import { BriefcaseIcon, } from "@heroicons/react/solid";
import { ClipboardCheckIcon } from "@heroicons/react/outline";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-800">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <BriefcaseIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Work Experience
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 md:px-10 mx-auto">
          My most recent employers along with the duties and trainings encountered during my time in each role.
        </p>
        </div>
        <div className="flex flex-wrap md:mx-4">
          {experience.map((thisExperience) => (

            <div className="md:p-4 md:w-1/2 w-full my-4">
              <div className="h-full p-8 rounded-lg bg-gray-200">
              <div className="flex justify-center">
              <div className="inline-flex items-center mb-4">
                  <img
                    alt="company logo"
                    src={thisExperience.image}
                    className="w-14 flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-black">
                      {thisExperience.title}
                    </span>
                    <span className="text-gray-900 text-sm uppercase">
                      {thisExperience.company}
                    </span>
                    <p className="text-gray-900">
                      {thisExperience.years}
                    </p>
                </span>
                </div>
                </div>
                <div className="mt-4 text-left inline-block">
                  {thisExperience.duties.map(data => (
                    <div className="text-gray-900 leading-relaxed inline-flex">
                      <p className=""><ClipboardCheckIcon className="w-4 h-4 mt-1.5 mr-4" /></p>
                      <p>{data.duty}<br/></p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}