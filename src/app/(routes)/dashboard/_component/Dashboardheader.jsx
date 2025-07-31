'use client'
import { UserButton } from "@clerk/nextjs";
import React from "react";
function Dashboardheader() {
  return (
    <div className="">
        <div></div>
        <div><UserButton afterSignOutUrl="/" /></div>
    </div>
  );
}
export default Dashboardheader;