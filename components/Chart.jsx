import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Heading } from '.';


const data = [
  { "name": "Jan", "Sales": 5300 },
  { "name": "Feb", "Sales": 20000 },
  { "name": "Mar", "Sales": 3500 },
  { "name": "Apr", "Sales": 25000 },
  { "name": "Mai", "Sales": 10000 },
  { "name": "Jun", "Sales": 45000 },
  { "name": "Jul", "Sales": 9000 },
  { "name": "Aug", "Sales": 23000 },
  { "name": "Sep", "Sales": 34000 },
  { "name": "Okt", "Sales": 5000 },
  { "name": "Nov", "Sales": 30000 },
  { "name": "Dec", "Sales": 27000 }
]
const chart = () => {

  return (
    <div className='md:text-sm text-xs md:m-5 m-3 h-[23.375rem] py-4 bg-white dark:bg-[#090C2C] dark:text-accent dark:border dark:shadow rounded-2xl md:px-5'>
      <div className="flex items-center justify-between mb-4 md:px-0 px-3">
        <Heading text={'Sales Trend'} />
        <div className="flex items-center space-x-2">
          <label htmlFor="sort">Sort By</label>
          <div>
            <select name="sort" id="sort" className='border border-[#E5E5E5] rounded-full px-2 py-1'>
              <option value="year">Year</option>
              <option value="month">Month</option>
            </select>
          </div>
        </div>
      </div>
      <ResponsiveContainer height={310}>
        <BarChart data={data}>
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#34CAA5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#34CAA5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            cursor={{ fill: 'transparent' }}
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="custom-tooltip bg-black rounded-full text-white px-10 py-2">
                    <p style={{ color: 'white' }}>{data.Sales}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="Sales" fill="url(#colorSales)" radius={[100, 100, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div >
  )
}

export default chart

