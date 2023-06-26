'use client'
import React, { useEffect, useState } from 'react'
import logoProject from "@/app/images/logo-project.jpg"
import Image from 'next/image'
import "../loginStyle.css"
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import { API } from "@/app/api/constant.js"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';

export const getUserToCheck = async () => {
    const request = await fetch(`${API}users`)
    const response = await request.json();
    return response;
}

export default function LogInPage() {
    useEffect(() => {
        getUserToCheck().then(data => setUser(data))
    })
    const validateSchema = Yup.object().shape({
        email: Yup.string().required("Username must not be blank"),
    })

    return (
        <Formik
            initialValues={{ email: ""}}
            validationSchema={validateSchema}
            onSubmit={(values) => {
                // Alert the input values of the form that we filled
                alert(JSON.stringify(values));
            }}
        >
            {
                ({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <div className='logIn p-20'>
                        <form noValidate onSubmit={handleSubmit} className='flex flex-col justify-between items-center h-[60vh]'>
                            <div className='flex flex-col justify-center items-center'>
                                <Image src={logoProject} alt="logo-image" className='w-1/3' />
                                <p className='capitalize text-2xl font-semibold text-center mt-20'>Foget your password</p>
                            </div>
                            <div className='input mt-10'>
                                <div className="mb-6">
                                    <input type="email"
                                        name="username"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder="Your email"
                                        id="email"
                                        className="p-4 w-full rounded-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    <p className="error text-red-600">
                                        {errors.email && touched.email && errors.email}
                                    </p>
                                </div>
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-14 py-3 mt-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>
                    </div>
                )
            }
        </Formik>
    )
}
