"use client";
import { useState } from "react";
import "./style/style.css";
import placeholder from './images/placeholder-profile-sq.jpg';
import Image from "next/image";
import SocialLink from "./components/socialLink";
import Information from "./components/information";
import Languages from "./components/languages";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Reference from "./components/Reference";
import Education from "./components/education";
import Custom from "./components/Custom";


export default function Generate() {
  return (
    <div>
      <div className="h-40 bg-blue-800 py-32">
        <div className="h-56 w-56 lg:absolute lg:ml-10 md:block md:m-auto sm:block rounded-full m-auto">
          <Image
            src={placeholder}
            className="bg-cover rounded-full"
            alt="image"
          />
        </div>
        <div className="w-full flex justify-end items-center">
          <div className="lg:w-4/5 md:w-full w-full p-8 lg:mt-20 md:mt-0 sm:mt-0">
            <Information />
            <Education />
            <Skills />
            <Experience />
            <Languages />
            <SocialLink />
            <Reference />
            <Custom />
            <div className="mb-20 flex justify-center items-center">
              <button
                type="submit"
                className="mt-10 bg-blue-800 text-white py-3 px-5 m-auto rounded-xl hover:bg-blue-700 transition-all"
              >
                Generate my resume
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

