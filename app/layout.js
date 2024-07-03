import {Inter} from 'next/font/google'
import {getServerSession} from 'next-auth'

import SessionProvider from './components/SessionProvider'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'System Management',
    description: 'Generated by create next app',
}

export default async function RootLayout({children}) {
    const session = await getServerSession()
    return (
        <html lang="en" className={''}>
        <body className={`${inter.className} dark:bg-gray-900`} >

        <SessionProvider session={session}>
            {children}
        </SessionProvider>

        </body>
        </html>
    )
}