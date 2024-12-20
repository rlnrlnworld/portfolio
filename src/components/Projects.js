import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import ProjectCard from './ProjectCard';
import spacemeImage from '../assets/spaceme.png';
import kiwoonImage from '../assets/kiwoon.png';
import disneyImage from '../assets/disney.png';
import movieImage from '../assets/movie.png'
import ipadImage from '../assets/ipad.png'
import starbucksImage from '../assets/starbucks.png'
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
import reduxImage from '../assets/redux.svg'
import gsapImage from '../assets/greensock.svg'
import aiImage from '../assets/aichat.png'
import { fadeIn } from '../styles/animation';


// 프로젝트 섹션 스타일링
const ProjectContainer = styled.section`
  display: flex;
  margin-top: 0;
  padding: 550px 0 100px;
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
  background-color: white;
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

  const projects = [
    { title: "Space Me", 
      description: "나만의 속도로 자기계발을 도와주는 AI 기반 목표 관리 앱", 
      image: spacemeImage,
      src: "https://github.com/rlnrlnworld/space-me",
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
      hoverColor: "#42887E"
    },
    { title: "Kiwoon", 
      description: "도마뱀 케이지 관리 서비스", 
      image: kiwoonImage,
      src: "https://github.com/rlnrlnworld/kiwoon-app",
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
      hoverColor: "#EC43A6"
    },
    { title: "Disney Plus", 
      description: "React를 활용한 디즈니 플러스 클론", 
      image: disneyImage,
      day: "2024.11 - 2024.12",
      role: "프론트엔드 개발 및 학습 프로젝트",
      src: "https://github.com/rlnrlnworld/react-disney-plus-app",
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
        reduxImage,
        axiosImage,
        fireImage,
        styledImage,
        gitImage
      ],
      hoverColor: "#000"
    },
    { title: "Instagram Mini", 
      description: "Flutter를 활용하여 인스타그램의 일부 기능을 구현", 
      image: instagramImage,
      src: "https://github.com/rlnrlnworld/instagram-mini-app",
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
      hoverColor: "#C6E957"
    },
    { title: "Germini AI Chat", 
      description: "Germini 기반 AI 채팅 서비스", 
      image: aiImage,
      src: "https://github.com/rlnrlnworld/chatgpt-app",
      day: "2024.10",
      role: "iOS/Andriod 앱 개발 및 학습 프로젝트",
      result: "Flutter와 Germini API를 활용해 실시간 AI 응답 기능을 구현하며 상태 관리와 API 통합 학습",
      details: [
        "Flutter를 활용해 AI 챗 서비스 UI 및 기능 구현",
        "Germini API를 연동해 사용자의 입력에 실시간 응답 생성",
        "자연어 입력 처리 및 실시간 대화 반영을 통한 인터랙티브한 사용자 경험 제공"
      ],
      techStack: [
        dartImage,
        flutterImage,
        gitImage
      ],
      hoverColor: "#42887E"
    },
    { title: "Starbucks", 
      description: "VanillaJS로 스타벅스 웹 페이지 클론", 
      image: starbucksImage,
      src: "https://github.com/rlnrlnworld/starbucks",
      day: "2024.03",
      role: "프론트엔드 개발 및 학습 프로젝트",
      result: "반응형 웹 페이지를 Javascript를 통해 구현",
      details: [
        "반응형 웹 페이지 구현",
        "GSAP 애니메이션 구현",
        "Youtube IFrame Player API 활용",
        "Vercel을 이용해 프로젝트 배포"
      ],
      techStack: [
        jsImage,
        htmlImage,
        cssImage,
        gsapImage,
        gitImage
      ],
      hoverColor: "#EC43A6"
    },
    { title: "Apple iPad", 
      description: "vanillaJS로 아이패드 웹 페이지 클론", 
      image: ipadImage,
      day: "2024.03 - 2024.04",
      role: "프론트엔드 개발 및 학습 프로젝트",
      src: "https://github.com/rlnrlnworld/ipad?tab=readme-ov-file",
      result: "반응형 웹 페이지를 Javascript로 구현",
      details: [
        "반응형 웹 페이지 구현",
        "IntersectionObserver를 활용한 스크롤 애니메이션 구현",
        "CSS Sprite를 활용한 이미지 최적화 및 애니메이션 구현",
        "오픈 그래프 및 메타 태그 설정",
        "Vercel을 이용해 프로젝트 배포"
      ],
      techStack: [
        jsImage,
        htmlImage,
        cssImage,
        gitImage
      ],
      hoverColor: "#000"
    },
    { title: "Movie Search", 
      description: "OMDB API를 이용한 영화 검색 사이트", 
      image: movieImage,
      src: "https://github.com/rlnrlnworld/movie-app",
      day: "2024.08 - 2024.09",
      role: "API를 통한 비동기 통신 및 컴포넌트 기반 웹 페이지 구현",
      result: "API 연동을 통한 데이터 처리 및 상태 관리",
      details: [
        "API 연동 및 비동기 데이터 처리",
        "컴포넌트 기반 개발 방식 활용",
        "상태 관리 및 렌더링",
        "Skeleton UI 구현",
        "Vercel을 이용한 배포"
      ],
      techStack: [
        jsImage,
        htmlImage,
        cssImage,
        gitImage
      ],
      hoverColor: "#C6E957"
    },
  ];

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