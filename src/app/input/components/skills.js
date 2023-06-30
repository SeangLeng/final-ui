"use client";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";

const Skill = () => {
  const [displaySkill, setDisplaySkill] = useState(false);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [Skill, setSkill] = useState([
    {
      skill: "",
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
    setSkill(Skill.map((x) => (x.id == id ? { ...x, isShow: !x.isShow } : x)));
  };

  const handleSkillChange = (index, event) => {
    setcurrentIndex(index);
    console.log(event.target.value);
    let data = [...Skill];
    data[index][event.target.name] = event.target.value;
    setSkill(data);
  };

  const addFieldsSkill = () => {
    setDisplaySkill(true);
    if (!displaySkill) {
      console.log("Hidden true");
    } else {
      let newData = {
        skill: "",
        isShow: true,
        id: Skill.length,
      };

      const oldData = Skill.map((x) => {
        return {
          ...x,
          isShow: false,
        };
      });
      setSkill([...oldData, newData]);
    }
  };

  const removeFieldsSkill= (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    let data = [...Skill];
    data.splice(index, 1);
    setSkill(data);
  };

  const initialValues = {
    skill: "",
  
  };

  const validationSchema = Yup.object({
    skill: Yup.string(),

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
            <h1 className="text-gray-700 font-bold mb-2 text-lg">Relevant Skills</h1>

            <span onClick={() => setDisplaySkill((Prev) => !Prev)}>
              {displaySkill ? (
            <svg className="w-9 h-9" 
                  viewBox="0 0 52 52" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg">
            <path d="M13.183 38.6381C20.1467 45.7003 31.5761 45.7805 38.6382 38.8168C45.7004 31.8531 45.7806 20.4237 38.8169 13.3616C31.8532 6.29945 20.4238 6.21923 13.3617 13.1829C6.29954 20.1466 6.21932 31.576 13.183 38.6381ZM21.9059 19.9252L26.0134 24.0907L30.1789 19.9833C30.7044 19.4651 31.5698 19.4712 32.088 19.9967C32.6062 20.5222 32.6001 21.3877 32.0746 21.9058L27.9091 26.0133L32.0165 30.1788C32.5347 30.7043 32.5286 31.5697 32.0031 32.0879C31.4776 32.6061 30.6122 32.6 30.094 32.0745L25.9866 27.909L21.821 32.0164C21.2956 32.5346 20.4301 32.5285 19.9119 32.003C19.3937 31.4775 19.3998 30.6121 19.9253 30.0939L24.0908 25.9865L19.9834 21.821C19.4652 21.2955 19.4713 20.43 19.9968 19.9118C20.5223 19.3936 21.3877 19.3997 21.9059 19.9252Z" fill="#FE0000" fill-opacity="0.69"/>
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
          <div className={!displaySkill ? "hidden" : "block"}>
            {Skill.map((input, index) => (
              <Form
                onSubmit={submit}
                //   className="p-5 mt-5 border bg-white rounded-md text-sm laptop:text-md desktop:text-lg"
                className="max-w-7xl mx-auto mt-5 p-5 bg-white rounded-md shadow-md"
              >
                <div
                  className="flex flex-row mb-5"
                  onClick={() => onDropDwon(input.id)}
                >
                  {input.skill ? input.skill : "(Not Specified)"}
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
                        <label
                          for="skill"
                          // className="block mb-2 text-sm font-medium dark:text-black"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          Skill <span className="text-red-700">*</span>
                        </label>
                        <Field
                          className="w-full border border-gray-400 p-2 rounded-lg"
                          // className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          name="skill"
                          placeholder="Your Relevant Skill "
                          value={input.skill}
                          onChange={(event) =>
                            handleSkillChange(index, event)
                          }
                        ></Field>
                        <ErrorMessage name="skill" className='text-red-500 text-xs italic'/>
                    </div>
                  </div>
                </div>

                <button
                  onClick={(e) => removeFieldsSkill(index, e)}
                  class="  px-5 py-2  rounded-md  overflow-hidden group bg-red-600 relative hover:bg-gradient-to-r hover:from-red-800 hover:to-red-600 text-white  hover:ring-offset-2 hover:ring-red-600 transition-all ease-out duration-300"
                >
                  <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span class="relative">Remove</span>
                </button>
              </Form>
            ))}
          </div>
          {Skill.length >= 0 && displaySkill && (
            <div
              onClick={addFieldsSkill}
              className="m-2 w-full cursor-pointer text-blue-900 hover:text-blue-500 font-bold text-left"
            >
              {Skill.length == 0 ? "+ Add skill" : "+ Add more skill"}
            </div>
          )}
        </div>
      )}
    </Formik>
  );
};

export default Skill;
