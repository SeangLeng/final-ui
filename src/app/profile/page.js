'use client'
import React, { useEffect, useState } from 'react'
import './studentDetail.css'
import Link from 'next/link';
import { setCurrentUser } from '@/store/features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation';
import { useGetUserQuery } from '@/store/features/user/userApiSlice';
import { API } from '../api/constant';


export default function ProfileDetail({ params }) {
    const dispatch = useDispatch();
    const pathname = usePathname();
    if (pathname === "/login") {
        return null;
    }

    const {
        data: user,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetUserQuery();

    let content = null;

    useEffect(() => {
        if (isSuccess) {
            dispatch(setCurrentUser(user));
        }
    }, [user]);

    if (isSuccess) {
        content = (
            <div className='mt-32 flex justify-between item-center px-[10%]'>
                <div className='profile-detail grid p-5 w-1/4 relative'>
                    <img className='w-1/3 m-auto rounded-full mb-10' src={user.data.profile ? `${user.data.profile}` : "https://schooloflanguages.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"} alt='profile-picture' />
                    <Link href={`/input`}>
                        <svg className='absolute top-8 right-6 z-10' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" /></svg>
                    </Link>
                    <p className='text-center text-4xl font-semibold'>{user.data.username}</p>
                    <p className='text-center'>{user.data.position}</p>
                    <div className='bg-[#F9FAFF] grid p-8 gap-3 rounded-lg mt-10'>
                        <a href='#' className='text-xl'><span>Email: </span> {user.data.username}</a>
                        <a href='#' className='text-xl'><span>Telephone: </span>{user.data.phone}</a>
                        <a href='#' className='text-xl'><span>Address: </span>{user.data.location}</a>
                        <div className='mt-10 flex flex-wrap gap-5'>
                            {user.data.skills?.map(skill => (
                                <span className='text-center cursor-pointer hover:bg-gray-100 transition-all p-2 w-fit bg-white border border-black rounded-lg'>{skill.name}</span>
                            ))}
                        </div>
                    </div>

                </div>
                <div className='owerList w-3/4'>
                    {
                        user.data.resumeId?.map(template => (
                            <a href='#'>
                                <div className='w-72 ml-10'>
                                    <img className='w-full' src={template.data.url} alt='profile piciture' />
                                    <p className='text-center'>name</p>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        )
    } else if (isLoading) {
        content = (
            <div className="flex min-h-screen flex-col items-center justify-between p-24">
                Loading...
            </div>
        );
    } else if (isError) {
        content = (
            <h1> back </h1>
        )
    }

    return content;
}
