import React, { useEffect, useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components';
import meImage from '../assets/me.png';
import githubIcon from '../assets/github.png'
import notionIcon from '../assets/notion.png'
import resumeIcon from '../assets/resume.png'
import quoteLeft from '../assets/quote_left.png'
import quoteRight from '../assets/quote_right.png'

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

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 650px 0px 0px;
  background-color: black;
  padding: 30px 80px;

  opacity: 0;
  transform: translateY(50px);

  ${(props) =>
    props.isVisible &&
    css`
      animation: ${fadeIn} 0.8s ease-out forwards;
    `}
`;

const fadeInWithDelay = (delay) => css`
  opacity: 0;
  transform: translateY(50px);
  animation: ${fadeIn} 0.8s ease-out ${delay}s forwards;
`;

const AboutTitle = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
  font-family: 'Abril Fatface', serif;
  font-weight: 400;
  font-size: 1.8rem;
  color: white;
  ${({ isVisible }) => isVisible && fadeInWithDelay(0)};
`;
const AboutSection = styled.div`
  margin-top: 20px;
  width: 100%;
  ${({ isVisible, delay }) => isVisible && fadeInWithDelay(delay)};
`;
const AboutSubtitle = styled.h3`
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  text-align: left;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    margin-left: 30px;
    width: 2000px;
    height: 0.3px;
    background-color: #d5d5d5;
    transform: translateY(-50%);
  }
`;

const AboutDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px; 
  margin-bottom: 30px;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center; 
  gap: 10px; 

  span {
    font-size: 0.8rem;
    color: #b0b0b0;
    flex-shrink: 0; 
    width: 130px; 
    text-align: left; 
  }

  p {
    margin: 0;
    font-size: 1rem;
    color: white;
  }
`;

const AboutMe = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  width: 100%;
  gap: 30px;
`;

const ImageContainer = styled.div`
  position: relative;
  transform: translateY(-10px);
  width: 300px;
  height: 350px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 40px;
  margin-left: 20%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%);
    pointer-events: none; 
  }
`;

const Motto = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-55%, 135px);
  display: flex;
  z-index: 1; 

  img {
    width: 30px;
    height: 30px;
    margin: 0 5px;
  }
  p {
    color: white;
    font-size: 1.1rem;
    width: 300px;
    margin: 20px 0 0;
  }
`;

const AboutSubMe = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: flex-start; 
  margin-bottom: 40px;
  width: 100%;
  position: relative;
  margin-right: 100px;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 10px; 
  margin-top: 5px;
  margin-bottom: 30px;
  position: relative;
`;

const SkillBlock = styled.div`
  --background: #333;
  --text: #000;
  --font-size: 0.8rem;
  --duration: 0.44s;
  --move-hover: -4px;
  --shadow: 0 2px 8px -1px rgba(51, 51, 51, 0.32);
  --shadow-hover: 0 4px 20px -2px rgba(51, 51, 51, 0.5);
  --font-shadow: var(--font-size);
  position: relative;
  padding: 10px 20px;
  /* font-family: 'Roboto', Arial, sans-serif; */
  font-weight: 500;
  font-size: var(--font-size);
  letter-spacing: 0.5px;
  line-height: var(--font-size);
  color: var(--text);
  background: var(--background);
  border: none;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: var(--shadow);
  text-shadow: 0 var(--font-shadow) 0 var(--text);
  overflow: hidden;
  display: inline-block;
  transform: translateY(var(--y));
  transition: 
    transform var(--duration) ease, 
    box-shadow var(--duration) ease,
    background-color 0.3s ease,
    color 0.2s ease;

  div {
    display: flex;
    overflow: hidden;

    span {
      display: block;
      font-style: normal;
      transition: transform var(--duration) ease;
      transform: translateY(var(--m));
      backface-visibility: hidden;
      color: white;

      &:nth-child(n) {
        transition-delay: calc(var(--duration) / 20);
      }
    }
  }

  &:hover {
    --y: var(--move-hover);
    box-shadow: var(--shadow-hover);
    background-color: white;
    color: #000;

    span {
      --m: calc(var(--font-size) * -1);
      color: #000;
    }
  }

  &.reverse {
    --font-shadow: calc(var(--font-size) * -1);

    &:hover {
      span {
        --m: calc(var(--font-size));
        color: white;
      }
    }
  }
`;

