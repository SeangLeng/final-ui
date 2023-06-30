'use client'
import React, { useEffect, useState } from 'react'
import "./style/homepage.css"
import homepageImage from "../images/JobInterviewIllustration.jpg"
import generateCV from '../images/GernerationCV-image.webp'
import generatePortfoio from '../images/generatePortfolio.png'
import ISTADstudent from '../images/istad-student.png'
import aboutUs from '../images/aboutUs.png'
import importtantImage from '../images/important-schedule.webp'
import cvLinkImage from '../images/cv-template-hero.webp'
import Image from 'next/image'
import AccordionItem from './accordion/accordionItem'
import teamImage from '../images/team-image-bg.png'
import PortLinkImage from '../images/PortLinkImage.png'
import contactUsBg from '../images/contactUsBg.png'
import Link from 'next/link'
import { Formik, Form, Field, ErrorMessage, useField } from "formik"
import * as Yup from 'yup';
export default function Homepage() {
  // dropdown questions !!!
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null)
    } else {
      setOpen(index)
    }
  }

  const validateSchema = Yup.object().shape({
    name: Yup.string().required("You must input your name"),
    telephone: Yup.string().required("Telephone must be provided in this field"),
    message: Yup.string().required("Are your sure, cencel your mind!")
  })
  const MyTextArea = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <textarea className="text-area" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error text-red-500">{meta.error}</div>
        ) : null}
      </>
    );
  };
  const accordion = [
    {
      title: "Why do we have Cv ?",
      answer: "A CV provides a comprehensive snapshot of your qualifications, experiences, and achievements, and is often the first point of contact between you and potential employers. By presenting a clear and concise summary of your skills and experience, a CV can help you stand out from other applicants and demonstrate your unique value proposition."
    },
    {
      title: "Why do we have Portfolio ?",
      answer: "Having a portfolio is essential for individuals who want to showcase their skills, accomplishments, and experiences. A portfolio is a collection of work samples that provides tangible evidence of what an individual is capable of, which can be more persuasive than simply listing qualifications on a resume."
    },
    {
      title: "Hom much can ISTAD student do?",
      answer: "Students who take advanced IT courses at ISTAD are able to develop a range of valuable skills that are highly sought after in today's job market. These courses provide students with an in-depth understanding of various programming languages, software applications, and other IT tools and technologies, enabling them to become proficient in a wide range of areas. The advanced courses offered by ISTAD also provide students with opportunities to work on real-world projects and gain practical experience, which can be invaluable when seeking employment. By completing these courses, students are able to demonstrate their ability to solve complex problems, think critically, and work collaboratively as part of a team. Overall, the skills and knowledge gained through ISTAD's advanced IT courses can help students stand out in the job market and achieve success in their careers."
    }
  ]

  return (
    <main className='homepage pt-20 px-40 relative' >
      <div className='search-box w-[100%]'>
        <div className='row'>
          <button ><i className="fa-solid fa-magnifying-glass"></i></button>
          <input onClick={() => { window.location.pathname = "/homepage/search" }} id='input-box' placeholder='Search' autoComplete='off' className='focus:ring-0 cursor-pointer' />
        </div>
      </div>
      <section className='page-1 lg:flex md:grid justify-between h-screen mt-32'>
        <div className='home-parts lg:w-full sm:w-full'>
          <p className='text-blue-800 text-5xl font-semibold'>
            Welcome to PortISTAD
          </p>
          <p className='description text-2xl font-regular text-gray-500 mt-3'>Provide you better templates</p>
          <p className='text-black-700 text-lg font-regular mt-10'>
            Welcome to <span className='uppercase text-blue-800 font-semibold'>PORTISTAD</span>, the premier online destination for creating professional and polished CVs in minutes. Our user-friendly platform allows you to easily input your personal information, work experience, education, and skills, and our expertly crafted templates will transform your data into a stunning and effective CV.
          </p>
          <p className='mt-20'>
            <span className='text-xl'>From </span> <a href='https://istad.co/' className='text-blue-800 text-2xl font-regular underline italic'>ISTAD</a>
          </p>

          <a href={"#page-2"} className="inline-flex transition-all justify-between gap-3 hover:gap-5 items-center mt-20 px-5 py-2.5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <p className='text-xl'>More</p>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.6459 0.00012207C6.57601 0.00012207 0 6.57613 0 14.646C0 22.7159 6.57601 29.2919 14.6459 29.2919C22.7158 29.2919 29.2918 22.7159 29.2918 14.646C29.2918 6.57613 22.7158 0.00012207 14.6459 0.00012207ZM18.7321 15.4223L13.5621 20.5923C13.3424 20.8119 13.0641 20.9145 12.7859 20.9145C12.5076 20.9145 12.2293 20.8119 12.0096 20.5923C11.5849 20.1675 11.5849 19.4645 12.0096 19.0398L16.4034 14.646L12.0096 10.2523C11.5849 9.82752 11.5849 9.12452 12.0096 8.69979C12.4344 8.27506 13.1374 8.27506 13.5621 8.69979L18.7321 13.8698C19.1715 14.2945 19.1715 14.9975 18.7321 15.4223Z" fill="white" />
            </svg>
          </a>
        </div>
        <div className='home-parts flex justify-center items-center'>
          <Image src={homepageImage} alt="homepage-image" className='-mt-10 z-0' />
        </div>
      </section>

      <section className='page-2' id='page-2'>
        <p className='text-3xl text-blue-800 font-medium text-center'>Why you choose <span className='font-semibold text-blue-800'>PortISTAD</span></p>
        <p className='text-lg text-gray-500 text-center mt-2'>These are the reasons</p>

        <div className='lg:flex justify-between mt-14 gap-5'>
          <div className='card flex lg:w-[32%] sm:w-full sm:mt-5 mt-5'>
            <div className='flex-col justify-between'>
              <p className='text-2xl'>Generating Cover letter</p>
              <p className='mt-5'>It's also important to provide specific examples of how you have contributed to your previous roles.</p>
              <a href='/listProducts'>
                <svg className='mt-10' width="47" height="24" viewBox="0 0 47 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M45.5635 13.0607C46.1493 12.4749 46.1493 11.5251 45.5635 10.9393L36.0175 1.3934C35.4317 0.807611 34.482 0.807611 33.8962 1.3934C33.3104 1.97919 33.3104 2.92893 33.8962 3.51472L42.3815 12L33.8962 20.4853C33.3104 21.0711 33.3104 22.0208 33.8962 22.6066C34.482 23.1924 35.4317 23.1924 36.0175 22.6066L45.5635 13.0607ZM0 13.5H14.6224V10.5H0V13.5ZM14.6224 13.5H44.5028V10.5H14.6224V13.5Z" fill="#452DD7" />
                </svg>
              </a>

            </div>
            <div>
              <Image src={generateCV} alt='generating CV' className='w-96' />
            </div>
          </div>
          <div className='card flex lg:w-[32%] md:w-full sm:w-full sm:mt-5 mt-5'>
            <div className='flex-col justify-between'>
              <p className='text-2xl'>Generating Portfolio</p>
              <p className='mt-5'>Begin by selecting a clear and concise format that is easy to navigate and visually appealing.</p>
              <a href='/listProducts/portfoio'>
                <svg className='mt-10' width="47" height="24" viewBox="0 0 47 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M45.5635 13.0607C46.1493 12.4749 46.1493 11.5251 45.5635 10.9393L36.0175 1.3934C35.4317 0.807611 34.482 0.807611 33.8962 1.3934C33.3104 1.97919 33.3104 2.92893 33.8962 3.51472L42.3815 12L33.8962 20.4853C33.3104 21.0711 33.3104 22.0208 33.8962 22.6066C34.482 23.1924 35.4317 23.1924 36.0175 22.6066L45.5635 13.0607ZM0 13.5H14.6224V10.5H0V13.5ZM14.6224 13.5H44.5028V10.5H14.6224V13.5Z" fill="#452DD7" />
                </svg>
              </a>

            </div>
            <div>
              <Image src={generatePortfoio} alt='generating CV' className='w-96' />
            </div>
          </div>
          <div className='card flex lg:w-[32%] md:w-full sm:w-full sm:mt-5 mt-5'>
            <div className='flex-col justify-between'>
              <p className='text-2xl'>View ISTAD student</p>
              <p className='mt-5'>You all can find the ISTAD student account with their public account. </p>
              <a href='/homepage/search'>
                <svg className='mt-10' width="47" height="24" viewBox="0 0 47 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M45.5635 13.0607C46.1493 12.4749 46.1493 11.5251 45.5635 10.9393L36.0175 1.3934C35.4317 0.807611 34.482 0.807611 33.8962 1.3934C33.3104 1.97919 33.3104 2.92893 33.8962 3.51472L42.3815 12L33.8962 20.4853C33.3104 21.0711 33.3104 22.0208 33.8962 22.6066C34.482 23.1924 35.4317 23.1924 36.0175 22.6066L45.5635 13.0607ZM0 13.5H14.6224V10.5H0V13.5ZM14.6224 13.5H44.5028V10.5H14.6224V13.5Z" fill="#452DD7" />
                </svg>
              </a>

            </div>
            <div>
              <Image src={ISTADstudent} alt='generating CV' className='w-96' />
            </div>
          </div>
        </div>
      </section>

      <section className='page-3 mt-36 lg:flex flex-wrap justify-between' id='aboutUs'>
        <Image src={aboutUs} alt='' className='lg:w-1/3' />
        <div className='lg:w-3/6 sm:w-full'>
          <p className='text-5xl font-semibold text-blue-800'>About Us</p>
          <p className='mt-10 text-xl'>We understand that creating a strong CV or portfolio can be a daunting task, especially for students and those new to the job market. That's why we offer a user-friendly platform that makes it easy to create professional-looking documents that highlight your strengths and achievements.</p>
        </div>
      </section>

      <section className='lg:-mx-40 md:-mx-40 mx-[-5%] mt-20 page-4 bg-blue-800 py-10'>
        <p className='capitalize text-white font-semibold text-5xl text-center'>the important</p>
        <div className='flex flex-wrap justify-between mt-20'>
          <div className='questions lg:w-3/6 sm:w-full'>
            <div className='px-[40px]'>
              {
                accordion.map((item, index) => {
                  return <AccordionItem key={index} open={index === open} title={item.title} answer={item.answer} toggle={() => toggle(index)} />
                })
              }
            </div>
          </div>
          <Image src={importtantImage} alt="important image" className='m-auto lg:mt-0 h-fit block md:mt-10 sm:mt-10' />
        </div>
      </section>

      <section className='page-4 mt-20 lg:-mx-40 sm:mx-[-5%]'>
        <Image src={teamImage} alt="important image" style={{ width: "100%" }} />
        <div className='box-detailer lg:-mt-80 sm:mt-0 p-10 bg-white rounded-tr-xl lg:w-[45%] sm:w-[100%] lg:h-[322px] sm:h-auto lg:absolute sm:block z-10'>
          <div className='flex gap-5'>
            <div className='line bg-blue-800 h-2 w-16 rounded-lg'></div>
            <div className='line bg-blue-800 h-2 w-20 rounded-lg'></div>
            <div className='line bg-blue-800 h-2 w-16 rounded-lg'></div>
          </div>
          <p className='text-5xl font-semibold mt-8 text-blue-800'>PortISTAD</p>
          <p className='text-2xl mt-10'>As a team, we are committed to providing users with a comprehensive and informative portfolio and CV on our website. </p>
        </div>
      </section>

      <section className='page-5 mt-20' id='template'>
        <p className='text-center text-4xl font-semibold text-blue-800'>Choose your Templates</p>
        <div className='templates mt-20 mb-10 lg:flex justify-between item-center'>
          <div className='templates-row w-full m-auto'>
            <a href='/listProducts'>
              <Image src={cvLinkImage} alt='cvLinkImage' style={{ margin: "auto" }} />
            </a>
          </div>
          <div className='templates-row w-full m-auto'>
            <a href='/listProducts/portfoio'>
              <Image src={PortLinkImage} alt='cvLinkImage' style={{ margin: "auto" }} />
            </a>
          </div>
        </div>
        <div className='flex justify-center item-center'>
          <a href='/listProducts' type="button" className="text-white bg-blue-800 transition-all hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-10 py-5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View all templates</a>
        </div>
      </section>

      <section className='page-6 relative h-screen' id='contactUs'>
        {/* background */}
        <Image src={contactUsBg} alt='contactUsBg' className='m-auto mt-20' />
        {/* contact us form */}

        <Formik initialValues={{ name: "", telephone: "", message: "", }}
          validationSchema={validateSchema}
          onSubmit={(value, { setSubmit, resetForm }) => {
            console.log(value)
            resetForm();
          }}
        >
          {
            ({
              isSubmiting
            }) => (
              <Form className='form-input-blur bg-white p-10 rounded-[26px] absolute z-10 lg:right-[340px] sm:right-0 lg:top-[100px] sm:top-96'>
                <p className='text-4xl font-semibold text-blue-800 text-center'>Contact Us</p>
                <div className='grid gap-7 mt-10'>
                  <div className="relative">
                    <div className="absolute translate-x-[50%] translate-y-[25%] flex items-center pointer-events-none">
                      <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9994 12.7059C15.508 12.7059 18.3524 9.86157 18.3524 6.35294C18.3524 2.84431 15.508 0 11.9994 0C8.4908 0 5.64648 2.84431 5.64648 6.35294C5.64648 9.86157 8.4908 12.7059 11.9994 12.7059Z" fill="#9F9F9F" />
                        <path d="M12 15.5293C5.38613 15.5293 0 20.2728 0 26.1175C0 26.5128 0.290428 26.8234 0.660065 26.8234H23.3399C23.7096 26.8234 24 26.5128 24 26.1175C24 20.2728 18.6139 15.5293 12 15.5293Z" fill="#9F9F9F" />
                      </svg>
                    </div>
                    <Field type="text"
                      name="name"
                      placeholder="Name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[13px] focus:ring-blue-500 focus:border-blue-500 block w-full pl-14 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <ErrorMessage name='name' component="div" className='text-red-500' />
                  </div>
                  <div className="relative">
                    <div className="absolute translate-x-[50%] translate-y-[30%] flex items-center pointer-events-none">
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3152 17.6661L18.0652 15.3223C17.8409 15.2227 17.5916 15.2018 17.3549 15.2625C17.1182 15.3233 16.9068 15.4625 16.7527 15.6592L14.4277 18.6182C10.7788 16.8261 7.84228 13.7673 6.12188 9.96635L8.9625 7.54448C9.15172 7.38417 9.28565 7.164 9.34401 6.91731C9.40237 6.67062 9.38199 6.41083 9.28594 6.17729L7.03594 0.708542C6.93052 0.456788 6.74408 0.25124 6.50876 0.12734C6.27344 0.00344002 6.00399 -0.0310452 5.74687 0.0298307L0.871875 1.20171C0.623986 1.26133 0.402818 1.40672 0.24447 1.61415C0.0861212 1.82157 -5.71036e-05 2.07878 2.83885e-08 2.3438C2.83885e-08 14.8682 9.74531 25 21.75 25C22.0045 25.0002 22.2515 24.9105 22.4507 24.7455C22.65 24.5806 22.7896 24.3501 22.8469 24.0918L23.9719 19.0137C24.0299 18.7446 23.9961 18.4628 23.8763 18.2168C23.7564 17.9708 23.558 17.7761 23.3152 17.6661Z" fill="#9B9B9B" />
                      </svg>
                    </div>
                    <Field
                      type="text"
                      name="telephone"
                      placeholder="Telephone"
                      id="telephone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[13px] focus:ring-blue-500 focus:border-blue-500 block w-full pl-14 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <ErrorMessage name='telephone' component="div" className='text-red-500' />
                  </div>
                  <MyTextArea
                    type="text"
                    name="message"
                    placeholder="your message"
                    id="message"
                    rows="4" className="block h-[188px] resize-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></MyTextArea>
                  <button disabled={isSubmiting} type="submit" className="text-white bg-blue-800 transition-all hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-fit px-5 py-2 m-auto dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send</button>
                </div>
              </Form>
            )
          }
        </Formik>

      </section>
    </main >
  )
}
