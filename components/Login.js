"use client";
import React, { useState } from "react";
import { Fugaz_One } from "next/font/google";
import Button from "./Button";
import { useAuth } from "@/context/AuthContext";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [authenticating, setAuthenticating] = useState(false)
  const [error, setError] = useState('')

  const {signup, login } = useAuth();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function handleSubmit() {
    setError('')
    if (!email || !password ) {
      setError('Please enter an email and password')
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setAuthenticating(true)
    try {
      if (isRegister) {
        console.log('Signing up a new user')
        await signup(email, password)
      } else {
        console.log('Logging in a user')
        await login(email, password)
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setAuthenticating(false)
      
    }
  }

  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4">
      <h3 className={"text-4xl sm:text-5xl md:text-6xl " + fugaz.className}>
        {isRegister ? "Register" : "Login"}
      </h3>
      <p>You&#39;re one step away!</p>
      {error && (
        <p className="text-red-500 text-sm max-w-[400px] text-center">
        {error}
      </p>
      )}
      
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-primary-600 focus:border-primary-600 py-2 sm:py-3 border-2 border-solid border-primary-400 rounded-full outline-none"
        placeholder="Email"
      ></input>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-primary-600 focus:border-primary-600 py-2 sm:py-3 border-2 border-solid border-primary-400 rounded-full outline-none"
        placeholder="Password"
        type="password"
      ></input>
      <div className="max-w-[400px] w-full mx-auto">
        <Button clickHandler={handleSubmit} onKeyDown={(e) => {if (e.key === 'Enter') handleSubmit()}} text={authenticating ? 'Submitting...' : 'Submit'} full />
      </div>
      <p className="text-center">
        {isRegister ? 'Already have an account? ' : "Don\'t have an account? "}
        <button
          onClick={() => setIsRegister(!isRegister)}
          className="text-primary-600"
        >
          {isRegister ? "Sign In" : "Sign Up"}
        </button>
      </p>
    </div>
  );
}
