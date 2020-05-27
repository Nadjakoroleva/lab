import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import VideoSrc from '../assets/video.mp4';

const CardContainer = styled.div`
  height: 580px;
  background-color: #000000;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 20px;
  margin-right: 20px;
  @media (min-width: 768px) {
    height: 629px;
    margin-right: 24px;
    margin-top: 24px;
  }
  @media (min-width: 1280px) {
    height: 720px;
    margin-right: 32px;
    margin-bottom: 32px;
    margin-top: 0;
  }
`;

const Tag = styled.p`
  font-family: 'Arrival Mono';
  letter-spacing: 0.06em;
  font-size: 11px;
  line-height: 18px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.59);
  opacity: 1;
  transition: opacity 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  @media (min-width: 1280px) {
    opacity: 0;
  }
  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

const Date = styled(Tag)`
  padding-left: 28px;
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Frame = styled.div`
  width: 514px;
  height: 340px;
  background-color: #00000;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itens: center;
  @media (max-width: 1320px) {
    width: 428px;
    height: 437px;
  }
  @media (max-width: 1030px) {
    width: 380px;
  }
  @media (max-width: 480px) {
    width: 227px;
    height: 232px;
  }
`;
const Title = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #f8f8f8;
  opacity: 1;
  transition: opacity 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 80%;
  }
  @media (min-width: 1280px) {
    opacity: 0;
    width: 70%;
  }
  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

const Img = styled.img`
  object-fit: contain;
  height: 100%;
`;

const Bg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat-y: no-repeat;
  // background-image: url(https://images.ctfassets.net/r0lccig03c53/45oyLMjtKjRueGm0kVS6YN/e115e1de25de8693de53a1ddc19e1b76/3x2x.png);
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border: 0;
`;

const Card = ({ src, srcSet }) => {
  const videoPlayer = useRef(null);

  const handleOnMouseDown = () => {
    videoPlayer.current.pause();
  };
  const handleOnMouseUp = () => {
    videoPlayer.current.play();
  };

  const handleAutoplay = () => {};
  return (
    <>
      <CardContainer onClick={handleAutoplay}>
        <TagContainer>
          <Tag>Ui motion - sales master - by LENA SHESTEROVA</Tag>
          <Date>15&nbsp;min&nbsp;ago</Date>
        </TagContainer>
        <Frame>
          <Bg>
            <Video
              ref={videoPlayer}
              playsinline
              loop
              autoPlay={false}
              muted={true}
              src={VideoSrc}
              onMouseOut={handleOnMouseDown}
              onMouseOver={handleOnMouseUp}
            />
          </Bg>
        </Frame>
        <Title>
          Blurred image for uploading blurred image Hello from the outside At
          least I can say{' '}
        </Title>
      </CardContainer>
    </>
  );
};

export default Card;
