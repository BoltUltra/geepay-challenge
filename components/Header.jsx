import { ArrowDown2 } from 'iconsax-react'
import React from 'react'

const header = () => {
  return (
    <div className='flex justify-between w-full bg-accent dark:bg-[#090C2C] text-dark dark:text-accent items-center p-4 border-b md:pr-0 pr-20'>
      <div className='flex items-center justify-between md:w-1/2'>
        <div>
          <h1 className='text-xl font-semibold'>Dashboard</h1>
        </div>

        <div className='lg:block hidden'>
          <div className='bg-white dark:bg-[#090C2C] dark:border flex space-x-2 px-4 h-12 items-center rounded-full w-[21.8rem]'>
            <img src="/search.svg" alt="search-icon" />
            <input type="text" name="search" id="search" placeholder='Search ...' className='placeholder:font-extralight placeholder:text-sm outline-none w-full bg-transparent' />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between md:pr-5 space-x-10 md:w-1/2'>
        <div className="lg:flex hidden items-center space-x-5 px-4 py-3">
          <img src="/calendar.svg" alt="bell" className='h-5 w-5 dark:invert' />
          <p>November 15, 2023</p>
        </div>
        <div className='h-10 w-10 border rounded-full md:flex hidden items-center justify-center'>
          <img src="/bell.svg" alt="bell" className='h-5 w-5 dark:invert' />
        </div>
        <div className='md:flex hidden items-center border rounded-full py-1.5 px-2'>
          <img src="/justin.png" alt="" className='w-9 h-9' />
          <div className='text-right pl-2 pr-3'>
            <p>Justin Bergson</p>
            <p className='text-[#787486] text-sm'>Justin@gmail.com</p>
          </div>
          <div className='dark:hidden'>
            <ArrowDown2 color="#0d062d" variant="Linear" />
          </div>
          <div className='dark:block hidden'>
            <ArrowDown2 color="#FAFAFA" variant="Linear" />
          </div>
        </div>
        <img src="/justin.png" alt="" className='w-9 h-9 md:hidden' />

      </div>
    </div>
  )
}

export default header