'use client'
import React, { useEffect, useState } from 'react'
import '../studentDetail.css'
import Link from 'next/link';

async function fetchUser(id) {
    const request = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
    return request.json();
}

export default function ProfileDetail({ params }) {
    const { id } = params;
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        fetchUser(id).then(res => setProfile(res));
    }, [])
    return (
        <section className='mt-32 flex justify-between item-center px-[10%]'>
            <div className='profile-detail grid p-5 w-1/4 relative'>
                <img className='w-1/3 m-auto rounded-full mb-10' src={profile.avatar ? `${profile.avatar}` : "https://schooloflanguages.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"} alt='profile-picture' />
                <Link href={`/input/${id}`}>
                    <svg className='absolute top-8 right-6 z-10' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" /></svg>
                </Link>
                <p className='text-center text-4xl font-semibold'>{profile.name}</p>
                <p className='text-center'>{profile.email}</p>
                <p className='text-center mt-5'>"Description"</p>
                <div className='bg-[#F9FAFF] grid p-8 gap-3 rounded-lg mt-10'>
                    <a href='#' className='text-xl'><span>Email: </span> {profile.email}</a>
                    <a href='#' className='text-xl'><span>Telephone: </span>8745238745</a>
                    <a href='#' className='text-xl'><span>Address: </span>Phnom penh</a>
                    <div className='mt-10 flex flex-wrap gap-5'>
                        <span className='text-center cursor-pointer hover:bg-gray-100 transition-all p-2 w-fit bg-white border border-black rounded-lg'>next js</span>
                        <span className='text-center cursor-pointer hover:bg-gray-100 transition-all p-2 w-fit bg-white border border-black rounded-lg'>react js</span>
                        <span className='text-center cursor-pointer hover:bg-gray-100 transition-all p-2 w-fit bg-white border border-black rounded-lg'>HTML</span>
                        <span className='text-center cursor-pointer hover:bg-gray-100 transition-all p-2 w-fit bg-white border border-black rounded-lg'>CSS</span>
                        <span className='text-center cursor-pointer hover:bg-gray-100 transition-all p-2 w-fit bg-white border border-black rounded-lg'>Python</span>
                    </div>
                </div>

            </div>
            <div className='owerList w-3/4'>
                <a href='#'>
                    <div className='w-72 ml-10'>
                        <img className='w-full' src={profile.avatar ? `${profile.avatar}` : "https://schooloflanguages.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"} alt='profile piciture' />
                        <p className='text-center'>name</p>
                    </div>
                </a>
            </div>
        </section>
    )
}
