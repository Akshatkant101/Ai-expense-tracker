'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import { PiggyBank, LayoutGrid, ReceiptText, ShieldCheck, CircleDollarSign } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import image from "../../../../assests/download.jpg";
function Sidenav() {
    const menuList = [
        {
            id: 1,
            name: "Dashboard",
            icon: LayoutGrid,
            path: '/dashboard'
        },
        {
            id: 2,
            name: "Incomes",
            icon: CircleDollarSign,
            path: '/dashboard/Incomes'
        },
        {
            id: 3,
            name: "Budgets",
            icon: PiggyBank,
            path: '/dashboard/budgets'
        },
        {
            id: 4,
            name: "Expenses",
            icon: ReceiptText,
            path: '/dashboard/Expenses'
        },
        {
            id: 5,
            name: "Upgrade",
            icon: ShieldCheck,
            path: '/dashboard/upgrade'
        }
    ];
    const pathname = usePathname();
    useEffect(() => {
        console.log(pathname)
    }, [pathname]);
    return (
        <div className="h-screen p-5 border shadow-sm">
            <div className="flex flex-row items-center">
                <Image src={image} alt="Logo" width={40} height={25} />
                <span className="text-blue-800 font-bold text-xl"></span>
            </div>
            <div>
                {menuList.map((menu, index) => (
                    <Link
                        href={menu.path} key={index}
                    >
                        <h2 className={`flex gap-2 items-center text-gray-500 font-medium mb-2 p-4 cursor-pointer rounded-full hover:text-blue-800 hover:bg-blue-300 ${pathname == menu.path && 'text-blue-800 bg-blue-100 '}`}>
                            <menu.icon />
                            {menu.name}
                        </h2>
                    </Link>
                ))}
            </div>
            <div
                className="fixed bottom-10 p-5 flex gap-2
            items-center"
            >
                <UserButton />
                Profile
            </div>
        </div>
    )

}
export default Sidenav;