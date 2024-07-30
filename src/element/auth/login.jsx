import React, { useEffect, useState } from "react";
import { login } from "./auth";
import { useRouter } from "next/navigation";

const LoginPage = ({ modalSetting, closeFunc, tokenSetter }) => {
  const router = useRouter();
  // Filled State
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Email Validation
  const validateEmail = (email) => {
    // Very basic email validation, you may need a more robust solution
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const close = () => {
    closeFunc();
  };

  const handleAuth = async () => {
    if (!password || !email) {
      alert("Please fill in all fields");
      return;
    }
    // Perform email format validation
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      const userData = {
        password: password,
        email: email,
      };
      const response = await login(userData);
      if (response) {
        close();
        tokenSetter();
        router.push("admin");
      } else {
        throw new Error("Unexpected Error has happen, try again later.");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Login failed. Please try again later.");
    }
  };

  return (
    <dialog
      className={`fixed inset-0 z-10 flex items-center justify-center rounded-2xl text-white ${
        modalSetting ? "block" : "hidden"
      }`}
      aria-modal={true}
    >
      <div className="flex flex-col bg-gray-700 p-6 rounded-lg border-white border-2">
        <div className="flex flex-row items-center justify-between">
          <p className="text-center mb-4 text-2xl font-bold">Sign In</p>
          <button
            onClick={close}
            className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
          >
            x
          </button>
        </div>
        <p>Email Address *</p>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-md p-1 mb-2 mt-1 text-black"
          placeholder="myexample@gmail.com"
          id="email"
          value={email}
          autoComplete="email"
          required
        />
        <p>Password *</p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-md p-1 mb-2 mt-1 text-black"
          id="password"
          placeholder="password"
          value={password}
          autoComplete="current-password"
          required
        />
        <button
          onClick={handleAuth}
          className="border mt-6 bg-slate-400 rounded-md size-fit py-1 px-4 self-center"
        >
          Sign In
        </button>
      </div>
    </dialog>
  );
};

export default LoginPage;
