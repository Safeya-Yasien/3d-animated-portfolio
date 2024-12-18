import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="bubbleContainer hidden md:flex w-full max-w-4xl items-end justify-between gap-2 md:w-full lg:w-[70%]"
    >
      {/* Bubble Container */}
      <div className="h-[100px] w-full rounded-br-2xl rounded-tl-2xl bg-white p-6 text-[18px] text-gray-600">
        <TypeAnimation
          sequence={[
            1000,
            "Same substring at the start will only be typed out once, initially",
            1000,
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quae!",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      {/* Image */}
      <img
        src="/man.png"
        alt="man"
        className="h-[50px] w-[50px] rounded-full bg-[#dd4c62] object-cover"
      />
    </motion.div>
  );
};

export default Speech;
