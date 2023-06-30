"use client";

import React from "react";
import { useState } from "react";
import "./style/style.css";
import placeholder from "../images/placeholder-profile-sq.jpg";
import Image from "next/image";
import Skills from "./components/skills";
import Information from "./components/information";

// const FILE_SIZE = 1024 * 1024 * 10; // 10MB
// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];  

//   const uploadImage = async (values) => {
//     try {
//         const response = await axios.post(
//           `${BASE_URL}files/upload`,
//           values.file
//         );
//         console.log(response);
//         setIsLoading(false);
//         return response.data.location;
//       } catch (error) {
//         console.log(error.message);
//         alert(error.message)
//       }
// }

const Page = () => {
  const [showButton, setShowButton] = useState(false);
  return (
    <div className="bg-white">
      <div className=" h-40 w-full bg-blue-800 py-32">
        <div className="h-56 w-56 rounded-full lg:ml-[48rem]">
          <Image
            src={placeholder}
            className="bg-cover rounded-full profileuser "
            alt="image"
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}
          />
          {showButton && (
            <button className="h-auto bt-upload bg-slate-200 rounded-md p-5">
              Upload
            </button>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8 lg:mt-20 md:mt-0 sm:mt-0">
        <Information />
        <Skills />
        <div className="flex justify-center items-center">
          <button
            type="submit"
            onClick={() => {
              window.location.pathname = "/profile/${id}";
            }}
            className="mt-10 bg-blue-600 text-white py-3 px-5 m-auto rounded"
          >
            Update your profile
          </button>
        </div>
      </div>
    </div>
  );
};

// function DropFileZone({field, form}){
//   const [previewImage, setPreviewImage] = useState(null);
//   const handleChange = (event) => {
//       const file = event.currentTarget.files[0];
//       form.setFieldValue(field.name, file);
//       setPreviewImage(URL.createObjectURL(file));
//   }
//   return(
//       <> 
//           <input
//               id="dropzone-file" 
//               type="file"
//               name="file"
//               onChange={handleChange}
//               className="hidden"
//           />
//           {previewImage && (
//               <img 
//                   src={previewImage} 
//                   alt="preview" 
//                   className="mt-2 h-20 w-full" />
//           )}
//       </>
//   )
// }

export default Page;
