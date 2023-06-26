"use client";
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function myForm() {
  const [fields, setFields] = useState([{ value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }]);
  const [open, setOpen] = useState(false);

  const handleAddField = () => {
    setFields([...fields, { value: '' }]);
  };

  const handleDeleteField = (index) => {
    const values = [...fields];
    values.splice(index, 1);
    setFields(values);
  };

  const handleFieldChange = (index, event) => {
    const values = [...fields];
    values[index].value = event.target.value;
    setFields(values);
  };

  return (
    <Formik initialValues={{ education: [] }} onSubmit={(values) => console.log(values)}>
      {(FORM) => {
        return (
          <Form className="mt-5 p-5 bg-white rounded-md shadow-md">
            <button
              className="pl-4 text-sm font-medium w-full"  
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <div className="flex justify-between items-center">
                  <h1 className="text-gray-700 font-bold mb-2 text-lg">
                    Education 
                  </h1>
                 
                </div>
                ) : ( 
                <div className="flex justify-between item-center">
                  <h1 className="block text-gray-700 font-bold mb-2 text-lg  ">
                    Education
                  </h1>
                 
                </div>
              )}
            </button>
            {open && (
              <div>
                <div className="grid grid-cols-4 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div className="mt-10" key={i}>
                      <label
                        htmlFor={`schoolname-${i}`}
                        className="block text-gray-700 font-bold mb-2"
                      >
                        School {i + 1}
                      </label>
                      <Field
                        type="text"
                        id={`schoolname-${i}`}
                        name={`schoolname-${i}`}
                        placeholder="School Name"
                        className="w-full border border-gray-400 p-2 rounded-lg h-14"
                      />
                    </div>
                  ))}
                </div>
                <div className="">
                  {fields.map((field, index) => (
                    <div key={index}>
                      <label
                        htmlFor="address"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Address {index + 1}
                      </label> 
                      <Field
                        value={field.value}
                        name="address"
                        type="text"
                        placeholder="Address"
                        id="address"
                        onChange={(event) => handleFieldChange(index, event)}
                        className="w-full border border-gray-400 p-3 mt-5 rounded-lg h-14"
                      />
                    </div>
                  ))} 
                  <ErrorMessage
                    name="address"
                    className="text-red-500 text-xs italic"
                  />
                   {fields.map((field, index) => (
                    <div key={index}>
                      <label
                        htmlFor="description"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Description {index + 1}
                      </label>
                      <Field
                        value={field.value}
                        name="description"
                        type="text"
                        placeholder="Description"
                        id="description"
                        onChange={(event) => handleFieldChange(index, event)}
                        className="w-full border border-gray-400 p-3 mt-5 rounded-lg h-14"
                      />
                    </div>
                  ))} 
                  <ErrorMessage
                    name="description"
                    className="text-red-500 text-xs italic"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handleAddField}
                    className="dynamic-form__button mt-10 w-auto p-6 py-2 flex  rounded"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      
                    </svg>
                    <span className="mx-4">More</span>
              
                  </button>
                  <button
                    onClick={handleDeleteField}
                    className="dynamic-form__button w-auto p-6 flex mt-8 rounded"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                     
                    </svg>

                    <span className="mx-4 ">Remove</span>
                  </button>
                </div>
              </div>
            )}
          </Form>
        )
      }}
    </Formik>
  );
};