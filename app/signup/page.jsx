'use client'

import Link from "next/link";
import {useState} from "react";
import {AlertError} from "@/dialogs/AlertError";
import {SignUpApi} from "@/app/api/auth/signup/SignUpApi";
import {AlertSuccess} from "@/dialogs/AlertSuccess";

export default function SignUpPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (confirmPassword !== password) {
            return AlertError('เกิดข้อผิดพลาด','รหัสผ่านไม่ตรงกัน');
        }
        await SignUpApi(name, email, password, (data, status) => {
            status === 200 ? AlertSuccess('สำเร็จ', data) : AlertError('เกิดข้อผิดพลาด', data);
        });
    }
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link href="#"
                          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src={'https://img2.pic.in.th/pic/logo255d970ddca418fb.png'}
                             alt="logo"/>
                        System Management
                    </Link>
                    <div
                        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                ลงทะเบียน
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        ชื่อ - นามสกุล
                                    </label>
                                    <input
                                        id="name"
                                        type="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required={true}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="ชื่อ - นามสกุล"/>
                                </div>
                                <div>
                                    <label htmlFor="email"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        อีเมลของคุณ
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required={true}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"/>
                                </div>
                                <div>
                                    <label htmlFor="password"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        รหัสผ่าน
                                    </label>
                                    <input name="password" placeholder="••••••••"
                                           id="password"
                                           type="password"
                                           value={password}
                                           onChange={(e) => setPassword(e.target.value)}
                                           required
                                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor={'confirmPassword'}
                                           className={'block mb-2 text-sm font-medium text-gray-900 dark:text-white'}>
                                        ยืนยันรหัสผ่าน
                                    </label>
                                    <input name="confirmPassword" placeholder="••••••••"
                                           id="confirmPassword"
                                           type="password"
                                           value={confirmPassword}
                                           onChange={(e) => setConfirmPassword(e.target.value)}
                                           required
                                           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox"
                                                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                   required=""/>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                                                จดจำฉัน
                                            </label>
                                        </div>
                                    </div>
                                    <Link href="#"
                                          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        ลืมรหัสผ่าน?
                                    </Link>
                                </div>
                                <button type="submit"
                                        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    เข้าสู่ระบบ
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    <Link href="/"
                                          className="font-medium text-blue-400 text-primary-600 hover:underline dark:text-blue-500">
                                        ไปหน้าเข้าสู่ระบบ
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
