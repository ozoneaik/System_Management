'use client'

import { useSession } from 'next-auth/react';

export default function Profile() {
    const { data: session } = useSession();

    return (
        <div className="container w-full">
            <div className="grid grid-cols-12 gap-4">
                {/* Profile Image Card */}
                <div className="col-span-12 lg:col-span-3">
                    <div className="relative rounded overflow-hidden pb-2 shadow-sm dark:bg-gray-800 shadow-slate-300">
                        <div className="w-full">
                            <img
                                src="https://as1.ftcdn.net/v2/jpg/03/50/68/30/1000_F_350683074_SSaXPN4XBvmwEKWRG4aU18Kl7kwkOdrg.jpg"
                                alt=""
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                            <img
                                src={session?.user?.image}
                                alt=""
                                className="rounded-full w-24 h-24 object-cover border-4 border-white"
                            />
                        </div>
                        <h3 className="text-center font-bold mt-16 text-black mb-3 dark:text-white">
                            {session?.user?.name}
                        </h3>
                        <p className="text-center text-black dark:text-white">fullstack developer</p>
                    </div>
                </div>

                {/* Content */}
                <div className="col-span-12 lg:col-span-9 bg-gray-50 dark:bg-gray-800">
                    <div className="p-4">
                        <h2 className="text-2xl font-bold mb-4">Content Section</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ex quis ex mollis
                            luctus. Phasellus dictum ligula sit amet libero volutpat, at dignissim dolor placerat.
                            Integer a luctus diam. Nullam ultricies ac velit at cursus. Cras faucibus, libero in
                            ultricies varius, leo nisi eleifend leo, at aliquam justo eros sit amet nibh. Integer
                            aliquam tincidunt gravida. Phasellus nec est sed mauris hendrerit condimentum non nec
                            eros. Phasellus laoreet ultricies magna, in rhoncus dolor auctor in.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
