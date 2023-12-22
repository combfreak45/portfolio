import React from "react";

const Contact = () => {
  return (
    <div className="h-screen relative ">
      <div className="font-bold text-[8rem] absolute top-[8rem] left-[8rem] ">
        CONTACT ME
      </div>
      <div className="h-[35rem] w-[35rem] absolute bottom-2 right-3 ">
        <img src="../../public/contacts.png" alt="scs" />
      </div>
      <div className="h-[5rem] w-[10rem] bg-black text-white text-2xl pt-5 rounded rounded-[3rem] text-center absolute top-[20rem] left-[30rem] hover:scale-150">
        <button>
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Contact;