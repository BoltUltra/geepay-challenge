import React from 'react'
import CardChart from './CardChart'
import { BoxTick, Coin1, I3DRotate, ShoppingCart } from 'iconsax-react'

const cards = () => {
  return (
    <div>
      <div className='md:grid md:flex-none flex md:overflow-hidden overflow-x-scroll md:w-auto w-[400px] grid-cols-2 gap-4 mt-5 lg:mr-5 lg:px-0 md:px-5 px-3 lg:mb-0 md:mb-5'>
        <div>
          <CardChart
            chart={'/chart-green.svg'}
            icon={<BoxTick color="#34caa5" variant="Bulk" />}
            cardTitle={'Total Order'}
            cardNumber={350}
            trend={'/trending-up.svg'}
            bgColor={'#34CAA51F'}
            textColor={'#34CAA5'} />
        </div>
        <div>
          <CardChart
            chart={'/chart-red.svg'}
            icon={<I3DRotate color="#34caa5" variant="Bulk" />}
            cardTitle={'Total Refund'}
            cardNumber={270}
            trend={'/trending-down.svg'}
            bgColor={'#ED544E1F'}
            textColor={'#ED544E'} />
        </div>
        <div>
          <CardChart
            chart={'/chart-red.svg'}
            icon={<ShoppingCart color="#34caa5" variant="Bulk" />}
            cardTitle={'Average Sales'}
            cardNumber={1567}
            trend={'/trending-down.svg'}
            bgColor={'#ED544E1F'}
            textColor={'#ED544E'} />
        </div>
        <div>
          <CardChart
            chart={'/chart-green.svg'}
            icon={<Coin1 color="#34caa5" variant="Bulk" />}
            cardTitle={'Total Income'}
            cardNumber={'$350.000'}
            trend={'/trending-up.svg'}
            bgColor={'#34CAA51F'}
            textColor={'#34CAA5'} />
        </div>
      </div>
    </div>
  )
}

export default cards