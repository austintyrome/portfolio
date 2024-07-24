import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Resource Rascals',
    description: 'Information about languages learned in class.',
    link: 'https://github.com/Mistaken40033/team_resource_rascals',
    image: 'path/to/project1-thumbnail.jpg',
  },
  {
    title: 'BrewQuest',
    description: 'Page used to search for breweries near you.',
    link: 'https://github.com/djinjones/BrewQuest',
    image: 'path/to/project2-thumbnail.jpg',
  },
  {
    title: 'ReadMe Generater',
    description: 'Create your own ReadMe',
    link: 'https://github.com/austintyrome/creating-licenses',
    image: 'path/to/project3-thumbnail.jpg',
  },
  {
    title: 'Social Media Star',
    description: 'Rest API for getting users and thoughts that they have posted',
    link: 'https://github.com/austintyrome/socialmediastar',
    image: 'path/to/project4-thumbnail.jpg',
  },
  {
    title: 'Developer Blog',
    description: 'A blog to share tips and tricks on web development.',
    link: 'https://github.com/austintyrome/developer-blog',
    image: 'path/to/project5-thumbnail.jpg',
  },
  {
    title: 'Vacation Planning',
    description: '5 day weather forecast for a serched location.',
    link: 'https://github.com/austintyrome/vacation-planning',
    image: 'path/to/project6-thumbnail.jpg',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default Projects;
 