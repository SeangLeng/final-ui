

"use client"
import { useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik, Form } from "formik";
const SocialLink = () => {
  const [open, setOpen] = useState(false);

  const initialValues = { 
    sociallink: "" ,
    sociallink1: "" ,
    sociallink2: "" ,
    sociallink3: "" ,
    sociallink4: "" ,
    sociallink5: "" ,
   
  };
  const validationSchema = Yup.object({
    sociallink: Yup.string(),
    sociallink1: Yup.string(),
    sociallink2: Yup.string(),
    sociallink3: Yup.string(),
    sociallink4: Yup.string(),
    sociallink5: Yup.string(),
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
        <Form className="mt-5 p-5 bg-white rounded-md shadow-md">
           <button
                className="pl-4 py-3 text-sm font-medium w-full"
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <div className="flex justify-between item-center">
                    <h1 className="block text-gray-700 font-bold mb-2 text-lg">
                      Social Link
                    </h1>
                      
                     
                    <svg 
               className="w-9 h-9"
               viewBox="0 0 52 51" 
               fill="none" 
               xmlns="http://www.w3.org/2000/svg">
               <path d="M13.184 38.0932C20.1477 45.1553 31.5771 45.2356 38.6392 38.2719C45.7013 31.3082 45.7816 19.8788 38.8179 12.8167C31.8542 5.75453 20.4248 5.67431 13.3627 12.638C6.30052 19.6017 6.2203 31.0311 13.184 38.0932ZM21.9069 19.3803L26.0143 23.5458L30.1798 19.4384C30.7053 18.9202 31.5708 18.9263 32.089 19.4518C32.6071 19.9773 32.6011 20.8427 32.0756 21.3609L27.9101 25.4683L32.0175 29.6338C32.5357 30.1593 32.5296 31.0248 32.0041 31.543C31.4786 32.0612 30.6131 32.0551 30.095 31.5296L25.9875 27.3641L21.822 31.4715C21.2965 31.9897 20.4311 31.9836 19.9129 31.4581C19.3947 30.9326 19.4008 30.0671 19.9263 29.549L24.0918 25.4415L19.9844 21.276C19.4662 20.7505 19.4723 19.8851 19.9978 19.3669C20.5232 18.8487 21.3887 18.8548 21.9069 19.3803Z" fill="#FE0000" fill-opacity="0.69"/>
               </svg>
                  
                  </div>

                ) : (
                  <div className="flex justify-between item-center">
                    <h1 className="block text-gray-700 font-bold mb-2 text-lg  ">
                      Social Link
                    </h1>
                    <svg 
                        className="w-7 h-7" 
                        viewBox="0 0 38 36" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.1314 0C9.01293 0 0.767578 8.082 0.767578 18C0.767578 27.918 9.01293 36 19.1314 36C29.2499 36 37.4952 27.918 37.4952 18C37.4952 8.082 29.2499 0 19.1314 0ZM26.4769 19.35H20.5087V25.2C20.5087 25.938 19.8843 26.55 19.1314 26.55C18.3785 26.55 17.7541 25.938 17.7541 25.2V19.35H11.7859C11.0329 19.35 10.4086 18.738 10.4086 18C10.4086 17.262 11.0329 16.65 11.7859 16.65H17.7541V10.8C17.7541 10.062 18.3785 9.45 19.1314 9.45C19.8843 9.45 20.5087 10.062 20.5087 10.8V16.65H26.4769C27.2298 16.65 27.8542 17.262 27.8542 18C27.8542 18.738 27.2298 19.35 26.4769 19.35Z" fill="#30419D"/>
                      </svg>
                  </div>
                )}
              </button>
          {open && (
            <div>
              <div className="mt-10">
                <label
                  htmlFor="sociallink"
                  className="block text-gray-700 font-bold mb-2"
                ></label>
                <Field
                  type="text"
                  id="sociallink"
                  name="sociallink"
                  placeholder="Link"
                  className="w-full border border-gray-400 p-2 rounded-lg h-14"
                />
                <ErrorMessage name="sociallink" className='text-red-500 text-xs italic'/>
              </div>

              <div className="mt-10">
                <label
                  htmlFor="sociallink"
                  className="block text-gray-700 font-bold mb-2"
                ></label>
                <Field
                  type="text"
                  id="sociallink1"
                  name="sociallink1"
                  placeholder="Link"
                  className="w-full border border-gray-400 p-2 rounded-lg h-14"
                />
                <ErrorMessage name="sociallink1" className='text-red-500 text-xs italic'/>
              </div>
              
              <div className="mt-10">
                <label
                  htmlFor="sociallink2"
                  className="block text-gray-700 font-bold mb-2"
                ></label>
                <Field
                  type="text"
                  id="sociallink2"
                  name="sociallink2"
                  placeholder="Link"
                  className="w-full border border-gray-400 p-2 rounded-lg h-14"
                />
                <ErrorMessage name="sociallink2" className='text-red-500 text-xs italic'/>
                
              </div>
              <div className="mt-10">
                <label
                  htmlFor="sociallink2"
                  className="block text-gray-700 font-bold mb-2"
                ></label>
                <Field
                  type="text"
                  id="sociallink3"
                  name="sociallink3"
                  placeholder="Link"
                  className="w-full border border-gray-400 p-2 rounded-lg h-14"
                />
                <ErrorMessage name="sociallink3" className='text-red-500 text-xs italic'/>
              </div>
              <div className="mt-10">
                <label
                  htmlFor="sociallink4"
                  className="block text-gray-700 font-bold mb-2"
                ></label>
                <Field
                  type="text"
                  id="sociallink4"
                  name="sociallink4"
                  placeholder="Link"
                  className="w-full border border-gray-400 p-2 rounded-lg h-14"
                />
                <ErrorMessage name="sociallink4" className='text-red-500 text-xs italic'/>
              </div>
              <div className="mt-10">
                <label
                  htmlFor="sociallink5"
                  className="block text-gray-700 font-bold mb-2"
                ></label>
                <Field
                  type="text"
                  id="sociallink5"
                  name="sociallink5"
                  placeholder="Link"
                  className="w-full border border-gray-400 p-2 rounded-lg h-14"
                />
                <ErrorMessage name="sociallink5" className='text-red-500 text-xs italic'/>
              </div>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SocialLink;


