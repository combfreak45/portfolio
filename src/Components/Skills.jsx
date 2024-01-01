import React from 'react'
import main1 from '../resource/skills.png'
import Carousel from './Carousel'


let skills = [
  "Tailwind","JavaScript","ReactJs","NextJs","NodeJs","ExpressJs","MangoDB","AdobeIllustrator","AdobePhotoshop","C++","Java","Python","C","SQL","Android"
]




const Skills = () => {
  return (
    <div className="h-screen relative ">
      <img
        src={main1}
        alt="sdcs"
        className=" h-[20rem] w-[20rem] left-[3rem] lg:h-[30rem] lg:w-[30rem] absolute z-1 lg:left-[45rem] lg:bottom-0"
      />
      {/* <img
        src={bill}
        alt="fsdf"
        className="z-1 h-[12rem] w-[12rem] absolute right-[7.5rem]"
      /> */}
      <div className="absolute z-2 text-[5rem] left-20 bottom-5 lg:text-[11rem] lg:left-0 font-bold lg:rotate-90 lg:bottom-[7rem]">
        SKILLS
      </div>
      <div className='absolute bottom-[15rem] right-[3rem] lg:bottom-5 lg:left-[24rem]'>
        <Carousel skills = {skills}/>
      </div>
    </div>
  );
}

export default Skills
