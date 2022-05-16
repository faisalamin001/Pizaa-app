import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  const homeVareiant = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };
  const buttonVar = {
    hover: {
      scale: 1.1,
      boxShadow: "5px 5px 15px 5px #EBE8EA",
      transition: {
        yoyo: Infinity,
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={homeVareiant}
      exit='exit'
      className='home container'
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to='/base'>
        <motion.button variants={buttonVar} whileHover='hover'>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
