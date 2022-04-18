// src/App.js
import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/outline";

import {
  Routes,
  Route,
  BrowserRouter,
  Link,
  Navigate,
  Outlet
} from "react-router-dom";

let auth01 = false;

export default function App() {

  return (
    <BrowserRouter>
      <Public />
      <Routes>
        <Route path="/" element={<PrivateOutlet />}>
          <Route path="" element={<Private />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

function PrivateOutlet() {
  return auth01 ? <Outlet /> : <Navigate to="/login" />;
}

function Public() {
  return (
  <main className="text-gray-400 bg-gray-900 body-font">
    <Navbar />
    <About />
  </main>
  )
}

function Private() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

function changeAuth(boo) {
  auth01 = boo;
}

function Login() {
    return (
    <section id="experience" className="bg-gray-800">
        <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-10">
            <LockClosedIcon className="text-gray-400 w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                Access Locked
            </h1>
            <p className="text-white leading-relaxed xl:w-2/4 lg:w-3/4 md:px-10 mx-auto">
                Please enter the access code to reveal content.
            </p>
        </div>
        <div className="flex flex-wrap justify-center md:mx-4">      
          <form class="space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true"></input>
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="password" class="sr-only">Passcode</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
                </input>
              </div>
            </div>
            <div>
              <Link to="/" onClick={changeAuth(true)} class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockOpenIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"/>
                </span>
                  Unlock
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
    );
}

