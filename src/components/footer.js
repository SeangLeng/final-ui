'use client'
import logo2 from "/src/app/images/logo-project.jpg"
import Image from "next/image"
import Link from "next/link"
import ImageBg from '../app/images/background_footer.png'
import { useEffect, useState } from "react"
export default function Footer() {
    const [check, setUrl] = useState([]);
    useEffect(() => {
        setUrl(url);
    })
    let url;
    if (typeof window !== "undefined") {
        url = window.location;
    }

    if (check.pathname === "/") {
        return (
            <div className="relative w-full">
                <Image src={ImageBg} alt="background-image" className="absolute -z-10 bottom-0 right-0 w-full" width={"100%"} height={"100%"} />
                <footer className="block bg-blue-800 w-full px-20 py-10 mt-20">
                    <div className="w-full">
                        <div className="w-full lg:flex lg:justify-between lg:items-start md:grid md:justify-between md:items-start ">
                            <div className="mb-6 md:mb-0">
                                <a href="/" className="flex items-center gap-5">
                                    <Image src={logo2} width={100} className="rounded-[50%]" alt="portISTAD logo" />
                                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">PORTISTAD</span>
                                </a>
                            </div>
                            <div className="lg:flex justify-between sm:grid gap-10 flex-wrap">
                                <div>
                                    <h2 className="mb-6 text-xl font-semibold uppercase dark:text-white text-white">Service</h2>
                                    <ul className="text-gray-600 dark:text-gray-400 text-xl">
                                        <li className="mb-4">
                                            <Link href="/listProducts" className="hover:underline text-white">Generate CV</Link>
                                        </li>
                                        <li>
                                            <Link href="/listProducts/portfoio" className="hover:underline text-white">Generate Portfoio</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="lg:w-1/3 sm:w-full">
                                    <h2 className="mb-6 text-xl font-semibold uppercase dark:text-white text-white">Contact us</h2>
                                    <ul className="text-gray-600 dark:text-gray-400 text-xl">
                                        <li className="mb-4">
                                            <span className="text-white dark:text-white">Address:</span> <Link href="https://goo.gl/maps/exgkEjKXrybPPP3x7" className="hover:underline text-white"> 24, St 562, Phnom Penh 120407, Phnom Penh, Cambodia</Link>
                                        </li>
                                        <li>
                                            <Link href="https://istad.io" className="hover:underline text-white">Website: istad.co</Link>
                                        </li>
                                        <li className="w-1/2">
                                            <span className="text-white dark:text-white">Email: </span><Link href="mailto:info.istad@gmail.com" className="hover:underline text-white">mailto:info.istad@gmail.com</Link>
                                        </li>
                                        <li>
                                            <span className="text-white dark:text-white">Phone: </span><Link href="tel:(+855) 93-990-910" className="hover:underline text-white">(+855) 93-990-910</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-xl font-semibold text-white uppercase dark:text-white ">Learn more</h2>
                                    <ul className="text-gray-600 dark:text-gray-400 text-xl">
                                        <li className="mb-4">
                                            <a href="#aboutUs" className="hover:underline text-white">About us</a>
                                        </li>
                                        <li>
                                            <a href="#contactUs" className="hover:underline text-white">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="sm:flex sm:items-center sm:justify-end mt-20">
                            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                                <a href="https://web.facebook.com/istad.co" className="text-white hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                    <span className="sr-only">Facebook page</span>
                                </a>
                                <a href="https://www.youtube.com/@istad7665" className="text-white hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-7 h-7" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path d="M23.8569 2.77476C23.5842 1.74829 22.781 0.939865 21.7612 0.665516C19.9127 0.166992 12.5003 0.166992 12.5003 0.166992C12.5003 0.166992 5.08798 0.166992 3.23941 0.665516C2.21957 0.939909 1.41636 1.74829 1.14375 2.77476C0.648438 4.63531 0.648438 8.51717 0.648438 8.51717C0.648438 8.51717 0.648438 12.399 1.14375 14.2596C1.41636 15.286 2.21957 16.0608 3.23941 16.3351C5.08798 16.8337 12.5003 16.8337 12.5003 16.8337C12.5003 16.8337 19.9126 16.8337 21.7612 16.3351C22.781 16.0608 23.5842 15.286 23.8569 14.2596C24.3522 12.399 24.3522 8.51717 24.3522 8.51717C24.3522 8.51717 24.3522 4.63531 23.8569 2.77476ZM10.076 12.0416V4.99273L16.2713 8.51725L10.076 12.0416Z" fill="white" />
                                    </svg>
                                    <span className="sr-only">Youtube page</span>
                                </a>
                                <a href="https://web.telegram.org/a/#-1805474684" className="text-white hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-7 h-7" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path d="M12.5 0.390625C5.81055 0.390625 0.390625 5.81055 0.390625 12.5C0.390625 19.1895 5.81055 24.6094 12.5 24.6094C19.1895 24.6094 24.6094 19.1895 24.6094 12.5C24.6094 5.81055 19.1895 0.390625 12.5 0.390625ZM18.4473 8.68652L16.46 18.0518C16.3135 18.7158 15.918 18.877 15.3662 18.5645L12.3389 16.333L10.8789 17.7393C10.7178 17.9004 10.5811 18.0371 10.2686 18.0371L10.4834 14.9561L16.0938 9.8877C16.3379 9.67285 16.04 9.55078 15.7178 9.76562L8.78418 14.1309L5.7959 13.1982C5.14648 12.9932 5.13184 12.5488 5.93262 12.2363L17.6074 7.73437C18.1494 7.53906 18.623 7.86621 18.4473 8.68652Z" fill="white" />
                                    </svg>
                                    <span className="sr-only">Telegram chat</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        )
    }

}