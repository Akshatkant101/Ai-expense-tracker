'use client'
import React, { useEffect } from "react"
import SideNav from "./_component/SideNav"
import Dashboardheader from "./_component/Dashboardheader"
import { db } from "../../../../utils/dbconfig"
import { Budget } from "../../../../utils/schema"
import { useUser } from "@clerk/nextjs"
import { eq } from "drizzle-orm"
import { useRouter } from "next/navigation"



function DashboardLayout({ children }) {
    const {user}=useUser();
    const router=useRouter();
    useEffect(() => {
      user && checkUserBudgets()
    }, [user])
    const checkUserBudgets=async ()=>{
        const result= await db.select.from(Budgets).where(eq(Budgets.createdBy,user?.primaryEmailAddress))
        if(result?.length===0){
            router.replace('/dashboard/budgets')
        }
    }
    return (
        <div>
            <div className="fixed md:w-64 hidden md:block">
                <SideNav/>
            </div>
            <div className="md:ml-64 ">
                <Dashboardheader/>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout