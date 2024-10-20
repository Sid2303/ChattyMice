"use client";
import { useState } from "react";
import "./login.css";
import Link from "next/link";
import { useRouter } from "next/navigation";


const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [connectionState, setConnectionState] = useState("")
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
      if (response.ok) {
        router.push("/chats");
      } else {
        setConnectionState("connection-failed")
        // Handle potential cookie issues
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="login-container">
      <form
        onSubmit={handleSubmit}
        className="flex-col p-5 m-auto"
      >
        <h1 className="text-2xl login-text">Login Here</h1>
        <div className="info-container">
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
          <div className="info-input">
            <label htmlFor="password">Enter your password:</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="px-2 py-1 "
            />
            <a className="mt-3" href="">Forgot Password?</a>
          </div>
          {connectionState==="connection-failed"?
            <div className="wrong-input-state">
              <p>Wrong Email or Password !</p>
            </div>:<div>

            </div>
          }
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
          <Link href={"/register"} className="go-to-register text-blue-600">
            Register Here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
