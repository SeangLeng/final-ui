"use client"
import React, { useEffect, useState } from 'react'
import logo2 from '../app/images/logo-project.jpg'
import Image from 'next/image'
import { useGetUserQuery } from "@/store/features/user/userApiSlice";
import Link from 'next/link';

export default function Navbar() {


    function dashboardRender(role) {
        if (role === "admin") return (
            <li>
                <a href='/dashboard' className="block px-4 py-2 text-white  hover:bg-gray-400  dark:hover:bg-gray-600">Dashboard</a>
            </li>
        )
    }

    function haveUser() {
        return (
            <div>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                    <img src={user.avatar} className="h-20 w-20 p-4 rounded-[50%]" alt="Placeholder" /><span > {user.name} </span>
                    <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http:www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>

                <div id="dropdownNavbar" className=" z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    {

                        <ul className="py-2 text-sm text-gray-700  bg-blue-800  dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                            <li>
                                <a href={`/profile/${user.id}`} className="block px-4 py-2 text-white  hover:bg-gray-400  dark:hover:bg-gray-600">Profile</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-white  hover:bg-gray-400  dark:hover:bg-gray-600">Settings</a>
                            </li>
                            {() => dashboardRender(user.role)}
                            <li>
                                <a href="/login" className="block px-4 py-2 text-white  hover:bg-gray-400  dark:hover:bg-gray-600">Log - in</a>
                            </li>
                            <li>
                                <button onClick={() => reset()} className="block px-4 py-2 text-white  hover:bg-gray-400  dark:hover:bg-gray-600">Log - out</button>
                            </li>
                        </ul>
                    }
                </div>
                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http:www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
        )
    }

    function noUser() {
        return (
            <div>
                <a type="button" href='/login'
                    className="flex gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
                    <svg width="20" height="19" viewBox="0 0 27 28" fill="none" xmlns="http:www.w3.org/2000/svg">
                        <path
                            d="M17.4719 20.3624C16.2807 19.7227 16.9165 18.5243 17.4719 17.9655C18.1867 17.2465 19.0607 14.7703 19.0607 14.7703C20.4901 14.1306 20.6495 13.0925 20.8073 12.3734C21.4431 10.2956 19.8543 9.97656 19.8543 9.97656C19.8543 9.97656 21.1244 6.54159 20.0926 3.90506C18.742 0.470088 13.2625 -0.809252 12.3096 2.38757C5.79818 0.947962 7.14719 9.97502 7.14719 9.97502C7.14719 9.97502 5.55842 10.2941 6.19423 12.3719C6.35356 13.0909 6.51139 14.129 7.94082 14.7687C7.94082 14.7687 8.81487 17.2449 9.52959 17.964C10.085 18.5228 10.7208 19.7212 9.52959 20.3608C7.14719 21.6387 0 21.9593 0 27.5514H27C27.0015 21.9593 19.8543 21.6402 17.4719 20.3624Z"
                            fill="white" />
                    </svg> Log in</a>
            </div>
        )
    }
    
    return (
        <nav className="bg-white dark:bg-gray-900 px-5 fixed w-full z-30 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className=" flex flex-wrap items-center justify-between pr-4">
                <a href="/" className="flex items-center gap-5">
                    <Image src={logo2} className="h-50 w-20 rounded-[50%]" alt="Flowbite Logo" />
                    <span
                        className=" text-blue-800 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PortISTAD</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:flex justify-center items-center gap-5 md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/"
                                className="block py-2 pl-3 pr-4  text-blue-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700z  "
                                aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href={`/listProducts`}
                                className="block py-2 pl-3 pr-4  text-blue-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Templates</a>
                        </li>
                        <li>
                            <a href="#aboutUs"
                                className="block py-2 pl-3 pr-4  text-blue-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About
                                Us</a>
                        </li>
                    </ul>
                    <div className=" flex items-center md:order-2">
                        <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                            <svg width="26" height="15" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="26" height="3" rx="1.5" fill="#D9D9D9" />
                                <rect x="4" y="6" width="22" height="3" rx="1.5" fill="#D9D9D9" />
                                <rect x="9" y="12" width="17" height="3" rx="1.5" fill="#D9D9D9" />
                            </svg>
                        </button>
                        <div className="z-50 absolute hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu">
                            <ul className="py-2 font-medium" role="none">
                                <li>
                                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div className="inline-flex items-center gap-3">
                                            <svg className="w-5 h-5 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"></path>
                                            </svg>
                                            Setting
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div className="inline-flex items-center gap-3">
                                            <svg className="w-5 h-5 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"></path>
                                            </svg>
                                            Log - in
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div className="inline-flex items-center gap-3">
                                            <svg className="w-5 h-5 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"></path>
                                                <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"></path>
                                            </svg>
                                            Dashboard
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}
