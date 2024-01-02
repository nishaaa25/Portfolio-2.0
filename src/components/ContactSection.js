import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Connect from "./Connect";
import Card from "../utils/Card";
import LetsTalk from "./LetsTalk";
import Footer from "./Footer";

const ContactSection = () => {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qdphp8g",
        "template_e3zu3dp",
        form.current,
        "m3_cXcrmA8tRDUV6B"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full pt-[72px] z-10">
      <h1 className="text-[42px] pb-2 font-semibold tracking-[0.9px]">
        Contact Me
      </h1>
      <p className="text-2xl text-white text-opacity-[50.0%] mb-12">
        Thank you for exploring my portfolio! If you have any inquiries or
        opportunities, feel free to get in touch. I'm always open to
        collaboration and new challenges.
      </p>
      <div className="flex mt-2 gap-3 relative">
        <Connect />
        <div className="w-full h-[392px]">
          <Card>
            <h1 className="heading-text mb-3 ">
              Let's work <span className="text-purple-400">together.</span>
            </h1>
            <div>
              <form ref={form} onSubmit={sendEmail} className="flex flex-col">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name*"
                  className="my-1 p-2 px-4 text-[14px] rounded-lg custom-shadow outline-none bg-[rgba(255,255,255,0.05)] bg-opacity-[2.0%] "
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Email*"
                  className="my-1 p-2 px-4 text-[14px] rounded-lg custom-shadow outline-none bg-[rgba(255,255,255,0.05)] bg-opacity-[2.0%] "
                />
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Your Message*"
                  className="my-1 p-2 px-4 text-[14px] rounded-lg custom-shadow outline-none bg-[rgba(255,255,255,0.05)] bg-opacity-[2.0%] "
                ></textarea>
                <input
                  type="submit"
                  value="Send"
                  className="my-1 text-base custom-border px-4 py-2 rounded-lg flex-short gap-2 bg-[rgba(255,255,255,0.05)] bg-opacity-[2.0%] custom-transition group custom-shadow hover:bg-white hover:bg-opacity-[2.0%] cursor-pointer"
                />
              </form>
              {message&& <p className="text-sm text-white text-opacity-[50.0%] mt-2 mx-2">Thank you for your message. It has been sent.</p>}
            </div>
          </Card>
        </div>
      </div>
      <LetsTalk />
      <Footer />
    </div>
  );
};

export default ContactSection;
