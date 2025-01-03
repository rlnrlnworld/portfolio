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
  mix-blend-mode: difference; /* 부모 배경과 반응 */
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
  mix-blend-mode: difference;
`;

const Talk = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  mix-blend-mode: difference;
`;

const TalkTitle = styled.h3`
  font-family: "Abril Fatface", serif;
  font-weight: 400;
`;

const TalkEmail = styled.p`
  font-size: 0.8rem;
`;

const HeroDescription = styled.p`
  max-width: 400px;
  text-align: center;
  color: white;
  mix-blend-mode: difference;
`;

const HeroSection = () => {
  const wrapperRef = useRef(null);


  useEffect(() => {
    window.onload = () => {
  
      gsap.set(wrapperRef.current, { opacity: 1, visibility: "visible" });
  
      gsap.to(wrapperRef.current, {
        "--target": "0%",
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: true,
          onLeave: () => {
            gsap.to(wrapperRef.current, { opacity: 0, visibility: "hidden", duration: 0.5 });
          },
          onEnterBack: () => {
            gsap.to(wrapperRef.current, { opacity: 1, visibility: "visible", duration: 0.5 });
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
          <Talk>
            <TalkTitle>Let's Talk</TalkTitle>
            <TalkEmail>diiidhe@gmail.com</TalkEmail>
          </Talk>
          <HeroDescription>
            I'm a passionate front-end developer who loves building user
            interfaces. I have a strong background in web development, and I'm
            always eager to learn new skills.
          </HeroDescription>
        </HeroList>
      </HeroSectionContainer>
    </HeroWrapper>
  );
};

export default HeroSection;