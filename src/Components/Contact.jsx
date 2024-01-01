import React from "react";
import EmailForm from "./EmailForm";
import contact from '../resource/contacts.png'
const Contact = () => {
  return (
    <div className="h-screen relative ">
      <div className="font-bold text-[5em] text-center lg:text-[8rem] absolute top-[5rem] lg:left-[5rem] ">
        CONTACT ME
      </div>
      <div className="top-[10rem] lg:h-[35rem] lg:w-[35rem] absolute lg:top-0 lg:right-0 ">
        <img src={contact}alt="scs" />
      </div>
      <div>
        <EmailForm/>
      </div>
    </div>
  );
};

export default Contact;