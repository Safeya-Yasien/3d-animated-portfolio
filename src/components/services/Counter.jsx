import { useInView, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";

const Counter = ({ from, to, text }) => {
  const [count, setCount] = useState(from);
  const ref = useRef();
  const isInView = useInView(ref);

  useEffect(() => {
    const animation = animate(from, to, {
      duration: 4,
      ease: "easeOut",
      onUpdate: (prev) => setCount(Math.floor(prev)),
    });

    return () => animation.cancel();
  }, [isInView, from, to]);

  return (
    <div className="counter flex flex-col gap-2" ref={ref}>
      <h1 className="text-[48px] text-[#dd4c62]">{count}+</h1>
      <p className="w-[120px] text-[13px]">{text}</p>
    </div>
  );
};

export default Counter;
