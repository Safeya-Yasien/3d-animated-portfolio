import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSvg";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  };

  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div
    className="h-full flex flex-col lg:flex-row gap-8 lg:gap-[100px]"
    ref={ref}
      onSubmit={sendEmail}
    >
      <div className="w-full lg:w-1/2 h-full lg:p-5 flex items-center justify-center">
      <motion.form
          ref={form}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
          className="w-full lg:w-[80%] flex flex-col gap-5 bg-[rgba(2,2,45,0.066)] lg:p-12 rounded-[50px] "
        >
          <motion.h1 variants={listVariant} className="text-2xl font-bold">
          Let&apos;s keep in touch
          </motion.h1>
          <motion.div
            variants={listVariant}
            className="formItem flex flex-col gap-[10px]"
          >
            <label className="text-[13px]">Name</label>
            <input
              type="text"
              name="user_username"
              placeholder="John Doe"
              className="rounded-[5px] border-none p-3 outline-none"
            />
          </motion.div>
          <motion.div
            variants={listVariant}
            className="formItem flex flex-col gap-[10px]"
          >
            <label className="text-[13px]">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="john@gmail.com"
              className="rounded-[5px] border-none p-3 outline-none"
            />
          </motion.div>
          <motion.div
            variants={listVariant}
            className="formItem flex flex-col gap-[10px]"
          >
            <label className="text-[13px]">Message</label>
            <textarea
              rows={10}
              name="user_message"
              placeholder="Write your message..."
              className="rounded-[5px] border-none p-3 outline-none"
            ></textarea>
          </motion.div>
          <motion.button
            variants={listVariant}
            className="bg-[#dd4c62] text-white py-5 px-4 rounded-lg cursor-pointer"
          >
            Send
          </motion.button>
        </motion.form>
      </div>
      <div className="w-full  lg:w-1/2 h-full p-12 flex items-center justify-center bg-[rgba(2,2,45,0.187)] my-12 rounded-[50%_0]">
        <ContactSvg />
      </div>
    </div>
  );
};

export default Contact;
