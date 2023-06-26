'use client'
import Link from 'next/link';
import "../productsListStyle.css"
import React, { useEffect, useState } from 'react'
import secureLocalStorage from 'react-secure-storage';

export async function fetchGatgory() {
    const req = await fetch("https://run.mocky.io/v3/cf2adc10-0003-45a7-9d97-70902bbf2c65")
    const res = await req.json();
    return res;
}

export default function Portfoio() {
    const item = secureLocalStorage.getItem("user" || "")
    const user = JSON.parse(item);
    const [gateGory, setGate] = useState([])
    useEffect(() => {
        fetchGatgory().then(res => setGate(res));
    }, [])

    const handleClick = () => {
        if (!JSON.parse(secureLocalStorage.getItem("user"))) {
            window.location = "/login"
        }
    }

    return (
        <>
            {
                gateGory.map(e => (

                    <Link href={`/generate/${e.id}`} className='w-1/6'>
                        <div className='products w-full'>
                            <img src={e ? `${e.image}` : `https://schooloflanguages.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg`} className='w-[100%]' />
                            <div className='text-center mt-1'>{e ? `${e.name}` : `name`}</div>
                        </div>
                    </Link>
                ))
            }
        </>
    )
}
