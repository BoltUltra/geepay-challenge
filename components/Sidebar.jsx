import { ArrowCircleRight2, Box, Category, DiscountShape, InfoCircle, Logout, Profile2User, Setting2, TrendUp } from 'iconsax-react'
import React from 'react'
import Link from 'next/link'

const sidebar = () => {
  return (
    <nav className='flex flex-col py-5 h-screen bg-[#F7F8FA] justify-between'>
      <div className='space-y-5'>
        <img src="/logo.svg" alt="logo" className='w-10 h-10 mx-auto' />
        <ul className="flex flex-col items-center space-y-4">
          <li className='h-10 w-10 px-9 border-r-2 border-[#0D062D] rounded-r-sm flex items-center justify-center'><Link href='#' className=''><Category size="24" color="#0D062D" variant="Bulk" /></Link></li>
          <li className='h-10 w-10 px-9 border-r-2 border-r-transparent hover:border-[#0D062D] flex items-center justify-center'><Link href='#'><TrendUp color="#b2abab" variant="Broken" /></Link></li>
          <li className='h-10 w-10 px-9 border-r-2 border-r-transparent hover:border-[#0D062D] flex items-center justify-center'><Link href='#'><Profile2User color="#b2abab" variant="Broken" /></Link></li>
          <li className='h-10 w-10 px-9 border-r-2 border-r-transparent hover:border-[#0D062D] flex items-center justify-center'><Link href='#'><Box color="#b2abab" variant="Broken" /></Link></li>
          <li className='h-10 w-10 px-9 border-r-2 border-r-transparent hover:border-[#0D062D] flex items-center justify-center'><Link href='#'><DiscountShape color="#b2abab" variant="Broken" /></Link></li>
          <li className='h-10 w-10 px-9 border-r-2 border-r-transparent hover:border-[#0D062D] flex items-center justify-center'><Link href='#'><InfoCircle color="#b2abab" variant="Broken" /></Link></li>
          <div className='bg-white rounded-full space-y-4 p-2'>
            <div className='bg-[#34CAA5] rounded-full h-[30px] w-[30px] flex items-center justify-center'>
              <img src="/brightness.svg" alt="" className='cursor-pointer h-4 w-4' />
            </div>
            <div className='rounded-full h-[30px] w-[30px] flex items-center justify-center'>
              <img src="/moon.svg" alt="" className='cursor-pointer h-[30px] w-[30px]' />
            </div>


          </div>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col items-center space-y-4">
          <li className='h-10 w-10 px-9 border-r-2 border-r-transparent hover:border-[#0D062D] flex items-center justify-center'><Link href='#'><ArrowCircleRight2 color="#b2abab" variant="Broken" /></Link></li>
          <li className='h-10 w-10 px-9 border-r-2 border-r-transparent hover:border-[#0D062D] flex items-center justify-center'><Link href='#'><Setting2 color="#b2abab" variant="Broken" /></Link></li>
          <li className='h-10 w-10 px-9 border-r-2 border-r-transparent hover:border-[#0D062D] flex items-center justify-center'><Link href='#'><Logout color="#b2abab" variant="Broken" /></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default sidebar