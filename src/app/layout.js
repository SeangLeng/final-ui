'use client'
import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
import Footer from '@/components/footer'
import thumbnail from "@/app/images/teamShowcase.png"
import { Suspense } from 'react'
import Loading from './loading'

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <Footer />
        <Script defer={true} strategy='beforeInteractive' src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></Script>
      </body>
    </html>
  )
}
