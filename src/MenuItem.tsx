import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ i, toggle }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={i.to}
        className="flex gap-5 items-center p-4 bg-[#07beb8] mt-4 rounded-md nav"
        onClick={() => toggle()}
      >
        <div className="icon">{i.Icon}</div>
        <div className="text-placeholder">{i.title}</div>
      </Link>
    </motion.li>
  );
};
