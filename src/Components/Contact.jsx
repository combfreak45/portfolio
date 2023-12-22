import React from "react";
import EmailForm from "./EmailForm";

const Contact = () => {
  return (
    <div className="h-screen relative ">
      <div className="font-bold text-[8rem] absolute top-[5rem] left-[8rem] ">
        CONTACT ME
      </div>
      <div className="h-[35rem] w-[35rem] absolute bottom-2 right-3 ">
        <img src="../../public/contacts.png" alt="scs" />
      </div>
      <div>
        <EmailForm/>
      </div>
    </div>
  );
};

export default Contact;