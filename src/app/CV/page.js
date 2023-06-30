
import Head from 'next/head'
import './style/CV.css'
import Image from 'next/image'
import seangleng from '../images/seangleng-profile.jpg'

export default function CVTemplate() {
    return (
        <section>
            <div className="flex flex-col items-center justify-between">
                <div className='cv w-full min-h-96 bg-white flex flex-row gap-4'>
                    <div className='col left_cv '>
                        <div className='portimg  '>
                            <Image className='shadow-lg' src={seangleng} />
                            <br />
                            <h1 className='text-2xl text-white font-semibold'>SENG</h1>
                            <p className='text-2xl text-white font-semibold'>SEANG LENG</p>

                            <h2 className='text-base mt-4 text-white font-semibold'>Reference</h2> <br />
                            <p className='text-xs text-white'><storng className=' text-white font-semibold'>Position :</storng>senior core banking </p>
                            <p className='text-xs text-white'><storng className=' text-white font-semibold'>Email :</storng>seth.rupp.@rupp.com </p>
                            <p className='text-xs text-white'><storng className=' text-white font-semibold'>Telephone :</storng>+855 843 345 44</p>

                        </div>
                        <h2 className='text-base ml-6 mt-96 text-white font-semibold'>Contact Us</h2>

                        <p className='text-xs ml-6 mt-4 text-white'><storng className=' text-white font-semibold'>Email :</storng> mr.leng@gmail.com</p>
                        <p className='text-xs ml-6 text-white'><storng className=' text-white font-semibold'>Address :</storng> St 562, Phnom Penh 12151</p>
                        <p className='text-xs ml-6 text-white'><storng className=' text-white font-semibold'>Telephone :</storng>+855 843 345 44</p>
                    </div>
                    <div className='col right_cv '>
                        <h2 className='skill text-black font-semibold'>Experience</h2>
                        <p className='bg-black h-1 w-72'></p>
                        <p className='texth  mt-4'>IT Instructor – Position or Specialize (optional)</p>

                        <li className='ml-5'>
                            <LInk className='text_li'>Specialize on Blockchain, SQL & Data Modeling, Android, Flutter</a>
                        </li>
                        <li className='ml-5'>
                            <LInk className='text_li'>Prepare course syllabus and material</a>
                        </li>
                        <li className='ml-5'>
                            <LInk className='text_li'>Support Training Department</a>
                        </li>

                        <p className='texth  mt-4'>Senior UI/UX Designer </p>

                        <li className='ml-5'>
                            <LInk className='text_li'>Prepare the templates</a>
                        </li>
                        <li className='ml-5'>
                            <LInk className='text_li'>Design website template </a>
                        </li>
                        <li className='ml-5'>
                            <LInk className='text_li'>Design mobile template</a>
                        </li>
                        <li className='ml-5'>
                            <LInk className='text_li'>Support team with leader of the UI position</a>
                        </li>

                        <h2 className='skill  mt-4 text-black font-semibold'>Education</h2>
                        <p className='bg-black h-1 w-72'></p>

                        <p className='texth  mt-4'>Royal university of Phnom Penh - RUPP</p>
                        <p className='text_li'>2021 - 2024</p>

                        <li className='ml-5'>
                            <LInk className='text_li'>C, C++ , JAVA programming language </a>
                        </li>
                        <li className='ml-5'>
                            <LInk className='text_li'>Database management system (SQL, MySQL server )</a>
                        </li>
                        <li className='ml-5'>
                            <LInk className='text_li'>Web - development</a>
                        </li>
                        <li className='ml-5'>
                            <LInk className='text_li'>Management information system</a>
                        </li>

                        <p className='texth  mt-4'>Art design - Website design</p>
                        <p className='text_li'>2021</p>

                        <li className='ml-5'>
                            <LInk className='text_li'>Figma - design</a>
                        </li>
                        <li className='ml-5'>
                            <LInk className='text_li'>Front - end design</a>
                        </li>
                        <li className='ml-5'>
                            <LInk className='text_li'>Editing photos</a>
                        </li>
                        <h2 className='skill mt-4 text-black font-semibold'>Skills</h2>
                        <p className='bg-black h-1 w-72'></p>

                        <p className='text-xs mt-4'>Full stack development ( Pro )</p>

                        <li className='ml-5'>
                            <LInk className='text_li'>Front - end</a>
                        </li>
                        <li className='ml-5'>
                            <LInk className='text_li'>Back - end</a>
                        </li>

                        <h2 className='skill mt-4 text-black font-semibold'>Language</h2>
                        <p className='bg-black h-1 w-72'></p>

                        <p className='text-xs mt-4'>English</p>

                        <li className='ml-5'>
                            <LInk className='text_li'>ACE IELTS teacher trainer</a>
                        </li>

                    </div>
                </div>

            </div>
        </section>

    )

}
