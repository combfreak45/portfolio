import React from 'react'
import project1 from '../../public/project.png'
import Carousel from './Carousel2';
const Project = () => {
   const project = [
     {
       title: "site",
       img: "../../public/p1.png",
       link: "xyz",
     },

     {
       title: "site",
       img: "../../public/p1.png",
       link: "xyz",
     },

     {
       title: "site",
       img: "../../public/p1.png",
       link: "xyz",
     },
     {
       title: "site",
       img: "../../public/p1.png",
       link: "xyz",
     },
     {
       title: "site",
       img: "../../public/p1.png",
       link: "xyz",
     },
     {
       title: "site",
       img: "../../public/p1.png",
       link: "xyz",
     },
     {
       title: "site",
       img: "../../public/p1.png",
       link: "xyz",
     }
     
   ];



  return (
    <div className="h-screen relative">
      <div>
        <img
          src={project1}
          alt="project"
          className="h-[30rem] w-[30rem] absolute top-8 left-8"
        />
      </div>
      <div className="text-[10rem] font-semibold absolute right-10">
        PROJECTS
      </div>
      <div className='absolute bottom-[4rem] right-10 z-10'>
        <Carousel project={project} />
      </div>
    </div>
  );
}

export default Project
