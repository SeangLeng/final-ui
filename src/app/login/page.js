'use client'
import React, { useEffect, useState } from 'react'
import logoProject from "@/app/images/logo-project.jpg"
import Image from 'next/image'
import "./loginStyle.css"
import { API } from "../api/constant.js"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';
import secureLocalStorage from 'react-secure-storage'

export const getUserToCheck = async () => {
    const request = await fetch(`${API}users`)
    const response = await request.json();
    return response;
}

export default function LogInPage() {

    const validateSchema = Yup.object().shape({
        email: Yup.string().required("Email must not be blank"),
        password: Yup.string().required("password must not be blank")
    })


    const [loading, setIsLoading] = useState(true)

    const loginUser = async (data) => {
        let { email, password } = data
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const userData = {
            email,
            password
        }

        let requestData = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(userData),
        }

        fetch(`${API}auth/login`, requestData)
            .then(res => res.json())
            .then(resp => {
                secureLocalStorage.setItem("user", JSON.stringify(resp))
                setIsLoading(false)
                history.back()
            })
            .catch((error) => {
                setIsLoading(true)
                console.log("Cannot post the product", error.message)
            })
    }

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validateSchema}
            onSubmit={async (values, { setSubmitting }) => {
                loginUser(values);
                setSubmitting(false);
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
                        <form noValidate onSubmit={handleSubmit}>
                            <Image src={logoProject} alt="logo-image" />
                            <p className='capitalize text-4xl font-semibold text-center mt-20'>log me in</p>
                            <div className='input mt-10'>
                                <div className="mb-6">
                                    <input type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder="Email"
                                        id="email"
                                        className="p-4 w-full rounded-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    <p className="error text-red-600">
                                        {errors.email && touched.email && errors.email}
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <input
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        placeholder="Password"
                                        id="password"
                                        className="p-4 w-full rounded-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-0 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0" />
                                    <p className="error text-red-600">
                                        {errors.password && touched.password && errors.password}
                                    </p>
                                    <div className='w-full flex justify-end items-end mt-3'>
                                        <a href='/login/forgetPassword'>Forget password</a>
                                    </div>
                                </div>

                            </div>
                            <div className='links-part grid w-full'>
                                <a href='/login/istadLogin' className='text-center mb-5 mt-10 text-xl'>
                                    I am <span className='underline font-semibold'>ISTAD Student</span>
                                </a>
                                <a href='/login/signIn' className='text-center mb-5 text-xl'>
                                    Has an account yet ? <span className='underline font-semibold'>sign - in</span>
                                </a>
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-14 py-3 mt-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>
                    </div>
                )
            }
        </Formik>
    )
}
