'use client'
import Link from 'next/link';
import "../productsListStyle.css"
import React, { useEffect, useState } from 'react'
import secureLocalStorage from 'react-secure-storage';
import { useGetUserQuery } from '@/store/features/user/userApiSlice';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '@/store/features/auth/authSlice';

export async function fetchGatgory() {
    const req = await fetch("https://run.mocky.io/v3/cf2adc10-0003-45a7-9d97-70902bbf2c65")
    const res = await req.json();
    return res;
}

export default function Portfoio() {
    const dispatch = useDispatch();

    const {
        data: user,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetUserQuery();

    useEffect(() => {
        if (isSuccess) {
            dispatch(setCurrentUser(user));
        }
    }, [user]);

    const [gateGory, setGate] = useState([])
    useEffect(() => {
        fetchGatgory().then(res => setGate(res));
    }, [])

    let content = null;

    if (isSuccess) {
        content = (
            gateGory.map(e => (

                <a href={`/generate/${e.id}`} className='w-full lg:w-1/6 md:w-1/3'>
                    <div className='products w-full'>
                        <img src={e ? `${e.image}` : `https://schooloflanguages.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg`} className='w-[100%]' />
                        <div className='text-center mt-1'>{e ? `${e.name}` : `name`}</div>
                    </div>
                </a>

            ))
        )
    } else if (isError) {
        content = (
            gateGory.map(e => (

                <a href={`/login`} className='w-full lg:w-1/6 md:w-1/3'>
                    <div className='products w-full'>
                        <img src={e ? `${e.image}` : `https://schooloflanguages.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg`} className='w-[100%]' />
                        <div className='text-center mt-1'>{e ? `${e.name}` : `name`}</div>
                    </div>
                </a>

            ))
        )
    }
    return content;
}
