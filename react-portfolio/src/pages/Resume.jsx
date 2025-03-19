import React from 'react';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <p>Download my resume:</p>
      <a href="/resume.pdf" download>Download Resume (PDF)</a>

      <h3>Proficiencies</h3>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React.js, Redux</li>
        <li>Node.js, Express</li>
        <li>MySQL, MongoDB</li>
        <li>Git, GitHub, Agile</li>
      </ul>
    </section>
  );
};

export default Resume;
