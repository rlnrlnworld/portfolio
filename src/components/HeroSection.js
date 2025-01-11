import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Header";

gsap.registerPlugin(ScrollTrigger);

// HeroSection과 Header의 로고/NavLink에 공통으로 사용될 변수
const GlobalStyles = styled.div`
  --target: 100%; /* 초기값 */
`;

const HeroWrapper = styled.div`
  --target: 100%;
  height: 100vh;
  background: linear-gradient(to right, #000 var(--target), #fff var(--target));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const HeroSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  position: relative;
  /* mix-blend-mode: difference; */
`;

const HeroTitle = styled.h1`
  font-family: "Abril Fatface", serif;
  font-size: 8rem;
  font-weight: 400;
  color: white;
  mix-blend-mode: difference;
  letter-spacing: -0.02em;
  margin: 0;
  padding-top: 100px;
`;
const HeroList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  margin-top: 30px;
  color: white;

  h1 {
    font-size: 1rem;
    font-weight: 400;
    mix-blend-mode: difference;
    line-height: 1.5;
  }
  h2 {
    font-size: 0.9rem;
    font-weight: 300;
    mix-blend-mode: difference;
  }
`;

const Emoji = styled.span`
  mix-blend-mode: normal !important;
  isolation: isolate;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  span {
    margin-left: 10px;
    mix-blend-mode: difference;
    text-decoration: none;
    color: #d5d5d5;

    &:hover {
      color: white;
    }
  }
`;



const HeroSection = () => {
  const wrapperRef = useRef(null);


  useEffect(() => {
    window.onload = () => {
  
      gsap.set(wrapperRef.current, { opacity: 1, visibility: "visible" });
  
      gsap.to(wrapperRef.current, {
        "--target": "0%",
        ease: "none",
        overwrite: "auto",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: true,
          onLeave: () => {
            gsap.to(wrapperRef.current, { 
              opacity: 0, 
              duration: 1.5, 
              ease: "power2.out", 
              onComplete: () => {
                wrapperRef.current.style.display = "none";
              }
            });
          },
          onEnterBack: () => {
            wrapperRef.current.style.display = "block";
            gsap.to(wrapperRef.current, { 
              opacity: 1, 
              duration: 1.5, 
              ease: "power2.in" 
            });
          },
        },
      });
  
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <HeroWrapper ref={wrapperRef}>
      <HeroSectionContainer>
        <Header />
        <HeroTitle>Front-End<br />Developer</HeroTitle>
        <HeroList>
          <div>
            <h1>서비스의 가치를 올리는<br />프론트엔드 개발자 전예린입니다,</h1>
            <h2>팀과 혐력하며 함께 가치를 올리는 것을 좋아합니다.</h2>
          </div>
          <Contacts>
            <div>
              <Emoji>✉️</Emoji> <span>diiidhe@gmail.com</span>
            </div>
            <div>
              <Emoji>☎️</Emoji> <span>+82 10-8550-6418</span>
            </div>
          </Contacts>
        </HeroList>
      </HeroSectionContainer>
    </HeroWrapper>
  );
};

export default HeroSection;