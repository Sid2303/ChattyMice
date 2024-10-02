"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./register.css";
import Link from "next/link";

const RegisterForm: React.FC = () => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

  const checkPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
  };

  const isPasswordMatch = password === confirmPassword;

  return (
    <div className="registeration-container">
      <form
      onSubmit={handleSubmit}
      className="flex flex-col "
    >
        <h1 className="text-2xl">Register Here</h1>
        <div className="details-container">
          <div className="flex flex-col single-detail">
            <label htmlFor="username">Enter your username:</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username..."
              className="px-2 py-1"
            />
          </div>

          <div className="flex flex-col w-full single-detail">
            <label htmlFor="email">Enter your email:</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
              className="px-2 py-1"
            />
          </div>

          <div className="flex flex-col single-detail">
            <label htmlFor="password">Enter your password:</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="px-2 py-1"
            />
          </div>

          <div className="flex flex-col single-detail">
            <label htmlFor="confirm-password">Confirm password:</label>
            <input
              onChange={checkPassword}
              type="password"
              name="confirm-password"
              id="confirm-password" // Unique ID
              placeholder="Confirm your password"
              className="px-2 py-1"
            />
          </div>
        </div>

        {/* <button
          type="submit"
          className="bg-blue-400 w-fit py-1 px-2"
          disabled={!isPasswordMatch} // Disable if passwords don't match
          style={{ cursor: isPasswordMatch ? "pointer" : "not-allowed" }}
        >
          Register
        </button> */}

        <button 
          type="submit"
          className="bg-blue-400 w-fit py-1 px-2 btn-1"
          disabled={!isPasswordMatch} // Disable if passwords don't match
          style={{ cursor: isPasswordMatch ? "pointer" : "not-allowed" }}>
          <div className="original">Register</div>
          <div className="letters">
            <span>R</span>
            <span>E</span>
            <span>G</span>
            <span>I</span>
            <span>S</span>
            <span>T</span>
            <span>E</span>
            <span>R</span>
          </div>
        </button>

        <div className=" flex gap-1">
          <p>Already have an account?</p>
          <Link
            href={"/login"}
            className="go-to-register text-blue-600"
            id="login-button"
          >
            Go to Login Page
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
