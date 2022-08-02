import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#212223] text-white py-[2rem] px-[4rem]'>
        <div className='grid lg:grid-cols-12 grid-cols-6'>
        <div className='col-start-2 lg:col-span-3 col-span-6'>This is FOOTER</div>
        <div className='col-start-2 lg:col-start-5 lg:col-span-5 col-span-6'>This is descriotion</div>
        <div className='col-span-2'></div>
      </div>
    </div>
  )
}

export default Footer
