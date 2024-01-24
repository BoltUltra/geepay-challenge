import { DocumentDownload } from 'iconsax-react'
import React from 'react'
import { Heading } from '.'

const people = [
  {
    name: 'Marcus Bergson',
    date: 'Nov 15, 2023',
    amount: '$80,000',
    status: 'Paid',
    image: '/marcus.png',
  },
  {
    name: 'Jaydon Vaccaro',
    date: 'Nov 15, 2023',
    amount: '$150,000',
    status: 'Refund',
    image: '/jaydon.png',
  },
  {
    name: 'Corey Schleifer',
    date: 'Nov 14, 2023',
    amount: '$87,000',
    status: 'Paid',
    image: '/corey.png',
  },
  {
    name: 'Cooper Press',
    date: 'Nov 14, 2023',
    amount: '$100,000',
    status: 'Refund',
    image: '/cooper.png',
  },
  {
    name: 'Phillip Lubin',
    date: 'Nov 13, 2023',
    amount: '$78,000',
    status: 'Paid',
    image: '/phillip.png',
  },
]

const table = () => {
  return (
    <div className='h-[23.375rem] py-4 bg-white rounded-2xl overflow-hidden overflow-y-scroll md:mx-5 mx-3 md:mt-0 mt-5 md:w-auto w-[390px]'>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="">
            <Heading text={'Last Orders'} />
          </div>
          <button className='text-primary md:text-base text-sm'>See all</button>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block md:w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="md:w-full divide-y divide-gray-300">
                <thead>
                  <tr className='text-[#9CA4AB] font-extralight'>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left md:text-sm text-xs  sm:pl-0">
                      Name
                    </th>
                    <th scope="col" className="table-head ">
                      Date
                    </th>
                    <th scope="col" className="table-head ">
                      Amount
                    </th>
                    <th scope="col" className="table-head ">
                      Status
                    </th>
                    <th scope="col" className="table-head ">
                      Invoice
                    </th>

                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.name}>
                      <td className="whitespace-nowrap py-3 pl-4 pr-3 md:text-sm text-xs sm:pl-0">
                        <div className="flex items-center">
                          <div className="h-11 w-11 flex-shrink-0">
                            <img className="h-11 w-11 rounded-full" src={person.image} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">{person.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="table-data">
                        <div className="text-gray-900">{person.date}</div>
                      </td>
                      <td className="table-data">{person.amount}</td>
                      <td className={`table-data ${person.status === 'Paid' ? 'text-[#34CAA5]' : 'text-[#ED544E]'}`}>{person.status}</td>
                      <td className="table-data">
                        <button className="flex items-center space-x-1 text-[#292D32] cursor-pointer">
                          <DocumentDownload color="#292D32" variant="Outline" className='h-4 w-4' />
                          <span>View</span>
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default table