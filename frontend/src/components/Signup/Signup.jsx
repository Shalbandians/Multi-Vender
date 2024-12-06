
import React, { useState } from "react";
import robot from "../../Assests/images/robot.jpg";
import { Link, } from "react-router-dom";
import { ToastContainer, } from "react-toastify";

import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";



function Signup() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex w-screen h-screen overflow-hidden" style={{ backgroundImage: `url(${robot})`, backgroundSize: "cover" }}>
      <ToastContainer />
      <div className="h-full my-10 flex items-center justify-center relative" >
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
                <div>
                  <form className="bg-white">

                    <label className="block mb-4">
                      <Link to="https://accounts.google.com/signin" target="_blank" rel="noopener noreferrer">

                        <div className="mt-3 text-lg md:text-xl text-gray-600 text-center font-bold flex justify-center pl-12 w-full p-2 py-3 border bg-white focus:bg-gray-200 rounded-md focus:border-sky-600 focus:outline-sky-600 bg-opacity-80">
                          Create account with Google
                          <FcGoogle className="mt-1 w-6 h-6 ml-2 text-gray-400 hover:shake" onClick={() => setShowPass(!showPass)} />
                        </div>
                      </Link>
                      <div className="flex items-center my-4">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-4 text-gray-500">or</span>
                        <hr className="flex-grow border-gray-300" />
                      </div>
                    </label>
                    <label className="block mb-4 ">
                      <span className="font-semibold mb-2 text-[#2ca1cb]"> Email Address</span>
                      <div className="flex relative items-center">
                        <CiMail className="absolute left-3 w-6 h-6 mr-2 text-gray-400 hover:shake" />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-12 w-full p-2 py-3 border bg-white focus:bg-gray-200 rounded-md focus:border-sky-600 focus:outline-sky-600 bg-opacity-80" placeholder="Enter your email address" 
                        required/>
                      </div>
                    </label>
                    <label className="block mb-4">
                      <span className="font-semibold mb-2 text-[#2ca1cb]"> Full Name</span>
                      <div className="flex relative items-center">
                        <FiUser className="absolute left-2 w-6 h-6 mr-2 text-gray-400 hover:shake" onClick={() => setShowPass(!showPass)} />
                        <input type="text" className="pl-12 w-full p-2 py-3 border bg-white focus:bg-gray-200 rounded-md focus:border-sky-600 focus:outline-sky-600 bg-opacity-80" placeholder="Enter your full name" 
                        required/>
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
                    <button id="openModalBtn" className="flex justify-center mx-auto rounded-xl px-4 py-2 my-3 overflow-hidden relative group cursor-pointer border-2 font-medium text-lg border-sky-700 w-3/5 text-sky-700 hover:scale-105 transition duration-[900ms]">
                      <span className="absolute w-64 h-0 transition-all duration-[900ms] origin-center rotate-45 -translate-x-50 bg-sky-700 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                      <span className="relative text-black transition duration-[900ms] group-hover:text-white ease">
                        Create an account
                      </span>
                    </button>


                    <p className="p-4 flex items-center justify-center">
                      <span className="pe-2 text-black text-sm">Already have an Account?</span>
                      <Link to="/" className="font-semibold underline text-sm text-black">Login</Link>
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="App flex space-x-4">
                        <Link to="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer">
                          <FaFacebook className="text-blue-500 hover:shake" size="2em" />
                        </Link> <Link to="https://twitter.com/login" target="_blank" rel="noopener noreferrer"> <FaTwitter className="text-blue-500 hover:shake" size="2em" /> </Link> <Link to="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer"> <FaInstagram className="text-red-500 hover:shake" size="2em" /> </Link> <Link to="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer"> <FaLinkedin className="text-blue-500 hover:shake" size="2em" /> </Link>
                      </div>
                    </div>
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

export default Signup;
