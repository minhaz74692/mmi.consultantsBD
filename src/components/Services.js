import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import AllWork from './AllWork';

const Services = () => {
  const location = useLocation();
  const pathName = Number(location.pathname.slice(10));
  const found = AllWork.find(element => element.key === pathName);
  const imgSrc = found.imgSrc;
  const title = found.title;
  const brief = found.brief;
  const applications = ['SAP 2020', 'RISA', 'DYBA 5', 'STAAD Pro', 'S-Frame, S-Steel and S-Concrete', 'ANSYS', 'Descon Brace Descon Win and Ram Connection', 'Shaft 3D and Foundation 3D'];
  const departments = ['Planning', 'Design', 'Construction', 'Survey and Soil Test', 'Quality Management']
  return (
    <div className='pt-[5rem] bg-slate-100'>
      <p className='text-center text-[1.5rem] lg:text-[2rem] font-bold text-gray-700' >{title.slice(2)}</p>
      <hr className='w-[10rem] lg:w-[15rem] mx-auto font-bold bg-gray-800 h-[2px] my-2' />
      {/* <img className='block mx-auto w-[350px] lg:w-[450px]' src={imgSrc[0]} alt="Nothing" />
      <p className='px-4 text-justify lg:px-[10rem]'>{detail}</p> */}
      <div className='lg:grid grid-cols-12 mt-5 lg:mt-[5rem]'>
        <div className='lg:col-start-2 px-4 lg:px-[3rem]  text-justify col-end-9'>
          <div className=''>
            <p>{brief}</p>
          </div>
          <p className='text-center mt-5 underline font-bold'>{title.slice(2)} PHOTOS:</p>
          <div className='w-[100%]'>
            {imgSrc.map(img => {
              return (<img src={img} className="w-full lg:w-[90%] block mx-auto my-3" alt={title}/>)
            })}
          </div>
        </div>
        <div className='lg:col-start-9 lg:col-end-13 px-5 lg:px-0 mt-5 text-center lg:text-left'>
          <p className='font-bold text-[1.1rem] lg:text-[1.3rem] font-mono'>OUR SERVICES:</p>
          <ul className='mb-5'>
          {AllWork.map(e => {
                    return (
                      <li className={`py-1 hover:bg-slate-100 w-full lg:w-[65%] bg-${location.pathname === "/services/"+e.key ?"white":"none"}`}><Link className={`text-${location.pathname === "/services/"+e.key ?"indigo-800":"black"}`} to={`/services/${e.key}`}>- {e.title.slice(2)}</Link>
                      </li>
                    )
                  })}
          </ul>
          <h3 className='font-bold text-[1.1rem] lg:text-[1.3rem] font-mono'>DEPARTMENTS:</h3>
          <ul className='pb-5'>
          {departments.map(app=>{
            return(
              <li className='my-1'>- {app}</li>
            )
          })}
          </ul>
          <h3 className='font-bold text-[1.1rem] lg:text-[1.3rem] font-mono'>OUR USE OF SOFTWARE:</h3>
          <ul className='pb-5'>
          {applications.map(app=>{
            return(
              <li className='my-1'>- {app}</li>
            )
          })}
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Services
