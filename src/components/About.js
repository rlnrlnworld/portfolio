import React, { useEffect, useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components';
import meImage from '../assets/me.png';

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
const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 100px 0px;
  background-color: black;
  padding: 30px 80px;

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
const AboutTitle = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
  font-family: 'Abril Fatface', serif;
  font-weight: 400;
  font-size: 1.8rem;
  color: white;
`;
const AboutSubtitle = styled.h3`
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
  margin-top: 10px;
`
const AboutDescription = styled.p`
  color: white;
  font-size: 0.9rem;
  width: 90%;
`;
const AboutMe = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  width: 100%;
  gap: 30px;
`
const AboutImage = styled.img`
  width: 20%;
  border-radius: 30px;
  opacity: 0.85;
`
const AboutSubMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <AboutContainer id='about' ref={ref} isVisible={isVisible}>
      <AboutTitle>About Me</AboutTitle>
      <AboutMe>
        <AboutImage src={meImage}/>
        <AboutSubMe>
          <AboutSubtitle>사용자와 팀을 모두 만족시키는 개발을 위해 <br/>끈기와 책임감을 바탕으로 성장하는 프론트엔드 개발자입니다. </AboutSubtitle>
          <AboutDescription>
            사용자 중심의 프론트엔드 개발자로서 기능과 디자인의 균형을 고민하며 서비스를 구현합니다. <br/><br/>React를 활용해 컴포넌트 기반 개발과 SPA 구조를 선호하며, 유지보수성과 확장성을 고려한 코드 작성을 지향합니다. Flutter로 iOS 앱을 개발할 때는 부족한 지식을 독학과 끈기로 해결하며 문제를 극복했습니다.
            <br/><br/>프로젝트에서는 일정 관리와 UI/UX 디자인을 주도하며 팀원들과 소통에 책임감을 가졌습니다. 특히 ‘자기계발 목표 관리 앱’ 프로젝트를 통해 Flutter 학습과 개발을 동시에 진행하며 크로스 플랫폼 앱을 성공적으로 구현했고, 우수상을 수상하며 팀워크의 소중함과 기술적 성장을 이뤘습니다.
            <br/><br/>기획 방향이 자주 바뀌는 어려움 속에서도 팀원들과 협력해 수정 작업을 마무리했으며, 필요할 때는 중재자 역할을 수행하며 최적의 해결책을 찾았습니다. 끝까지 매달려 문제를 해결하고 사용자의 입장에서 테스트를 반복하며 경험을 개선하는 것에 집중합니다.
            <br/><br/>끈기와 꼼꼼함을 바탕으로 사용자와 팀 모두를 만족시키는 서비스를 만드는 개발자가 되겠습니다.
          </AboutDescription>
        </AboutSubMe>
      </AboutMe>
    </AboutContainer>
  )
}

export default About
