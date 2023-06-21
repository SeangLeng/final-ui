'use client'

import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

export const fetchingUser = async () => {
    const req = await fetch('https://api.escuelajs.co/api/v1/users')
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
                <div >
                    <button onClick={() => removeUser(row.id)} className='p-5'>
                        <svg width="25" height="25" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.8997 14C26.8997 21.1956 21.168 27 14.1328 27C7.09766 27 1.36597 21.1956 1.36597 14C1.36597 6.8044 7.09766 1 14.1328 1C21.168 1 26.8997 6.8044 26.8997 14Z" stroke="#FF0000" stroke-width="2" />
                            <rect x="6.26611" y="13" width="14.7502" height="2" fill="#FF0000" />
                        </svg>
                    </button>
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
                                    padding: "3px 10px",
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
