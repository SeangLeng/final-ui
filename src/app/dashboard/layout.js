'use client'
import Script from 'next/script'
import thumbnail from "@/app/images/teamShowcase.png"
import NavbarDashboard from '@/components/navbarDash'
import SideBar from '@/components/sideBar'
import DashboardFooter from '@/components/dashboardFooter'

export default function RootLayout({ children }) {
    return (
        <div>
            <NavbarDashboard />
            <SideBar />
            <div className="p-4 sm:ml-64">
                <div className="p-4 dark:border-gray-700 mt-24">
                    {children}
                </div>
            </div>
            <DashboardFooter />
            <Script src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></Script>
        </div>
    )
}