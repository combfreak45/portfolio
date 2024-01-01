import React from 'react'
import project1 from '../resource/project.png'
import Carousel from './Carousel2';
import Carousel2 from './Carousel3'
import p1 from '../resource/p1.png'
const Project = () => {
   const [width, setWidth] = React.useState(window.innerWidth);
   const breakpoint = 1054;
 
   React.useEffect(() => {
     const handleWindowResize = () => setWidth(window.innerWidth);
     window.addEventListener("resize", handleWindowResize);

     // Return a function from the effect that removes the event listener
     return () => window.removeEventListener("resize", handleWindowResize);
   }, []);
   
    
   const project = [
     {
       title: "Book Store",
       link: "https://github.com/combfreak45/BookStore-MERN",
     },

     {
       title: "Confluence-website",
       link: "https://www.confluencenitkkr.com/",
     },

     {
       title: "ScholarLink",
       link: "https://github.com/combfreak45/ScholarLink",
     },
     {
       title: "Contact-App",
       link: "https://github.com/combfreak45/contact_app",
     },
     {
       title: "Food-Page",
       link: "https://github.com/combfreak45/Food_Page",
     },
     {
       title: "Dice-Game",
       link: "https://github.com/combfreak45/Dice_Game",
     },
   ];



  return (
    <div className="h-screen relative">
      <div>
        <img
          src={project1}
          alt="project"
          className="h-[20rem] w-[20rem] top-[8rem] left-10 lg:h-[30rem] lg:w-[30rem] absolute lg:top-8 lg:left-8"
        />
      </div>
      <div className="text-[5rem] left-5 lg:text-[10rem] font-bold lg:font-semibold absolute lg:left-[30rem]">
        PROJECTS
      </div>
      <div className="absolute bottom-[5rem] left-[2rem] lg:bottom-[4rem] lg:left-[30rem] z-10">
        {width < breakpoint ? (
          <Carousel2 project={project} />
        ) : (
          <Carousel project={project} />
        )}
      </div>
    </div>
  );
}

export default Project
