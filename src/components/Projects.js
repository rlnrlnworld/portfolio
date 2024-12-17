import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import ProjectCard from './ProjectCard';
import spacemeImage from '../assets/spaceme.png';
import kiwoonImage from '../assets/kiwoon.png';
import disneyImage from '../assets/disney.png';
import instagramImage from '../assets/instagram.png';

// 페이드 인 애니메이션 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 프로젝트 섹션 스타일링
const ProjectContainer = styled.section`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  /* 초기 상태는 opacity 0, translateY로 위에서 아래로 */
  opacity: 0;
  transform: translateY(50px);

  /* isVisible 상태에 따라 애니메이션 적용 */
  ${(props) =>
    props.isVisible &&
    css`
      animation: ${fadeIn} 0.8s ease-out forwards;
    `}
`;

const ProjectTitle = styled.h2`
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

const MoreButton = styled.a`
  font-family: 'Abril Fatface', serif;
  color: #333;
  background-color: white;
  border: none;
  padding: 10px 20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ProjectCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 한 번만 실행되도록 옵저버 해제
        }
      },
      { threshold: 0.3 } // 화면에 30% 이상 보일 때 작동
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    { title: "Space Me", description: "나만의 속도로 자기계발을 도와주는 AI 기반 목표 관리 앱", image: spacemeImage },
    { title: "Kiwoon", description: "도마뱀 케이지 관리 서비스", image: kiwoonImage },
    { title: "Disney Plus", description: "React를 활용한 디즈니 플러스 클론", image: disneyImage },
    { title: "Instagram Mini", description: "Flutter를 활용하여 인스타그램의 일부 기능을 구현", image: instagramImage }
  ];

  return (
    <ProjectContainer id="projects" ref={ref} isVisible={isVisible}>
      <ProjectTitle>Projects</ProjectTitle>
      <ProjectsList>
        <ProjectsDescription>
          As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I aim to assist you in constructing the brand of your fantasies.
        </ProjectsDescription>
        <MoreButton href='https://github.com/rlnrlnworld' target="_blank" rel="noopener noreferrer">More →</MoreButton>
      </ProjectsList>
      <ProjectCardList>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </ProjectCardList>
    </ProjectContainer>
  );
};

export default Projects;