import { useEffect, useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Carousel = ({skills}) => {

  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(skills.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === skills.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };


    const autoChangeSlide = () => {
      setCurrent((prev) => (prev === skills.length - 1 ? 0 : prev + 1));
    };


  useEffect(()=>{

    const intervalId = setInterval(autoChangeSlide,3000);
    return () => clearInterval(intervalId);
  },[current]);


  return (
    <div className="overflow-hidden relative bg- h-[20rem] w-[20rem] bg-[#343434]     rounded-2xl  text-white text-xl shadow-lg shadow-black">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {skills.map((s, i) => {
          return (
            <div className="min-h-[20rem] min-w-[20rem] text-center">
              <h1 c>{s}</h1>
            </div>
          );
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white  text-xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {skills.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel
