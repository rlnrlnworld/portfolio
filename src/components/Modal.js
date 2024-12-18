import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;
`;

const ModalContent = styled.div`
  background: #fff;
  /* padding: 20px; */
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  max-height: 80vh; 
  overflow-y: auto;
  text-align: center;
  position: relative;

  &::-webkit-scrollbar {
    width: 0; /* 스크롤바 숨김 */
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
`;

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return ReactDOM.createPortal(
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalBackground>,
    document.body // 모달을 body 태그에 렌더링
  );
};

export default Modal;