"use client";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { useAuth } from "@/context/AuthContext";

export default function CallToAction() {
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    try {
      await logout();
    } catch (err) {
      console.log(err.message);
    }
  }

  if (currentUser) {
    return (
      <div className="max-w-[600px] mx-auto w-full">
        <Link href={"/dashboard"}>
          <Button full text="Go to dashboard" />
        </Link>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
      <Link href={"/dashboard"}>
        <Button text="Sign Up" />
      </Link>
      <Link href={"/dashboard"}>
        <Button text="Login" dark />
      </Link>
    </div>
  );
}
