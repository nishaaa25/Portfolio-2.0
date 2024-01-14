import React from 'react';
import {motion} from "framer-motion";
import { customVariants } from "../utils/Motion";

const Footer = () => {
  return (
    <motion.div className='py-6 text-center' variants={customVariants} initial="hidden" whileInView="visible">
        <p className='info-text'>&copy; 2024, <span className='text-white'>Nisha Kumari </span>❤️</p>
      </motion.div>
  )
}

export default Footer
