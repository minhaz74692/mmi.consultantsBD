import React from 'react'
import background from "../images/construction1.jpg"
import HomeCarousel from './HomeCarousel'
import HomeWorks from './HomeWorks'
import MmiConsultants from './MmiConsultants';
import AllWork from './AllWork';


const Home = () => {
  return (
    <div>
      <div className={`bg-fixed bg-no-repeat bg-cover`} style={{ backgroundImage: `url(${background})` }}>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 h-[80vh] lg:h-[80vh]'>
          <div className='flex flex-col items-center justify-center font-mono text-white text-center bg-black bg-opacity-30 mt-10'>
            <h1 className='lg:text-[4rem] text-[2rem] px-5 lg:mt-20 pt-14 lg:pt-0 font-bold text-white animate-[titleAnim_1s_ease-in-out] animate-[titleAnim_1s_ease-in-out]'>MMI CONSULTANTS BD</h1>
            <h2 className='lg:text-[2.2rem] text-[1.5rem] py-5 animate-[dreamAnim_1s_ease-in-out] delay-100'>WE BUILD YOUR DREAMS</h2>
          </div>
          <div className='flex justify-center items-center bg-black bg-opacity-60 text-white col-span-2 p-2 text-justify py-10 lg:py-0'>
            <HomeCarousel />
          </div>
        </div>
      </div>

      {/* Card */}
      <div>
        {AllWork.map(work=>{
          return(
            <HomeWorks key={work.key} imgSrc = {work.imgSrc[0]} title={work.title} row={work.row} link={work.link+"/"+work.key} detail={work.detail}/>
          )
        })}
      </div>
      <MmiConsultants/>
    </div>
  )
}

export default Home
