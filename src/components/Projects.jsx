import React, { useState } from "react";
import blog from "../../public/blog.png";
import python from "../../public/python.webp";
import payroll from "../../public/payroll.png";
import express from "../../public/express.png";
import bank from "../../public/bank.jpeg";
import nodejs from "../../public/node.png";
import cake from "../../public/cake.avif";
import hotel from "../../public/hotel.png";
import seed from "../../public/seed.png";

function Projects() {
  const [openVideo, setOpenVideo] = useState(null);

  const technologies = [
    {
      id: 1,
      logo: cake,
      name: "Cake Shop Website",
      description:
        "A static Cake Shop website built with HTML, CSS, and JavaScript showcasing delicious cakes, menu details, and contact information with a visually appealing layout.",
      docs: "https://github.com/chaitu-patil61102/Cake-Shop.git",
      // video: "https://www.youtube.com/embed/2OHbjep_WjQ",
    },
    {
      id: 2,
      logo: seed,
      name: "Seed Infotech Website",
      description:
        "A static institute Website created using HTML, CSS, and JavaScript to display course details, schedules, teacher info, and announcements in a clean and responsive layout.",
      docs: "https://github.com/chaitu-patil61102/Seed-Infotech-Website.git",
      // video: "https://www.youtube.com/embed/GwIo3gDZCVQ",
    },
    {
      id: 3,
      logo: payroll,
      name: "Payroll Management System",
      description:
        "A Java-based payroll management system, would automate salary calculations, deductions, and tax compliance for employees. It would likely feature a command-line interface for input and display, with data persistence handled through files or a database.",
      docs: "https://github.com/chaitu-patil61102/Payroll-Management-System.git",
      // video: "https://www.youtube.com/embed/F5mRW0jo-U4",
    },
    {
      id: 4,
      logo: bank,
      name: "Bank Application",
      description:
        "A Java-based bank application performing CRUD operations using JDBC with a MySQL database. It allows users to create accounts, view details, update account information, and delete accounts securely through a console or GUI interface.",
      docs: "https://github.com/chaitu-patil61102/Bank-Application.git",
      // video: "https://www.youtube.com/embed/bMknfKXIFA8",
    },
    {
      id: 5,
      logo: blog,
      name: "Blog Application",
      description:
        "This is a full-stack blog application where Spring Boot handles the backend APIs, database Mysql and Angular provides a dynamic, interactive frontend. Users can create, view, edit, and delete blog posts, with data seamlessly exchanged between the two frameworks",
      docs: "https://github.com/chaitu-patil61102/Blog-Application-System.git",
      // video: "clg-university-website.netlify.app", // Example
    },
    {
      id: 6,
      logo: hotel,
      name: "Hotel Booking System",
      description:
        "A basic hotel booking application made with React where users can easily add room details and see all available rooms. It offers a simple and clean interface to manage room listings and availability.",
      docs: "https://github.com/chaitu-patil61102/Hotel-Booking-App.git",
      // video: "https://www.youtube.com/embed/f_C2ep3Mzlo",
    },

  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects Portfolio</h1>
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
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded"
                >
                  Code
                </a>
                {/* <button
                  onClick={() => setOpenVideo(openVideo === id ? null : id)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                >
                  Learn More
                </button> */}
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

export default Projects;
