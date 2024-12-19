import { keyframes } from 'styled-components';

// fadeIn 애니메이션 정의
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;