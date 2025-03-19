import React from 'react';

const Project = ({ title, image, deployed, repo, description }) => {
  return (
    <div className="project">
      <img src={image} alt={`${title} screenshot`} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        {deployed && (
          <a href={deployed} target="_blank" rel="noopener noreferrer">
            {deployed.includes('youtube.com') || deployed.includes('drive.google.com') ? 'Watch Demo' : 'Live Demo'}
          </a>
        )}
        <a href={repo} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default Project;
