import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";

import python from "../../public/python.webp";
// import tensorflow from "../../public/tensorflow.png";
// import sklearn from "../../public/sklearn.jpg";
import numpy from "../../public/numpy.png";
import pandas from "../../public/pandas.png";

function Skills() {
  const skills = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: java, name: "Java" },
    { id: 4, logo: javascript, name: "JavaScript" },
    { id: 5, logo: oracle, name: "Oracle" },
    { id: 6, logo: spring, name: "Spring Framework" },
    { id: 7, logo: springBoot, name: "Spring Boot" },

    // AI/ML Technologies
    { id: 8, logo: python, name: "Python" },
    // { id: 9, logo: tensorflow, name: "TensorFlow" },
    // { id: 10, logo: sklearn, name: "Scikit-learn" },
    { id: 11, logo: numpy, name: "NumPy" },
    { id: 12, logo: pandas, name: "Pandas" },
  ];

  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills & Technologies</h1>
        <p className="mb-6">
          As a passionate full-stack developer and AI/ML enthusiast, I have built strong
          foundations and hands-on experience in the following technologies:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7">
          {skills.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center border-[2px] rounded-xl w-full h-[180px] shadow-md p-4 cursor-pointer hover:scale-105 duration-300"
            >
              <img
                src={logo}
                className="w-[80px] h-[80px] object-contain mb-2"
                alt={name}
              />
              <div className="text-center font-medium">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
