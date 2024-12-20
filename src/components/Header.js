import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

// 스타일드 컴포넌트 정의
// const HeaderContainer = styled.header`
//   background-color: white;
//   padding: 1rem 2rem;
// `;
const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  mix-blend-mode: difference; /* 부모 배경과 반응 */
  position: absolute;
  top: 0;
  z-index: 10;
  margin-bottom: 300px;
`;

const Nav = styled.nav`
  justify-content: center;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: white; /* 부모 배경의 반전 효과를 받음 */
  mix-blend-mode: difference;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  background-color: black;
  border-radius: 20px;
  padding: 10px;
  margin: 0 auto;
  width: fit-content;
  mix-blend-mode: difference;
`;

const NavItem = styled.li`
  margin-left: 2rem;

  &:first-child {
    margin-left: 0;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  margin: 5px;
  padding: 5px 7px;
  border-radius: 15px;
  color: white;
  text-decoration: none;
  mix-blend-mode: difference;

  &:focus {
    background-color: white;
    color: black;
    outline: none;
  }

  &:hover {
    background-color: white;
    color: black;
    transition: all 0.3s ease-in-out;
  }
`;

const Header = () => {
  const homeLinkRef = useRef(null); // Home 링크에 대한 참조 생성

  useEffect(() => {
    if (homeLinkRef.current) {
      homeLinkRef.current.focus(); // 컴포넌트 마운트 시 Home 링크에 focus 설정
    }
  }, []);

  return (
    <HeaderContainer>
      <Nav>
        <Logo>rlnrln®</Logo>
        <NavList>
          <NavItem>
            <NavLink href="/" ref={homeLinkRef}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;