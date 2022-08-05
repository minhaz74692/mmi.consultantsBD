import React from 'react'
import MmiConsultants from './MmiConsultants';
import AllWork from './AllWork';
import { Link } from 'react-router-dom';

const About = () => {
  const objects = ['Quality', 'Safety', 'Const Effectiveness', 'Community and Environment']
  return (
    <div className='pt-[5rem] lg:pt-[4rem]'>
      <h1 className='text-center text-[1.7rem] lg:text-[2.8rem] font-semibold text-slate-800 font-mono'>MMI CONSULTANTS BD</h1>
      <hr className='w-[12rem] lg:w-[18rem] mx-auto font-bold bg-gray-800 h-[2px] my-2' />
      <div className='lg:grid grid-cols-12 mt-5 lg:mt-[2rem] lg:mb-10'>
        <div className='lg:col-start-1 text-justify lg:col-end-9 '>
          <MmiConsultants />
          <div className='lg:px-[4rem] px-4 mt-7'>
            <p className='text-xl font-semibold text-center lg:text-left font-mono'>VISION STATEMENT:</p>
            <p>Our vision is to be a world class leader in structural engineering services, and to design structures that are second to none in safety, quality and cost effectiveness.</p>
          </div>
          <div className='lg:px-[4rem] px-4 mt-6'>
            <p className='text-xl font-semibold text-center lg:text-left font-mono'>MISSION STATEMENT:</p>
            <p>Our mission is to advance the practice of structural engineering services in terms of safety quality and cost effectiveness. We review our practice from the perspective of fabricators, erectors and builders to ensure a flawless transition from the engineer’s desk to the final product. We are passionate about what we do and are excited about using cutting edge technologies to delivering the best product to you.</p>
          </div>
        </div>
        <div className='lg:col-start-9 lg:col-end-13 px-5 lg:px-0 mt-5 text-center lg:text-left'>
          <p className='font-bold text-[1.1rem] lg:text-[1.3rem]'>OUR SERVICES:</p>
          <ul className='mb-5'>
            {AllWork.map(e => {
              return (
                <li className={`py-1 hover:bg-slate-100 w-full lg:w-[65%] `}><Link className={``} to={`/services/${e.key}`}>- {e.title.slice(2)}</Link>
                </li>
              )
            })}
          </ul>
          
          <h3 className='font-bold text-[1.1rem] lg:text-[1.3rem]'>CORPORATE OBJECTIVES:</h3>
          <ul className='mb-5'>
            {objects.map(app => {
              return (
                <li className='my-1'>- {app}</li>
              )
            })}
          </ul>

        </div>
      </div>
      <hr className='w-[70vw] bg-gray-400 h-[2px] mx-auto' />

      {/* <div>
        <h2 className='text-center font-mono lg:text-[2rem] text-[1.5rem] mt-10 font-bold text-[rgb(10,15,90)]'>DEPARTMENTS</h2>

        <div>
            <div className='lg:px-[100px] px-5 flex flex-col-reverse lg:flex-row justify-between'>
              <h1 className=''>CONSTRUCTION:</h1>
              <img className='w-100% lg:w-[40vw]' src='https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='construction'/>
            </div>
          </div>


      </div> */}
    </div>
  )
}

export default About
