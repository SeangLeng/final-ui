"use client"
import React, { useEffect, useState } from 'react'
import logo2 from '../app/images/Finnal-01.png'
import Image from 'next/image'
import { useGetUserQuery } from "@/store/features/user/userApiSlice";
import { useDispatch } from 'react-redux';
import { logout, setCurrentUser } from '@/store/features/auth/authSlice';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
    const {
        data: user,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetUserQuery();

    const [navbar, setNavbar] = useState(true);
    const [handleClickManu, setNavbarManu] = useState(true);
    const dispatch = useDispatch();
    const pathname = usePathname();
    const router = useRouter();

    if (pathname === "/login") {
        return null;
    }

    const handleClick = () => {
        setNavbar(!navbar);
        console.log("clicked");
    };
    const handleClickManuFunction = () => {
        setNavbarManu(!handleClickManu);
        console.log()
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(setCurrentUser(user));
        }
    }, [user]);

    let content = null;

    if (isLoading) {
        content = (
            <div class="text-center flex h-screen justify-center items-center">
                <div role="status">
                    <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        );
    } else if (isSuccess) {
        content = (
            <div className="bg-white dark:bg-gray-900 px-5 fixed w-full z-30 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className=" flex flex-wrap items-center justify-between pr-4">
                    <a href="/" className="flex items-center gap-5">
                        <Image src={logo2} className="h-50 w-20 rounded-[50%]" alt="Flowbite Logo" />
                        <span
                            className=" text-blue-800 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PortISTAD</span>
                    </a>
                    <button onClick={handleClickManuFunction} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className={`${handleClickManu ? 'hidden' : ' '} w-full md:flex justify-center items-center gap-5 md:w-auto`} id="navbar-default">
                        <ul className="font-medium flex justify-center lg:items-center md:items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
                                <a href="/#aboutUs"
                                    className="block py-2 pl-3 pr-4  text-blue-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About
                                    Us</a>
                            </li>
                            <div>
                                <button onClick={() => handleClick()} id="dropdownNavbarLink" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                    <img src={(user.data.profile !== null) ? user.data.profile : 'https://180dc.org/wp-content/uploads/2017/11/profile-placeholder.png'} width={70} height={70} className="p-4 rounded-[50%]" alt={"profile"} /><span > {user.data.username} </span>
                                    <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http:www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                                {

                                    <ul className={`${navbar ? 'hidden' : ''} absolute w-full py-2 text-sm text-gray-700  bg-blue-800  dark:text-gray-400`}>
                                        <li>
                                            <a href={`/profile`} className="block p-3 text-white  hover:bg-blue-900  dark:hover:bg-gray-600">Profile</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block p-3 text-white  hover:bg-blue-900  dark:hover:bg-blue-900">Settings</a>
                                        </li>
                                        {
                                            user?.data.roles.map(e => (
                                                e.name === 'ADMIN' ? (
                                                    <li>
                                                        <a href="/dashboard" className="block p-3 text-white  hover:bg-blue-900  dark:hover:bg-blue-900">dashboard</a>
                                                    </li>
                                                ) : (' ')
                                            ))
                                        }
                                        <li>
                                            <a href="/login" className="block p-3 text-white  hover:bg-blue-900  dark:hover:bg-blue-900">Log - in</a>
                                        </li>
                                        <li>
                                            <button onClick={() => {
                                                dispatch(logout())
                                                router.push('/')
                                                window.location.reload();
                                            }} className="block text-start w-full p-3 text-white  hover:bg-blue-900  dark:hover:bg-blue-600">Log - out</button>
                                        </li>
                                    </ul>
                                }
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else if (isError) {
        content = (
            <div className="bg-white dark:bg-gray-900 px-5 fixed w-full z-30 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
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
                        <ul className="font-medium flex justify-center items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
                            <li>
                                <a href="/login" className="block px-5 py-3 bg-blue-700 text-white  hover:bg-blue-800  dark:hover:bg-blue-600 rounded-xl">Log - in</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else if (isError) {
        content = (
            <div className="flex min-h-screen flex-col items-center justify-between p-24">
                {error?.message || "This page required authentication"}
            </div>
        );
    }

    return content;


}
