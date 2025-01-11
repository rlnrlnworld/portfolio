import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import ProjectCard from './ProjectCard';
import { fadeIn } from '../styles/animation';
import projects from './ProjectsData';


// 프로젝트 섹션 스타일링
const ProjectContainer = styled.section`
  display: flex;
  margin-top: 0;
  padding: 100px 0 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0;
  transform: translateY(50px);

  ${(props) =>
    props.isVisible &&
    css`
      animation: ${fadeIn} 0.8s ease-out forwards;
    `}
`;

const ProjectTitle = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
  font-family: 'Abril Fatface', serif;
  font-weight: 400;
  font-size: 1.8rem;
`;

const ProjectsList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 100px;
  margin: 40px 0 90px;
`;

const ProjectsDescription = styled.div`
  width: 50%;
`;

const MoreButton = styled.button`
  font-family: 'Abril Fatface', serif;
  font-size: 1rem;
  color: white;
  background-color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s;
  border-radius: 32px;

  &:hover {
    background-color: #444;
  }
`;


const ProjectCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Projects = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [visibleProjects, setVisibleProjects] = useState(4);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 4); // 4개씩 더 보여주기
  };

  return (
    <ProjectContainer id="projects" ref={ref} isVisible={isVisible}>
      <ProjectTitle>Projects</ProjectTitle>
      <ProjectsList>
        <ProjectsDescription>
          As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I aim to assist you in constructing the brand of your fantasies.
        </ProjectsDescription>
      </ProjectsList>
      <ProjectCardList>
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={index} {...project} isVisible={isVisible} />
        ))}
      </ProjectCardList>
      {visibleProjects < projects.length && (
        <MoreButton onClick={handleLoadMore}>More +</MoreButton>
      )}
    </ProjectContainer>
  );
};

export default Projects;