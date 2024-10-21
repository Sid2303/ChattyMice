"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Logout() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/user/login", {
        method: "DELETE",
      });

      if (response.ok) {
        router.push("/");
        router.refresh();
        console.log("Cookie deleted successfully");
      } else {
        console.log("Error deleting cookie");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-violet-500 text-xl rounded-md px-3 py-2 absolute top-5 right-5 hover:bg-violet-600"
    >
      Logout
    </button>
  );
}

export default Logout;
