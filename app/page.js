'use client'

import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";

export default function SignIpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password,
            })

            if (result.error) {
                console.error(result.error)
            } else {
                alert('login successful');
                router.push('/pages/dashboard')
            }
        } catch (error) {
            console.log('error', error)
        }
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
                                เข้าสู่ระบบ
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
                                <button type={'button'} onClick={() => signIn('google')}
                                        className="w-full items-center justify-center px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                                    <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg"
                                         loading="lazy" alt="google logo"/>
                                    <span>เข้าสู่ระบบด้วย Google</span>
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    ยังไม่มีบัญชี?
                                    <Link href="signup"
                                       className="font-medium text-blue-400 text-primary-600 hover:underline dark:text-blue-500">
                                        สมัคร
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
