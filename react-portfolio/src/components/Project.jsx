import React from 'react';

const Project = ({ title, image, deployed, repo, description }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={`${title} screenshot`} className="project-image" />
      <p>{description}</p>
      <p>
        {deployed ? (
          <a href={deployed} target="_blank" rel="noopener noreferrer">
            {deployed.includes('youtube.com') || deployed.includes('drive.google.com') ? 'Watch Demo' : 'Live Demo'}
          </a>
        ) : (
          <span>No live demo available</span>
        )}
        {' | '}
        <a href={repo} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </p>
    </div>
  );
};

export default Project;
