'use client'
import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useUser, UserButton } from "@clerk/nextjs"
import Link from "next/link"

function Header() {
    const { user, IsSignedIn } = useUser();
    return (
        <div className="p-5 flex justify-between  items-center border shadow-sm">
            <div className="flex items-center">
                <Image src={'/logo.png'} width={80} height={80} />
                <span  className="text-2xl text-[#004DA9]  font-bold capitalize">Easy-Finance</span>
            </div>
            {IsSignedIn ? (<UserButton />) : <div className="flex gap-2 items-center">
                <Link href="/dashboard">
                    <Button variant="outline" className="hover:bg-none hover:text-none hover:border-none text-[#004DA9]">
                        Dashboard
                    </Button>
                </Link>
                <Link href="/dashboard">
                    <Button variant="outline" className="bg-[#004DA9] hover:bg-[#004DA9] hover:text-white text-white">
                        Get Started
                    </Button>
                </Link>
            </div>}
        </div>
    )
}
export default Header