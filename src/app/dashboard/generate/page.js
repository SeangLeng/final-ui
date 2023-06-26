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
        <div className='flex absolute w-1/6 gap-20 justify-start items-center'>
          <div className='uploadImage w-full ml-10 relative hover:cursor-pointer'>
            <img src={'https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg='} className='w-full rounded-full' />
            <div className='uploadButton hidden absolute z-20 top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]'>
              <label for="inputFile" className='text-white bg-none rounded-lg ring-2 ring-white dark:ring-white p-3 cursor-pointer'>
                upload
                <input type='file' id='inputFile' className='hidden' />
              </label>
            </div>
          </div>
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

