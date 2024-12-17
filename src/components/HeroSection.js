import React from 'react';
import styled from 'styled-components';

const HeroList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 80px;
  gap: 80px;
`;

const Talk = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`;

const TalkTitle = styled.h3`
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
  font-family: 'Abril Fatface', serif;
  margin-bottom: 3px;
  font-weight: 400;
`;

const TalkEmail = styled.p`
  font-size: 0.8rem;
`;

const HeroDescription = styled.p`
  margin-top: 40px;
  text-align: center;
  max-width: 400px;
`;

const HeroSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
  margin: 0;
  font-family: 'Abril Fatface', serif;
  font-size: 8rem;
  font-weight: 400;
`;

const HeroSection = () => {
  return (
    <HeroSectionContainer id='hero'>
      <HeroTitle>Front-End</HeroTitle>
      <HeroTitle>Developer</HeroTitle>
      <HeroList>
        <Talk>
          <TalkTitle>Let's Talk</TalkTitle>
          <TalkEmail>diiidhe@gmail.com</TalkEmail>
        </Talk>
        <HeroDescription>
          I'm a passionate front-end developer who loves building user interfaces. I have a strong background in web development, and I'm always eager to learn new skills.
        </HeroDescription>
      </HeroList>
    </HeroSectionContainer>
  );
};

export default HeroSection;