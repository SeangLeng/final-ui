"use client"
import React, { useEffect, useState } from 'react'
import "./dashboardStyle.css"
import BarChart from '@/components/barChart'
import PeiChart from '@/components/Peichart'
import secureLocalStorage from 'react-secure-storage'

export const fetchUser = async () => {
    const req = await fetch('https://api.escuelajs.co/api/v1/users')
    const res = await req.json();
    return res;
}

export default function page() {
    const [user, getUser] = useState([]);
    console.log(user)

    useEffect(() => {
        fetchUser().then(res => getUser(res));
    }, [])

    let adminFetched = [];
    user.map((item) => {
        if (item.role === "admin") {
            adminFetched.push(item)
        }
    })

    let date = new Date()

    return (
        <section className='grid gap-10'>
            <div className='flex flex-1 justify-between gap-5'>
                <div className='generation p-5 text-white flex justify-between w-1/3'>
                    <div className='grid gap-2 font-medium text-xl w-2/3'>
                        <p className='text-2xl'>Generation</p>
                        <p className='text-3xl'>1</p>
                        <p>{date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()}</p>
                    </div>
                    <div className='w-[62px]'>
                        <svg width="100%" height="auto" viewBox="0 0 71 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_336_299)">
                                <path d="M70.4021 31.3331C70.4021 14.0686 56.3335 0 39.0689 0C21.8044 0 7.73581 14.0686 7.73581 31.3331C7.73581 40.4197 11.6524 48.5977 17.8564 54.3316C17.8564 54.363 17.8564 54.363 17.8251 54.3943C18.1384 54.7076 18.5144 54.9583 18.8277 55.2403C19.0157 55.397 19.1724 55.5536 19.3604 55.679C19.9244 56.149 20.5511 56.5876 21.1464 57.0263C21.3657 57.183 21.5537 57.3083 21.773 57.4649C22.3684 57.8723 22.995 58.2483 23.653 58.5929C23.8724 58.7183 24.123 58.8749 24.3424 59.0003C24.969 59.3449 25.627 59.6583 26.3164 59.9403C26.567 60.0656 26.8177 60.1909 27.0683 60.2849C27.7577 60.5669 28.447 60.8176 29.1363 61.0369C29.387 61.1309 29.6377 61.2249 29.8883 61.2876C30.6403 61.5069 31.3923 61.6949 32.1443 61.8829C32.3636 61.9456 32.583 62.0082 32.8336 62.0396C33.711 62.2276 34.5883 62.3529 35.497 62.4469C35.6223 62.4469 35.7476 62.4782 35.873 62.5096C36.9383 62.6036 38.0036 62.6662 39.0689 62.6662C40.1343 62.6662 41.1996 62.6036 42.2336 62.5096C42.3589 62.5096 42.4842 62.4782 42.6096 62.4469C43.5182 62.3529 44.3956 62.2276 45.2729 62.0396C45.4922 62.0082 45.7116 61.9142 45.9622 61.8829C46.7142 61.6949 47.4975 61.5383 48.2182 61.2876C48.4689 61.1936 48.7195 61.0996 48.9702 61.0369C49.6595 60.7863 50.3802 60.5669 51.0382 60.2849C51.2888 60.1909 51.5395 60.0656 51.7902 59.9403C52.4482 59.6583 53.1062 59.3449 53.7642 59.0003C54.0148 58.8749 54.2342 58.7183 54.4535 58.5929C55.0802 58.2169 55.7068 57.8723 56.3335 57.4649C56.5528 57.3396 56.7408 57.183 56.9601 57.0263C57.5868 56.5876 58.1821 56.149 58.7461 55.679C58.9341 55.5223 59.0908 55.3656 59.2788 55.2403C59.6235 54.9583 59.9681 54.6763 60.2815 54.3943C60.2815 54.363 60.2815 54.363 60.2501 54.3316C66.4854 48.5977 70.4021 40.4197 70.4021 31.3331ZM54.5475 46.9057C46.0562 41.2031 32.1443 41.2031 23.5904 46.9057C22.2117 47.8143 21.0837 48.8797 20.1437 50.039C15.3811 45.2137 12.4358 38.6024 12.4358 31.3331C12.4358 16.6379 24.3737 4.69997 39.0689 4.69997C53.7642 4.69997 65.7021 16.6379 65.7021 31.3331C65.7021 38.6024 62.7568 45.2137 57.9941 50.039C57.0855 48.8797 55.9262 47.8143 54.5475 46.9057Z" fill="white" />
                                <path d="M39.0689 15.4463C32.583 15.4463 27.319 20.7102 27.319 27.1962C27.319 33.5568 32.301 38.7268 38.9123 38.9148H39.1943H39.4136H39.4763C45.8056 38.6955 50.7875 33.5568 50.8189 27.1962C50.8189 20.7102 45.5549 15.4463 39.0689 15.4463Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_336_299">
                                    <rect width="69.7605" height="62.6662" fill="white" transform="translate(0.64151)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className='all-user p-5 text-white flex justify-between w-1/3'>
                    <div className='grid gap-2 font-medium text-xl w-2/3'>
                        <p className='text-2xl'>All Users</p>
                        <p className='text-3xl'>745</p>
                        <p>{date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()}</p>
                    </div>
                    <div className='w-[62px]'>
                        <svg width="100%" height="aut0" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_336_351)">
                                <path d="M44 45.875C53.627 45.875 61.4375 38.0645 61.4375 28.4375C61.4375 18.8105 53.627 11 44 11C34.373 11 26.5625 18.8105 26.5625 28.4375C26.5625 38.0645 34.373 45.875 44 45.875ZM59.5 49.75H52.8277C50.1395 50.9852 47.1484 51.6875 44 51.6875C40.8516 51.6875 37.8727 50.9852 35.1723 49.75H28.5C19.9387 49.75 13 56.6887 13 65.25V67.1875C13 70.3965 15.6035 73 18.8125 73H69.1875C72.3965 73 75 70.3965 75 67.1875V65.25C75 56.6887 68.0613 49.75 59.5 49.75Z" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_d_336_351" x="-7" y="0" width="99" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="2" dy="4" />
                                    <feGaussianBlur stdDeviation="7.5" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.19 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_336_351" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_336_351" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className='all-student p-5 text-white flex justify-between w-1/3'>
                    <div className='grid gap-2 font-medium text-xl w-2/3'>
                        <p className='text-2xl'>All students</p>
                        <p className='text-3xl'>435</p>
                        <p>{date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()}</p>
                    </div>
                    <div className='w-[62px]'>
                        <svg width="100%" height="auto" viewBox="0 0 60 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.983 20.5C23.6894 20.5 28.308 15.915 28.308 10.25C28.308 4.58504 23.6894 0 17.983 0C12.2766 0 7.65796 4.58504 7.65796 10.25C7.65796 15.915 12.2766 20.5 17.983 20.5ZM25.063 23.4286H24.2978C22.3803 24.3438 20.2508 24.8929 17.983 24.8929C15.7151 24.8929 13.5948 24.3438 11.6681 23.4286H10.903C5.03983 23.4286 0.282959 28.1509 0.282959 33.9714V36.6071C0.282959 39.0324 2.26499 41 4.70796 41H31.258C33.7009 41 35.683 39.0324 35.683 36.6071V33.9714C35.683 28.1509 30.9261 23.4286 25.063 23.4286ZM44.533 20.5C49.4189 20.5 53.383 16.5647 53.383 11.7143C53.383 6.86384 49.4189 2.92857 44.533 2.92857C39.647 2.92857 35.683 6.86384 35.683 11.7143C35.683 16.5647 39.647 20.5 44.533 20.5ZM48.958 23.4286H48.6076C47.3262 23.8679 45.9711 24.1607 44.533 24.1607C43.0948 24.1607 41.7397 23.8679 40.4583 23.4286H40.108C38.2273 23.4286 36.4942 23.9685 34.9731 24.8379C37.2225 27.2449 38.633 30.4388 38.633 33.9714V37.4857C38.633 37.6871 38.5869 37.8792 38.5776 38.0714H54.858C57.3009 38.0714 59.283 36.1038 59.283 33.6786C59.283 28.0136 54.6644 23.4286 48.958 23.4286Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='w-2/3 bg-white shadow-lg rounded-xl'>
                    <BarChart />
                </div>
                <div className='w-1/3 bg-white shadow-lg rounded-xl'>
                    <PeiChart />
                </div>
            </div>
            <div className='grid gap-10'>
                <p className='font-semibold text-4xl'>Super Admins</p>
                <div className='lg:flex sm:grid flex-wrap w-full'>
                    {
                        adminFetched.map(item => (
                            <div className='w-1/3 p-10 grid justify-center item-center bg-white shadow-lg rounded-lg'>
                                <img src={item.avatar} className='rounded-full m-auto' width={100} height={100} alt="profile admin" />
                                <p className='text-lg text-black dark:text-black text-center mt-5'>{item.name}</p>
                                <p className='text-lg text-black dark:text-black text-center'>{item.email}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    )
    // else {

    //     setTimeout(() => {
    //         window.location = '/login'
    //     }, 1000)

    //     return "log in first"
    // }
}
