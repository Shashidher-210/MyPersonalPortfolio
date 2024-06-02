import React from 'react';

const Study = () => {
  return (
    <section className="col">
      <header className="title">
        <h2>EDUCATION</h2>
      </header>

      <div className="contents">
        <div className="box">
          <h4>2016 - 2017</h4>
          <h3>Secondary School</h3>
          <p>Oasis High School</p>
          <p>CGPA: 8.8</p>
        </div>

        <div className="box">
          <h4>2017 - 2019</h4>
          <h3>Intermediate</h3>
          <p>Stream: Maths, Physics, Chemistry</p>
          <p>SR Junior College</p>
          <p>Score: 906/1000</p>
        </div>

        <div className="box">
          <h4>2019 - 2023</h4>
          <h3>Bachelor's Degree</h3>
          <p>Stream: ECE</p>
          <p>Malla Reddy Institute of Engineering and Technology</p>
          <p>CGPA: 6.7</p>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section className="col">
      <header className="title">
        <h2>EXPERIENCE</h2>
      </header>

      <div className="contents">
        <div className="box">
          <h4>2023 - 2024</h4>
          <h3> Trained in Mern Stack Developement from Nxtwave</h3>
          <p>Skills Gained: HTML, CSS, JAVASCRIPT, BOOTSTRAP, SQL, PYTHON, REACT.JS, MANGODB, NODE.JS</p>
        </div>

        <div className="box">
          <h4>2023 - 2024</h4>
          <h3> Worked as a Web Developer Intern (Unpaid Virtual Internship) in CodSoft</h3>
          <p>During this Internship I developed a Strong foundation in Frontend Development by Undertaking Some Projects like E-Commerce, Personal Portfolio, Todo's List, Wikipedia Search Application.</p>
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <div className="Educationcontainer">
      <main className="row">
        <Study />
        <Experience />
      </main>
    </div>
  );
};

export default Education;
