import { UserButton } from "@clerk/nextjs";
import React from "react";
function DashboardHeader() {
  return (
    <div className="">
        <div></div>
        <div><UserButton afterSignOutUrl="/" /></div>
    </div>
  );
}