import React from 'react';
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";


const Information = () => {
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
        <div>
            
            <Formik
        initialValues={initialValues }
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form >
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
                className="w-full border border-gray-400 p-4 rounded-lg "
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
                  className="w-full border border-gray-400 p-4 rounded-lg "
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
                  className="w-full border border-gray-400 p-4 rounded-lg "
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
                  className="w-full border border-gray-400 p-4 rounded-lg "
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
                  className="w-full border border-gray-400 p-4 rounded-lg "
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
                  className="w-full border border-gray-400 p-4 rounded-lg "
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
                  className="w-full border border-gray-400 p-4 rounded-lg "
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
                className="w-full border border-gray-400 p-4 rounded-lg "
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
                className="w-full border border-gray-400 p-4 rounded-lg "
                placeholder="Your Address"
              />
              <ErrorMessage
                name="address"
                className="text-red-500 text-xs italic"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">

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
                className="w-full border border-gray-400 p-4 rounded-lg "
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
                className="w-full border border-gray-400 p-4 rounded-lg "
                placeholder="Your Phone Number"
              />
              <ErrorMessage
                name="phonenumber"
                className="text-red-500 text-xs italic"
              />
            </div>
            </div>
          
          </Form>
        )}
      </Formik>
    </div>
    );
}

export default Information;
