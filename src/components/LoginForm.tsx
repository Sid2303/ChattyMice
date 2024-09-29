"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css"

// Define the props interface for LoginForm
interface LoginFormProps {
  changePage: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ changePage }) => {
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
      className="flex flex-col border border-black p-5 bg-slate-50"
    >
      <h1 className="text-2xl">Login Form</h1>
      <div className="info-input">
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
      <div className="info-input mb-6">
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

      <button className="btn-1" type="submit">
        <div className="original">Login</div>
          <div className="letters">
            <span>L</span>
            <span>O</span>
            <span>G</span>
            <span>I</span>
            <span>N</span>
          </div>
      </button>

      <div className=" flex gap-1">
        <p>Dont have an account?</p>
        <a onClick={changePage} className="go-to-register">Register Here</a>
      </div>
    </form>
  );
};

export default LoginForm;
