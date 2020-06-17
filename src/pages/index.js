import React, { useEffect, useState, useRef } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

import { GlobalStyle } from '../components/globalStyle';
import Tag from '../components/tag';
import CardWithComponents from '../components/cardWithComponents';
import CardWithVideo from '../components/cardWithVideo';
import CardWithImage from '../components/cardWithImage';
import FullWidthCard from '../components/fullWidthCard';
import VideoSrc from '../assets/1.mp4';
import VideoSrc2 from '../assets/2.mp4';
import VideoSrc3 from '../assets/3.mp4';
import VideoSrc5 from '../assets/5.mp4';
import '../components/fonts.css';
import ExpendedCards from '../components/expendedCard';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

const Container = styled.div`
  color: #f3f3f3;
  background-color: #0f1011;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  max-width: 1680px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  // position: relative;
  // z-index: 1;
  @media (min-width: 1024px) {
    padding-left: 48px;
    padding-right: 48px;
    padding-top: 48px;
  }
  @media (min-width: 1280px) {
    padding-left: 64px;
    padding-right: 64px;
    padding-top: 64px;
  }
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 64px;
`;
const TagContainer = styled.div`
  padding-top: 64px;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 48px;
  @media (min-width: 768px) {
    width: 65%;
  }
  @media (min-width: 1024px) {
    width: 45%;
  }
  @media (min-width: 1380px) {
    padding-top: 0;
    width: 41%;
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: rgba(243, 243, 243, 0.16);
  margin-bottom: 32px;
`;

const Desc = styled.div`
  padding-bottom: 48px;
  @media (min-width: 768px) {
    padding-bottom: 96px;
  }
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 128px;
  }
`;

const H2 = styled.h2`
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 32px;
  @media (min-width: 1024px) {
    padding-bottom: 0;
    width: 50%;
  }
`;

const CardContainerMain = styled.div`
  display: grid;
  background-color: #0f1011;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(395px, 1fr));
  padding-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  max-width: 1680px;
  margin: 0 auto;
  @media (min-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(515px, 1fr));
  }
  @media (min-width: 768px) {
    padding-left: 24px;
    grid-template-columns: repeat(auto-fit, minmax(642px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(720px, 1fr));
  }
  @media (min-width: 1024px) {
    padding-left: 24px;
    grid-template-columns: repeat(auto-fit, minmax(476px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(629px, 1fr));
  }
  @media (min-width: 1280px) {
    padding-left: 32px;
  }
  @media (min-width: 1380px) {
    grid-template-columns: repeat(auto-fit, minmax(642px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(720px, 1fr));
  }
`;

const Footer = styled.div`
  height: 150px;
`;

//card with Image
const blur = keyframes`
from {
    filter: blur(50px);
 }
 to {
     filter: blur(0px);
 }
`;

const scale = keyframes`
{
    from {transform: scale(1.5)}
    to {transform: scale(1)}
  }`;

const CardContainer = styled.div`
  position: relative;
  z-index: 1;
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

const TagInner = styled.p`
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

const TagContainerInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Frame = styled.div`
  width: 514px;
  height: 340px;
  overflow: hidden;
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
  letter-spacing: 0.04em;
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
  // ${CardContainer}:hover & {
  //   opacity: 1;
  // }
`;

const Img = styled.img`
  object-fit: contain;
  height: 100%;
  overflow: hidden;
  ${CardContainer}:hover & {
    animation: ${blur} 4s cubic-bezier(0.76, 0, 0.24, 1) forwards,
      ${scale} 4s cubic-bezier(0.76, 0, 0.24, 1) forwards;
  }
`;

const ExpendedCardsConatiner = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  padding-top: ${({ currentTopPosition }) => `${currentTopPosition}px`};
  right: 0;
  width: 90vw;
  height: 100%;
  max-height: 100vh;
  overflow-y: auto;
  z-index: ${({ isClicked }) => (isClicked ? `10` : `-1`)};
  opacity: ${({ isClicked }) => (isClicked ? '1' : '0')};
  transform: ${({ isClicked }) =>
    isClicked ? `translateY(0)` : `translateY(100px)`};
  transition: opacity 0.3s cubic-bezier(0.76, 0, 0.24, 1),
    transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
`;

const Modal = styled.div`
  min-height: 100%;
`;

const Layout = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  // bottom: 0;
  // left: 0;
  right: 0;
  background: rgba(35, 38, 44, 0.59);
  // background: red;
  width: 100%;
  height: 100%;
  max-height: 100%;
  z-index: ${({ isClicked }) => (isClicked ? `10` : ``)};
  opacity: ${({ isClicked }) => (isClicked ? `1` : `0`)};
  transition: opacity 0.3s cubic-bezier(0.76, 0, 0.24, 1);
`;

//карточка с видео
const CardContainerForCardWithVideo = styled.div`
  min-height: 580px;
  position: relative;
  z-index: 1;
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

const ContainerRelative = styled.div`
  position: relative;
