"use client";
import { useState } from "react";
import "../style/style.css";
import profile from "../images/profile.jpg";
import Image from "next/image";
import { userAgent } from "next/server";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik, Form } from "formik";
// import {
//   Provider,
//   createStoreHook,
//   useDispatch,
//   useSelector,
// } from "react-redux";

import React from "react";

const Page = () => {
  const [open, setOpen] = useState(false);

  // Dynamic Forms
  const [fields, setFields] = useState([{ value: "" }]);

  const handleAddField = () => {
    setFields([...fields, { value: "" }]);
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

  return (
    <div className="bg-white ">
      <div className=" h-40 w-full bg-blue-800 py-32">
        <div className="h-56 w-56 rounded-full profileinput">
          <Image src={profile} className=" profileuse h-56 w-56 rounded-full" />
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
                className="w-full border border-gray-400 p-2 rounded-lg h-14"
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
                  className="w-full border border-gray-400 p-2 rounded-lg h-14"
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
                  className="w-full border border-gray-400 p-2 rounded-lg h-14"
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
                  className="w-full border border-gray-400 p-2 rounded-lg h-14"
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
                  className="w-full border border-gray-400 p-2 rounded-lg h-14"
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
                  className="w-full border border-gray-400 p-2 rounded-lg h-14"
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
                  className="w-full border border-gray-400 p-2 rounded-lg h-14"
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
                className="w-full border border-gray-400 p-2 rounded-lg h-14"
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
                className="w-full border border-gray-400 p-2 rounded-lg h-14"
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
                className="w-full border border-gray-400 p-2 rounded-lg h-14"
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
                className="w-full border border-gray-400 p-2 rounded-lg h-14"
                placeholder="Your Phone Number"
              />
              <ErrorMessage
                name="phonenumber"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="max-w-8xl mx-auto mt-5 p-5 bg-white rounded-md shadow-md">
              <button
                className="px-4 py-3 text-sm font-medium flex items-center"
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <>
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <h1 className="block text-gray-700 font-bold mb-2 text-lg">
                      Relevent Skills
                    </h1>
                  </>
                ) : (
                  <div className="flex flex-wrap  justify-between">
                    <h1 className="block text-gray-700 font-bold mb-2 text-lg  ">
                      Relevent Skills
                    </h1>
                    <svg
                      className="w-4 h-5 ml-9 "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={5}
                        d="M5 15l7-7 7 7"
                      />
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
                  <div>
                    <button
                      type="button"
                      onClick={handleAddField}
                      className="dynamic-form__button mt-10 w-40 bg-blue-600 text-white py-2 px-1 rounded"
                    >
                      Add Field
                    </button>
                  </div>

                  {/* <form onSubmit={handleSubmit} className="dynamic-form">
                    {fields.map((field, index) => (
                      <input
                        key={index}
                        type="text"
                        value={field.value}
                        placeholder="add your skills "
                        onChange={(event) => handleFieldChange(index, event)}
                        className="w-full border border-gray-400 p-2  mt-3 rounded-lg h-14"
                      />
                    ))}
                    <div className="dynamic-form__buttons">
                      <button
                        type="button"
                        onClick={handleAddField}
                        className="dynamic-form__button mt-10 w-40 bg-blue-600 text-white py-2 px-1 rounded"
                      >
                        Add Field
                      </button>
                    </div>
                  </form> */}
                </div>
              )}
            </div>

            <button
              type="submit" onClick={() => { window.location.pathname = "/profile/${id}" }}
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

// function ProfileForm() {
//   const dispatch = useDispatch();
//   const formValues = useSelector((state) => state.formValues);

//   return (
//     <Formik
//       initialValues={initialValues || formValues}
//       validationSchema={validationSchema}
//       onSubmit={(values) => {
//         dispatch({ type: "SAVE_FORM_VALUES", payload: values });
//         // generate CV ...
//       }}
//     >
//       {/* ... */}
//     </Formik>
//   );
// }

// const profileReducer = (state = {}, action) => {
//   switch (action.type) {
//     case "SAVE_FORM_VALUES":
//       return action.payload;
//     default:
//       return state;
//   }
// };

// <Provider store={createStoreHook(profileReducer)}>
//   <ProfileForm />
// </Provider>
