// import React from "react";
// import java from "../../public/java.png";
// import python from "../../public/python.webp";
// import mongoDB from "../../public/mongodb.jpg";
// import express from "../../public/express.png";
// import reactjs from "../../public/reactjs.png";
// import nodejs from "../../public/node.png";
// import angular from "../../public/angular.png";
// import oracle from "../../public/oracle.png";
// import ai from "../../public/ai.png"; // <-- Add your AI/ML image

// function Portfolio() {
//   const technologies = [
//     {
//       id: 1,
//       logo: java,
//       name: "Core & Advanced Java",
//       description: "OOPs, collections, multithreading, JDBC, servlets, and JSP for backend logic.",
//       docs: "https://docs.oracle.com/javase/tutorial/",
//     },
//     {
//       id: 2,
//       logo: angular,
//       name: "Angular",
//       description: "Frontend framework using components, routing, and services for dynamic SPAs.",
//       docs: "https://angular.io/docs",
//     },
//     {
//       id: 3,
//       logo: reactjs,
//       name: "ReactJS",
//       description: "Library used to build responsive UIs with JSX, hooks, props, and states.",
//       docs: "https://reactjs.org/docs/getting-started.html",
//     },
//     {
//       id: 4,
//       logo: mongoDB,
//       name: "MongoDB",
//       description: "NoSQL database used for document-based storage and flexible data models.",
//       docs: "https://www.mongodb.com/docs/",
//     },
//     {
//       id: 5,
//       logo: oracle,
//       name: "Oracle DB",
//       description: "Used for structured data storage, queries using SQL, and schema design.",
//       docs: "https://docs.oracle.com/en/database/",
//     },
//     // {
//     //   id: 6,
//     //   logo: nodejs,
//     //   name: "NodeJS",
//     //   description: "Runtime for executing JavaScript server-side; used with Express and MongoDB.",
//     //   docs: "https://nodejs.org/en/docs",
//     // },
//     {
//       id: 6,
//       logo: ai,
//       name: "AI & Machine Learning",
//       description: "Working knowledge of ML models, data preprocessing, and Python libraries like Pandas and scikit-learn.",
//       docs: "https://scikit-learn.org/stable/",
//     },
//   ];

//   return (
//     <div
//       name="Portfolio"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
//     >
//       <div>
//         <h1 className="text-3xl font-bold mb-5">Technology Portfolio</h1>
//         <span className="underline font-semibold">Tools & Technologies I'm Working With</span>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5">
//           {technologies.map(({ id, logo, name, description, docs }) => (
//             <div
//               key={id}
//               className="border-[2px] rounded-lg shadow-lg p-4 hover:scale-105 duration-300"
//             >
//               <img
//                 src={logo}
//                 className="w-[100px] h-[100px] object-contain p-2 mx-auto rounded-full border-[2px]"
//                 alt={name}
//               />
//               <div className="text-center mt-4">
//                 <div className="font-bold text-xl mb-2">{name}</div>
//                 <p className="text-gray-700 text-sm px-2">{description}</p>
//               </div>
//               <div className="flex justify-center mt-4 space-x-4">
//                 <a
//                   href={docs}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
//                 >
//                   Docs
//                 </a>
//                 <a
//                   href="#"
//                   className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Portfolio;


import React, { useState } from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import angular from "../../public/angular.png";
import oracle from "../../public/oracle.png";
import ai from "../../public/ai.png";

function Portfolio() {
  const [openVideo, setOpenVideo] = useState(null);

  const technologies = [
    {
      id: 1,
      logo: java,
      name: "Core & Advanced Java",
      description:
        "OOPs, collections, multithreading, JDBC, servlets, and JSP for backend logic.",
      docs: "https://docs.oracle.com/javase/tutorial/",
      video: "https://www.youtube.com/embed/grEKMHGYyns", // Example
    },
    {
      id: 2,
      logo: angular,
      name: "Angular",
      description:
        "Frontend framework using components, routing, and services for dynamic SPAs.",
      docs: "https://angular.io/docs",
      video: "https://www.youtube.com/embed/2OHbjep_WjQ",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      description:
        "Library used to build responsive UIs with JSX, hooks, props, and states.",
      docs: "https://reactjs.org/docs/getting-started.html",
      video: "https://www.youtube.com/embed/bMknfKXIFA8",
    },
    {
      id: 4,
      logo: mongoDB,
      name: "MongoDB",
      description:
        "NoSQL database used for document-based storage and flexible data models.",
      docs: "https://www.mongodb.com/docs/",
      video: "https://www.youtube.com/embed/F5mRW0jo-U4",
    },
    {
      id: 5,
      logo: oracle,
      name: "Oracle DB",
      description:
        "Used for structured data storage, queries using SQL, and schema design.",
      docs: "https://docs.oracle.com/en/database/",
      video: "https://www.youtube.com/embed/f_C2ep3Mzlo",
    },
    {
      id: 6,
      logo: ai,
      name: "AI & Machine Learning",
      description:
        "Working knowledge of ML models, data preprocessing, and Python libraries like Pandas and scikit-learn.",
      docs: "https://scikit-learn.org/stable/",
      video: "https://www.youtube.com/embed/GwIo3gDZCVQ",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Technology Portfolio</h1>
        <span className="underline font-semibold">
          Tools & Technologies I'm Working With
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5">
          {technologies.map(({ id, logo, name, description, docs, video }) => (
            <div
              key={id}
              className="border-[2px] rounded-lg shadow-lg p-4 hover:scale-105 duration-300"
            >
              <img
                src={logo}
                className="w-[100px] h-[100px] object-contain p-2 mx-auto rounded-full border-[2px]"
                alt={name}
              />
              <div className="text-center mt-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-sm px-2">{description}</p>
              </div>
              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href={docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                >
                  Docs
                </a>
                <button
                  onClick={() => setOpenVideo(openVideo === id ? null : id)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                >
                  Learn More
                </button>
              </div>

              {/* Video Embed (Toggle) */}
              {openVideo === id && (
                <div className="mt-4">
                  <iframe
                    className="w-full h-52 md:h-64 rounded-md"
                    src={video}
                    title={`${name} video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
