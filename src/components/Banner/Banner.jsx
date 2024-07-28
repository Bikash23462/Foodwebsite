import React from "react";
import Bannnerpng from "../../assets/food/banner.png";
import { motion } from "framer-motion";
import { Slideup } from "../Hero/Hero";

const Banner = () => {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          <div className="relative">
            <motion.img
              initial={{
                opacity: 0,
                x: -100,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              whileHover={{
                scale: 1.5,
                rotate: 15,
                x: 50,
                y: -50,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                scale: { duration: 0.5 },
              }}
              src={Bannnerpng}
              alt=""
              className="relative z-10 w-full lg:max-w-[350] img-shadow"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] h-[520px] w-[520px] md:h-[600px] md:w-[600px] bg-lightYellow rounded-full"
            ></motion.div>
          </div>
          <div className="space-y-5 lg:max-w-[400px]">
            <motion.h1
              variants={Slideup(1)}
              initial="hidden"
              whileInView="show"
              className="text-6xl uppercase font-semibold font-leagueGothic"
            >
              The Best Yummy Food in the Town
            </motion.h1>
            <motion.p
              variants={Slideup(1.3)}
              initial="hidden"
              whileInView="show"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              veniam odio animi, obcaecati alias porro, eius voluptatum
              voluptate tenetur praesentium sed laboriosam fuga. Adipisci
              officia veritatis, fugiat expedita similique itaque.
            </motion.p>
            <motion.button
              variants={Slideup(1.6)}
              initial="hidden"
              whileInView="show"
              className="btn-primary"
            >
              Order Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
