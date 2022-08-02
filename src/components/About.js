import React from 'react'
import MmiConsultants from './MmiConsultants'

const About = () => {
  return (
    <div className='pt-10'>
      <MmiConsultants/>
      <hr className='w-[70vw] bg-gray-400 h-[2px] mx-auto'/>

      <div>
        <h2 className='text-center font-mono lg:text-[2rem] text-[1.5rem] mt-10 font-bold text-[rgb(10,15,90)]'>DEPARTMENTS</h2>

        <div>
            <div className='lg:px-[100px] px-5'>
              <h1 className='lg:float-left '>CONSTRUCTION:</h1>
              <img className='lg:float-right w-100% lg:w-[40vw]' src='https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='construction'/>
            </div>
          </div>


      </div>
    </div>
  )
}

export default About
