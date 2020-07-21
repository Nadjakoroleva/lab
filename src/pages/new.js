import React, { useEffect, useState, useRef } from 'react';
import styled, { createGlobalStyle, keyframes, css } from 'styled-components';
import Tag from '../components/tag';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import ExpendedCards from '../components/expendedCard';
import ExpendedCardWithComponent from '../components/expendedCardWithComponent';
import Mute from '../components/mute';

import { GlobalStyle } from '../components/globalStyle';

const appear = keyframes`
0% {
  opacity: 0;
}

100% {
  opacity: 1;
}
`;

const disappear = keyframes`
0% {
  opacity: 1;
}

100% {
  opacity: 0;
}
`;

const Overlay = styled.div`
  cursor: url('https://images.ctfassets.net/r0lccig03c53/75Bw6haGzhv1x6BMzSCRQh/5ef6473aa959664ade42056fe7d8626f/cursor_1.svg'),
    pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(15, 16, 17, 0.88);
  width: ${({ isClicked }) => (isClicked ? `100%` : ``)};
  height: ${({ isClicked }) => (isClicked ? `100%` : ``)};
  max-height: ${({ isClicked }) => (isClicked ? `100%` : ``)};
  opacity: 0;
  z-index: ${({ isClicked }) => (isClicked ? `10` : `1`)};
  transition: all 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  animation: ${({ isClicked }) =>
    isClicked
      ? css`
          ${appear} 200ms linear forwards
        `
      : css`
          ${disappear} 400ms linear forwards
        `};
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 56px 20px 56px 20px;
  @media (min-width: 768px) {
    padding: 48px;
    justify-content: flex-start;
  }
  @media (min-width: 1024px) {
    padding: 56px 48px 48px 48px;
  }
  @media (min-width: 1365px) {
    padding: 56px 64px 64px 64px;
  }
  @media (min-width: 1380px) {
    padding: 56px 32px 64px 32px;
    max-width: 1320px;
    margin: 0 auto;
  }
`;

const Logo = styled.img`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

const Asterix = styled.img`
  display: block;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const TagContainer = styled.div`
  display: flex;
  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: 185px;
  }
  @media (min-width: 1024px) {
    margin-right: 308px;
  }
  @media (min-width: 1380px) {
    margin-right: 432px;
  }
  @media (min-width: 1380px) {
    margin-left: auto;
    margin-right: 476px;
  }
`;

const Intro = styled.div`
  padding: 75px 20px 32px 20px;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  letter-spacing: 0.02em;
  @media (min-width: 768px) {
    padding: 75px 48px 32px 48px;
  }
  @media (min-width: 1024px) {
    padding: 75px 48px 32px 48px;
    flex-direction: row;
  }
  @media (min-width: 1365px) {
    padding: 75px 64px 32px 64px;
    margin: 0 auto;
  }
  @media (min-width: 1380px) {
    padding: 88px 32px 32px 32px;
    max-width: 1320px;
  }
`;

const Link = styled.span`
  font-family: 'Arrival Mono';
  font-size: 11.25px;
  line-height: 18px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

const Text = styled.div`
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 1280px) {
    width: 40%;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 32px;

  @media (min-width: 1024px) {
    padding-top: 0;
    position: relative;
    bottom: -5px;
  }
`;

const Img = styled.img`
  height: 32px;
  width: 32px;
`;

const GridContainer = styled.div`
  padding-top: 20px;
  @media (min-width: 768px) {
    padding-top: 16px;
    margin-right: 16px;
    margin-left: 16px;
  }
  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(max-content, 642px));
    grid-gap: 16px;
    padding: 16px;
    margin: 0;
  }
  @media (min-width: 1024px) {
    grid-gap: 16px;
    padding: 16px;
    margin: 0;
  }
  @media (min-width: 1380px) {
    width: max-content;
    margin: auto;
    padding: 90px 0 32px 0;
    grid-gap: 32px;
  }
  @media (min-width: 1400px) {
    margin: auto;
  }
