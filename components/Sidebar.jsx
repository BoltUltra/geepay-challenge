import React from 'react'
import { useTheme } from 'next-themes'
import { ArrowCircleRight2, Box, Category, DiscountShape, InfoCircle, Logout, Profile2User, Setting2, TrendUp } from 'iconsax-react'
import Link from 'next/link'

const sidebar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <nav className='flex flex-col py-5 h-screen bg-[#F7F8FA] dark:bg-[#090C2C] justify-between'>
      <div className='space-y-5'>
        <img src="/logo.svg" alt="logo" className='w-10 h-10 mx-auto' />
        <ul className="flex flex-col items-center space-y-4">          <li className='h-10 w-10 px-9 border-r-2 border-[#0D062D] dark:border-accent rounded-r-sm flex items-center justify-center'>
          <Link href='#' className='dark:hidden'><Category size="24" color="#0D062D" variant="Bulk" /></Link>
          <Link href='#' className='dark:block hidden'><Category size="24" color="#b2abab" variant="Bulk" /></Link>
        </li>
          <li className='sidebar-item'><Link href='#'><TrendUp color="#b2abab" variant="Broken" /></Link></li>
          <li className='sidebar-item'><Link href='#'><Profile2User color="#b2abab" variant="Broken" /></Link></li>
          <li className='sidebar-item'><Link href='#'><Box color="#b2abab" variant="Broken" /></Link></li>
          <li className='sidebar-item'><Link href='#'><DiscountShape color="#b2abab" variant="Broken" /></Link></li>
          <li className='sidebar-item'><Link href='#'><InfoCircle color="#b2abab" variant="Broken" /></Link></li>


          <div className='bg-white rounded-full space-y-4 p-2'>
            <button
              className={`rounded-full h-[30px] w-[30px] flex items-center justify-center dark:bg-gray-300 bg-primary`}
              onClick={() => toggleTheme('light')}
            >
              <img src="/brightness.svg" alt="light mode" className='cursor-pointer h-4 w-4' />
            </button>
            <button
              className={`rounded-full h-[30px] w-[30px] flex items-center justify-center dark:bg-primary bg-gray-300`}
              onClick={() => toggleTheme('dark')}
            >
              <img src="/moon.svg" alt="dark mode" className='cursor-pointer h-4 w-4 invert' />
            </button>
          </div>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col items-center space-y-4">
          <li className='sidebar-item'><Link href='#'><ArrowCircleRight2 color="#b2abab" variant="Broken" /></Link></li>
          <li className='sidebar-item'><Link href='#'><Setting2 color="#b2abab" variant="Broken" /></Link></li>
          <li className='sidebar-item'><Link href='#'><Logout color="#b2abab" variant="Broken" /></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default sidebar