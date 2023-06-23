"use client";
import { useState } from "react";
import "../style/style.css";
import placeholder from '../images/placeholder-profile-sq.jpg';
import Image from "next/image";
import { userAgent } from "next/server";
import * as Yup from "yup";

import { ErrorMessage, Field, Formik, Form } from "formik";


import React from "react";

const Page = () => {
  const [open, setOpen] = useState(false);

  // Dynamic Forms
  const [fields, setFields] = useState([{ value: "" }]);

  const handleAddField = () => {
    setFields([...fields, { value: "" }]);
  };
  const handleDeleteField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleFieldChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value;
    setFields(newFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
  };
  // const dispatch = useDispatch();
  // const formValues = useSelector((state) => state.formValues);

  const initialValues = {
    personalinformation: "",
    firstName: "",
    lastName: "",
    gender: "",
    generation: "",
    dateofbirth: "",
    placeofbirth: "",
    nationality: "",
    address: "",
    email: "",
    phonenumber: "",
    skills: "",
  };

  const validationSchema = Yup.object({
    personalinformation: Yup.string().required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    generation: Yup.string().required("Required"),
    dateofbirth: Yup.date().required("Required"),
    placeofbirth: Yup.string().required("Required"),
    nationality: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phonenumber: Yup.string().required("Required"),
    skills: Yup.string().required("Required"),
  });


  const [showButton, setShowButton] = useState(false);
  return (
    <div className="bg-white ">
      <div className=" h-40 w-full bg-blue-800 py-32">

        <div className="h-56 w-56 rounded-full lg:ml-[48rem]">

          <Image src={placeholder} className="bg-cover rounded-full profileuser " alt="image" onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)} />
          {showButton && <button className="h-auto bt-upload bg-slate-200 rounded-md p-5">Upload</button>}
        </div>
      </div>
      <Formik
        initialValues={initialValues || formValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form className="max-w-7xl mx-auto mt-8 p-8 rounded-md ">
            <div className="mt-10">
              <label
                htmlFor="personalinformation"
                className="block text-gray-700 font-bold mb-2"
              >
                Personal Information
              </label>
              <Field
                type="text"
                id="personalinformation"
                name="personalinformation"
                className="w-full border border-gray-400 p-5 rounded-lg h-14"
                placeholder=" Personal Information"
              ></Field>
              <ErrorMessage
                name="personalinformation"
                className="text-red-500 text-xs italic"
              ></ErrorMessage>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="mt-10">
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 font-bold mb-2"
                >
                  First Name:
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Your first name"
                  className="w-full border border-gray-400 p-5 rounded-lg h-14"
                />
              </div>
              <div className="mt-10">
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 font-bold mb-2 "
                >
                  Last Name:
                </label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Your last name"
                  className="w-full border border-gray-400 p-5 rounded-lg h-14"
                />
                <ErrorMessage
                  name="lastName"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="mt-10">
                <label
                  htmlFor="gender"
                  className="block text-gray-700 font-bold mb-2"
                >
                  {" "}
                  Gender:{" "}
                </label>

                <Field
                  as="select"
                  id="gender"
                  name="gender"
                  className="w-full border border-gray-400 p-5 rounded-lg h-14"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Field>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.293a1 1 0 0 0-1.414 0L10 10.586 6.707 7.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414z" />
                  </svg>
                </div>
                <ErrorMessage
                  name="gender"
                  className="text-red-500 text-xs italic"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 ">
              <div className="mt-10">
                <label
                  htmlFor="generation"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Generation
                </label>
                <Field
                  type="text"
                  id="generation"
                  name="generation"
                  placeholder="Your Generation"
                  className="w-full border border-gray-400 p-5 rounded-lg h-14"
                />
                <ErrorMessage
                  name="generation"
                  className="text-red-500 text-xs italic"
                />
              </div>
              <div className="mt-10">
                <label
                  htmlFor="dateofbirth"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Date of Birth:
                </label>
                <Field
                  type="date"
                  id="dateofbirth"
                  name="dateofbirth"
                  className="w-full border border-gray-400 p-5 rounded-lg h-14"
                />
                <ErrorMessage
                  name="dateofbirth"
                  className="text-red-500 text-xs italic"
                />
              </div>
              <div className="mt-10">
                <label
                  htmlFor="nationality"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Nationality
                </label>
                <Field
                  type="text"
                  id="nationality"
                  name="nationality"
                  placeholder="Your Nationality"
                  className="w-full border border-gray-400 p-5 rounded-lg h-14"
                />
                <ErrorMessage
                  name="nationality"
                  className="text-red-500 text-xs italic"
                />
              </div>
            </div>

            <div className="mt-10">
              <label
                htmlFor="placeofbirth"
                className="block text-gray-700 font-bold mb-2"
              >
                Place of Birth
              </label>
              <Field
                type="text"
                id="placeofbirth"
                name="placeofbirth"
                className="w-full border border-gray-400 p-5 rounded-lg h-14"
                placeholder="Your hometown "
              />
              <ErrorMessage
                name="placeofbirth"
                className="text-red-500 text-xs italic"
              />
            </div>

            <div className="mt-10">
              <label
                htmlFor="address"
                className="block text-gray-700 font-bold mb-2"
              >
                Address
              </label>
              <Field
                type="text"
                id="address"
                name="address"
                className="w-full border border-gray-400 p-5 rounded-lg h-14"
                placeholder="Your Address"
              />
              <ErrorMessage
                name="address"
                className="text-red-500 text-xs italic"
              />
            </div>

            <div className="mt-10">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-400 p-5 rounded-lg h-14"
                placeholder="Your Email"
              />
              <ErrorMessage
                name="email"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mt-10">
              <label
                htmlFor="phonenumber"
                className="block text-gray-700 font-bold mb-2 "
              >
                Phone Number
              </label>
              <Field
                type="tel"
                id="phonenumber"
                name="phonenumber"
                className="w-full border border-gray-400 p-5 rounded-lg h-14"
                placeholder="Your Phone Number"
              />
              <ErrorMessage
                name="phonenumber"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="max-w-8xl mx-auto mt-5 p-5 bg-white rounded-md shadow-sm">
              <button
                className="px-4 py-3 text-sm font-medium flex items-center"
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <div className="flex-wrap flex-row flex">
                    <h1 className="block text-gray-700 font-bold mb-2 text-lg">
                      Relevent Skills
                    </h1>
                    <svg
                      className="w-9 h-9 lg:ml-[60rem]"

                      viewBox="0 0 52 52"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3153 38.6388C20.42 45.8435 31.9641 46.0396 39.0259 39.0756C46.0878 32.1116 46.0529 20.5659 38.9482 13.3613C31.8435 6.15673 20.2994 5.96062 13.2375 12.9246C6.17566 19.8885 6.21056 31.4342 13.3153 38.6388ZM21.9353 19.822L26.1259 24.0715L30.2913 19.9639C30.8167 19.4457 31.6909 19.4606 32.2196 19.9967C32.7482 20.5328 32.7509 21.4071 32.2254 21.9253L28.06 26.0328L32.2507 30.2824C32.7793 30.8185 32.782 31.6928 32.2565 32.211C31.731 32.7291 30.8568 32.7143 30.3282 32.1782L26.1376 27.9287L21.9722 32.0363C21.4467 32.5544 20.5726 32.5396 20.0439 32.0035C19.5153 31.4674 19.5126 30.5931 20.0381 30.0749L24.2034 25.9673L20.0128 21.7178C19.4842 21.1817 19.4815 20.3074 20.007 19.7892C20.5325 19.271 21.4066 19.2859 21.9353 19.822Z" fill="#FE0000" />
                    </svg>
                  </div>
                ) : (
                  <div className="flex flex-wrap">
                    <h1 className="block text-gray-700 font-bold mb-2 text-lg  ">
                      Relevent Skills
                    </h1>
                    <svg
                      className="w-7 h-7 lg:ml-[60rem]"
                      viewBox="0 0 38 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.1314 0C9.01293 0 0.767578 8.082 0.767578 18C0.767578 27.918 9.01293 36 19.1314 36C29.2499 36 37.4952 27.918 37.4952 18C37.4952 8.082 29.2499 0 19.1314 0ZM26.4769 19.35H20.5087V25.2C20.5087 25.938 19.8843 26.55 19.1314 26.55C18.3785 26.55 17.7541 25.938 17.7541 25.2V19.35H11.7859C11.0329 19.35 10.4086 18.738 10.4086 18C10.4086 17.262 11.0329 16.65 11.7859 16.65H17.7541V10.8C17.7541 10.062 18.3785 9.45 19.1314 9.45C19.8843 9.45 20.5087 10.062 20.5087 10.8V16.65H26.4769C27.2298 16.65 27.8542 17.262 27.8542 18C27.8542 18.738 27.2298 19.35 26.4769 19.35Z" fill="#30419D" />
                    </svg>
                  </div>
                )}
              </button>
              {open && (
                <div className="">
                  <label
                    htmlFor="skills"
                    className="block text-gray-700 font-bold mb-2"
                  ></label>
                  {fields.map((field, index) => (
                    <Field
                      value={field.value}
                      key={index}
                      name="skills"
                      type="text"
                      placeholder="Your Relevnat Skills"
                      id="skills"
                      onChange={(event) => handleFieldChange(index, event)}
                      className="w-full border border-gray-400 p-3 mt-5 rounded-lg h-14"
                    />
                  ))}
                  <ErrorMessage
                    name="skills"
                    className="text-red-500 text-xs italic"
                  />
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={handleAddField}
                      className="dynamic-form__button mt-10 w-auto p-6 py-2 flex  rounded"
                    >
                      <svg width="24" height="24" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 0C4.2655 0 0 4.2655 0 9.5C0 14.7345 4.2655 19 9.5 19C14.7345 19 19 14.7345 19 9.5C19 4.2655 14.7345 0 9.5 0ZM13.3 10.2125H10.2125V13.3C10.2125 13.6895 9.8895 14.0125 9.5 14.0125C9.1105 14.0125 8.7875 13.6895 8.7875 13.3V10.2125H5.7C5.3105 10.2125 4.9875 9.8895 4.9875 9.5C4.9875 9.1105 5.3105 8.7875 5.7 8.7875H8.7875V5.7C8.7875 5.3105 9.1105 4.9875 9.5 4.9875C9.8895 4.9875 10.2125 5.3105 10.2125 5.7V8.7875H13.3C13.6895 8.7875 14.0125 9.1105 14.0125 9.5C14.0125 9.8895 13.6895 10.2125 13.3 10.2125Z" fill="#30419D" />
                      </svg>
                      <span className="mx-4">More</span>
                    </button>
                    <button
                      onClick={handleDeleteField}
                      className="dynamic-form__button w-auto p-6 flex mt-8 rounded"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_2)">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FF0000" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M8 12H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_2">
                            <path d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>


                      <span className="mx-4 ">Remove</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              onClick={() => {
                window.location.pathname = "/profile/${id}";
              }}
              className="mt-10 w-full bg-blue-600 text-white py-2 px-4 rounded"
            >
              Update your profile
            </button>


          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Page;
