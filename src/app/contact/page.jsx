import React from "react"
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <div className= " m-10 h-[100%]">
      <div className="h-screen">
     <h2 className="flex items-center justify-center bg-gradient-to-b from-green-500 to-blue-500 text-transparent bg-clip-text text-xl font-extrabold">
        <div className=" border-b-2 border-white"> GET IN TOUCH</div></h2>
    <div className="grid grid-cols-2  md:grid-cols-4 gap-4 sm:ml-[33%] m-5">
      <div>
  <div className="p-4 py-10 shadow-white m-4 flex items-center justify-center transition-transform duration-300 transform hover:scale-105">
    <a href="https://github.com/Kruthardh11" target="_blank" rel="noopener noreferrer">
      <BsGithub className="h-10 w-10 " />
    </a>
  </div>
  <div className=" p-4 py-10 shadow-white m-4  flex items-center justify-center transition-transform duration-300 transform hover:scale-105">
    <a href="https://instagram.com/karlsefni_11?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer">
      <BsInstagram className="h-10 w-10 " />
    </a>
  </div>
  </div>
  <div>
  <div className=" p-4 py-10 shadow-white m-4  flex items-center justify-center transition-transform duration-300 transform hover:scale-105">
    <a href="https://www.linkedin.com/in/kruthardh-tirunahari-bba216264/" target="_blank" rel="noopener noreferrer">
      <BsLinkedin className="h-10 w-10 " />
    </a>
  </div>
  <div className=" p-4 py-10 shadow-white m-4  flex items-center justify-center transition-transform duration-300 transform hover:scale-105">
    <a href="https://twitter.com/KruthardhT" target="_blank" rel="noopener noreferrer">
      <BsTwitter className="h-10 w-10 " />
    </a>
  </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Contact