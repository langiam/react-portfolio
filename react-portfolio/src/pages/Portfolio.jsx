import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Employee Tracker',
      image: '/employee-tracker.png', // Replace with actual screenshot
      repo: 'https://github.com/langiam/employee-tracker',
      deployed: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID', // Link to demo video
      description: 'A command-line application for managing employees, departments, and roles using MySQL and Node.js.',
    },
    {
      title: 'Professional README Generator',
      image: '/readme-generator.png', // Replace with actual screenshot
      repo: 'https://github.com/langiam/professional-readme-generator',
      deployed: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID', // Link to demo video
      description: 'A CLI tool that generates high-quality README.md files based on user input.',
    },
    {
      title: 'Vehicle Builder',
      image: '/vehicle-builder.png', // Replace with actual screenshot
      repo: 'https://github.com/langiam/vehicle-builder',
      deployed: 'https://drive.google.com/file/d/1fxW4wHqAvBMA3Q6qLEmZVEEsj4u1LOsT/view', // Replace with actual deployment link
      description: 'A web application allowing users to customize and preview vehicle builds.',
    },
    {
      title: 'Project One Website',
      image: '/project-one.png', // Replace with actual screenshot
      repo: 'https://github.com/langiam/project-one-website',
      deployed: 'https://your-project-one-url.com', // Replace with actual deployment link
      description: 'A collaborative web project showcasing front-end design and API integration.',
    },
    {
        title: 'CSS Website Demo',
        image: '/my-new-website.png', // Replace with actual screenshot
        repo: 'https://github.com/langiam/my-new-website',
        deployed: 'https://your-new-website-url.com', // Replace with actual deployment link
        description: 'A modern, responsive personal website built with HTML, CSS, and JavaScript.',
    },
    {
      title: 'Accessibility Challenge',
      image: '/accessibility-challenge.png', // Replace with actual screenshot
      repo: 'https://github.com/langiam/accessibility-challenge',
      deployed: 'https://your-accessibility-challenge-url.com', // Replace with actual deployment link
      description: 'A project focusing on improving web accessibility and compliance with WCAG standards.',
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
