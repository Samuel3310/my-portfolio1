import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
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

export const Navigation = ({ toggle }) => (
  <motion.ul variants={variants}>
    {itemIds.map((i) => (
      <MenuItem i={i} toggle={toggle} key={i.title} />
    ))}
  </motion.ul>
);

const itemIds = [
  { title: "Home", Icon: <FaHome size={24} />, to: "/" },
  { title: "About", Icon: <FaInfoCircle size={24} />, to: "/about" },
  { title: "Projects", Icon: <FaProjectDiagram size={24} />, to: "/projects" },
  { title: "Contact", Icon: <FaEnvelope size={24} />, to: "/contact" },
];
