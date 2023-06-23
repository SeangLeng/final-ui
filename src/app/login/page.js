'use client'
import React, { useEffect, useState } from 'react'
import logoProject from "@/app/images/logo-project.jpg"
import Image from 'next/image'
import "./loginStyle.css"
import { API } from "../api/constant.js"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';
import secureLocalStorage from 'react-secure-storage'
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/features/auth/authSlice";
import { useLoginMutation } from "@/store/features/auth/authApiSlice";
import { useRouter } from "next/navigation";

export default function LogInPage() {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
    const validateSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string()
            .required("Password is required")
            .matches(
                passwordRegex,
                "Password must be at least 6 characters, a number, an Uppercase, and a Lowercase"
            )
    })

    const dispatch = useDispatch();
    const [login, { isLoading }] = useLoginMutation();
    const router = useRouter();
    
    const handleSubmit = async ({ email, password }) => {
        try {
            // .unwrap() is a utility function that will return either the fulfilled value or throw the rejected value as an error.
            const { data } = await login({ email, password }).unwrap();
            console.log("data", data);
            dispatch(
                setCredentials(data)
            );
            router.push("/");
        } catch (error) {
            if (!error.response) {
                alert("No Server Response");
                console.log(error)
            } else if (error.response.status === 400) {
                alert("Missing email or password");
            } else if (error.response.status === 403) {
                alert("Forbidden - You don't have permission to access this resource");
            }
        }
    };
    
    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validateSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                handleSubmit(values);
                console.log(values);
                resetForm();
            }}
        >
            {
                ({
                    isSubmitting
                }) => (
                    <div className='logIn p-20'>
                        <Form>
                            <Image src={logoProject} alt="logo-image" />
                            <p className='capitalize text-4xl font-semibold text-center mt-20'>log me in</p>
                            <div className='input mt-10'>
                                <div className="mb-6">
                                    <Field type="email"
                                        name="email"
                                        placeholder="Email"
                                        id="email"
                                        className="p-4 w-full rounded-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    <p className="error text-red-600">
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-red-500"
                                        />
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <Field
                                        name="password"
                                        placeholder="Password"
                                        id="password"
                                        className="p-4 w-full rounded-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-0 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0" />
                                    <p className="error text-red-600">
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="text-red-500"
                                        />
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
                            <button disabled={isSubmitting} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-14 py-3 mt-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </Form>
                    </div>
                )
            }
        </Formik>
    )
}
