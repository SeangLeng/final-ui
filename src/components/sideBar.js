"use client"
import Link from 'next/link'
import React from 'react'

export default function SideBar() {
    
    return (
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 grid gap-5 font-medium">
                    <li>
                        <span className="ml-3 text-gray-500">Dashboard</span>
                    </li>
                    <li>
                        <Link href="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2216 4.60324L3.50028 10.366V16.5858C3.50028 16.7468 3.56173 16.9013 3.67112 17.0151C3.78051 17.129 3.92887 17.193 4.08356 17.193L8.16877 17.182C8.32296 17.1812 8.47058 17.1169 8.57933 17.0031C8.68809 16.8893 8.74914 16.7353 8.74914 16.5748V12.9425C8.74914 12.7815 8.8106 12.627 8.91998 12.5132C9.02937 12.3993 9.17773 12.3353 9.33243 12.3353H11.6656C11.8203 12.3353 11.9686 12.3993 12.078 12.5132C12.1874 12.627 12.2489 12.7815 12.2489 12.9425V16.5721C12.2486 16.652 12.2635 16.7312 12.2927 16.8051C12.322 16.879 12.3649 16.9461 12.4191 17.0027C12.4733 17.0593 12.5376 17.1042 12.6085 17.1348C12.6794 17.1655 12.7554 17.1812 12.8322 17.1812L16.9159 17.193C17.0706 17.193 17.219 17.129 17.3284 17.0151C17.4377 16.9013 17.4992 16.7468 17.4992 16.5858V10.3619L10.7794 4.60324C10.7004 4.53695 10.6019 4.5008 10.5005 4.5008C10.399 4.5008 10.3006 4.53695 10.2216 4.60324ZM20.8385 8.52013L17.7908 5.90495V0.648401C17.7908 0.527619 17.7448 0.411785 17.6627 0.326379C17.5807 0.240974 17.4694 0.192993 17.3534 0.192993H15.3119C15.1958 0.192993 15.0846 0.240974 15.0025 0.326379C14.9205 0.411785 14.8744 0.527619 14.8744 0.648401V3.404L11.6105 0.608553C11.2973 0.340234 10.9043 0.19353 10.4986 0.19353C10.093 0.19353 9.69997 0.340234 9.38675 0.608553L0.158763 8.52013C0.114465 8.55824 0.0778157 8.60507 0.0509086 8.65794C0.0240015 8.7108 0.00736429 8.76867 0.00194751 8.82823C-0.00346927 8.88779 0.00244057 8.94788 0.0193394 9.00506C0.0362382 9.06225 0.0637947 9.1154 0.100435 9.16149L1.03005 10.338C1.06659 10.3842 1.11153 10.4225 1.16231 10.4507C1.21309 10.4788 1.2687 10.4963 1.32596 10.502C1.38322 10.5077 1.441 10.5017 1.49601 10.4841C1.55102 10.4666 1.60216 10.438 1.64651 10.3998L10.2216 3.04726C10.3006 2.98097 10.399 2.94482 10.5005 2.94482C10.6019 2.94482 10.7004 2.98097 10.7794 3.04726L19.3548 10.3998C19.3991 10.438 19.4501 10.4667 19.5051 10.4842C19.56 10.5018 19.6177 10.508 19.6749 10.5024C19.7321 10.4967 19.7877 10.4794 19.8385 10.4514C19.8893 10.4234 19.9343 10.3852 19.9709 10.3391L20.9005 9.16263C20.9371 9.11627 20.9645 9.06284 20.9812 9.00541C20.9979 8.94798 21.0036 8.88768 20.9978 8.82797C20.9921 8.76826 20.975 8.71033 20.9477 8.6575C20.9203 8.60467 20.8832 8.55799 20.8385 8.52013Z" fill="#6B7280" />
                            </svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/management" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Management</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/addnewuser" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Add user</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/generate" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg width="23" height="23" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.62413 12.062H4.29724C1.2864 12.062 0 10.7756 0 7.76476V4.43786C0 1.42702 1.2864 0.140625 4.29724 0.140625H5.4062C5.63354 0.140625 5.82206 0.329149 5.82206 0.556487C5.82206 0.783824 5.63354 0.972348 5.4062 0.972348H4.29724C1.74107 0.972348 0.831723 1.8817 0.831723 4.43786V7.76476C0.831723 10.3209 1.74107 11.2303 4.29724 11.2303H7.62413C10.1803 11.2303 11.0896 10.3209 11.0896 7.76476V6.65579C11.0896 6.42845 11.2782 6.23993 11.5055 6.23993C11.7328 6.23993 11.9214 6.42845 11.9214 6.65579V7.76476C11.9214 10.7756 10.635 12.062 7.62413 12.062Z" fill="#6D6D6D" />
                                <path d="M4.01985 9.25572C3.68161 9.25572 3.3711 9.13373 3.14377 8.91194C2.87207 8.64024 2.75563 8.24656 2.81662 7.8307L3.05505 6.16171C3.09941 5.84011 3.31011 5.42424 3.53745 5.19691L7.90674 0.827565C9.01016 -0.275855 10.1302 -0.275855 11.2336 0.827565C11.838 1.43195 12.1097 2.04743 12.0543 2.6629C12.0044 3.16193 11.7382 3.64988 11.2336 4.14891L6.86431 8.51826C6.63698 8.74559 6.22111 8.9563 5.89951 9.00066L4.23055 9.23908C4.15847 9.25572 4.08638 9.25572 4.01985 9.25572ZM8.49449 1.41532L4.1252 5.78466C4.01985 5.89001 3.89786 6.13398 3.87568 6.27815L3.63725 7.94714C3.61507 8.10794 3.64834 8.24101 3.73152 8.32419C3.81469 8.40736 3.94776 8.44063 4.10856 8.41845L5.77753 8.18002C5.92169 8.15784 6.17121 8.03586 6.27102 7.9305L10.6403 3.56116C11.0008 3.20075 11.1893 2.87915 11.217 2.57973C11.2503 2.21932 11.0617 1.83672 10.6403 1.40977C9.75317 0.5226 9.14323 0.772117 8.49449 1.41532Z" fill="#6D6D6D" />
                                <path d="M10.3138 4.89727C10.2749 4.89727 10.2361 4.89172 10.2029 4.88063C8.74457 4.47032 7.5857 3.31145 7.17538 1.85316C7.11439 1.63137 7.24192 1.40403 7.46371 1.33749C7.68551 1.2765 7.91284 1.40403 7.97384 1.62582C8.30652 2.80687 9.2436 3.74394 10.4246 4.07663C10.6464 4.13763 10.774 4.37051 10.713 4.5923C10.6631 4.78083 10.4967 4.89727 10.3138 4.89727Z" fill="#6D6D6D" />
                            </svg>


                            <span className="flex-1 ml-3 whitespace-nowrap">Generate</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/message" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.9167 0H2.08333C0.93316 0 0 1.00781 0 2.25V18.75C0 19.9922 0.93316 21 2.08333 21H22.9167C24.0668 21 25 19.9922 25 18.75V2.25C25 1.00781 24.0668 0 22.9167 0ZM7.63889 4.5C9.17101 4.5 10.4167 5.84531 10.4167 7.5C10.4167 9.15469 9.17101 10.5 7.63889 10.5C6.10677 10.5 4.86111 9.15469 4.86111 7.5C4.86111 5.84531 6.10677 4.5 7.63889 4.5ZM12.5 15.6C12.5 16.0969 12.066 16.5 11.5278 16.5H3.75C3.21181 16.5 2.77778 16.0969 2.77778 15.6V14.7C2.77778 13.2094 4.0842 12 5.69444 12H5.91146C6.44531 12.2391 7.02691 12.375 7.63889 12.375C8.25087 12.375 8.83681 12.2391 9.36632 12H9.58333C11.1936 12 12.5 13.2094 12.5 14.7V15.6ZM22.2222 13.125C22.2222 13.3313 22.066 13.5 21.875 13.5H15.625C15.434 13.5 15.2778 13.3313 15.2778 13.125V12.375C15.2778 12.1687 15.434 12 15.625 12H21.875C22.066 12 22.2222 12.1687 22.2222 12.375V13.125ZM22.2222 10.125C22.2222 10.3313 22.066 10.5 21.875 10.5H15.625C15.434 10.5 15.2778 10.3313 15.2778 10.125V9.375C15.2778 9.16875 15.434 9 15.625 9H21.875C22.066 9 22.2222 9.16875 22.2222 9.375V10.125ZM22.2222 7.125C22.2222 7.33125 22.066 7.5 21.875 7.5H15.625C15.434 7.5 15.2778 7.33125 15.2778 7.125V6.375C15.2778 6.16875 15.434 6 15.625 6H21.875C22.066 6 22.2222 6.16875 22.2222 6.375V7.125Z" fill="#6B7280" />
                            </svg>

                            <span className="flex-1 ml-3 whitespace-nowrap">Message</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
