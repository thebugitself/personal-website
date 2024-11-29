import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    bottom: "0%",
  },
  animate: {
    left: "100%",
  },
  exit: {
    left: ["100%", "0%"],
  },
};

const reverseIndex = (index: number): number => {
  const totalSteps: number = 1;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(1)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-accent relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
