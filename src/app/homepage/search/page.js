'use client'
import React, { useState } from 'react'
import "../style/homepage.css"
export default function SearchingPage() {
    const [userSearch, getSearch] = useState("");
    const [result, getResult] = useState([])
    const fetData = async (value) => {
        await fetch("https://api.escuelajs.co/api/v1/users")
            .then(response => response.json()).then(json => {
                const res = json.filter(user => {
                    return value && user && user.name && user.name.toLowerCase().includes(value.toLowerCase());
                })
                getResult(res);
            });
    }

    const handleChange = (value) => {
        getSearch(value)
        fetData(value);
    }
    return (
        <div className='homepage pt-20 px-40 relative'>
            <div className='search-box w-[100%]'>
                <div className='row'>
                    <button ><i className="fa-solid fa-magnifying-glass"></i></button>
                    <input value={userSearch} onChange={(e) => handleChange(e.target.value)} type='text' id='input-box' placeholder='Search' autoComplete='off' className='focus:ring-0' />
                </div>
                <div className='searchResult'>
                    <ul>
                        {
                            result.map(result => (
                                <a href={`/profile/public/${result.id}`}><li key={result.id} className='flex gap-5'>
                                    <img src={result.avatar !== undefined ? `${result.avatar}` : "https://schooloflanguages.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"} alt='profile-ISTAD-student' className='w-[50px] h-[auto] rounded-[50%]' />
                                    <div className='grid justify-start items-center'>
                                        <p>{result.name}</p>
                                        <p>{result.email}</p>
                                    </div>

                                </li></a>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </div>
    )
}
