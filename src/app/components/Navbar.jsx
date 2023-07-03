 "use client"
import Link from 'next/link';
import React, { useState } from 'react';

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 3,
    title: "Projects",
    url: "/projects",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },

];

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className='h-100 flex  justify-between items-center px-10 py-10'>
    //   <Link href="/" className='font-bold font-[22px]'>
    //     Portfolio
    //   </Link>
    //   <div className='flex items-center gap-20  '>
    //     {links.map((link) => (
    //       <Link key={link.id} href={link.url} className='hover:text-green-500'>
    //         {link.title}
    //       </Link>
    //     ))}
    //   </div>
    // </div>
    <div className='h-100 flex justify-between items-center px-10 py-10'>
    <Link href="/" className='font-bold font-[22px]'>
      Portfolio
    </Link>
    <div className='flex items-center gap-20 md:hidden'>
      <button
        className='text-gray-500 hover:text-green-500'
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      </div>
      <div className={`flex sm:flex-row flex-col items-center gap-20 ${isOpen ? '' : 'hidden'} md:flex`}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className='hover:text-green-500'>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar