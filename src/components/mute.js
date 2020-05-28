import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const maximum = keyframes`
0% {
  transform: scaleY(1);
  transform-origin: 50% 50%;
}

100% {
  transform: scaleY(6);
  transform-origin: 50% 50%;
}
`;

const medium = keyframes`
0% {
  transform: scaleY(1);
  transform-origin: 50% 50%;
}

100% {
  transform: scaleY(4);
  transform-origin: 50% 50%;
}
`;

const small = keyframes`
0% {
  transform: scaleY(1);
  transform-origin: 50% 50%;
}

100% {
  transform: scaleY(2.5);
  transform-origin: 50% 50%;
}
`;

const smallBack = keyframes`
0% {
    transform: scaleY(6);
    transform-origin: 50% 50%;
  }
  
  100% {
    transform: scaleY(1);
    transform-origin: 50% 50%;
  }
`;

const mediumBack = keyframes`
0% {
    transform: scaleY(4);
    transform-origin: 50% 50%;
  }
  
  100% {
    transform: scaleY(1);
    transform-origin: 50% 50%;
  }
`;

const maximumBack = keyframes`
0% {
    transform: scaleY(4);
    transform-origin: 50% 50%;
  }
  
  100% {
    transform: scaleY(1);
    transform-origin: 50% 50%;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s cubic-bezier(0.76, 0, 0.24, 1),
    transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  transform: ${({ isMuted }) =>
    isMuted ? 'translateX(0px)' : 'translateX(-17px)'};
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`;