`;

const IndexPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const videoPlayer = useRef(null);
  const containerElement = useRef(null);

  const handleOnMouseDown = () => {
    videoPlayer.current.pause();
  };
  const handleOnMouseUp = () => {
    videoPlayer.current.play();
  };
  const handleClick = () => {
    setIsClicked(true);
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    disableBodyScroll(document.body);
  };

  const closeCards = () => {
    setIsClicked(false);
    enableBodyScroll(document.body);
    document.getElementsByTagName('html')[0].style = '';
  };

  const [currentTopPosition, setCurrentTopPosition] = useState(146);

  useEffect(() => {
    const handleScroll = () => {
      if (!isClicked) {
        setCurrentTopPosition(window.pageYOffset + 146);
      } else {
        setCurrentTopPosition(containerElement.current.offsetTop);
        return;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <ContainerRelative>
        <Layout isClicked={isClicked} onClick={closeCards} />
        <Container>
          <Nav>
            <img src="https://images.ctfassets.net/r0lccig03c53/3KaYO3nazk30Esi1vvoq3Q/70b2277694b956b0abf674b99d703b3b/White.svg?h=16" />
            <img src="https://images.ctfassets.net/r0lccig03c53/7ewg9PVmotCo6UVohZ2LB7/67c30a590bb8a06276079d804b6e649d/Rectangle_240644582.svg?h=48" />
          </Nav>
          <TagContainer>
            <Tag
              name={'arrival.com'}
              defaultColor={'rgba(243, 243, 243, 0.16)'}
              color={'#f3f3f3'}
            />
            <Tag
              name={'brand'}
              defaultColor={'rgba(243, 243, 243, 0.16)'}
              color={'#f3f3f3'}
            />
            <Tag
              name={'connectivity'}
              defaultColor={'rgba(243, 243, 243, 0.16)'}
              color={'#f3f3f3'}
            />
            <Tag
              name={'ARTEM&nbsp;TARADASH'}
              defaultColor={'rgba(243, 243, 243, 0.16)'}
              color={'#f3f3f3'}
            />
            <Tag
              name={'brand'}
              defaultColor={'rgba(243, 243, 243, 0.16)'}
              color={'#f3f3f3'}
            />
            <Tag
              name={'nadja&nbsp;koroleva'}
              defaultColor={'rgba(243, 243, 243, 0.16)'}
              color={'#f3f3f3'}
            />
            <Tag
              name={'lena&nbsp;shesterova'}
              defaultColor={'rgba(243, 243, 243, 0.16)'}
              color={'#f3f3f3'}
            />
            <Tag
              name={'connectivity'}
              defaultColor={'rgba(243, 243, 243, 0.16)'}
              color={'#f3f3f3'}
            />
          </TagContainer>
          <Divider />
          <Desc>
            <H2>Design Lab</H2>
            <H2>
              Every idea worth discussion, every pixel matters. With these
              principles at the core, Design Lab meant to be a place to share
              design artefacts between Arrival teams, no matter how ready to be
              public they are.
            </H2>
          </Desc>
        </Container>
        <CardContainerMain>
          <ExpendedCardsConatiner
            currentTopPosition={currentTopPosition}
            ref={containerElement}
            isClicked={isClicked}
          >
            <Modal isClicked={isClicked}>
              <ExpendedCards />
              <ExpendedCards />
              <ExpendedCards />
              {/* <ExpendedCards />
              <ExpendedCards /> */}
            </Modal>
          </ExpendedCardsConatiner>
          <CardContainer onClick={handleClick}>
            <TagContainerInner>
              <TagInner>Ui motion - sales master - by LENA SHESTEROVA</TagInner>
              {/* <Date>15&nbsp;min&nbsp;ago</Date> */}
            </TagContainerInner>
            <Frame>
              <Img src="https://images.ctfassets.net/r0lccig03c53/p9ewUrhvGBNL0LJVfzDfM/a475c9306b7557a4898831dec8b31a69/Img.jpg" />
            </Frame>
            <Title>
              Blurred image for uploading blurred image Hello from the outside
              At least I can say{' '}
            </Title>
          </CardContainer>

          {/* карточка с видео */}

          <CardContainerForCardWithVideo onClick={handleClick}>
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
                  src={VideoSrc3}
                  onMouseOut={handleOnMouseDown}
                  onMouseOver={handleOnMouseUp}
                />
              </BgForCardWithVideo>
            </FrameForCardWithVideo>
            <TitleForCardWithVideo>
              Blurred image for uploading blurred image Hello from the outside
              At least I can say{' '}
            </TitleForCardWithVideo>
          </CardContainerForCardWithVideo>

          {/* карточка с видео */}
          <CardContainerForCardWithVideo onClick={handleClick}>
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
                  src={VideoSrc}
                  onMouseOut={handleOnMouseDown}
                  onMouseOver={handleOnMouseUp}
                />
              </BgForCardWithVideo>
            </FrameForCardWithVideo>
            <TitleForCardWithVideo>
              Blurred image for uploading blurred image Hello from the outside
              At least I can say{' '}
            </TitleForCardWithVideo>
          </CardContainerForCardWithVideo>

          <CardWithComponents />
        </CardContainerMain>

        <FullWidthCard />

        {/* <CardContainer>
        <CardWithVideo videoSrc={VideoSrc2} />
        <CardWithVideo videoSrc={VideoSrc5} />
      </CardContainer> */}
        <GlobalStyle />
        <Footer />
      </ContainerRelative>
    </>
  );
};

export default IndexPage;
