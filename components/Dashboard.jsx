import React, { useState } from 'react';
import { Cards, Chart, Header, Sidebar, Table, Top } from './';
import { ArrowSquareLeft, ArrowSquareRight } from 'iconsax-react';

const Dashboard = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <div className='flex w-full'>
      <aside className={`w-auto md:block hidden h-screen`}>
        <Sidebar />
      </aside>

      {isSidebarVisible && <aside className='w-auto md:hidden fixed h-screen z-10'>
        <Sidebar />
      </aside>}


      <section className={`w-full ${isSidebarVisible ? 'shifted' : ''}`}>
        <Header />
        <button
          className={`md:hidden absolute top-5 ${isSidebarVisible ? 'right-4' : 'right-5'}`}
          onClick={toggleSidebar}
        >
          {isSidebarVisible ? <img src="/close.svg" alt="" className='h-7 w-7' /> : <img src="/bars.svg" alt="" className='w-7 h-7' />}
        </button>
        <div className='grid lg:grid-cols-5'>
          <div className='lg:col-span-3'>
            <Chart />
          </div>
          <div className='lg:col-span-2'>
            <Cards />
          </div>
        </div>
        <div className='grid lg:grid-cols-5 md:mb-5'>
          <div className='lg:col-span-3'>
            <Table />
          </div>
          <div className='lg:col-span-2'>
            <Top />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
