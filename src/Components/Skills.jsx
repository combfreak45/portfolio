import React from 'react'
import main1 from '../../public/skills.png'
import bill from '../../public/skill_billboard.png'
import Carousel from './Carousel'


let skills = [
  "A","B","C","D","E","F","G",
]




const Skills = () => {
  return (
    <div className="h-screen relative px-20">
      <img
        src={main1}
        alt="sdcs"
        className=" h-[25rem] w-[24rem] absolute z-1 right-[12rem] bottom-[4rem]"
      />
      <img
        src={bill}
        alt="fsdf"
        className="z-1 h-[12rem] w-[12rem] absolute right-[7.5rem]"
      />
      <div className="absolute z-2 right-[10rem] top-[6rem] text-4xl font-bold opacity-80 hover:scale-125 cursor-pointer ">
        SKILLS
      </div>
      <div className='absolute top-[10rem] left-[20rem]'>
        <Carousel skills = {skills}/>
      </div>
    </div>
  );
}

export default Skills
