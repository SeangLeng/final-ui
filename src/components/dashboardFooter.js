"use client"
import Image from 'next/image'
import React from 'react'
import logo from "@/app/images/logo-project.jpg"

export default function DashboardFooter() {
    return (
        <footer className="fixed bottom-0 left-0 z-40 w-full bg-white px-6 border-t border-gray-200 shadow md:flex md:items-center md:justify-between dark:bg-gray-800 dark:border-gray-600">
            <div className='flex gap-5 justify-center items-center'>
                <Image src={logo} alt='logo' width={50} height={50} />
                <p className='text-blue-800 font-semibold text-2xl'>PortISTAD</p>
            </div>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="/" className="mr-4 hover:underline md:mr-6">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="/" className="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>
    )
}
