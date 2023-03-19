import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({index, title, icon}) => {
  return (
    // <div></div>
    <Tilt className="sm:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5* index, 0.75)}
        className = "w-full green-pink-gradient rounded-[20px] p-[1px] shadow-card"
      >
        <div 
          options = {{ 
            max: 45,
            scale:1,
            speed: 450,

          }}
          className = "bg-tertiary rounded-[20px] px-12 py-5 min-h-[180px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>


        </div>

      </motion.div>
    </Tilt>
  );
};


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Introducing me, a go-to developer with expertise in web and mobile
        application development. With over 2 years of experience in HTML, CSS,
        JavaScript, Flutter, React, and PHP, I have a knack for bringing ideas
        to life. I take pride in my ability to deliver beautiful and functional
        websites and mobile apps that engage users and elevate businesses. Let's
        collaborate to bring your next project to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>

        ))} 
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
