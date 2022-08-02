import React from 'react'
import background from "../images/construction1.jpg"
import background2 from "../images/construction2.jpg"
import HomeCarousel from './HomeCarousel'
import structuralDetailing from "../images/structural_detailing.png";
import Retrofitting from "../images/retrofitting.png";
import frp from "../images/frp.png";
import Seismic from "../images/seismic.jpg";
import Structural from "../images/structural.jpg";
import HomeWorks from './HomeWorks'
import Footer from './Footer';
import MmiConsultants from './MmiConsultants';


const Home = () => {
  return (
    <div>
      <div className={`bg-fixed bg-no-repeat bg-cover`} style={{ backgroundImage: `url(${background})` }}>
        {/* <div className='absolute mt-20 grid lg:grid-cols-12 sm:grid-cols-4 w-full bg-blue-400 gap-4'>
        <div className='lg:col-span-3 md:col-span-3 sm:col-span-12'>Col1</div>
        <div>Col1</div>
        <div>Col1</div>
        <div className='col-start-1 col-end-4'>Col12dvds</div>
        <div className='col-end-10 col-span-4'>Col1</div>
        <div>Col3</div>
        <div>Col1</div>
        <div>Col1</div>
        <div>Col3</div>
        <div>Col1</div>
        <div>Col1</div>
        <div>Col3</div>
      </div> */}

        <div className='grid lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 h-[80vh] lg:h-[100vh]'>
          <div className='flex flex-col items-center justify-center font-mono text-white text-center bg-black bg-opacity-30 mt-10'>
            <h1 className='lg:text-[4rem] text-[2rem] px-5 lg:mt-20 pt-10 lg:pt-0 font-bold text-yellow-400 animate-[titleAnim_1s_ease-in-out]'>MMI CONSULTANTS BD</h1>
            <h2 className='lg:text-[2.2rem] text-[1.5rem] py-5 animate-[dreamAnim_1s_ease-in-out] delay-100'>WE BUILD YOUR DREAMS</h2>
          </div>
          <div className='flex justify-center items-center bg-black bg-opacity-60 text-white col-span-2 p-2 text-justify py-10'>
            <HomeCarousel />
          </div>
        </div>
      </div>

      {/* Card */}
      <HomeWorks imgSrc={structuralDetailing} title="1. STRUCTURAL DETAILING" row="row" link="/services" detail="Structural detailing, as a design pro- cess, comprises the design of the cross-section, elevational profile and. the connections of a structural member in order to achieve the struc- tural engineering requirements of stability, strength and stiffness."/>
      <HomeWorks imgSrc={Retrofitting} title="2. REREIFITTING DESIGN" row="row-reverse" link="/services" detail="Retrofitting of building structures, including maintenance, rehabilitation, and strengthening, is not only an important issue in construction and management, but also a frequent problem to structural engineers in proper structural design. Based on the contributors hands-on experience."/>
      <HomeWorks imgSrc={frp} title="3. FRP STRUCTURES" row="row" link="/services" detail="Overview. Fiber Reinforced Polymers (FRPs) are a new material in structural engineering practice and architecture. Low weight and high durability make FRPs - also known as fiber-reinforced plastics - a promising solution for many applications."/>
      <HomeWorks imgSrc={Seismic} title="4. SEISMIC STRENGTHENING" row="row-reverse" link="/services" detail="Seismic Strengthening is the modification of existing structures to make them more resistant to seismic activity, ground motion, or soil failure due to earthquakes. With better understanding of seismic demand on structures and with our recent experiences with large earthquakes near urban centers, the need of seismic retrofitting is well acknowledged."/>
      <HomeWorks imgSrc={Structural} title="5. STRUCTURAL DESIGN & ANALYSIS" row="row" link="/services" detail="In this modern era of Building Information Modeling (BIM) we are engaged with 3d modeling for structural analysis & design for the best judgment & economic solution. We have worked with renowned & well reputed developers of Bangladesh. We always practice many analytical modeling options for a project to bring out best solution that saves time & money of the client."/>
      <MmiConsultants/>
      <Footer/>
    </div>
  )
}

export default Home
