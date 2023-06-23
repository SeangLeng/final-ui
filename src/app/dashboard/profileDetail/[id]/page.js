'use client'

import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';
import { useRouter } from "next/navigation";
async function fetchUser(id) {
    const request = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
    return request.json();
}

export default function ProfileDetail({ params }) {
    const router = useRouter();
    const { id } = params;
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        fetchUser(id).then(res => setProfile(res));
    }, [])

    const validateSchema = Yup.object().shape({
        profleInformation: Yup.string().required("profile information must not be empty"),
        firstname: Yup.string().required("Required"),
        lastname: Yup.string().required("Required"),
        male: Yup.string().required("Required"),
        Generation: Yup.string().required,
        DateOfBirth: Yup.date().required("must not be empty"),
        phonenumber: Yup.string().required("Required"),
        PlaceOfbirth: Yup.string().required("Required"),
        national: Yup.string().required("Required"),
        role: Yup.string().required("Required"),
        email: Yup.string().email("This feild must be a valid").required("Required"),
        address: Yup.string().required("Address not be blank"),
    })

    return (
        <div className='px-[10%] mb-20'>
            <div className='flex gap-20 justify-end items-center'>
                <div className='text-end uppercase'>
                    <p className='text-3xl mb-3'>{profile.name}</p>
                    <p className='text-lg'>Web developer</p>
                </div>
                <div className='w-1/6'>
                    <img src={profile.avatar} className='w-full rounded-lg' />
                </div>
            </div>
            <Formik
                initialValues={{
                    profleInformation: "i am an istad student", firstname: "seng", lastname: "", male: "male", Generation: "20", DateOfBirth: "2003-06-18", phonenumber: "+855 11 348 219",
                    PlaceOfbirth: "Kam pongcham, phum 2, vealvong", national: "Khmer", role: "admin", email: "seangleng5089@gmail.com", address: "KhmerPhnom Penh, somnorng 12",
                }}
                validationSchema={validateSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    // to be continue
                }}
            >
                {({
                    isSubmitting
                }) => (
                    <Form className='mt-10 flex-col gap-5'>
                        <label className='text-gray-700 dark:text-gray-700 text-lg'>Personal information</label>
                        <Field
                            type="text"
                            id="profleInformation"
                            name="profleInformation"
                            className="w-full mt-2 p-3 border-gray-400 rounded-lg h-14"
                            placeholder="Your must have your personality"
                        />
                        <ErrorMessage
                            name="profleInformation"
                            component="div"
                            className="text-red-500"
                        />

                        <div className='flex justify-between items-center mt-5 gap-4'>
                            <div className='firstname w-2/4'>
                                <label className='text-gray-700 dark:text-gray-700 text-lg'>First name</label>
                                <Field
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    className="w-full mt-2 p-3 border-gray-400 rounded-lg h-14"
                                    placeholder="Your must have your personality"
                                />
                                <ErrorMessage
                                    name="firstname"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                            <div className='firstname w-2/3'>
                                <label className='text-gray-700 dark:text-gray-700 text-lg'>Last name</label>
                                <Field
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    className="w-full mt-2 p-3 border-gray-400 rounded-lg h-14"
                                    placeholder="Your must have your personality"
                                    value={profile.name}
                                />
                                <ErrorMessage
                                    name="lastname"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                            <div className='gender w-1/3'>
                                <Field
                                    className="w-full mt-9 p-3 border-gray-400 rounded-lg h-14"
                                    component="select"
                                    id="gender"
                                    name="gender"
                                >
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </Field>
                                <ErrorMessage
                                    name="gender"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-5 gap-4'>
                            <div className='firstname w-1/4'>
                                <label className='text-gray-700 dark:text-gray-700 text-lg'>Generation</label>
                                <Field
                                    type="text"
                                    id="Generation"
                                    name="Generation"
                                    className="w-full mt-2 p-3 border-gray-400 rounded-lg h-14"
                                    placeholder="Your must have your personality"
                                />
                                <ErrorMessage
                                    name="generation"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                            <div className='firstname w-2/3'>
                                <label className='text-gray-700 dark:text-gray-700 text-lg'>Date of birth</label>
                                <Field
                                    type="date"
                                    id="DateOfBirth"
                                    name="DateOfBirth"
                                    className="w-full mt-2 p-3 border-gray-400 rounded-lg h-14"
                                    placeholder="your date of birth must be blank"
                                />
                                <ErrorMessage
                                    name="DateOfBirth"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                            <div className='gender w-1/3'>
                                <label className='text-gray-700 dark:text-gray-700 text-lg'>Phone number</label>
                                <Field
                                    type="text"
                                    className="w-full p-3 mt-2 border-gray-400 rounded-lg h-14"
                                    id="phonenumber"
                                    name="phonenumber"
                                    placeholder="Input your phone number"
                                />
                                <ErrorMessage
                                    name="phonenumber"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-5 gap-4'>
                            <div className='firstname w-3/4'>
                                <label className='text-gray-700 dark:text-gray-700 text-lg'>Place of birth</label>
                                <Field
                                    type="text"
                                    id="PlaceOfbirth"
                                    name="PlaceOfbirth"
                                    className="w-full mt-2 p-3 border-gray-400 rounded-lg h-14"
                                    placeholder="Your must have your place of birth"
                                />
                                <ErrorMessage
                                    name="PlaceOfbirth"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                            <div className='firstname w-2/3'>
                                <label className='text-gray-700 dark:text-gray-700 text-lg'>National</label>
                                <Field
                                    type="text"
                                    id="national"
                                    name="national"
                                    className="w-full mt-2 p-3 border-gray-400 rounded-lg h-14"
                                    placeholder="Your must have your personality"
                                />
                                <ErrorMessage
                                    name="national"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                            <div className='gender w-1/3'>
                                <label className='text-gray-700 dark:text-gray-700 text-lg'>Role</label>
                                <Field
                                    className="w-full mt-2 p-3 border-gray-400 rounded-lg h-14"
                                    component="select"
                                    id="gender"
                                    name="gender"
                                >
                                    <option value="male">Admin</option>
                                    <option value="female">User</option>
                                </Field>
                                <ErrorMessage
                                    name="gender"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-5 gap-4'>
                            <div className='firstname w-3/4'>
                                <label className='text-gray-700 dark:text-gray-700 text-lg'>email</label>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full mt-2 p-3 border-gray-400 rounded-lg h-14"
                                    placeholder="Your must have your place of birth"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                            <div className='firstname w-2/3'>
                                <label className='text-gray-700 dark:text-gray-700 text-lg'>Address</label>
                                <Field
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="w-full mt-2 p-3 border-gray-400 rounded-lg h-14"
                                    placeholder="Your must have your personality"
                                />
                                <ErrorMessage
                                    name="address"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                        </div>
                        <div className='flex justify-center items-center mt-10'>
                            <button disabled={isSubmitting} onClick={() => { router.back() }} type="submit" className='cursor-pointer bg-blue-800 text-white dark:text-white text-center px-20 py-4 rounded-[20px]'>
                                Save
                            </button>
                        </div>
                    </Form>
                )
                }
            </Formik>
        </div>
    )
}
