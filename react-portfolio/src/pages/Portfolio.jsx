import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Employee Tracker',
      image: '/images/employeesedit.png',
      repo: 'https://github.com/langiam/employee-tracker',
      deployed: 'https://drive.google.com/file/d/1hKBqcoEpI51tpJWJzNnGjs4I9bOCSeXp/view',
      description: 'A command-line application for managing employees, departments, and roles using MySQL and Node.js.',
    },
    {
      title: 'Professional README Generator',
      image: '/images/READMEedit.png',
      repo: 'https://github.com/langiam/professional-readme-generator',
      deployed: 'https://drive.google.com/file/d/1adN05wo9QSR8cM3uRzmhpwo_zz8rRe1s/view',
      description: 'A CLI tool that generates high-quality README.md files based on user input.',
    },
    {
      title: 'Vehicle Builder',
      image: '/images/vehicleedit.png',
      repo: 'https://github.com/langiam/vehicle-builder',
      deployed: 'https://drive.google.com/file/d/1fxW4wHqAvBMA3Q6qLEmZVEEsj4u1LOsT/view',
      description: 'A web application allowing users to customize and preview vehicle builds.',
    },
    {
      title: 'Project One Website',
      image: '/images/calendaredit.png',
      repo: 'https://github.com/p1t5-Calendar/ProjectOne',
      deployed: 'https://p1t5-calendar.github.io/ProjectOne/',
      description: 'A collaborative web project showcasing front-end design and API integration.',
    },
    {
      title: 'CSS Website Demo',
      image: '/images/CSSedit.png',
      repo: 'https://github.com/langiam/my-new-website',
      deployed: 'https://langiam.github.io/my-new-website/',
      description: 'A modern, responsive personal website built with HTML, CSS, and JavaScript.',
    },
    {
      title: 'Accessibility Challenge',
      image: '/images/accessibiltyedit.png',
      repo: 'https://github.com/langiam/accessibility-challenge',
      deployed: 'https://langiam.github.io/module-1-challenge-accessibility/',
      description: 'A project focusing on improving web accessibility and compliance with WCAG standards.',
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;