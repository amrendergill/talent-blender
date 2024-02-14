"use client"

import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <>
            <nav className="border-b shadow-sm fixed top-0 bg-white w-full">
                <div className="container py-3 flex items-center justify-between">
                    <Link href={'/'} >
                        <div className="w-fit">
                            <Image src={"/images/PNH-logo.png"} alt="Logo" width={150} height={100} priority />
                        </div>
                    </Link>
                    <div>
                        <ul className="flex items-center gap-10">
                        <Link href={'/'} >
                            <li className="flex items-center flex-col">
                                <Image src={"../../svg/home.svg"} alt="home" width={16} height={16} priority />
                                Home
                            </li>
                            </Link>
                            <li className="flex items-center flex-col">
                                <Image src={"../../svg/briefcase-icon.svg"} alt="home" width={16} height={16} priority />
                                Jobs
                            </li>
                            <li className="flex items-center flex-col">
                                <Image src={"../../svg/bell-icon.svg"} alt="home" width={16} height={16} priority />

                                Notifications
                            </li>
                                <Link href={'/profile?status=basic-details'}>
                            <li className="flex items-center flex-col">
                            <Image src={"../../svg/person-profile-image-icon.svg"} alt="home" width={18} height={18} priority />

                                Profile
                            </li>
                                </Link>
                        </ul>
                    </div>
                </div>

            </nav>

        </>
        // <NavigationMenu className="">
        //     <NavigationMenuList className="flex items-center">
        //         <NavigationMenuItem className="flex items-center justify-start">
        //             <Link href="/docs" legacyBehavior passHref className="p-0">
        //                 <NavigationMenuLink  >
        //                     <div className="flex items-center gap-3">
        //                         <Image src={'/images/PNH-logo.png'} alt="pnhLogo" width={200} height={200} priority />
        //                     </div>
        //                 </NavigationMenuLink>
        //             </Link>
        //         </NavigationMenuItem>
        //         <NavigationMenuItem>
        //             <Link href="/docs" legacyBehavior passHref className="p-0">
        //                 <NavigationMenuLink  >
        //                     <div className="flex items-center gap-3">
        //                         <Image src={'../../svg/home.svg'} alt="home" width={16} height={16} priority />
        //                         <p className="p-0">
        //                             Home
        //                         </p>

        //                     </div>
        //                 </NavigationMenuLink>
        //             </Link>
        //         </NavigationMenuItem>
        //         <NavigationMenuItem>
        //             <Link href="/docs" legacyBehavior passHref className="p-0">
        //                 <NavigationMenuLink  >
        //                     <div className="flex items-center gap-3">
        //                         <Image src={'../../svg/home.svg'} alt="home" width={16} height={16} priority />
        //                         <p className="p-0">
        //                             About

        //                         </p>

        //                     </div>
        //                 </NavigationMenuLink>
        //             </Link>
        //         </NavigationMenuItem>
        //         <NavigationMenuItem>
        //             <Link href="/docs" legacyBehavior passHref className="p-0">
        //                 <NavigationMenuLink  >
        //                     <div className="flex items-center gap-3">
        //                         <Image src={'../../svg/home.svg'} alt="home" width={16} height={16} priority />
        //                         <p className="p-0">
        //                             Notifications

        //                         </p>

        //                     </div>
        //                 </NavigationMenuLink>
        //             </Link>
        //         </NavigationMenuItem>
        //         <NavigationMenuItem>
        //             <Link href="/docs" legacyBehavior passHref className="p-0">
        //                 <NavigationMenuLink  >
        //                     <div className="flex items-center gap-3">
        //                         <Image src={'../../svg/home.svg'} alt="home" width={16} height={16} priority />
        //                         <p className="p-0">
        //                             Profile

        //                         </p>

        //                     </div>
        //                 </NavigationMenuLink>
        //             </Link>
        //         </NavigationMenuItem>
        //     </NavigationMenuList>
        // </NavigationMenu>
    )
}