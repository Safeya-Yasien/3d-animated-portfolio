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
      className="contact flex h-full gap-[100px]"
      ref={ref}
      onSubmit={sendEmail}
    >
      <div className="cSection flex h-full w-1/2 items-center justify-center p-5">
        <motion.form
          ref={form}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
          className="flex w-[80%] flex-col gap-5 rounded-[50px] p-[50px]"
        >
          <motion.h1 variants={listVariant} className="cTitle">
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
            className="formButton cursor-pointer rounded-[10px] border-none bg-[#dd4c62] p-5 text-white"
          >
            Send
          </motion.button>
        </motion.form>
      </div>
      <div className="cSection flex h-full w-1/2 flex-col justify-center p-5">
        <ContactSvg />
      </div>
    </div>
  );
};

export default Contact;
