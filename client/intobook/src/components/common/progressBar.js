import React from 'react';
import { styled } from 'styled-components';

const ProgressBar = ({ progress, containerWidth, containerHeight, bg, bbg, desc=true }) => {
  const limitedProgress = progress > 100 ? 100 : progress;

  const fillerStyles = {
    height: '100%',
    width: `${limitedProgress}%`,
    backgroundColor: bg ? `${bg}` : '#8067D8',
    borderRadius: 'inherit',
    textAlign: 'right',
  }

  return (
    <div style={{ width: `${containerWidth}px`, margin: '0 auto' }}>
      <ContainerDiv style={{ height: `${containerHeight}px`, backgroundColor: `${bbg}` }} >
        <div style={fillerStyles}></div>
      </ContainerDiv>
    </div>
  );
};

const Progress = styled.div`
  color: var(--gray);
  font-family: var(--main-font);
  font-size: var(--font-h7);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 3px;
  text-align: right;
`;

const ContainerDiv = styled.div`
  height: 10px;
  width: 100%;
  background-color: #EFEFF0;
  border-radius: 50px;
`;

export default ProgressBar;