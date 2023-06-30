
import Navbar from '@/components/navbar'
import '@/app/listProducts/productsListStyle.css'
import Script from 'next/script'
import ProfileAside from '@/components/profileAside'
import { Suspense } from 'react'
import Loading from '../loading'

export default function layout({ children }) {
    return (
        <section>
            <Navbar />
            <ProfileAside />
            <div className="p-10 sm:ml-72 lg:ml-80 md:ml-80 flex flex-wrap mt-24 justify-start gap-5 items-start">
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
            </div>
            <Script src="https://kit.fontawesome.com/dfbc5788ab.js" crossorigin="anonymous"></Script>
        </section>
    )
}
