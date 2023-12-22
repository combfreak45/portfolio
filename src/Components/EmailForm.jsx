import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_r3bampl";
    const templateId = "template_qgc8rwd";
    const publicKey = "lF3u8mRy1CCiyL8-H";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Web Wizard",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert('SENT')
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-[25rem] min-h-[5rem] max-h-[18rem] absolute top-[16rem] left-[20rem] rounded rounded-2xl gap-2"
    >
      <input
        className="bg-black text-white rounded rounded-3xl h-[3rem] p-4"
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="bg-black text-white rounded rounded-3xl h-[3rem] p-4"
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        className="bg-black text-white rounded rounded-3xl p-4 min-h-10"
        cols="5"
        rows="5"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit"
       className="bg-black text-white w-[10rem] h-[4rem] rounded rounded-[3rem] ml-[6rem] hover:scale-125">Send Email</button>
    </form>
  );
};

export default EmailForm;
