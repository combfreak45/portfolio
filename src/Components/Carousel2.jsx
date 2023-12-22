import { useEffect, useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Carousel = ({ project}) => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(project.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === project.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const autoChangeSlide = () => {
    setCurrent((prev) => (prev === project.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(autoChangeSlide, 3000);
    return () => clearInterval(intervalId);
  }, [current]);

  return (
    <div className=" overflow-hidden relative  h-[19rem] w-[45rem] pt-5 bg-[#343434] rounded-2xl  text-white text-xl shadow-lg shadow-black ">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${(current * 100) / 3}%)`,
        }}
      >
        {project.map((s, i) => {
          return (
            <div
              className={`text-white min-w-[15rem] p-[1rem]  flex flex-col items-center gap-2  hover:scale-125`}
              key={"slides" + i}
            >
              <div className="text-3xl text-center">{s.title}</div>
              <div className="h-[7rem] w-[7rem] overflow-hidden rounded rounded-xl shadow-lg shadow-black">
                <img src={s.img} alt="cdcd" />
              </div>
              <div className="text-xl min-w-[5rem] bg-white text-black rounded-3xl text-center mt-3 ">
                <a href="www.google.com">Link</a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {project.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-2 h-2 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
      <div className=" absolute bottom-0 py-4 w-full justify-between px-[6rem] items-center flex text-white  text-xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
