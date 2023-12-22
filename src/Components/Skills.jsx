import React from 'react'
import main1 from '../../public/skills.png'
import bill from '../../public/skill_billboard.png'
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
        className=" h-[30rem] w-[30rem] absolute z-1 right-[5rem] bottom-0"
      />
      {/* <img
        src={bill}
        alt="fsdf"
        className="z-1 h-[12rem] w-[12rem] absolute right-[7.5rem]"
      /> */}
      <div className="absolute z-2 text-[11rem] left-0 font-bold rotate-90 bottom-[7rem]">
        SKILLS
      </div>
      <div className='absolute bottom-5 left-[24rem]'>
        <Carousel skills = {skills}/>
      </div>
    </div>
  );
}

export default Skills
