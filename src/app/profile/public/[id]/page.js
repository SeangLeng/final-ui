'use client'
import React, { useEffect, useState } from 'react'
import '../../studentDetail.css'
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