const Volume = styled.div`
  display: flex;
  padding-left: 12px;
  transition: transform 0.4s cubic-bezier(0.76, 0, 0.24, 1);

  div {
    width: 1px;
    height: 1px;
    background: white;
    margin-right: 1px;
    transition: transform 0.2s cubic-bezier(0.76, 0, 0.24, 1);
  }

  div:nth-child(1) {
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${maximum} 50ms linear forwards
          `
        : css`
            ${maximumBack} 300ms linear forwards
          `};
    animation-delay: 0.1s;
  }
  div:nth-child(2) {
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${small} 50ms linear forwards
          `
        : css`
            ${smallBack} 400ms linear forwards
          `};
    animation-delay: 0.3s;
  }
  div:nth-child(3) {
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${small} 50ms linear forwards
          `
        : css`
            ${smallBack} 400ms linear forwards
          `};
    animation-delay: 0.2s;
  }
  div:nth-child(4) {
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${maximum} 50ms linear forwards
          `
        : css`
            ${maximumBack} 300ms linear forwards
          `};
    animation-delay: 0.1s;
  }
  div:nth-child(5) {
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${medium} 50ms linear forwards
          `
        : css`
            ${mediumBack} 300ms linear forwards
          `};
    animation-delay: 0.3s;
  }
  div:nth-child(6) {
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${maximum} 50ms linear forwards
          `
        : css`
            ${maximumBack} 400ms linear forwards
          `};
    animation-delay: 0.3s;
  }
  div:nth-child(7) {
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${medium} 50ms linear forwards
          `
        : css`
            ${mediumBack} 400ms linear forwards
          `};
    animation-delay: 0.2s;
  }
  div:nth-child(8) {
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${maximum} 50ms linear forwards
          `
        : css`
            ${maximumBack} 400ms linear forwards
          `};
    animation-delay: 0.2s;
  }
  div:nth-child(9) {
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${maximum} 50ms linear forwards
          `
        : css`
            ${maximumBack} 400ms linear forwards
          `};
    animation-delay: 0.1s;
  }
  div:nth-child(10) {
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${small} 50ms linear forwards
          `
        : css`
            ${smallBack} 400ms linear forwards
          `};
    animation-delay: 0.1s;
  }
  div:nth-child(11) {
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${small} 50ms linear forwards
          `
        : css`
            ${smallBack} 400ms linear forwards
          `};
    animation-delay: 0.15s;
  }
  div:nth-child(12) {
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${maximum} 50ms linear forwards
          `
        : css`
            ${maximumBack} 400ms linear forwards
          `};
    animation-delay: 0.1s;
  }
  div:nth-child(13) {
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${maximum} 50ms linear forwards
          `
        : css`
            ${maximumBack} 400ms linear forwards
          `};
    animation-delay: 0.15s;
  }
  div:nth-child(14) {
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${medium} 50ms linear forwards
          `
        : css`
            ${mediumBack} 400ms linear forwards
          `};
    animation-delay: 0.15s;
  }
  div:nth-child(15) {
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${medium} 200ms linear forwards
          `
        : css`
            ${mediumBack} 400ms linear forwards
          `};
    animation-delay: 0.2s;
  }
  div:nth-child(16) {
    display: none;
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${maximum} 50ms linear forwards
          `
        : css`
            ${maximumBack} 400ms linear forwards
          `};
    animation-delay: 0.1s;
    @media (min-width: 1024px) {
      display: block;
    }
  }
  div:nth-child(17) {
    display: none;
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${small} 50ms linear forwards
          `
        : css`
            ${smallBack} 400ms linear forwards
          `};
    animation-delay: 0.3s;
    @media (min-width: 1024px) {
      display: block;
    }
  }
  div:nth-child(18) {
    display: none;
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${small} 50ms linear forwards
          `
        : css`
            ${smallBack} 400ms linear forwards
          `};
    animation-delay: 0.2s;
    @media (min-width: 1024px) {
      display: block;
    }
  }
  div:nth-child(19) {
    display: none;
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${maximum} 50ms linear forwards
          `
        : css`
            ${maximumBack} 400ms linear forwards
          `};
    animation-delay: 0.1s;
    @media (min-width: 1024px) {
      display: block;
    }
  }
  div:nth-child(20) {
    display: none;
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${medium} 50ms linear forwards
          `
        : css`
            ${mediumBack} 400ms linear forwards
          `};
    animation-delay: 0.3s;
    @media (min-width: 1024px) {
      display: block;
    }
  }
  div:nth-child(21) {
    display: none;
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${maximum} 50ms linear forwards
          `
        : css`
            ${maximumBack} 400ms linear forwards
          `};
    animation-delay: 0.3s;
    @media (min-width: 1024px) {
      display: block;
    }
  }
  div:nth-child(22) {
    display: none;
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${medium} 50ms linear forwards
          `
        : css`
            ${mediumBack} 400ms linear forwards
          `};
    animation-delay: 0.2s;
    @media (min-width: 1024px) {
      display: block;
    }
  }
  div:nth-child(23) {
    display: none;
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${maximum} 50ms linear forwards
          `
        : css`
            ${maximumBack} 400ms linear forwards
          `};
    animation-delay: 0.2s;
    @media (min-width: 1024px) {
      display: block;
    }
  }
  div:nth-child(24) {
    display: none;
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${maximum} 50ms linear forwards
          `
        : css`
            ${maximumBack} 400ms linear forwards
          `};
    animation-delay: 0.1s;
    @media (min-width: 1024px) {
      display: block;
    }
  }
  div:nth-child(25) {
    display: none;
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${small} 50ms linear forwards
          `
        : css`
            ${smallBack} 400ms linear forwards
          `};
    animation-delay: 0.1s;
    @media (min-width: 1024px) {
      display: block;
    }
  }
  div:nth-child(26) {
    display: none;
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${small} 50ms linear forwards
          `
        : css`
            ${smallBack} 400ms linear forwards
          `};
    animation-delay: 0.15s;
    @media (min-width: 1024px) {
      display: block;
    }
  }
  div:nth-child(27) {
    display: none;
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${maximum} 50ms linear forwards
          `
        : css`
            ${maximumBack} 400ms linear forwards
          `};
    animation-delay: 0.1s;
    @media (min-width: 1024px) {
      display: block;
    }
  }
  div:nth-child(28) {
    display: none;
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${maximum} 50ms linear forwards
          `
        : css`
            ${maximumBack} 400ms linear forwards
          `};
    animation-delay: 0.15s;
    @media (min-width: 1024px) {
      display: block;
    }
  }
  div:nth-child(29) {
    display: none;
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${medium} 50ms linear forwards
          `
        : css`
            ${mediumBack} 400ms linear forwards
          `};
    animation-delay: 0.15s;
    @media (min-width: 1024px) {
      display: block;
    }
  }
  div:nth-child(30) {
    display: none;
    animation: ${({ isMuted }) =>
      !isMuted
        ? css`
            ${medium} 200ms linear forwards
          `
        : css`
            ${mediumBack} 400ms linear forwards
          `};
    animation-delay: 0.2s;
    @media (min-width: 1024px) {
      display: block;
    }
  }
`;
const Line = styled.div``;
const MuteText = styled.p`
  color: #f3f3f3;
  margin-top: -2px;
  font-family: 'Apercu Mono';
  display: flex;
`;

const Unmute = styled.p`
  font-family: 'Apercu Mono';
  opacity: ${({ isMuted }) => (isMuted ? 1 : 0)};
  transition: opacity 0.3s cubic-bezier(0.76, 0, 0.24, 1);
`;

const Mute = () => {
  const [isMuted, setIsMuted] = useState(true);
  const handleMute = () => {
    if (isMuted) {
      setIsMuted(false);
    } else {
      setIsMuted(true);
    }
  };
  return (
    <>
      <Container isMuted={isMuted} onClick={handleMute}>
        <MuteText variant="caption13">
          <Unmute variant="caption13" isMuted={isMuted}>
            un
          </Unmute>
          <span>mute</span>
        </MuteText>
        <Volume isMuted={isMuted}>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </Volume>
      </Container>
    </>
  );
};

export default Mute;
