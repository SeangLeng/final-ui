'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

export const fetchingUser = async () => {
    const req = await fetch('https://api.escuelajs.co/api/v1/users', {cache: 'force-cache'})
    const res = await req.json();
    return res;
}

export default function ManagementPage() {
    const [data, getUser] = useState([])
    const [search, setSearch] = useState([])
    useEffect(() => {
        fetchingUser().then(res => getUser(res))
        fetchingUser().then(res => setSearch(res))
    }, [])

    const removeUser = (id) => {
        const newState = [...data];
        const index = newState.findIndex(res => res.id === id);
        newState.splice(index, 1);
        console.log("Array deleted : ", newState.splice(index, 1))
        getUser(newState)
        setSearch(newState)
    }

    const columns = [
        {
            name: 'Name',
            selector: row =>
                <div className='p-2 flex justify-center items-center gap-5'>
                    <img src={row.avatar} width={50} height={50} className='rounded-full' />
                    <span className='grid gap-1'>
                        <p>{row.name}</p>
                        <p>{row.email}</p>
                    </span>
                </div>
            ,
        },
        {
            name: 'Role',
            selector: row => row.role,
        },
        {
            name: "Generation",
            selector: row => row.creationAt,
        },
        {
            name: "Action",
            selector: row => (
                <div className='flex gap-10 justify-center items-start'>
                    <Link href={`/dashboard/profileDetail/${row.id}`} type="button">
                        <svg width="28" height="28" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1037_234)">
                                <path d="M18.4141 5.33089L22.3291 9.24582C22.494 9.41075 22.494 9.67985 22.3291 9.84478L12.8499 19.3239L8.82213 19.771C8.28394 19.8318 7.82821 19.376 7.88897 18.8378L8.33602 14.8101L17.8152 5.33089C17.9801 5.16596 18.2492 5.16596 18.4141 5.33089ZM25.4454 4.33697L23.3273 2.21891C22.6676 1.55919 21.5956 1.55919 20.9315 2.21891L19.395 3.75537C19.2301 3.9203 19.2301 4.1894 19.395 4.35433L23.31 8.26926C23.4749 8.43419 23.744 8.43419 23.9089 8.26926L25.4454 6.7328C26.1051 6.06874 26.1051 4.99669 25.4454 4.33697ZM17.6069 16.7458V21.1642H3.71796V7.27534H13.6919C13.8308 7.27534 13.961 7.21891 14.0608 7.12343L15.797 5.38732C16.1268 5.05745 15.8924 4.49756 15.428 4.49756H3.02352C1.87335 4.49756 0.940186 5.43072 0.940186 6.58089V21.8587C0.940186 23.0088 1.87335 23.942 3.02352 23.942H18.3013C19.4515 23.942 20.3846 23.0088 20.3846 21.8587V15.0097C20.3846 14.5453 19.8247 14.3153 19.4949 14.6408L17.7588 16.3769C17.6633 16.4767 17.6069 16.6069 17.6069 16.7458Z" fill="#0C2993" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1037_234">
                                    <rect width="25" height="25" fill="white" transform="translate(0.940186 0.330933)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </Link>

                    <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" type="button">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.5338 14C26.5338 21.1956 20.8021 27 13.7669 27C6.73169 27 1 21.1956 1 14C1 6.8044 6.73169 1 13.7669 1C20.8021 1 26.5338 6.8044 26.5338 14Z" stroke="#FF0000" stroke-width="2" />
                            <rect x="5.90015" y="13" width="14.7502" height="2" fill="#FF0000" />
                        </svg>
                    </button>

                    <div id="popup-modal" tabindex="-1" className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative w-full max-w-md max-h-full">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                                <div className="p-6 text-center">
                                    <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                                    <button onClick={() => removeUser(row.id)} data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                        Yes, I'm sure
                                    </button>
                                    <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )
        }
    ];

    function handleSearching(event) {
        const data_searching = data.filter(data => data.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setSearch(data_searching);
    }

    return (
        <div className='px-24 py-10'>
            <p className='text-3xl font-semibold mb-10'>Alumni management</p>
            <div className='bg-white dark:bg-white shadow-lg rounded-xl'>
                <DataTable
                    columns={columns}
                    data={search}
                    pagination
                    actions={
                        <div className="text-end">
                            <input
                                type="text"
                                className="rounded-lg"
                                style={{
                                    padding: "10px",
                                    width: "300px",
                                    fontSize: "15px",
                                }}
                                placeholder="Search"
                                onChange={handleSearching}
                            ></input>
                        </div>
                    }
                />
            </div>
        </div>
    )
}