`;

const Card = styled.div`
  cursor: pointer;
  position: relative;
  background: #161718;
  display: flex;
  flex-shrink: 0;
  margin-bottom: 20px;
  background-image: ${({ background }) => `url(${background})`};
  background-position: center;
  background-size: cover;
  height: ${({ currentHeight }) => `${currentHeight}px`};
  &:after {
    content: '';
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    display: block;
    height: 100%;
    width: 100%;
    background: rgb(35, 38, 44);
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  }
  @media (min-width: 1280px) {
    &:hover :after {
      opacity: 0.28;
    }
  }
  &:before {
    content: '';
    display: block;
    height: 0;
    width: 0;
    padding-bottom: calc(642 / 642 * 100%);
  }

  @media (min-width: 768px) {
    margin-bottom: 12px;
    max-height: 642px;
    height: initial;
  }
  @media (min-width: 769px) {
    margin-bottom: 0;
    max-height: 100%;
  }
  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

const CardWithComponent = styled(Card)``;

const UpContainer = styled.div`
  padding-top: 27px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ContainerAuthor = styled.div`
  display: flex;
  opacity: 1;
  transition: opacity 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  @media (min-width: 1280px) {
    opacity: 0;
  }
  ${Card}:hover & {
    opacity: 1;
  }
`;

const ImgAuthor = styled(Img)`
  margin-right: 20px;
  margin-top: -7px;
  @media (min-width: 768px) {
    margin-right: 32px;
  }
`;

const TextTag = styled(Link)`
  color: rgba(255, 255, 255, 0.59);
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

const H3 = styled.div`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  position: absolute;
  bottom: 24px;
  left: 20px;
  width: 70%;
  @media (min-width: 768px) {
    bottom: 24px;
    left: 32px;
  }
  @media (min-width: 1024px) {
    width: 90%;
  }
  @media (min-width: 1280px) {
    width: 70%;
  }
`;

const Relative = styled.div`
  position: relative;
  max-width: 100vw;
`;

const ExpendedCardsConatiner = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100%;
  overflow-y: auto;
  z-index: ${({ isClicked }) => (isClicked ? `10` : `-1`)};
  opacity: ${({ isClicked }) => (isClicked ? '1' : '0')};
  transform: ${({ isClicked }) =>
    isClicked ? `translateY(0)` : `translateY(100px)`};
  transition: opacity 0.3s cubic-bezier(0.76, 0, 0.24, 1),
    transform 0.3s cubic-bezier(0.76, 0, 0.24, 1),
    all 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  @media (min-width: 768px) {
    width: 90vw;
    display: flex;
    justify-content: flex-end;
  }
  @media (min-width: 1680px) {
    width: max-content;
  }
  @media (min-width: 1920px) {
    // justify-content: center;
    width: 100%;
    justify-content: center;
  }
`;

const Modal = styled.div`
  min-height: 100%;
  margin-top: 0;
  @media (min-width: 768px) {
    margin-top: 80px;
  }
`;

const Plus = styled.img`
  background-color: rgb(35, 38, 44);
  border-radius: 50%;
  padding: 2.5px;
  position: relative;
  top: 3px;
`;

const PlusContainer = styled.span`
  opacity: 1;
  transition: opacity 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  margin-left: 12px;
  @media (min-width: 1280px) {
    opacity: 0;
  }
  ${Card}:hover & {
    opacity: 1;
  }
`;

const Component = styled.div`
  position: absolute;
  width: 100%;
  top: 45%;
`;

const AddTag = styled.div`
  border: none;
  padding: 4px 12px 3px 12px;
  margin-left: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 28px;
  border-radius: 2px;
  background-color: #0c62f3;
`;

const AddTagText = styled.div`
  font-family: 'Arrival Mono';
  width: max-content;
  letter-spacing: 0.07em;
  font-size: 11px;
  line-height: 18px;
  text-transform: uppercase;
`;

const TextTagTime = styled(TextTag)`
  padding-right: 24px !important;
`;

const Blur = styled.div`
  filter: ${({ isClicked }) => (isClicked ? `blur(4px)` : ``)};
  transition: filter 0.3s cubic-bezier(0.76, 0, 0.24, 1);
