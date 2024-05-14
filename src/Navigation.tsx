import React from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import {
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

type ToggleIt = () => void;

type MenuItemData = {
  title: string;
  Icon: React.ReactNode;
  to: string;
};

type NavigationProps = {
  toggle: ToggleIt;
};

const Navigation: React.FC<NavigationProps> = ({ toggle }) => {
  const itemIds: MenuItemData[] = [
    { title: "Home", Icon: <FaHome size={24} />, to: "/" },
    { title: "About", Icon: <FaInfoCircle size={24} />, to: "/about" },
    {
      title: "Projects",
      Icon: <FaProjectDiagram size={24} />,
      to: "/projects",
    },
    { title: "Contact", Icon: <FaEnvelope size={24} />, to: "/contact" },
  ];

  return (
    <motion.ul variants={variants}>
      {itemIds.map((i) => (
        <MenuItem key={i.title} i={i} toggle={toggle} />
      ))}
    </motion.ul>
  );
};

export default Navigation;
