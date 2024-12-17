import React from 'react'
import styled from 'styled-components'

const ProjectTitle = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
  font-family: 'Abril Fatface', serif;
  font-weight: lighter;
  margin-bottom: 5px;
`
const ProjectImg = styled.img`
  width: 100%;
  margin-bottom: 20px;
`
const ProjectDescription = styled.p`
  font-size: 0.8rem;
  width: 90%;
`
const AboutProject = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ProjectCardContainer = styled.div`
  width: 400px;
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const ProjectCard = ({ title, description, image }) => {
  return (
    <ProjectCardContainer className='project-card'>
      <ProjectImg src={image} alt={title}/>
      <AboutProject>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </AboutProject>
    </ProjectCardContainer>
  )
}

export default ProjectCard
