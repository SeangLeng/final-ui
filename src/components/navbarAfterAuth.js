import React from 'react'

export default function NavbarAfterAuth() {
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
                                    <li>
                                        <a href='/dashboard' className="block px-4 py-2 text-white  hover:bg-gray-400  dark:hover:bg-gray-600">Dashboard</a>
                                    </li>
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
                </div>
            </div>
        </nav>
    )
}
