import  React, { useEffect, useState } from 'react';

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      imgSrc: "path/to/image1.jpg",
      liveLink: "https://project1.com",
      repoLink: "https://github.com/yourprofile/project1"
    },
    {
      title: "Project 2",
      imgSrc: "path/to/image1.jpg",
      liveLink: "https://project1.com",
      repoLink: "https://github.com/yourprofile/project1"
    },
    {
      title: "Project 3",
      imgSrc: "path/to/image1.jpg",
      liveLink: "https://project1.com",
      repoLink: "https://github.com/yourprofile/project1"
    },
    {
      title: "Project 4",
      imgSrc: "path/to/image1.jpg",
      liveLink: "https://project1.com",
      repoLink: "https://github.com/yourprofile/project1"
    },
    {
      title: "Project 5",
      imgSrc: "path/to/image1.jpg",
      liveLink: "https://project1.com",
      repoLink: "https://github.com/yourprofile/project1"
    },
    {
      title: "Project 6",
      imgSrc: "path/to/image1.jpg",
      liveLink: "https://project1.com",
      repoLink: "https://github.com/yourprofile/project1"
    },
   
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <img src={project.imgSrc} alt={project.title} />
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
