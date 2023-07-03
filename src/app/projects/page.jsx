import React from 'react'
import awa from "../public/awa.png"
import frontchal from "../public/front-end-2.png";
import blog from "../public/blog1.png";
import img from '../public/imgg-1.png';

import Image from 'next/image'

const Projects = () => {
  return (
    <div className='flex flex-col sm:px-[100px] p-6 pt-0'>
       <h2 className='flex items-center justify-center bg-gradient-to-b from-green-500 to-blue-500 text-transparent bg-clip-text text-xl font-extrabold'>
        <div className=' border-b-2 border-white'> Projects</div></h2>

        <div className="grid grid-cols-2 gap-4 m-5">
  <div className="rounded-lg shadow-white overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-800 ">
    <Image src={awa} alt="Project" className="hidden sm:block w-full h-auto object-contain" />
    <div className="p-4">
      <h3 className="text-xl text-white font-bold mb-2 text-blue-300 ">Anime Web App</h3>
      <p className="text-gray-300 mb-4">	A web app to search, discover and explore the world of anime. The also provides features to login and save favorite anime. The app is built using react js, tailwind css, API integration and used  firebase for backend. </p>
      <a href="https://anime-web-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:text-blue-800">Live Website</a>
      <a href="https://github.com/Kruthardh11/Anime-web-app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 sm:ml-10 hover:text-blue-800">Source code</a>
    </div>
  </div>
  <div className="rounded-lg shadow-white overflow-hidden transition-transform duration-300 transform hover:scale-105  hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-800">
    <Image src={frontchal} alt="Project" className="hidden sm:block w-full h-auto object-contain" />
    <div className="p-4">
      <h3 className="text-xl text-white font-bold mb-2 text-blue-300">Frontend-mentor challenges</h3>
      <p className="text-gray-300 mb-4">	Completed a series of front-end challenges on the Front-end Mentor platform to enhance my front-end skills using html, css, JavaScript and React Js.</p>
      <a href="https://github.com/Kruthardh11/multi-step-form-frontend-mentor-challenge" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Live Website</a>
      <a href="https://github.com/Kruthardh11/Space-toruism-website" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 sm:ml-10">Live Website</a>
    </div>
  </div>
  <div className="rounded-lg shadow-white overflow-hidden transition-transform duration-300 transform hover:scale-105  hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-800">
    <Image src={blog} alt="Project" className="hidden sm:block w-full h-auto object-contain" />
    <div className="p-4">
      <h3 className="text-xl text-white font-bold mb-2">Blogging web app</h3>
      <p className="text-gray-300 mb-4">	Built a Blogging website where the user can login, write/read blogs and edit them. React Js, tailwind css for frontend, Node Js and Express for backend and MySQL for database management.</p>
      <a href="https://github.com/Kruthardh11/otaku-blog-front-end" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Frontend code </a>
      <a href="https://github.com/Kruthardh11/otakublog-back-end" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 sm:ml-10">Backend Code </a>
    </div>
  </div>
  <div className="rounded-lg shadow-white overflow-hidden transition-transform duration-300 transform hover:scale-105  hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-800">
    <Image src={img} alt="Project" className="hidden sm:block w-full h-auto object-contain" />
    <div className="p-4">
      <h3 className="text-xl text-white font-bold mb-2">Image Generator</h3>
      <p className="text-gray-300 mb-4">A full stack web app to generate images when given a prompt. Used React Js, Tailwind CSS and API integration for frontend and forebase for backend.</p>
      <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Live Website</a>
      
      <a href="https://github.com/Kruthardh11/Image-Generator" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 sm:ml-10 hover:text-blue-800">Source code</a>

    </div>
  </div>
</div>


    </div>
  )
}

export default Projects;