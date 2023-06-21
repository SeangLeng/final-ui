"use client"
import secureLocalStorage from 'react-secure-storage'
import { usePathname } from "next/navigation";
import Link from 'next/link';

export default function ProfileAside() {
    const getuser = secureLocalStorage.getItem("user")
    const profile = JSON.parse(getuser)
    const pathname = usePathname();
    try {
        return (
            <div>
                <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="absolute top-24 items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
                <aside id="logo-sidebar" className="rounded-tr-xl mt-10 fixed top-24 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-blue-800 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                    <div className="h-full pb-4 overflow-y-auto bg-blue-800 dark:bg-gray-800">
                        <div className='flex mx-3 item-center justify-start gap-5 mb-10'>
                            <img className='w-[62px] rounded-[50%]' src={profile ? `${profile.avatar}` : `https://schooloflanguages.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg`} />
                            <div className='text-white dark:text-white'>
                                <div>User's name</div>
                                {/* <div>{profile ? `${profile.name}` : "Profile - name"}</div> */}
                                {/* <div>{profile ? `${profile.email}` : "email - user"}</div> */}
                                <div>User's email</div>
                            </div>
                        </div>

                        <div className="sidebar font-medium">
                            <div>
                                <Link href="#" className={
                                    pathname === "/information"
                                        ? 'text-white dark:text-white flex items-center bg-[#00000048] border-r-white border-r-8 hover:bg-[#00000048] hover:border-r-white hover:border-r-8'
                                        : 'hover:bg-[#00000048] hover:border-r-white hover:border-r-8 bg-none text-white flex items-center'
                                }>
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-white " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">information</span>
                                </Link>
                            </div>
                            <div>
                                <Link href="/listProducts" className={
                                    pathname === "/listProducts"
                                        ? 'text-white dark:text-white flex items-center bg-[#00000048] border-r-white border-r-8 hover:bg-[#00000048] hover:border-r-white hover:border-r-8'
                                        : 'hover:bg-[#00000048] hover:border-r-white hover:border-r-8 bg-none text-white flex items-center'
                                }>
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-white " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">CV template</span>
                                </Link>
                            </div>
                            <div>
                                <Link href="/listProducts/portfoio" className={
                                    pathname === "/listProducts/portfoio"
                                        ? 'text-white dark:text-white flex items-center bg-[#00000048] border-r-white border-r-8 hover:bg-[#00000048] hover:border-r-white hover:border-r-8'
                                        : 'hover:bg-[#00000048] hover:border-r-white hover:border-r-8 bg-none text-white flex items-center'
                                }>
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-white " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Portfolio template</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        )
    } catch (err) {
        console.log("You got error something")
    }
}
