"use client";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";

const Languages = () => {
  const [displayLanguage, setDisplayLanguage] = useState(false);
  const [description, setdescription] = useState("");
  const [currentIndex, setcurrentIndex] = useState(0);
  const [Language, setLanguage] = useState([
    {
      languagestitle: "",
      description: "",
      isShow: true,
      id: 0,
    },
  ]);

  const submit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  const onDropDwon = (id) => {
    setLanguage(Language.map((x) => (x.id == id ? { ...x, isShow: !x.isShow } : x)));
  };

  const handleLanguageChange = (index, event) => {
    setcurrentIndex(index);
    console.log(event.target.value);
    let data = [...Language];
    data[index][event.target.name] = event.target.value;
    setLanguage(data);
  };

  useEffect(() => {
    let data = [...Language];
    if (description) data[currentIndex].description = description;

    description && setLanguage(data);
  }, [description]);

  const addFieldsSkill = () => {
    setDisplayLanguage(true);
    if (!displayLanguage) {
      console.log("Hidden true");
    } else {
      let newData = {
        languagestitle: "",
      description: "",
        isShow: true,
        id: Language.length,
      };

      const oldData = Language.map((x) => {
        return {
          ...x,
          isShow: false,
        };
      });
      setLanguage([...oldData, newData]);
    }
  };

  const removeFieldsLanguage = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    let data = [...Education];
    data.splice(index, 1);
    setLanguage(data);
  };

  const initialValues = {
    languagestitle:"",
    description:""
  };

  const validationSchema = Yup.object({
    languagestitle: Yup.string(),
    description: Yup.string(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values }) => (
        <div className="mt-5 p-5 bg-white rounded-md shadow-md">
          <label for="large-input" className="flex justify-between item-center">
            <h1 className="text-gray-700 font-bold mb-2 text-lg">Languages</h1>

            <span onClick={() => setDisplayLanguage((Prev) => !Prev)}>
              {displayLanguage ? (
                <svg 
                className="w-9 h-9"
                viewBox="0 0 52 51" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M13.184 38.0932C20.1477 45.1553 31.5771 45.2356 38.6392 38.2719C45.7013 31.3082 45.7816 19.8788 38.8179 12.8167C31.8542 5.75453 20.4248 5.67431 13.3627 12.638C6.30052 19.6017 6.2203 31.0311 13.184 38.0932ZM21.9069 19.3803L26.0143 23.5458L30.1798 19.4384C30.7053 18.9202 31.5708 18.9263 32.089 19.4518C32.6071 19.9773 32.6011 20.8427 32.0756 21.3609L27.9101 25.4683L32.0175 29.6338C32.5357 30.1593 32.5296 31.0248 32.0041 31.543C31.4786 32.0612 30.6131 32.0551 30.095 31.5296L25.9875 27.3641L21.822 31.4715C21.2965 31.9897 20.4311 31.9836 19.9129 31.4581C19.3947 30.9326 19.4008 30.0671 19.9263 29.549L24.0918 25.4415L19.9844 21.276C19.4662 20.7505 19.4723 19.8851 19.9978 19.3669C20.5232 18.8487 21.3887 18.8548 21.9069 19.3803Z" fill="#FE0000" fill-opacity="0.69"/>
                </svg>
              ) : (
                <svg
                  className="w-7 h-7 "
                  viewBox="0 0 38 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1314 0C9.01293 0 0.767578 8.082 0.767578 18C0.767578 27.918 9.01293 36 19.1314 36C29.2499 36 37.4952 27.918 37.4952 18C37.4952 8.082 29.2499 0 19.1314 0ZM26.4769 19.35H20.5087V25.2C20.5087 25.938 19.8843 26.55 19.1314 26.55C18.3785 26.55 17.7541 25.938 17.7541 25.2V19.35H11.7859C11.0329 19.35 10.4086 18.738 10.4086 18C10.4086 17.262 11.0329 16.65 11.7859 16.65H17.7541V10.8C17.7541 10.062 18.3785 9.45 19.1314 9.45C19.8843 9.45 20.5087 10.062 20.5087 10.8V16.65H26.4769C27.2298 16.65 27.8542 17.262 27.8542 18C27.8542 18.738 27.2298 19.35 26.4769 19.35Z"
                    fill="#30419D"
                  />
                </svg>
              )}
            </span>
          </label>

          {/*  Dynamic form for experience */}
          <div className={!displayLanguage ? "hidden" : "block"}>
            {Language.map((input, index) => (
              <Form
                // onSubmit={submit}
                //   className="p-5 mt-5 border bg-white rounded-md text-sm laptop:text-md desktop:text-lg"
                className="max-w-7xl mx-auto mt-5 p-5 bg-white rounded-md shadow-md"
              >
                <div
                  className="flex flex-row mb-5"
                  onClick={() => onDropDwon(input.id)}
                >
                  {input.languagestitle ? input.languagestitle : "(Not Specified)"}
                  <span className="ml-auto">
                    {!input.isShow ? (
                      <svg
                        className="w-4 laptop:w-6 h-auto text-blue-700"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <polyline points="6 15 12 9 18 15" />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 laptop:w-6 h-auto text-blue-700"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    )}
                  </span>
                </div>

                <div className={!input.isShow ? "hidden" : "block"}>
                  <div key={index} className="mb-3 ">
                    <div className="grid gap-6 mb-6 laptop:grid-cols-2">
                      <div>
                        <label
                          for="languagestitle"
                          // className="block mb-2 text-sm font-medium dark:text-black"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          Language <span className="text-red-700">*</span>
                        </label>
                        <Field
                          className="w-full border border-gray-400 p-2 rounded-lg"
                          // className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          name="languagestitle"
                          placeholder="Languages Title"
                          value={input.languagestitle}
                          onChange={(event) =>
                            handleLanguageChange(index, event)
                          }
                        ></Field>
                        <ErrorMessage name="languagestitle" className='text-red-500 text-xs italic'/>
                      </div>
        
                    </div>
                    <div className="w-full">
                      <label
                        for="description"
                        className="block text-gray-700 font-bold mb-2"

                        //   className="block mb-2 text-sm font-medium dark:text-black"
                      >
                        Description <span className="text-red-700">*</span>
                      </label>
                      <Field
                        as="textarea"
                        value={input.description}
                        onChange={(event) =>
                          handleLanguageChange(index, event)
                        }
                        type="text"
                        name="description"
                        className="w-full border border-gray-400 p-2 rounded-lg"
                        placeholder=""
                      />
                      <ErrorMessage name="description" className='text-red-500 text-xs italic'/>
                    </div>
                  </div>
                </div>

                <button
                  onClick={(e) => removeFieldsLanguage(index, e)}
                  class="  px-5 py-2  rounded-md  overflow-hidden group bg-red-600 relative hover:bg-gradient-to-r hover:from-red-800 hover:to-red-600 text-white  hover:ring-offset-2 hover:ring-red-600 transition-all ease-out duration-300"
                >
                  <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span class="relative">Remove</span>
                </button>
              </Form>
            ))}
          </div>
          {Language.length >= 0 && displayLanguage && (
            <div
              onClick={addFieldsSkill}
              className="m-2 w-full cursor-pointer text-blue-900 hover:text-blue-500 font-bold text-left"
            >
              {Language.length == 0 ? "+ Add language" : "+ Add more language"}
            </div>
          )}
        </div>
      )}
    </Formik>
  );
};

export default Languages;
