import React from 'react';
import { Link } from 'react-router-dom';

const HomeWorks = (props) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className={`flex flex-col md:flex-${props.row} lg:flex-${props.row} md:w-full mt-5 rounded-lg bg-white shadow-lg lg:px-[7rem] lg:py-2`}>
          <img className="lg:w-[450px] md:w-[400px] w-[350px] block mx-auto md:h-auto object-cover rounded-lg md:rounded-none md:rounded-lg" src={props.imgSrc} alt="" />
          <div className="p-6 flex flex-col justify-center text-left">
            <h5 className="text-gray-900 text-2xl font-bold mb-2">{props.title}</h5>
            <p className="text-black mb-4 text-xl">{props.detail}</p>
            <Link className='animate-bounce text-xl text-indigo-800' to={props.link}>Details<i class="fa-solid fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeWorks
