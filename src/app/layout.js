
import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
import Footer from '@/components/footer'
// import { Suspense } from 'react'
// import Loading from './loading'
import Providers from '@/store/Providers'
import istadlogo from '@/app/images/logo-project.jpg'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PortISTAD',
  description: 'PortISTAD online generate CVs and portfolios following your information',
  openGraph: {
    images: { istadlogo },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <Script strategy='beforeInteractive' defer={true} src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.js"></Script>
      </body>
    </html>
  )
}
