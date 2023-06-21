"use client"
import React, { useEffect, useState } from 'react'
import logo2 from '@/app/images/logo-project.jpg'
import Image from 'next/image';
import secureLocalStorage from 'react-secure-storage';
import { useSession } from 'next-auth/react';

export default function NavbarDashboard() {
    const resetUser = () => {
        try {

            window.location = "/"
        } catch (err) {
            console.log(err)
        }
    }
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    const getAllUser = async () => {
        try {
            const item = secureLocalStorage.getItem("user");
            const users = JSON.parse(item)
            setUser(users);
        } catch (error) {
            setLoading(true)
            console.log(error)
        }
    }
    if (user)
        return (
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="/" className="flex ml-2 md:mr-24">
                                <Image width={50} src={logo2} alt="PortISTAD Logo" />
                                <span className="ml-5 self-center text-blue-800 text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-blue-800">PortISTAD</span>
                            </a>
                        </div>
                        <div className='w-1/2'>
                            <form className='w-full'>
                                <input type='search' placeholder='Search' className='w-full rounded-full px-5' />
                            </form>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ml-3">
                                <div>
                                    <button type="button" className="flex justify-center item-center text-sm" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <span className="sr-only">Open user menu</span>
                                        <img src={user.avatar} className='w-10 h-auto rounded-[50%]' alt="user image" />
                                        <div className='grid text-start ml-5'>
                                            <p className='text-black dark:text-white'>{user.name}</p>
                                            <p className='text-black dark:text-white'>{user.email}</p>
                                        </div>
                                    </button>
                                </div>
                                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">

                                    <ul className="py-1" role="none">
                                        <li>
                                            <a href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href={`/profile/${user.id}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Profile</a>
                                        </li>
                                        <li>
                                            <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">sign in</a>
                                        </li>
                                        <li>
                                            <a href="/" onClick={resetUser} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
}