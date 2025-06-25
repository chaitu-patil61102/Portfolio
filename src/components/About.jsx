import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm <strong>Chaitali Patil</strong>, a dedicated and growth-oriented full-stack developer
          specializing in Core Java, Spring Boot, REST APIs, React, and Angular.
          I am passionate about building impactful backend and full-stack applications
          with clean UI/UX and seamless user experience.
        </p>

        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education 
        </h1>
        <ul className="list-disc list-inside">
          <li>BCA - Pratap College, Amalner (North Maharashtra University), 2021–2024 — 82.90%</li>
          <li>HSC - Pratap College, Amalner, 2019–2021 — 86.40%</li>
          <li>SSC - D. R. Kanya Shala, Amalner, 2018–2019 — 78.60%</li>
        </ul>

        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Tools
        </h1>
        <ul className="list-disc list-inside">
          <li><strong>Languages:</strong> C, Java, JavaScript, TypeScript</li>
          <li><strong>Frameworks:</strong> Spring Boot, Hibernate, Angular, ReactJS</li>
          <li><strong>Databases:</strong> MySQL, MongoDB, Oracle</li>
          <li><strong>Tools:</strong> Git, GitHub, Postman, VS Code, IntelliJ IDEA, Eclipse</li>
          <li><strong>Additional:</strong> Tailwind CSS, Microservices Architecture, OOPs Concepts, SOLID Principles, AI/ML Basics</li>
          <li><strong>Soft Skills:</strong> Problem Solving, Communication, Time Management</li>
        </ul>

        {/* <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Academic & Personal Projects
        </h1>
        <ul className="list-disc list-inside">
          <li><strong>College/University Website:</strong> Built with HTML, CSS, JS — included homepage, listings, forms, and contact page.</li>
          <li><strong>Blog Application:</strong> Full-stack app with Spring Boot (backend) and Angular (frontend); supports blog CRUD, login/signup, and admin features.</li>
          <li><strong>Employee Management System:</strong> Developed using Spring Boot and Angular with REST APIs; features CRUD for employee data.</li>
          <li><strong>Hotel Booking App:</strong> Created in ReactJS; includes hotel listing, booking functionality, and user detail submission.</li>
        </ul> */}

        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements
        </h1>
        <ul className="list-disc list-inside">
          <li>Maharashtra State Certificate in IT (2022)</li>
          <li>Presented at National Conference (2023)</li>
          <li>Completed Data Analytics program from Develearn (2024)</li>
        </ul>

        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to contribute to impactful full-stack solutions using
          my skills in Java, Spring Boot, and modern frontend frameworks. I strive for
          continuous learning, collaboration, and delivering real value in the software development industry.
        </p>
      </div>
    </div>
  );
}

export default About;
