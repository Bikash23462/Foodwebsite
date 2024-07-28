import React from "react";
import Logo from "../../assets/food/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Navmenu = [
  { id: 1, title: "Home", path: "/", delay: 0.1 },
  { id: 2, title: "About", path: "/about", delay: 0.2 },
  { id: 3, title: "Menu", path: "/menu", delay: 0.3 },
  { id: 4, title: "Delivery", path: "/delivery", delay: 0.4 },
  { id: 5, title: "Contact Us", path: "/Contact", delay: 0.1 },
];

const Slidedown = (delay) => {
  return {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-evenly items-center font-leagueGothic">
        {}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src={Logo}
          className="w-36"
        />
        {}
        <div>
          <div className="hidden md:block"></div>
          <ul className="flex gap-6">
            {Navmenu.map((menu) => {
              return (
                <motion.li
                  variants={Slidedown(menu.delay)}
                  initial="initial"
                  animate="animate"
                  key={menu.id}
                  className="nav-menu"
                  data-delay={menu.delay}
                >
                  <a
                    href={menu.path}
                    className="inline-block px-2 py-2 text-2xl"
                  >
                    {menu.title}
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </div>
        {}
        <motion.div variants={Slidedown(1)} initial="initial" animate="animate">
          <button className="h-[40px] w-[40px] grid place-items-center rounded-full text-white bg-dark">
            <IoCartOutline />
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
