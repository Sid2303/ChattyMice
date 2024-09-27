"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function RegisterForm() {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (data.message === "User created successfully") {
        router.push("/chats");
      } else {
        console.error("Registration failed:", data);
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col border border-black p-5 gap-3 m-2 bg-slate-50 w-[50%]"
    >
      <h1 className="text-2xl">Registration Form</h1>
      <>
        <label htmlFor="username">Enter your username:</label>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="username"
          name="username"
          id="username"
          placeholder="Enter your username..."
          className="px-2 py-1"
        />
      </>
      <>
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
      </>
      <>
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
      </>
      <button type="submit" className="bg-blue-400 w-fit py-1 px-2">
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
