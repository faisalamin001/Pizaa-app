import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Order = ({ pizza }) => {
  const homeVareiant = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.6,
        stiffness: 300,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };
  const childVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const [showTitle, setShowTitle] = useState(true);
  setTimeout(() => {
    setShowTitle(false);
  }, 3000);
  return (
    <motion.div
      variants={homeVareiant}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='container order'
    >
      <AnimatePresence>
        {showTitle && (
          <motion.h2 exit={{ y: -1000 }}>Thank you for your order :)</motion.h2>
        )}
      </AnimatePresence>
      <motion.div variants={childVariant}>
        <p>You ordered a {pizza.base} pizza with:</p>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
      <Link to='/'>
        <motion.button
          whileHover={{ scale: 1.5, boxShadow: "5px 5px 15px 3px #EBE8EA" }}
        >
          Home
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Order;
