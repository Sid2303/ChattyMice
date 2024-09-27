"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        router.push("/chats");
      } else {
        console.error("Login failed:", data);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col border border-black p-5 gap-3 m-2  bg-slate-50 w-[50%]"
    >
      <h1 className="text-2xl">Login Form</h1>
      <label htmlFor="email">Enter your email:</label>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email..."
        className="px-2 py-1"
      />
      <label htmlFor="password">Enter your password:</label>
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        name="password"
        id="password"
        placeholder="Enter your password"
        className="px-2 py-1"
      />
      <button type="submit" className="bg-blue-400 w-fit px-2 py-1">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
