'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const fetchMessage = async () => {
  const req = await fetch("", { cache: 'force-cache' })
  const response = await req.json();
  return response;
}

export default function Message() {
  const [message, getmessage] = useState([])

  useEffect(() => {
    fetch("https://run.mocky.io/v3/b5895921-48f0-4170-ac15-9a97e3f1fe51", { cache: 'force-cache' })
      .then((response) => response.json()).then((response => getmessage(response)));
  }, [])

  return (
    <section>
      <p className='text-2xl font-semibold'>Message receiver</p>
      <div className='messages mt-10'>
        {
          message.map(e => (
            <Link href={`/dashboard/message/${e.id}`}>
              <div className={(e.id === 1) ? `font-semibold bg-gray w-full bg-gray-100 p-5 rounded-xl mb-2` : 'bg-gray w-full bg-gray-100 p-5 rounded-xl mb-2'}>
                <p className='text-lg'>{e.name} messaged to PortISTAD</p>
              </div>
            </Link>
          ))
        }
      </div>
    </section>
  )
}
