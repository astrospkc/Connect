"use client";

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { signIn } from "next-auth/react";
const Login = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center h-[100vh] p-4 rounded-lg  ">
        <div
          className={`${styles.rcontainer} bg-center bg-cover h-fit  flex justify-center items-center`}
        >
          <h1 className="text-8xl font-bold p-7">Connect</h1>
        </div>
        <div className=" bg-white p-28 ">
          <div className="flex flex-col ">
            <div className="flex flex-col">
              <h1 className="text-2xl text-gray-500">Login</h1>
              <input type="text" placeholder="Username" className="my-4 p-4" />
              <input type="text" placeholder="Password" className="my-4 p-4" />
            </div>
            <h2>or</h2>
            <div style={{ color: "#2a2f4f" }}>
              <h1>Dont have an account?</h1>
              <button className="font-bold" onClick={() => signIn("google")}>
                Login with google
                {/* <Link href="/register">Login with google</Link>here */}
              </button>
            </div>
            <h2>or</h2>
            <div style={{ color: "#2a2f4f" }}>
              <h1>Dont have an account?</h1>
              <h2 className="font-bold">
                <Link href="/register">Register </Link>here
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
