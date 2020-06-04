import React, { useEffect, useState } from 'react';

import styled, { keyframes } from 'styled-components';

const StyledStart = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 676px;
  height: 100%;
  background-color: #0f1011;
  overflow: hidden;
  margin: 0 auto;
`;

const scale = keyframes`
50% {
    transform: scaleX(1.3);
}
`;

const rotate = keyframes`
50% {
    transform: rotate(90deg);
}
`;

const opacity = keyframes`
50% {
    opacity: 0.4;
}
`;

const StyledTextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  text-align: center;
  opacity: 0.7;
  animation: ${opacity} 4s infinite alternate;
  transition: opacity 4s cubic-bezier(0.76, 0, 0.24, 1);
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 200px;
    background: url(https://images.ctfassets.net/r0lccig03c53/2J7DSWyyFc2Z62SI6VOGRV/0c2591d090398db33df78ac49391a165/Ellipse_26.png);
    background-position: bottom;
    background-size: contain;
    background-repeat: no-repeat;
    animation: ${scale} 4s infinite alternate;
    transition: transform 4s cubic-bezier(0.76, 0, 0.24, 1);
    filter: blur(80px);
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 150px;
    background: url(https://images.ctfassets.net/r0lccig03c53/2J7DSWyyFc2Z62SI6VOGRV/0c2591d090398db33df78ac49391a165/Ellipse_26.png);
    background-position: bottom;
    background-size: contain;
    background-repeat: no-repeat;
    animation: ${rotate} 7s infinite alternate;
    transition: transform 4s cubic-bezier(0.76, 0, 0.24, 1);
    filter: blur(80px);
  }
`;

const StyledText = styled.div`
  color: #f3f3f3;
  font-family: 'Arrival Mono';
  letter-spacing: 0.06em;
  font-size: 11px;
  line-height: 18px;
  margin-top: auto;
  position: relative;
  z-index: 10;
`;

const Hover = () => {
  return (
    <>
      <StyledStart>
        <img src="https://images.ctfassets.net/r0lccig03c53/3KaYO3nazk30Esi1vvoq3Q/70b2277694b956b0abf674b99d703b3b/White.svg?h=16" />
        <StyledTextWrapper>
          <StyledText variant="caption13">
            Presentation will start shortly...
          </StyledText>
        </StyledTextWrapper>
      </StyledStart>
    </>
  );
};

export default Hover;
