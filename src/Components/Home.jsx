import React from 'react'
import main from "../assets/1.png";
const Home = () => {
  return (
    <div className=" max-h-screen relative ">
      <img src={main} alt="sdcs" className=" h-screen  ml-40 " />
      <div className="w-[569px] h-[520px]  absolute  top-20 right-20 z-10 p-10  mt-2   bg-black rounded-2xl font-medium text-white text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae id dolores expedita harum! Assumenda reprehenderit at minima, eum tempora sunt ex nemo ducimus quo laboriosam unde velit voluptatem inventore fuga autem illo repellendus? Sapiente!</div>
      <div className="absolute z-4 h-[200px] w-[200px] rounded-full bg-red-500 top-5 left-10 p-20 font-medium text-white text-3xl">
        Hi!
      </div>
    </div>
  );
}

export default Home
