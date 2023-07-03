import Link from 'next/link';
import React from 'react'

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
  return (
    <div className='h-100 flex justify-between items-center px-10 py-10'>
      <Link href="/" className='font-bold font-[22px]'>
        Portfolio
      </Link>
      <div className='flex items-center gap-20  '>
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