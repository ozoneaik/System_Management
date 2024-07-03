'use client';

import {signOut } from 'next-auth/react';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars, faBookmark, faCalendarDay,
    faCoins,
    faGauge,
    faGraduationCap,
    faListCheck,
    faRightFromBracket,
    faUser
} from "@fortawesome/free-solid-svg-icons";

const SidebarMenus = [
    {title : 'แดชบอร์ด',path : '/pages/dashboard',icon : faGauge},
    {title : 'บันทึกรายรับ-รายจ่าย',path : '/pages/dashboard',icon : faCoins},
    {title : 'งานที่ต้องทำ',path : '/pages/dashboard',icon : faListCheck},
    {title : 'เกียรติบัตร',path : '/pages/dashboard',icon : faGraduationCap},
    {title : 'เรซูเม่ && CV',path : '/pages/dashboard',icon : faBookmark},
    {title : 'ปฏิทิน',path : '/ages/dashboard',icon : faCalendarDay},
    {title : 'โปรไฟล์',path : '/pages/profile',icon : faUser},
];

const Sidebar = ({onClose}) => {

    return (
        <>
            <aside id="logo-sidebar"
                   className={`pt-14 fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${onClose ? '-translate-x-0' : '-translate-x-full'} bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
                   aria-label="Sidebar">
                <div className="flex flex-col h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    {/*<div className={'w-full bg-gray-900 mb-3 rounded-lg items-center justify-center'}>*/}
                    {/*    <img src="https://img2.pic.in.th/pic/logo255d970ddca418fb.png" alt="sidebar logo"/>*/}
                    {/*</div>*/}
                    <ul className="flex-grow space-y-2 font-medium">
                        {
                            SidebarMenus.map((menu, index) => (
                                <li key={index}>
                                    <Link href={menu.path}
                                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                    >
                                        <FontAwesomeIcon icon={menu.icon}
                                                         className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                                        <span className="flex-1 ms-3 whitespace-nowrap">{menu.title}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="mt-auto">
                        <button
                            onClick={() => signOut(({callbackUrl: '/'}))}
                            className="flex bg-red-700 w-full items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <FontAwesomeIcon icon={faRightFromBracket}
                                             className="w-5 h-5 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"/>
                            <span className="ms-3">
                                ออกจากระบบ
                            </span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
