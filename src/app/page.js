import Image from 'next/image'
import frontend from "./public/frontend.jpg"


export default function Home() {
  return (
    <div className='flex items-center gap-[50px] p-12 sm:pl-[10%] sm:pb-[20%] verflow-hidden pb-[90%] '>
    <div className=' flex flex-col gap-12 '>
      <h1 className='text-6xl bg-gradient-to-b from-green-700 to-blue-500 text-transparent bg-clip-text'>
       Namaste, I'm Kruthardh  
      </h1>
      <p className=' text-lg font-light'>
      I'm a enthusiastic full stack developer with deep love for football.
      </p>
      <a href="/about" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
<span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">About Me</span>
<span class="relative invisible">About Me</span>
</a>

    </div>
    <div className='w-full h-45 object-contain animate-pulse ml-40 '>
      <Image src={frontend} alt="" className='' />
    </div>
  </div>
  )
}
