import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Animation from './firstScreenAnimation';

const CardContainer = styled.div`
  min-height: 580px;
  background-color: #000000;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin: 20px 20px 0 20px;
  @media (min-width: 768px) {
    min-height: 629px;
    margin: 24px 24px 0 24px;
  }
  @media (min-width: 1280px) {
    margin: 0 32px 32px 32px;
    max-width: 1616px;
    min-height: 720px;
  }
  @media (min-width: 1680px) {
    margin: 0 auto 32px auto;
  }
  &:hover {
    box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.95);
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
  // ${CardContainer}:hover & {
  //   opacity: 1;
  // }
`;

const Date = styled(Tag)`
  padding-left: 28px;
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Frame = styled.div`
  background-color: #00000;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itens: center;
  width: 265px;
  height: 300px;
}
@media (min-width: 768px) {
  width: 528px;
}
@media (min-width: 1366px) {
  width: 1060px;
}
`;

const Title = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #f8f8f8;
  letter-spacing: 0.04em;
  opacity: 1;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1280px) {
    opacity: 0;
    width: 28%;
  }
  transition: opacity 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  // ${CardContainer}:hover & {
  //   opacity: 1;
  // }
`;

const Bg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat-y: no-repeat;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const Img = styled.img`
  object-fit: contain;
  height: 100%;
`;

const Card = ({ src, srcSet, videoSrc }) => {
  const videoPlayer = useRef(null);

  const handleOnMouseDown = () => {
    videoPlayer.current.pause();
  };
  const handleOnMouseUp = () => {
    videoPlayer.current.play();
  };
  return (
    <>
      <CardContainer>
        <TagContainer>
          <Tag>Ui motion - sales master - by LENA SHESTEROVA</Tag>
          <Date>15&nbsp;min&nbsp;ago</Date>
        </TagContainer>
        <Frame>
          <Bg>
            <Animation />
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
