import { BoxTick } from 'iconsax-react'
import React from 'react'

const CardChart = ({ icon, chart, cardTitle, cardNumber, trend, bgColor, textColor }) => {
  return (
    <div className='md:w-auto w-[239px] md:h-auto h-[179px] border p-4 rounded-2xl space-y-2.5 bg-white'>
      {/* <div className='border p-4 rounded-2xl space-y-2.5'> */}
      <div className='flex items-center justify-between w-full'>
        <div className="h-10 w-10 border rounded-full flex items-center justify-center">
          {icon}
        </div>
        <img src={chart} alt="chart" />
      </div>
      <div>
        <p className='text-[#898989] text-lg font-semibold'>{cardTitle}</p>
        <p className='text-[#3A3F51] text-2xl font-bold'>{cardNumber}</p>
      </div>
      <div className='flex items-center space-x-2.5 text-xs'>
        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full`} style={{ backgroundColor: bgColor, color: textColor }}>
          <div className="h-3 w-3 flex items-center justify-center">
            <img src={trend} alt="" />
          </div>
          <p>24,5%</p>
        </div>
        <p className='text-[#606060]'>vs. previous month</p>
      </div>
    </div>
  )
}

export default CardChart