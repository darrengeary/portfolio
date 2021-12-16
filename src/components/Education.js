import React from "react";
import { AcademicCapIcon, LibraryIcon } from "@heroicons/react/solid";
import { education } from "../data";

export default function Education() {
  return (
    <section id="educations" className="bg-gray-800">
      <div className="container px-5 py-10 mx-auto text-center">
        <LibraryIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Education
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 md:px-10 mx-auto mb-12">
          My third level education and project work undertaken.
        </p>
        <div className="flex flex-wrap md:mx-4">
          {education.map((education) => (
            <div className="md:p-4 md:w-1/2 w-full mb-4">
              <div className="h-full bg-gray-900 bg-opacity-40 p-8 rounded">
                <div className="flex justify-end"><div className="w-8 h-8 text-gray-500 mb-4"><AcademicCapIcon /></div></div>
                <div className="flex flex-wrap justify-center">
                  <img className="float-left mx-10 w-12 rounded-full flex-shrink-0 object-cover object-center" alt="education" src={education.image}/>
                  <span className="flex-grow flex flex-col">
                   <span className="text-gray-500 text-sm">
                      {education.degree}
                    </span>
                    <span className="title-font font-medium text-white">
                      {education.course}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {education.institution}
                    </span>
                  </span>
                </div>

                <div className="text-left leading-relaxed mt-10 mb-5">
                  <p className="text-sm uppercase">Dissertation:</p>
                  <p>{education.coursework}</p>
                </div>            

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}