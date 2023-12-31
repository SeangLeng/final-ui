"use client";
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "./images/dev-ed-wave.png";
import html from "./images/html.png";
import css from "./images/css.png";
import java from "./images/java.png";
import JavaScript from "./images/JavaScript.png";
import sql from "./images/sql.png";
import next from "./images/next.png";
// import Tailwind from "../../../public/Tailwind.png";
import TypeScript from "./images/TypeScript.png";
import React from "./images/React.png";
import Solidity from "./images/Solidity.png";
// import Spring from "../../../public/spring.png"
import Image from "next/legacy/image";
import web1 from "./images/web1.png";
// import web2 from "../../../public/web2.png";
// import web3 from "../../../public/web3.png";
import web4 from "./images/web4.png";
import web5 from "./images/web5.png";
import web6 from "./images/web6.png";
import footer from "./images/footer.png";

import "./style.css/style.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white text-black">
            <h1 className="font-burtons text-2xl font-bold">Developer</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              {/* <li>
                <a
                  className="bg-sky-400 dark:bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li> */}
            </ul>
          </nav>
          <div className="text-center p-10 py-10 font-Inter">
            <h2 className="text-5xl py-2 text-black font-medium  dark:text-blue-400 md:text-6xl">
              Ma Samnang
            </h2>
            <h3 className="text-xl py-2 text-black dark:text-white md:text-3xl">
              Full stack Developer
            </h3>

            <div className="text-5xl flex justify-center gap-16 py-3 text-blue-900 dark:text-white">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>

            <div className="mx-auto bg-gradient-to-b from-white rounded-full w-90 h-90 relative overflow-hidden mt-8 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section className="pb-20">
          <h3 className="text-4xl py-3 text-black font-bold dark:text-white font-Inter ">
            Introduction
          </h3>
          <p className="text-2xl py-10 leading-8 text-black dark:text-gray-200 font-Inter">
            Hello there! My name is [Your Name], and I am a skilled programmer
            and web developer. I have a passion for technology and have
            dedicated my education and career to mastering a variety of
            programming languages and tools.
          </p>
        </section>

        <section>
          <div>
            <h5 className="text-3xl py-2 font-bold text-black dark:text-white ">
              Skills
            </h5>
            <h1 className="text-4xl py-5 leading-8 font-bold text-black  dark:text-gray-200 ">
              What Can I do ?
            </h1>
          </div>

          <div className="lg:flex gap-10">
            <div className="bg-white text-center shadow-lg p-10 rounded-xl my-10 text-black dark:bg-white justify-around flex flex-wrap flex-1">
              <Image src={html} width={140} height={180} />
              <h3 className="text-4xl font-semibold pt-8 pb-2 m-auto h-auto">HTML</h3>
            </div>
            {/* <div className="flex justify-between bg-white shadow-lg p-8 rounded-xl my-10 text-black dark:bg-white flex-1">
              <Image src={html} width={70-} height={20} />
              <h3 className="text-5xl font-medium pt-8 pb-2  ">HTML</h3>
            </div> */}
            <div className="bg-white text-center shadow-lg p-10 rounded-xl my-10 text-black dark:bg-white justify-around flex flex-wrap flex-1">
              <Image src={css} width={140} height={180} />
              <h3 className="text-4xl font-semibold pt-8 pb-2 m-auto h-auto">CSS</h3>
            </div>
            {/* <div className="bg-white text-center shadow-lg p-10 rounded-xl my-10 text-black dark:bg-white flex-1">
              <Image src={Tailwind} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Tailwind</h3>
            </div> */}
            <div className="bg-white text-center shadow-lg p-10 rounded-xl my-10 text-black dark:bg-white justify-around flex flex-wrap flex-1">
              <Image src={java} width={110} height={180} />
              <h3 className="text-4xl font-semibold pt-8 pb-2 m-auto h-auto">Java</h3>
            </div>
         
          </div>

          <div className="lg:flex flex-wrap gap-10 ">
          <div className="bg-white text-center shadow-lg p-10 rounded-xl my-10 text-black dark:bg-white justify-around flex flex-wrap flex-1">
              <Image src={sql} width={180} height={160} />
              <h3 className="text-4xl font-semibold pt-8 pb-2 m-auto h-auto ">Postgres</h3>
            </div>
            <div className="bg-white text-center shadow-lg p-10 rounded-xl my-10 text-black dark:bg-white justify-around flex flex-wrap flex-1">
              <Image src={next} width={180} height={180} />
              <h3 className="text-4xl font-semibold pt-8 pb-2 m-auto h-auto ">Next.js</h3>
            </div>
            <div className="bg-white text-center shadow-lg p-10 rounded-xl my-10 text-black dark:bg-white justify-around flex flex-wrap flex-1">
              <Image src={JavaScript} width={170} height={180} />
              <h3 className="text-4xl font-semibold pt-8 pb-2 m-auto h-auto">JavaScript</h3>
            </div>
        
   
       
          </div>
          
          <div className="lg:flex flex-wrap gap-10">
          <div className="bg-white text-center shadow-lg p-10 rounded-xl my-10 text-black dark:bg-white justify-around flex flex-wrap flex-1">
              <Image src={React} width={200} height={180} />
              <h3 className="text-4xl font-semibold pt-8 pb-2 m-auto h-auto ">React</h3>
            </div>
            <div className="bg-white text-center shadow-lg p-10 rounded-xl my-10 text-black dark:bg-white justify-around flex flex-wrap flex-1">
              <Image src={TypeScript} width={180} height={180} />
              <h3 className="text-4xl font-semibold pt-8 pb-2 m-auto h-auto ">TypeScript</h3>
            </div>
            <div className="bg-white text-center shadow-lg p-10 rounded-xl my-10 text-black dark:bg-white justify-around flex flex-wrap flex-1">
              <Image src={Solidity} width={200} height={180} />
              <h3 className="text-4xl font-semibold pt-8 pb-2 m-auto h-auto ">Solidity</h3>
            </div>
          </div>
         

        </section>

        <section className="py-10">
          <div>
            <h3 className="text-4xl py-1 text-black font-bold dark:text-white ">
              Project
            </h3>
            <p className="text-5xl py-12 leading-10 text-black font-bold dark:text-gray-200">
              What have I built ?
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            {/* <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div> */}
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>

        <h3 className="text-2xl py-2 pt-5 pb-2 font-bold text-black dark:text-white ">
          Contact
        </h3>
        <p className="text-4xl py-2  text-black font-semibold dark:text-white">
          Contact info
        </p>

        <section className=" relative h-screen ">
          <div className=" form p-10 rounded-[36px] absolute  z-20 lg:right-[20px] sm:right-40 lg:top-[20px]">
            <form className="flex flex-wrap gap-10 shadow-lg justify-between item-center ">
              <ul className="p-5 text-3xl rounded-xl my-10 font-medium text-black dark:text-white">
                <li className=" pt-8 pb-2 ">Email : Samnang@gmail.com</li>
                <li className="pt-8 pb-2 ">
                  Address : St 562, Phnom Penh 12151
                </li>
                <li className="pt-8 pb-2 ">Phone number : +855 23 880 880</li>
              </ul>
              <Image src={footer} width={750} height={570} />
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
