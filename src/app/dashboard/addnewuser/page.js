'use client'
import React from 'react'
import "./style.css"
import * as Yup from 'yup';
import { useRouter } from "next/navigation";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Router } from 'next/router';

export default function AddNewUser() {
    const router = useRouter();
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
    const validateSchema = Yup.object().shape({
        profleInformation: Yup.string().required("profile information must not be empty"),
        username: Yup.string().required("username must not be empty"),
        password: Yup.string()
            .required("Password is required")
            .matches(
                passwordRegex,
                "Password must be at least 6 characters, a number, an Uppercase, and a Lowercase"
            ),
        phone_number: Yup.string().required("phone number must be empty"),
        age: Yup.number().required("You have to input your age"),
        role: Yup.string().required("have to set permissions"),
        address: Yup.string().required("address must not be empty"),
    })

    return (
        <section className='pr-52'>
            <Formik
                initialValues={{
                    profileInformation: "", username: "", password: "", phone_number: "", age: "", role: "", address: "", personality: ""
                }}
                validationSchema={validateSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    // to be continue
                }}
            >
                {
                    ({
                        isSubmitting
                    }) => (
                        <Form className='mb-20'>
                            <div className='flex gap-20 justify-end items-center'>
                                <div className='uploadImage w-1/5 relative hover:cursor-pointer'>
                                    <img src={'https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg='} className='w-full rounded-full' />
                                    <div className='uploadButton hidden absolute z-20 top-[7rem] left-[5rem]'>
                                        <label for="inputFile" className='text-white bg-none rounded-lg ring-2 ring-white dark:ring-white p-3 cursor-pointer'>
                                            upload
                                            <input type='file' id='inputFile' className='hidden' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='grid gap-7'>
                                <div>
                                    <label className='text-gray-700 dark:text-gray-700 text-lg'>Personal information</label>
                                    <Field
                                        type="text"
                                        id="profleInformation"
                                        name="profleInformation"
                                        className="w-full mt-2 p-3 border-gray-400 rounded-lg h-14"
                                        placeholder="Your must have your information available"
                                    />
                                    <ErrorMessage
                                        name="profleInformation"
                                        component="div"
                                        className="text-red-500"
                                    />
                                </div>
                                <div className='flex justify-between items-center gap-10'>
                                    <div className='w-1/2'>
                                        <label className='text-gray-700 dark:text-gray-700 text-lg'>Username</label>
                                        <Field
                                            type="text"
                                            id="username"
                                            name="username"
                                            className="w-full mt-2 p-3 border-gray-400 rounded-lg h-14"
                                            placeholder="Your name"
                                        />
                                        <ErrorMessage
                                            name="username"
                                            component="div"
                                            className="text-red-500"
                                        />
                                    </div>
                                    <div className='w-1/2'>
                                        <label className='text-gray-700 dark:text-gray-700 text-lg'>Password</label>
                                        <Field
                                            type="text"
                                            id="password"
                                            name="password"
                                            className="w-full mt-2 p-3 border-gray-400 rounded-lg h-14"
                                            placeholder="Password"
                                        />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="text-red-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className='text-gray-700 dark:text-gray-700 text-lg'>Address</label>
                                    <Field
                                        type="text"
                                        id="address"
                                        name="address"
                                        className="w-full mt-2 p-3 border-gray-400 rounded-lg h-14"
                                        placeholder="Your address"
                                    />
                                    <ErrorMessage
                                        name="address"
                                        component="div"
                                        className="text-red-500"
                                    />
                                </div>
                                <div className='border grid gap-5 border-gray-400 rounded-xl p-10'>
                                    <div className='flex justify-between item-center'>
                                        <p className='font-semibold text-lg'>Personality</p>
                                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.31478 31.6386C13.4195 38.8432 24.9636 39.0393 32.0255 32.0754C39.0873 25.1114 39.0524 13.5657 31.9477 6.36109C24.843 -0.843518 13.2989 -1.03962 6.23704 5.92433C-0.824833 12.8883 -0.78993 24.434 6.31478 31.6386ZM14.9348 12.8217L19.1254 17.0713L23.2908 12.9637C23.8162 12.4455 24.6904 12.4603 25.2191 12.9964C25.7477 13.5325 25.7504 14.4068 25.2249 14.925L21.0595 19.0326L25.2502 23.2821C25.7788 23.8182 25.7815 24.6925 25.256 25.2107C24.7305 25.7289 23.8564 25.7141 23.3277 25.178L19.1371 20.9284L14.9717 25.036C14.4462 25.5542 13.5721 25.5393 13.0434 25.0033C12.5148 24.4672 12.5121 23.5929 13.0376 23.0747L17.2029 18.9671L13.0123 14.7175C12.4837 14.1814 12.481 13.3072 13.0065 12.789C13.532 12.2708 14.4061 12.2856 14.9348 12.8217Z" fill="#FE0000" />
                                        </svg>
                                    </div>
                                    <Field
                                        type="text"
                                        id="personality"
                                        name="personality"
                                        className="w-full mt-2 p-3 border-gray-400 rounded-lg h-14"
                                        placeholder="Your personality"
                                    />
                                    <button>
                                        <div className='flex gap-5'>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.5 0C4.2655 0 0 4.2655 0 9.5C0 14.7345 4.2655 19 9.5 19C14.7345 19 19 14.7345 19 9.5C19 4.2655 14.7345 0 9.5 0ZM13.3 10.2125H10.2125V13.3C10.2125 13.6895 9.8895 14.0125 9.5 14.0125C9.1105 14.0125 8.7875 13.6895 8.7875 13.3V10.2125H5.7C5.3105 10.2125 4.9875 9.8895 4.9875 9.5C4.9875 9.1105 5.3105 8.7875 5.7 8.7875H8.7875V5.7C8.7875 5.3105 9.1105 4.9875 9.5 4.9875C9.8895 4.9875 10.2125 5.3105 10.2125 5.7V8.7875H13.3C13.6895 8.7875 14.0125 9.1105 14.0125 9.5C14.0125 9.8895 13.6895 10.2125 13.3 10.2125Z" fill="#30419D" />
                                            </svg>
                                            <p className='text-blue-800'>More</p>
                                        </div>
                                    </button>
                                </div>
                                <div className='flex justify-center items-center mt-5'>
                                    <button disabled={isSubmitting} onClick={() => { router.push("/dashboard/management") }} type="submit" className='cursor-pointer bg-blue-800 text-white dark:text-white text-center px-20 py-4 rounded-[20px]'>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </section>
    )
}
