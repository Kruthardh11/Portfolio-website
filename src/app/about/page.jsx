import Image from 'next/image'
import React from 'react'
import mydp from '../public/mydp.jpg'

const About = () => {
  return (
    <div className=' mx-auto px-6 flex flex-col justify-between'>

      <h2 className='flex items-center justify-center bg-gradient-to-b from-green-500 to-blue-500 text-transparent bg-clip-text text-xl font-extrabold'>
        <div className=' border-b-2 border-white'> ABOUT ME</div></h2>
        <div className="sm:mx-[10%] flex flex-col sm:flex-row my-[2%] shadow-white sm:p-2 p-5">
  <div className="sm:w-1/2 sm:p-10 h-full transition-transform duration-300 transform hover:scale-105">
    <div className="sm:text-xl text-sm font-monsterratflex items-center text-blue-100 font-one ">
      Hello! I am Kruthardh Tirunahari, and I am a dedicated full stack developer with a specialization in information security. I am currently pursuing a B.Tech in Computer Science, focusing on expanding my knowledge and skills in the ever-evolving field of technology. I have a strong passion for software development and a deep interest in ensuring the security and integrity of digital systems.
    </div>
  </div>
  <div className="sm:w-1/3 sm:p-10 sm:py-3 sm:mt-0 mt-5 sm:ml-[5%] relative">
  <Image src={mydp} alt="displaypicture" className="rounded-3xl object-contain w-full transition-transform duration-300 transform hover:scale-105 " />
</div>

</div>

    
    <h2 className='flex items-center justify-center bg-gradient-to-b from-green-500 to-blue-500 text-transparent bg-clip-text text-xl font-extrabold'>
        <div className='border-b-2 border-white'> EDUCATION</div></h2>
        <div className="sm:mx-[10%] flex flex-col  my-[2%] shadow-white sm:items-center sm:pt-5 p-5 transition-transform duration-300 transform hover:scale-105">
        Bachelor of Technology in Computer Science (Specialization: Information Security) - [VIT Vellorre]
        </div>

        <h2 className='flex items-center justify-center bg-gradient-to-b from-green-500 to-blue-500 text-transparent bg-clip-text text-xl font-extrabold sm:pt-5 p-5'>
        <div className='border-b-2 border-white'>SKILLS</div></h2>
    <div className='shadow-white sm:p-8 p-5 sm:mb-5 sm:mx-[10%]'>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 m-2">
  <div className="bg-gray-700 p-4 rounded-xl transition-transform duration-300 transform hover:scale-105">
    React Js
  </div>
  <div className="bg-gray-700 p-4 rounded-xl transition-transform duration-300 transform hover:scale-105">
   HTML
  </div>
  <div className="bg-gray-700 p-4 rounded-xl transition-transform duration-300 transform hover:scale-105">
    CSS
  </div>
  <div className="bg-gray-700 p-4 rounded-xl transition-transform duration-300 transform hover:scale-105">
    JavaScript
  </div>
  <div className="bg-gray-700 p-4 rounded-xl transition-transform duration-300 transform hover:scale-105">
    Java
  </div>
  <div className="bg-gray-700 p-4 rounded-xl transition-transform duration-300 transform hover:scale-105">
   C
  </div>
  <div className="bg-gray-700 p-4 rounded-xl transition-transform duration-300 transform hover:scale-105">
    C++
  </div>
  <div className="bg-gray-700 p-4 rounded-xl transition-transform duration-300 transform hover:scale-105">
    Node Js
  </div>
  <div className="bg-gray-700 p-4 rounded-xl transition-transform duration-300 transform hover:scale-105">
    Express
  </div>
  <div className="bg-gray-700 p-4 rounded-xl transition-transform duration-300 transform hover:scale-105">
   Tailwind CSS
  </div>
  <div className="bg-gray-700 p-4 rounded-xl transition-transform duration-300 transform hover:scale-105">
    SQL
  </div>
  <div className="bg-gray-700 p-4 rounded-xl transition-transform duration-300 transform hover:scale-105">
    Next Js
  </div>
  <div className="bg-gray-700 p-4 rounded-xl transition-transform duration-300 transform hover:scale-105">
    Git/GitHub
  </div>
  <div className="bg-gray-700 p-4 rounded-xl transition-transform duration-300 transform hover:scale-105">
   Firebase
  </div>
  <div className="bg-gray-700 p-4 rounded-xl transition-transform duration-300 transform hover:scale-105">
    Python
  </div>
    </div>
    </div>

    <h2 className='flex items-center justify-center bg-gradient-to-b from-green-500 to-blue-500 text-transparent bg-clip-text text-xl font-extrabold sm:pt-5 p-5'>
        <div className='border-b-2 border-white'>Other Experience</div></h2>
        <div className='shadow-white sm:p-8 p-5 sm:mb-5 sm:mx-[10%] transition-transform duration-300 transform hover:scale-105'>
          <div>
        <div className='bg-gradient-to-b from-green-500 to-blue-500  text-transparent bg-clip-text text-xl'>Editorial Member, Otaku Club VIT: </div>
         <p className='my-2'>As an editorial member of the Otaku Club at 
        VIT Vellore, I contribute to the club's content creation, write articles,
        and engage with fellow anime enthusiasts. This role has allowed me to combine my
        passion for anime with my love for writing and communication skills. You can check out my blogs on our club's medium page.</p>
        </div>
        <div>
          <div className='bg-gradient-to-b from-green-500 to-blue-500  text-transparent bg-clip-text text-xl'>Open Source Contributions:</div>
          <p className='my-2'>I have actively contributed to open source projects, 
          collaborating with developers from around the world. These contributions have not 
          only expanded my technical knowledge but also improved my ability to work in diverse and distributed teams.</p>
        </div>
        <div className='flex items-center justify-center mt-6'>  
        <a href="/contact" class="relative inline-flex items-center justify-center p-4 px-14 py-7 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Get in touch</span>
<span className="relative invisible"></span>
</a>    
        </div>
        </div>
    </div>
  )
}

export default About