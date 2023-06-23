'use client'

import React from 'react'
import { message } from './jsonTesting'
import "./styleMessage.css"
import { useRouter } from "next/navigation";

export default function MessageReceiver() {
    const router = useRouter();
    return (
        <div>
            <p className='text-xl'>samnang Message </p>
            <p className='text-lg mt-5'>Dear admin</p>
            <p className='mt-5 text-lg'>{message.message}</p>
            <p className='mt-3'>{message.name}: {message.telephone}</p>
            <button className='text-white px-5 py-3 mt-5' onClick={() => {
                router.back();
            }}>
                Response
            </button>
        </div>
    )
}
