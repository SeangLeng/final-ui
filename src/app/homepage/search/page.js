'use client'
import React, { useEffect, useState } from 'react'
import "../style/homepage.css"
import { API } from '@/app/api/constant';
export default function SearchingPage() {
    const [userSearch, getSearch] = useState('');
    const [result, getResult] = useState([])
    const [user, getUser] = useState([])

    const fetData = async (value) => {
        await fetch(`${API}users`, { cache: 'no-store' })
            .then(response => response.json()).then(json => {
                const res = json.data.list.filter(user => {
                    return value && user && user.username && user.username.toLowerCase().includes(value.toLowerCase());
                })
                getResult(res);
            });
    }
    console.log(userSearch)
    console.log(result)
    const fetchUser = async () => {
        const req = await fetch(`${API}users?limit=3`).then(response => response.json())
        return req;
    }

    const handleChange = (value) => {
        getSearch(value)
        fetData(value);
    }
    useEffect(() => {
        fetchUser().then(user => getUser(user.data.list));
    }, [])
    console.log(user)
    return (
        <div className='homepage pt-20 px-40 relative'>
            <div className='search-box w-[100%]'>
                <div className='row'>
                    <button ><i className="fa-solid fa-magnifying-glass"></i></button>
                    <input value={userSearch} onChange={(e) => handleChange(e.target.value)} type='text' id='input-box' placeholder='Search' autoComplete='off' className='focus:ring-0' />
                </div>
                <div className='searchResult'>
                    {
                        (userSearch === '') ? (
                            <ul>
                                {
                                    user.map(result => (
                                        <a href={`/profile/public/${result.id}`}>
                                            <li key={result.id} className='flex gap-5'>
                                                <img src={result.profile !== null ? `${result.profile}` : "https://schooloflanguages.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"} alt='profile-ISTAD-student' className='w-[50px] h-[50px] rounded-[50%] object-cover' />
                                                <div className='grid justify-start items-center'>
                                                    <p>{result.username}</p>
                                                    <div className='flex gap-1'>
                                                        {
                                                            result.skills.map(skill => (
                                                                <p>{skill.name}, </p>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </li>
                                        </a>
                                    ))
                                }
                            </ul>
                        ) : (
                            <ul>
                                {
                                    result.map(result => (
                                        <a href={`/profile/public/${result.id}`}>
                                            <li key={result.id} className='flex gap-5'>
                                                <img src={result.profile !== null ? `${result.profile}` : "https://schooloflanguages.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"} alt='profile-ISTAD-student' className='w-[50px] h-[50px] rounded-[50%] object-cover' />
                                                <div className='grid justify-start items-center'>
                                                    <p>{result.username}</p>
                                                    <div className='flex gap-1'>
                                                        {
                                                            result.skills.map(skill => (
                                                                <p>{skill.name}, </p>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </li>
                                        </a>
                                    ))
                                }
                            </ul>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

