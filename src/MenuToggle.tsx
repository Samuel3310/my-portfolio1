import { motion } from "framer-motion";
import React from "react";
type PathProps = {
  className: string;
  variants: {
    closed: { d: string } | { opacity: number };
    open: { d: string } | { opacity: number };
  };
};

const Path: React.FC<PathProps> = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

type ToggleFunction = () => void;

type MenuToggleProps = {
  toggle: ToggleFunction;
};

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => (
  <button
    onClick={toggle}
    className="w-14 h-14 rounded-full fixed top-[13px] left-[13px] bg-transparent flex items-center justify-center"
  >
    <svg width="30" height="30" viewBox="0 0 23 23">
      <Path
        className="path"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        className="path"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
      />
      <Path
        className="path"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
