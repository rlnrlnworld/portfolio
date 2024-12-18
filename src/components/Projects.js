import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import ProjectCard from './ProjectCard';
import spacemeImage from '../assets/spaceme.png';
import kiwoonImage from '../assets/kiwoon.png';
import disneyImage from '../assets/disney.png';
import instagramImage from '../assets/instagram.png';
import dartImage from '../assets/dart.svg'
import flutterImage from '../assets/flutter.svg'
import xcodeImage from '../assets/xcode.svg'
import gitImage from '../assets/git.svg'
import jsImage from '../assets/javascript.svg'
import htmlImage from '../assets/html5.svg'
import cssImage from '../assets/css3.svg'
import figmaImage from '../assets/figma.svg'
import reactImage from '../assets/react.svg'
import axiosImage from '../assets/axios.svg'
import styledImage from '../assets/styledcomponents.svg'
import fireImage from '../assets/firebase.svg'

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
    { title: "Space Me", 
      description: "나만의 속도로 자기계발을 도와주는 AI 기반 목표 관리 앱", 
      image: spacemeImage,
      day: "2024.09 - 2024.12",
      role: "iOS 앱 클라이언트 개발 및 UI/UX 디자인 담당",
      result: "TestFlight을 통해 기능 테스트 및 사용자 피드백 검증 완료",
      details: [
        "Flutter를 활용해 iOS 앱 개발",
        "화면 디자인 및 UI/UX 기획 및 구현",
        "Dio 라이브러리를 사용하여 비동기 데이터 로딩 기능 구현",
        "TestFlight을 통해 테스트 앱 배포 및 기능 검증"
      ],
      techStack: [
        figmaImage,
        dartImage,
        flutterImage,
        xcodeImage,
        gitImage
      ],
      hoverColor: "#8122f3"
    },
    { title: "Kiwoon", 
      description: "도마뱀 케이지 관리 서비스", 
      image: kiwoonImage,
      day: "2024.08 - 2024.09",
      role: "프론트엔드 개발 및 UI/UX 디자인 및 기획 담당",
      result: "컴포넌트 기반 개발로 유지보수성과 재사용성을 극대화",
      details: [
        "도마뱀 목록 및 개별 항목 표시 컴포넌트 제작",
        "Javascript를 활용한 기능 구현",
        "전역 상태 관리 및 SPA 방식으로 페이지 구성",
        "비동기 데이터 조회 및 상태 변경에 따른 UI 자동 업데이트"
      ],
      techStack: [
        figmaImage,
        jsImage,
        htmlImage,
        cssImage,
        gitImage
      ],
      hoverColor: "#bde52a"
    },
    { title: "Disney Plus", 
      description: "React를 활용한 디즈니 플러스 클론", 
      image: disneyImage,
      day: "2024.11 - 2024.12",
      role: "프론트엔드 개발 및 학습 프로젝트",
      result: "React와 Redux를 사용해 상태 관리와 데이터 흐름을 체계적으로 학습 완료",
      details: [
        "React를 활용해 디즈니 플러스 UI 클론",
        "Redux를 사용한 전역 상태 관리 및 데이터 흐름 제어",
        "firebase를 활용한 사용자 인증 구현",
        "비동기 데이터 처리 기능 구현",
        "SPA 구조로 페이지 전환과 동적 콘텐츠 로딩 구현"
      ],
      techStack: [
        reactImage,
        axiosImage,
        fireImage,
        styledImage,
        gitImage
      ],
      hoverColor: "#0a7afd"
    },
    { title: "Instagram Mini", 
      description: "Flutter를 활용하여 인스타그램의 일부 기능을 구현", 
      image: instagramImage,
      day: "2024.11",
      role: "iOS/Android 앱 개발 및 학습 프로젝트",
      result: "Flutter와 Firebase를 활용해 소셜 네트워크의 기본 기능을 구현하며 데이터베이스 연동 및 회원 관리 학습",
      details: [
        "Flutter를 사용해 인스타그램과 유사한 UI 및 기능 구현",
        "Firebase Authentication을 통한 회원가입 및 로그인 기능 구현",
        "Firestore 데이터베이스를 활용한 게시물 등록 및 조회 기능 개발"
      ],
      techStack: [
        flutterImage,
        dartImage,
        fireImage,
        gitImage
      ],
      hoverColor: "#e76d24"
    }
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