"use client"

import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterFrom";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("loginPage");

  return (
    <div className="flex flex-col justify-center items-center h-screen">

    {currentPage === "loginPage" ? (
      <div>
        <LoginForm changePage={() => setCurrentPage("registerPage")}/>
      </div>
    ) : (
      <div>
        <RegisterForm changePage={() => setCurrentPage("loginPage")} />
      </div>
    )}
  </div>
  );
}
