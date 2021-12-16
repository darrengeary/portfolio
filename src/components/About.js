// src/components/About.js

import React from "react";

export default function About() {
  return (
    <section id="about">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="container mx-auto flex px-20 py-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Darren.
            <br className="hidden lg:inline-block" /> Welcome to my CV.
          </h1>
          <p className="mb-8 leading-relaxed">
            This application was built using Tailwind CSS and React.js.
          </p>
          <div className="flex justify-center text-md">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded">
              My Apps
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-1/1">
          <img
            className="object-cover object-center rounded"
            alt="My Cover"
            src="./coding.png"
          />
        </div>
      </div>
    </section>
  );
}