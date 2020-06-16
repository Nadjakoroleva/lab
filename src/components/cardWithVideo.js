import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const CardContainerForCardWithVideo = styled.div`
  min-height: 580px;
  background-color: #000000;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 20px;
  margin-right: 20px;
  @media (min-width: 768px) {
    min-height: 629px;
    margin-right: 24px;
    margin-top: 24px;
  }
  @media (min-width: 1280px) {
    min-height: 720px;
    margin-right: 32px;
    margin-bottom: 32px;
    margin-top: 0;
  }
  &:hover {
    box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.95);
  }
`;

const TagForCardWithVideo = styled.p`
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
`;

const DateForCardWithVideo = styled(TagForCardWithVideo)`
  padding-left: 28px;
`;

const TagContainerForCardWithVideo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FrameForCardWithVideo = styled.div`
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

const TitleForCardWithVideo = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #f8f8f8;
  letter-spacing: 0.04em;
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
`;

const BgForCardWithVideo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat-y: no-repeat;
`;

const VideoForCardWithVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 1;
`;

const Card = ({ src, srcSet, videoSrc }) => {
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
      <CardContainerForCardWithVideo onClick={handleAutoplay}>
        <TagContainerForCardWithVideo>
          <TagForCardWithVideo>
            Ui motion - sales master - by LENA SHESTEROVA
          </TagForCardWithVideo>
          <DateForCardWithVideo>15&nbsp;min&nbsp;ago</DateForCardWithVideo>
        </TagContainerForCardWithVideo>
        <FrameForCardWithVideo>
          <BgForCardWithVideo>
            <VideoForCardWithVideo
              ref={videoPlayer}
              playsinline
              loop
              autoPlay={false}
              muted={true}
              src={videoSrc}
              onMouseOut={handleOnMouseDown}
              onMouseOver={handleOnMouseUp}
            />
          </BgForCardWithVideo>
        </FrameForCardWithVideo>
        <TitleForCardWithVideo>
          Blurred image for uploading blurred image Hello from the outside At
          least I can say{' '}
        </TitleForCardWithVideo>
      </CardContainerForCardWithVideo>
    </>
  );
};

export default Card;
