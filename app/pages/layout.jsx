'use client';

import Sidebar from "@/app/components/Sidebar";

import {useEffect} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {Navbar} from "@/app/components/Navbar";

export default function PageLayout({children}) {
    const {data: session, status} = useSession()
    const router = useRouter()
    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/')
        }
    }, [status, router])
    return (
        <div className={''}>
            <Navbar/>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 dark:bg-gray-900 mt-14">
                    {children}
                </div>
            </div>
        </div>
    )
}