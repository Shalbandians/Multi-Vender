 
import React, { useState } from "react";
import Left from "../../Assests/images/robot.jpg";
import { Link, } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { CiLock } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


function Login() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="flex w-screen h-screen overflow-hidden" style={{ backgroundImage: `url(${Left})`, backgroundSize: "cover" }}>
      <div className="h-full my-10 flex items-center justify-center relative" style={{ backgroundImage: `url(${Left})`, backgroundSize: "cover" }}>
        <div className="min-h-screen  p-10 justify-center mx-auto">
          <div className="w-full max-w-xl mx-auto p-4">
            <p className="text-white text-2xl md:text-3xl font-bold">Welcome to</p>
            <p className="text-white text-2xl md:text-3xl font-bold">Teach Support Agent!</p>
            <p className="text-white font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <div className="h-full flex items-center justify-center">
          <div className="h-full w-full relative">
            <div className="p-6 flex justify-center mx-auto rounded-xl hover:scale-105 transition duration-300" style={{ height: "300px" }}>
              <div className="flex flex-col shadow-xl justify-center bg-white  rounded-xl p-6 border-4 hover:scale-105 transition duration-300" style={{ borderTopColor: "#003942", borderBottomColor: "#003942", width: "600px", height: "650px" }}>
                <div className=" space-y-6 text-2xl md:text-3xl text-gray-900 text-center font-bold flex justify-center">
                  Create an account
                </div>
                <p className="p-4 flex items-center justify-center">
                  <span className="pe-2 text-black text-sm">Already have an Account?</span>
                  <Link to="/signup" className="font-semibold underline text-sm text-gray-900">Login</Link>
                </p>
                <div>
                  <form className="bg-white">
                    <label className="block mb-4">
                    <Link to="https://accounts.google.com/signin" target="_blank" rel="noopener noreferrer">

                      <div className="mt-3 text-lg md:text-xl text-gray-600 text-center font-bold flex justify-center pl-12 w-full p-2 py-3 border bg-white focus:bg-gray-200 rounded-[50px] focus:border-sky-600 focus:outline-sky-600 bg-opacity-80">
                        <FcGoogle className="mt-1 w-6 h-6 mr-2 text-gray-400 hover:shake" />
                        Create account with Google
                      </div>
                      </Link>
                      <Link to="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer">

                      <div className="mt-3 text-lg md:text-xl text-gray-600 text-center font-bold flex justify-center pl-12 w-full p-2 py-3 border bg-white focus:bg-gray-200 rounded-[50px] focus:border-sky-600 focus:outline-sky-600 bg-opacity-80">
                        <FaFacebook className="mt-1 w-6 h-6 mr-2 text-blue-500 hover:shake" />
                        Create account with Google
                      </div>
                      </Link> 
                      <div className="flex items-center my-4">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-4 text-gray-500">or</span>
                        <hr className="flex-grow border-gray-300" />
                      </div>
                    </label>
                    <span className="font-semibold mb-4 ">Enter your email address to create an account</span>

                    <label className="block mb-4 ">
                      <span className="font-semibold mb-2 text-gray-600">Your Email</span>
                      <div className="flex relative items-center">
                        <CiMail className="absolute left-3 w-6 h-6 mr-2 text-gray-400 hover:shake" />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-12 w-full p-2 py-3 border bg-white focus:bg-gray-200 rounded-md focus:border-sky-600 focus:outline-sky-600 bg-opacity-80" placeholder="Enter your email address"
                        required />
                      </div>
                    </label>
                    <label className="block mb-4">
                      <span className="font-semibold mb-2 text-[#2ca1cb]"> Password</span>
                      <div className="flex relative items-center">
                        {showPass ? (
                          <FaEyeSlash className="absolute right-1 w-6 h-6 mr-2 text-gray-500 hover:shake" onClick={() => setShowPass(!showPass)} />
                        ) : (
                          <FaEye className="absolute right-1 w-6 h-6 mr-2 text-gray-500 hover:shake" onClick={() => setShowPass(!showPass)} />
                        )}
                        <CiLock className="absolute left-2 w-6 h-6 mr-2 text-gray-400 hover:shake" />
                        <input type={showPass ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className="pl-12 w-full p-2 py-3 border bg-white focus:bg-gray-200 rounded-md focus:border-sky-600 focus:outline-sky-600 bg-opacity-80" placeholder="Create your password"
                        required />
                      </div>
                    </label>


                    <button id="openModalBtn" className="flex justify-center mx-auto rounded-xl px-4 py-2 my-3 overflow-hidden relative group bg-gray-500 cursor-pointer border-2 font-medium text-lg border-gray-500 w-3/5 text-white hover:scale-105 duration-[900ms]">
                      <span className="relative ">
                        Create an account
                      </span>
                    </button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
 