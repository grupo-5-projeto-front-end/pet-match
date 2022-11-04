import { StyledAnimation } from "./style";
import { motion } from "framer-motion";

const dogPaw = require("../../assets/patinha.png");

const LoadingAnimation = () => {
  return (
    <StyledAnimation>
      <motion.div
        className="paw paw--four"
        transition={{
          duration: 2.7,
          delay: 4,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        animate={{ opacity: [0, 1, 1, 0] }}
      >
        <img src={dogPaw} alt="" />
      </motion.div>
      <motion.div
        className="paw paw--three"
        transition={{
          duration: 2.7,
          delay: 3,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        animate={{ opacity: [0, 1, 1, 0] }}
      >
        <img src={dogPaw} alt="" />
      </motion.div>
      <motion.div
        className="paw paw--two"
        transition={{
          duration: 2.7,
          delay: 2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        animate={{ opacity: [0, 1, 1, 0] }}
      >
        <img src={dogPaw} alt="" />
      </motion.div>
      <motion.div
        className="paw paw--one"
        transition={{
          duration: 2.7,
          delay: 1,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        animate={{ opacity: [0, 1, 1, 0] }}
      >
        <img src={dogPaw} alt="" />
      </motion.div>
    </StyledAnimation>
  );
};

export default LoadingAnimation;
