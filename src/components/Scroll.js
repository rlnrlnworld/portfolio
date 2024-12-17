import React from 'react'
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  from {
    transform: translateX(100%); /* 화면 오른쪽에서 시작 */
  }
  to {
    transform: translateX(-100%); /* 화면 왼쪽으로 끝까지 이동 */
  }
`;

// 애니메이션이 적용된 섹션 컨테이너
const ScrollingSection = styled.section`
  width: 100%;
  overflow: hidden; /* 넘치는 텍스트 숨기기 */
  background-color: #f8f8f8;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 30px 0;
`;

// 애니메이션이 적용된 텍스트
const ScrollingText = styled.div`
  display: inline-block;
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Abril Fatface', serif;
  color: #333;

  animation: ${scroll} 100s linear infinite; /* 애니메이션 적용 */
`;
const Scroll = () => {
  return (
    <ScrollingSection>
      <ScrollingText>
        Building modern, user-centered interfaces that combine design and functionality. &nbsp;
        Building modern, user-centered interfaces that combine design and functionality.
      </ScrollingText>
    </ScrollingSection>
  );
}

export default Scroll