`;

const IndexPage = () => {
  const [currentHeight, setCurrentHeight] = useState(642);
  const [isClicked, setIsClicked] = useState(false);
  const [currentTopPosition, setCurrentTopPosition] = useState(0);
  const containerElement = useRef(null);

  const handleClick = () => {
    setIsClicked(true);
    disableBodyScroll(document.body);
  };

  const closeCards = () => {
    setIsClicked(false);
    enableBodyScroll(document.body);
  };

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newHeightForCard = window.innerWidth;
      setCurrentHeight(newHeightForCard * 1.25);
    };

    window.addEventListener('resize', updateWindowDimensions);

    return () => window.removeEventListener('resize', updateWindowDimensions);
  });

  const getCurrentValueOfTag = () => {};
  return (
    <>
      <GlobalStyle />
      <Relative>
        <Overlay isClicked={isClicked} onClick={closeCards} />

        <Blur isClicked={isClicked}>
          <Nav>
            {' '}
            <Logo src="https://images.ctfassets.net/r0lccig03c53/3KaYO3nazk30Esi1vvoq3Q/70b2277694b956b0abf674b99d703b3b/White.svg?h=16" />
            <Asterix src="https://images.ctfassets.net/r0lccig03c53/1scOwQzmNMkQvbKlXIkjoa/f494150002197c5c04a1fa13ffed0cf5/White.svg?h=16" />
            <TagContainer>
              <Tag
                name={'design&nbsp;lab'}
                defaultColor={'#f3f3f3'}
                color={'#23262C'}
                onClick={getCurrentValueOfTag}
              />
              <AddTag>
                <AddTagText>Add Afrtifact</AddTagText>{' '}
              </AddTag>
            </TagContainer>
            <Img src="https://images.ctfassets.net/r0lccig03c53/2dQwP9vJi6krMhiqe4jB4k/d1639bedee751fad4931a6acd55af5d5/avafhfjkhskjfhsdkjhfkjsdhfkhskfhdshfshkfhfkshdkfhskhfkshdkhfksdhfksdhfkhskdfhkshfkshfkshtar_2.png?h=32" />
          </Nav>

          <Intro>
            <Text>
              Design Lab.{' '}
              <span style={{ color: 'rgb(109,110,111)' }}>
                Selection of design artefacts curated for you by Arrival
                designers.
              </span>
            </Text>
          </Intro>
        </Blur>

        <ExpendedCardsConatiner
          currentTopPosition={currentTopPosition}
          ref={containerElement}
          isClicked={isClicked}
        >
          <Modal isClicked={isClicked}>
            <ExpendedCards
              bgForImageContainer={'#23262C'}
              src={
                'https://images.ctfassets.net/r0lccig03c53/2y4CubxVw5ZDXzbmxHeVup/a0a688db936de2e8abef63953c6122e9/Group_219196428.png'
              }
              objectFitProp={'contain'}
            />

            <ExpendedCards
              src={
                'https://images.ctfassets.net/r0lccig03c53/3TbgFCahXyC07hJ8aF11t7/fad5f8a6155c736e5befb1e5559d24cb/content-image-covered.jpg'
              }
              bgForImageContainer={'black'}
              objectFitProp={'contain'}
            />
            {/* <ExpendedCardWithComponent
              src={
                'https://images.ctfassets.net/r0lccig03c53/1PY2A3gKsfQENpvDdCTgTz/47360646fcb582518f17ec2b542cb43a/image_167.jpg'
              }
              bgForImageContainer={'black'}
              objectFitProp={'cover'}
            /> */}
            <ExpendedCards
              src={
                'https://images.ctfassets.net/r0lccig03c53/1PY2A3gKsfQENpvDdCTgTz/47360646fcb582518f17ec2b542cb43a/image_167.jpg'
              }
              bgForImageContainer={'black'}
              objectFitProp={'cover'}
            />
          </Modal>
        </ExpendedCardsConatiner>

        <Blur isClicked={isClicked}>
          <GridContainer>
            <Card
              isClicked={isClicked}
              currentHeight={currentHeight}
              onClick={handleClick}
              background={
                'https://images.ctfassets.net/r0lccig03c53/2vvkK1305M4s2ofpV4P9wC/1f5f43d07db240a33fba350cd74ab85f/content-image-covered.jpg'
              }
            >
              <UpContainer>
                <TextTag>Tag - Tag</TextTag>
                <ContainerAuthor>
                  <TextTagTime>12:22</TextTagTime>
                  <ImgAuthor src="https://images.ctfassets.net/r0lccig03c53/4ihCRqEAHypAWICi2JG4JF/45787fedfaf42ead5a3e40b6edcc7537/avafhfjkhskjfhsdkjhfkjsdhfkhskfhdshfshkfhfkshdkfhskhfkshdkhfksdhfksdhfkhskdfhkshfkshfkshtar_2.png?h=32" />
                </ContainerAuthor>{' '}
              </UpContainer>
              <H3>
                Short title or primary message.{' '}
                <span style={{ color: 'rgba(255,255,255,0.59)' }}>
                  Description or short secondary message.
                </span>
                <PlusContainer>
                  <Plus src="https://images.ctfassets.net/r0lccig03c53/4HOLhMCRB3Dl5MAn6En156/7c673ad0465a573e08d3aa13878129e1/Union.svg?h=18" />
                </PlusContainer>
              </H3>
            </Card>
            <Card
              isClicked={isClicked}
              currentHeight={currentHeight}
              onClick={handleClick}
              background={
                'https://images.ctfassets.net/r0lccig03c53/3TbgFCahXyC07hJ8aF11t7/fad5f8a6155c736e5befb1e5559d24cb/content-image-covered.jpg'
              }
            >
              <UpContainer>
                <TextTag>Tag - Tag</TextTag>
                <ContainerAuthor>
                  <TextTagTime>12:22</TextTagTime>
                  <ImgAuthor src="https://images.ctfassets.net/r0lccig03c53/4ihCRqEAHypAWICi2JG4JF/45787fedfaf42ead5a3e40b6edcc7537/avafhfjkhskjfhsdkjhfkjsdhfkhskfhdshfshkfhfkshdkfhskhfkshdkhfksdhfksdhfkhskdfhkshfkshfkshtar_2.png?h=32" />
                </ContainerAuthor>{' '}
              </UpContainer>
              <H3>
                Short title or primary message.{' '}
                <span style={{ color: 'rgba(255,255,255,0.59)' }}>
                  Description or short secondary message.
                </span>
                <PlusContainer>
                  <Plus src="https://images.ctfassets.net/r0lccig03c53/4HOLhMCRB3Dl5MAn6En156/7c673ad0465a573e08d3aa13878129e1/Union.svg?h=18" />
                </PlusContainer>
              </H3>
            </Card>
            <CardWithComponent
              isClicked={isClicked}
              currentHeight={currentHeight}
              onClick={handleClick}
            >
              <UpContainer>
                <TextTag>Tag - Tag</TextTag>
                <ContainerAuthor>
                  <TextTagTime>12:22</TextTagTime>
                  <ImgAuthor src="https://images.ctfassets.net/r0lccig03c53/4ihCRqEAHypAWICi2JG4JF/45787fedfaf42ead5a3e40b6edcc7537/avafhfjkhskjfhsdkjhfkjsdhfkhskfhdshfshkfhfkshdkfhskhfkshdkhfksdhfksdhfkhskdfhkshfkshfkshtar_2.png?h=32" />
                </ContainerAuthor>{' '}
              </UpContainer>
              <Component>
                <Mute />
              </Component>
              <H3>
                Short title or primary message.{' '}
                <span style={{ color: 'rgba(255,255,255,0.59)' }}>
                  Description or short secondary message.
                </span>
                <PlusContainer>
                  <Plus src="https://images.ctfassets.net/r0lccig03c53/4HOLhMCRB3Dl5MAn6En156/7c673ad0465a573e08d3aa13878129e1/Union.svg?h=18" />
                </PlusContainer>
              </H3>
            </CardWithComponent>
            <Card
              isClicked={isClicked}
              currentHeight={currentHeight}
              onClick={handleClick}
              background={
                'https://images.ctfassets.net/r0lccig03c53/1cZz1aRTtLj4RLMNeerpy6/d29c1100b5c69a5a28700bde8a88e244/content-image-covered.jpg'
              }
            >
              <UpContainer>
                <TextTag>Tag - Tag</TextTag>
                <ContainerAuthor>
                  <TextTagTime>12:22</TextTagTime>
                  <ImgAuthor src="https://images.ctfassets.net/r0lccig03c53/4ihCRqEAHypAWICi2JG4JF/45787fedfaf42ead5a3e40b6edcc7537/avafhfjkhskjfhsdkjhfkjsdhfkhskfhdshfshkfhfkshdkfhskhfkshdkhfksdhfksdhfkhskdfhkshfkshfkshtar_2.png?h=32" />
                </ContainerAuthor>{' '}
              </UpContainer>
              <H3>
                Short title or primary message.{' '}
                <span style={{ color: 'rgba(255,255,255,0.59)' }}>
                  Description or short secondary message.
                </span>
                <PlusContainer>
                  <Plus src="https://images.ctfassets.net/r0lccig03c53/4HOLhMCRB3Dl5MAn6En156/7c673ad0465a573e08d3aa13878129e1/Union.svg?h=18" />
                </PlusContainer>
              </H3>
            </Card>
          </GridContainer>
        </Blur>
      </Relative>
    </>
  );
};

export default IndexPage;
