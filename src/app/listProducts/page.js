'use client'
import Link from 'next/link';
import "../listProducts/productsListStyle.css"
import React, { useEffect, useState } from 'react'
import secureLocalStorage from 'react-secure-storage';

export async function fetchGatgory() {
    const req = await fetch("https://run.mocky.io/v3/d2be799d-f768-40b4-ba9a-f94a205472d1", { cache: 'force-cache' })
    const res = await req.json();
    return res;
}

export default function CVList() {
    const item = secureLocalStorage.getItem("user")
    const user = JSON.parse(item);

    const [gateGory, setGate] = useState([])
    useEffect(() => {
        fetchGatgory().then(res => setGate(res));
    }, [])

    return (
        <>
            {
                gateGory.map(e => (

                    <Link href={`/generate/${e.id}`} className='w-full lg:w-1/6 md:w-1/3'>
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
