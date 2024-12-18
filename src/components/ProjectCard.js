import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const ProjectTitle = styled.p`
  font-family: 'Abril Fatface', serif;
  font-weight: lighter;
  margin-bottom: 5px;
`;

const ProjectImgContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 32px;

  &:hover img {
    transform: scale(1.05); /* 이미지 확대 */
  }

  &:hover div {
    opacity: 1;
  }
`;

const ProjectImg = styled.img`
  width: 100%;
  display: block;
  transition: transform 0.3s ease;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 32px;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const ViewButton = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ProjectCardContainer = styled.div`
  width: 400px;
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover; /* 이미지 비율 유지하며 꽉 채우기 */
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const ModalContentWrapper = styled.div`
  padding: 20px;
  text-align: left;
`;

const ModalTitle = styled.h2`
  margin-bottom: 3px;
  font-size: 1.5rem;
`;

const ModalDay = styled.p`
  font-size: 0.8;
  font-weight: lighter;
`;

const ProjectDescription = styled.h4`
  margin-top: 3px;
  color: #333;
  font-weight: 400;
`

const ModalDescription = styled.div`
  font-size: 1rem;

  h4{
    font-weight: bold;
  }

  ul {
    list-style: disc;
    margin-left: 10px;
    margin-top: 15px;
  }
  li {
    margin-bottom: 5px;
  }
`;

const TechStackContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-left: 7px;
  position: relative;

  img {
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.2); 
    }
  }

  a {
    position: absolute;
    right: 10px;
    background-color: black;
    color: white;
    padding: 5px 10px;
    border-radius: 32px;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: ${(props) => props.hoverColor || '#ff6b6b'};
      transform: scale(1.05); 
      cursor: pointer;
    }
  }
`;

const ProjectCard = ({ title, description, image, day, details, techStack, role, result, src, hoverColor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ProjectCardContainer>
        <ProjectImgContainer>
          <ProjectImg src={image} alt={title} />
          <ProjectOverlay onClick={() => setIsModalOpen(true)} />
          <ViewButton onClick={() => setIsModalOpen(true)}>자세히 보기</ViewButton>
        </ProjectImgContainer>
        <ProjectTitle>{title}</ProjectTitle>
      </ProjectCardContainer>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ModalImage src={image} alt={title} />
          <ModalContentWrapper>
            <ModalDay>{day}</ModalDay>
            <ModalTitle>{title}</ModalTitle>
            <ProjectDescription>{description}</ProjectDescription>
            <ModalDescription>
              <h4>{role}</h4>
              <p>{result}</p>
              <ul>
                {details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </ModalDescription>

            <TechStackContainer hoverColor={hoverColor}>
              {techStack.map((tech, index) => (
                <img key={index} src={tech} alt="기술 스택" />
              ))}
              <a href={src} target="_blank" rel="noopener noreferrer">Github 보기</a>
            </TechStackContainer>
          </ModalContentWrapper>
        </Modal>
      )}
    </>
  );
};

export default ProjectCard;