// 버튼 컨테이너 스타일
const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const OutlineButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  padding: 12px 24px;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  cursor: pointer;
  transition: color 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  overflow: hidden;

  &:hover {
    color: black;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 0;
    width: 2px;
    transition: height 0.4s 0.4s cubic-bezier(0.86, 0, 0.07, 1),
      width 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  &::before {
    box-shadow: 2px 2px 0 white inset;
    bottom: 0;
    left: 0;
  }

  &::after {
    box-shadow: -2px -2px 0 white inset;
    top: 0;
    right: 0;
  }

  &:hover::before,
  &:hover::after {
    height: 100%;
    width: 100%;
    transition: height 0.4s cubic-bezier(0.86, 0, 0.07, 1),
      width 0.4s 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  &:hover {
    /* background-color: white; */
    color: white;
  }

  svg {
    font-size: 1.5rem;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

const SkillBlockComponent = ({ skill }) => {
  const skillRef = useRef(null);

  useEffect(() => {
    const button = skillRef.current;

    // 버튼 텍스트를 개별 <span>으로 분리
    button.innerHTML = `<div><span>${skill.trim().split('').join('</span><span>')}</span></div>`;
  }, [skill]);

  return <SkillBlock ref={skillRef} />;
};


const About = () => {
  const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    const skills = [
      'React',
      'Flutter',
      'Redux',
      'REST API',
      'Javascript',
      'Typescript',
      'Python',
      'Styled-Components',
      'CSS',
      'HTML',
      'Github',
      'Git',
      'Webpack',
      'Firebase',
      'Figma'
    ];
  
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

  return (
    <AboutContainer id='about' ref={ref} isVisible={isVisible}>
      <AboutTitle isVisible={isVisible}>About Me</AboutTitle>
      <AboutMe>
        <AboutSection isVisible={isVisible} delay={0.5}>
          <ImageContainer>
            <img src={meImage} alt="Profile" />
          </ImageContainer>
          <Motto>
            <img src={quoteLeft}/>
            <p>팀과 사용자 모두를 만족시킬 수 있는<br />개발자로 성장하겠습니다.</p>
            <img src={quoteRight}/>
          </Motto>
        </AboutSection>
        <AboutSubMe>
          <AboutSection isVisible={isVisible} delay={0.7}>
            <AboutSubtitle>✏️ 교육</AboutSubtitle>
            <AboutDetails>
              <DetailItem>
                <span>2019.03 - 2024.02</span>
                <p>강원대학교 정보통신공학전공</p>
              </DetailItem>
              <DetailItem>
                <span>2024.06 - 2024.12</span>
                <p>LG DX School</p>
              </DetailItem>
            </AboutDetails>
          </AboutSection>
          <AboutSection isVisible={isVisible} delay={1}>
            <AboutSubtitle>🛠️ 기술 스택</AboutSubtitle>
            <SkillsContainer>
            {skills.map((skill, index) => (
              <SkillBlockComponent key={index} skill={skill} />
            ))}
            </SkillsContainer>
          </AboutSection>
          <AboutSection isVisible={isVisible} delay={1.2}>
          <AboutSubtitle>💡 더 알고 싶으시다면</AboutSubtitle>
          <ButtonContainer>
            <OutlineButton
              href="https://github.com/rlnrlnworld" // 깃허브 링크
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon}/> GitHub
            </OutlineButton>

            <OutlineButton
              href="https://www.notion.so/688d7913918948aab9aa3a70d7262048?pvs=4" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={notionIcon}/> Notion
            </OutlineButton>

            <OutlineButton
              href="https://drive.google.com/file/d/14meg-SF6DQbfIXivvA1MO44XslfC7M9d/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={resumeIcon}/> Resume
            </OutlineButton>
          </ButtonContainer>
          </AboutSection>
        </AboutSubMe>
      </AboutMe>
    </AboutContainer>
  )
}

export default About
