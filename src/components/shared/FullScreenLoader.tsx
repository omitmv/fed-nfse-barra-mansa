import React from 'react';
import styled from 'styled-components';

const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7); /* escurece a tela */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LoaderSpinner = styled.div`
  width: 60px;
  height: 60px;
  border: 6px solid #fff;
  border-top: 6px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
`;

const FullScreenLoader: React.FC = () => {
  return (
    <LoaderOverlay>
      <LoaderSpinner />
    </LoaderOverlay>
  );
};

export default FullScreenLoader;
