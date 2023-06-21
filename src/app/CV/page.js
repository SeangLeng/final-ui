
import Head from 'next/head'
import './style/CV.css'

export default function Home() {
    <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Kantumruy+Pro:ital,wght@1,200&family=Noto+Serif+Khmer:wght@500&display=swap" rel="stylesheet" />
    </Head>
    return (
        <section >
            <div className='Save'>
                <button id="dropdownTopButton" data-dropdown-toggle="dropdownTop" data-dropdown-placement="top" class="mr-3 mb-3 md:mb-0 text-white   focus:outline-none  font-medium  text-sm px-4 py-2.5 text-center inline-flex items-center  " type="button"><i class="fa-sharp fa-solid fa-circle-up fa-beat"></i> <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg></button>
                <div id="dropdownTop" class="z-10 hidden px-5 w-40 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownTopButton">
                        <li>
                            <a href="#" class="block px-4"><i class="fa-solid fa-floppy-disk"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className='cv w-full min-h-96 bg-white grid grid-rows-1 grid-flow-col gap-4'>
                    <div className='col left_cv '>
                        <div className='portimg  '>
                            <img className='shadow-lg' src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/1.jpg" />
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
                            <a className='text_li'>Specialize on Blockchain, SQL & Data Modeling, Android, Flutter</a>
                        </li>
                        <li className='ml-5'>
                            <a className='text_li'>Prepare course syllabus and material</a>
                        </li>
                        <li className='ml-5'>
                            <a className='text_li'>Support Training Department</a>
                        </li>

                        <p className='texth  mt-4'>Senior UI/UX Designer </p>

                        <li className='ml-5'>
                            <a className='text_li'>Prepare the templates</a>
                        </li>
                        <li className='ml-5'>
                            <a className='text_li'>Design website template </a>
                        </li>
                        <li className='ml-5'>
                            <a className='text_li'>Design mobile template</a>
                        </li>
                        <li className='ml-5'>
                            <a className='text_li'>Support team with leader of the UI position</a>
                        </li>

                        <h2 className='skill  mt-4 text-black font-semibold'>Experience</h2>
                        <p className='bg-black h-1 w-72'></p>

                        <p className='texth  mt-4'>Royal university of Phnom Penh - RUPP</p>
                        <p className='text_li'>2021 - 2024</p>

                        <li className='ml-5'>
                            <a className='text_li'>C, C++ , JAVA programming language </a>
                        </li>
                        <li className='ml-5'>
                            <a className='text_li'>Database management system (SQL, MySQL server )</a>
                        </li>
                        <li className='ml-5'>
                            <a className='text_li'>Web - development</a>
                        </li>
                        <li className='ml-5'>
                            <a className='text_li'>Management information system</a>
                        </li>

                        <p className='texth  mt-4'>Art design - Website design</p>
                        <p className='text_li'>2021</p>

                        <li className='ml-5'>
                            <a className='text_li'>Figma - design</a>
                        </li>
                        <li className='ml-5'>
                            <a className='text_li'>Front - end design</a>
                        </li>
                        <li className='ml-5'>
                            <a className='text_li'>Editing photos</a>
                        </li>
                        <h2 className='skill mt-4 text-black font-semibold'>Skills</h2>
                        <p className='bg-black h-1 w-72'></p>

                        <p className='text-xs mt-4'>Full stack development ( Pro )</p>

                        <li className='ml-5'>
                            <a className='text_li'>Front - end</a>
                        </li>
                        <li className='ml-5'>
                            <a className='text_li'>Back - end</a>
                        </li>

                        <h2 className='skill mt-4 text-black font-semibold'>Language</h2>
                        <p className='bg-black h-1 w-72'></p>

                        <p className='text-xs mt-4'>English</p>

                        <li className='ml-5'>
                            <a className='text_li'>ACE IELTS teacher trainer</a>
                        </li>

                    </div>
                </div>

            </main>
            <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
        </section>

    )

}
