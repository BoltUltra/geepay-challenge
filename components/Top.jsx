import React from 'react'
import { Heading } from '.'

const top = () => {
  return (
    <section className='h-[23.375rem] py-4 bg-white dark:bg-[#090C2C] rounded-2xl dark:border dark:shadow overflow-hidden overflow-y-scroll lg:mr-5 lg:mx-0 md:mx-5 mx-3 lg:my-0 my-5 px-5'>
      <div className="flex items-center justify-between">
        <div className="">
          <Heading text={'Top Platform'} />
        </div>
        <button className='text-primary md:text-base text-sm'>See all</button>
      </div>
      <div className="mt-5 text-[#22242C] dark:text-accent space-y-5 px-1">
        <div className='space-y-3'>
          <p className='font-semibold md:text-lg'>Book Bazar</p>
          <div className='w-full bg-[#F5F5F5] rounded-full md:h-3 h-2'>
            <div className='h-full w-[55%] bg-[#6160DC] rounded-full'></div>
          </div>
          <div className="flex items-center justify-between md:text-base text-sm">
            <p>$2,500,000</p>
            <p>+15%</p>
          </div>
        </div>
        <div className='space-y-3'>
          <p className='font-semibold md:text-lg'>Artisan Aisle</p>
          <div className='w-full bg-[#F5F5F5] rounded-full md:h-3 h-2'>
            <div className='h-full w-[45%] bg-[#54C5EB] rounded-full'></div>
          </div>
          <div className="flex items-center justify-between md:text-base text-sm">
            <p>$1,800,000</p>
            <p>+10%</p>
          </div>
        </div>
        <div className='space-y-3'>
          <p className='font-semibold md:text-lg'>Toy Troop</p>
          <div className='w-full bg-[#F5F5F5] rounded-full md:h-3 h-2'>
            <div className='h-full w-[30%] bg-[#FFB74A] rounded-full'></div>
          </div>
          <div className="flex items-center justify-between md:text-base text-sm">
            <p>$1,200,000</p>
            <p>+8%</p>
          </div>
        </div>
        <div className='space-y-3'>
          <p className='font-semibold md:text-lg'>XStore</p>
          <div className='w-full bg-[#F5F5F5] rounded-full md:h-3 h-2'>
            <div className='h-full w-[30%] bg-[#FF4A55] rounded-full'></div>
          </div>
          <div className="flex items-center justify-between md:text-base text-sm">
            <p>$1,000,000</p>
            <p>+5%</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default top