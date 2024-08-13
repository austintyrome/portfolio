import  React, { useEffect, useState } from 'react';

function Portfolio() {
  const projects = [
    {
      title: "Happy Quizmore",
      imgSrc: "https://drive.google.com/file/d/1HvcjEnH3p2lQp-_49VkNk0uYMWjMVVKU/view?usp=drive_link",
      liveLink: "https://project1.com",
      repoLink: "https://github.com/yourprofile/project1"
    },
    {
      title: "Text editor",
      imgSrc: "path/to/image1.jpg",
      liveLink: "https://proto-text-editor.onrender.com",
      repoLink: "https://github.com/austintyrome/proto-text-editor"
    },
    {
      title: "BrewQuest",
      imgSrc: "path/to/image1.jpg",
      repoLink: "https://github.com/djinjones/BrewQuest"
    },
    {
      title: "ReadMe Generator",
      imgSrc: "path/to/image1.jpg",
      repoLink: "https://github.com/austintyrome/creating-licenses",
      videoLink: "https://drive.google.com/file/d/1AMR7HiG-lTcqlh75hGhhh9e1tuwMerms/view?usp=drive_link"
    },
    {
      title: "Resorce Rascals",
      imgSrc: "path/to/image1.jpg",
      repoLink: "https://mistaken40033.github.io/team_resource_rascals/"
    },
    {
      title: "Project 6",
      imgSrc: "path/to/image1.jpg",
      repoLink: "https://github.com/austintyrome/developer-blog"
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
