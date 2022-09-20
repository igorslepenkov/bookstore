import { motion } from "framer-motion";
import { Color } from "../../ui";
import { StyledBurgerButton } from "./style";

interface IProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const Burger = ({ isOpen, setIsOpen }: IProps) => {
  const transition = { x: { duration: 2 }, type: "spring", stiffness: 100 };
  const variant = isOpen ? "opened" : "closed";
  const variants = {
    top: {
      closed: {
        rotate: 0,
        translateY: 0,
      },
      opened: {
        rotate: 45,
        translateY: 16,
      },
    },
    center: {
      closed: {
        opacity: 1,
      },
      opened: {
        opacity: 0,
      },
    },
    bottom: {
      closed: {
        rotate: 0,
        translateY: 0,
      },
      opened: {
        rotate: -45,
        translateY: -9,
      },
    },
  };
  return (
    <StyledBurgerButton onClick={setIsOpen}>
      <motion.svg width="30" height="30" viewBox="0 0 30 30">
        <motion.line
          x1="0"
          y1="2"
          x2="30"
          y2="2"
          stroke={Color.Black}
          variants={variants.top}
          initial="closed"
          animate={variant}
          transition={transition}
        />
        <motion.line
          x1="0"
          y1="15"
          x2="30"
          y2="15"
          stroke={Color.Black}
          variants={variants.center}
          initial="closed"
          animate={variant}
          transition={transition}
        />
        <motion.line
          x1="0"
          y1="28"
          x2="30"
          y2="28"
          stroke={Color.Black}
          variants={variants.bottom}
          initial="closed"
          animate={variant}
          transition={transition}
        />
      </motion.svg>
    </StyledBurgerButton>
  );
};
