import React, { useEffect, useState, useRef } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import Tag from '../components/tag';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import ExpendedCards from '../components/expendedCard';
import Mute from '../components/mute';

import { GlobalStyle } from '../components/globalStyle';

const Overlay = styled.div`
  cursor: url('https://images.ctfassets.net/r0lccig03c53/5ZMYhnpYsPQl4eZsVbO3SA/58c9f97bc6c89c52a773e33927e5dc91/cursor.png'),
    pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  // background: red;
  background: rgba(35, 38, 44, 0.59);

  width: ${({ isClicked }) => (isClicked ? `100%` : ``)};
  height: ${({ isClicked }) => (isClicked ? `100%` : ``)};
  max-height: ${({ isClicked }) => (isClicked ? `100%` : ``)};
  opacity: ${({ isClicked }) => (isClicked ? `1` : `0`)};
  z-index: ${({ isClicked }) => (isClicked ? `10` : ``)};
  transition: opacity 0.3s cubic-bezier(0.76, 0, 0.24, 1),
    all 0.3s cubic-bezier(0.76, 0, 0.24, 1);
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 56px 20px 56px 20px;
  @media (min-width: 768px) {
    padding: 48px;
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
  // overflow-x: scroll;
  // @media (min-width: 768px) {
  //   overflow-x: initial;
  // }
`;

const Intro = styled.div`
  padding: 75px 20px 32px 20px;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 75px 48px 32px 48px;
  }
  @media (min-width: 1024px) {
    padding: 75px 48px 32px 48px;
  }
  @media (min-width: 1365px) {
    padding: 75px 64px 32px 64px;
    margin: 0 auto;
  }
  @media (min-width: 1380px) {
    padding: 75px 32px 32px 32px;
    max-width: 1320px;
  }
`;

const Link = styled.span`
  font-family: 'Arrival Mono';
  font-size: 11.25px;
  line-height: 18px;
  text-transform: uppercase;
`;

const Text = styled.div`
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 35%;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 32px;
  @media (min-width: 768px) {
    padding-top: 0;
  }
`;

const Img = styled.img`
  height: 32px;
  width: 32px;
`;

const MainDescription = styled.div`
  padding: 48px 20px 96px 20px;
  font-size: 24px;
  line-height: 32px;
  width: 100%;
  @media (min-width: 768px) {
    padding: 32px 48px 96px 48px;
  }
  @media (min-width: 1024px) {
    width: 100%;
    padding: 48px 48px 124px 48px;
  }
  @media (min-width: 1280px) {
    width: 42%;
  }
  @media (min-width: 1230px) {
    width: 100%;
    max-width: 1308px;
  }
  @media (min-width: 1365px) {
    padding: 48px 64px 124px 64px;
  }
  @media (min-width: 1380px) {
    margin: 0 auto;
    padding-left: 32px;
  }
`;

const TextInside = styled.div`
  width: 90%;
  @media (min-width: 1024px) {
    width: 58%;
  }
`;

const UploadBtn = styled.div`
  background-color: #0c62f3;
  padding: 36px 20px;
  max-width: 1308px;
  @media (min-width: 768px) {
    margin-left: 16px;
    margin-right: 16px;
    padding: 36px 32px;
  }
  @media (min-width: 1024px) {
    margin-left: 16px;
    margin-right: 16px;
  }
  @media (min-width: 1380px) {
    margin: 0 auto;
  }
`;
const AddArtifact = styled(Link)`
  padding-top: 104px;
  height: 64px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
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
  max-height: ${({ currentHeight }) => `${currentHeight}px`};
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
  &:hover :after {
    opacity: 0.28;
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

const CardFullWidth = styled.div`
  cursor: pointer;
  background: #1e1f22;
  margin-bottom: 80px;
  position: relative;
  display: flex;
  flex-shrink: 0;
  max-height: ${({ currentHeight }) => `${currentHeight}px`};
  max-width: 1308px;
  background-image: url('https://images.ctfassets.net/r0lccig03c53/1RZM81T4FHQhTdhVTY6LGi/fa2ad855f28ea9597d5f8608b706c877/content-image-covered-big.jpg');
  background-position: center;
  background-size: contain;
  background-origin: border-box;
  background-repeat: no-repeat;
  // z-index: -1;
  &:before {
    content: '';
    display: block;
    height: 0;
    width: 0;
    padding-bottom: calc(642 / 642 * 100%);
  }
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
  &:hover :after {
    opacity: 0.28;
  }
  @media (min-width: 768px) {
    margin-right: 16px;
    margin-left: 16px;
    max-height: 642px;
  }
  @media (min-width: 1024px) {
    margin-left: 24px;
    margin-right: 24px;
  }
  @media (min-width: 1380px) {
    margin: 0 auto 180px;
  }
`;

const UpContainer = styled.div`
  padding-top: 27px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ContainerAuthor = styled.div`
  display: flex;
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  ${Card}:hover & {
    opacity: 1;
  }
`;

const ImgAuthor = styled(Img)`
  margin-right: 32px;
  margin-top: -7px;
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
  position: absolute;
  bottom: 24px;
  left: 20px;
  width: 70%;
  @media (min-width: 768px) {
    bottom: 24px;
    left: 32px;
  }
`;

const Relative = styled.div`
  position: relative;
`;

const ExpendedCardsConatiner = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  max-height: 100vh;
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
  }
  @media (min-width: 1440px) {
    // width: 60vw;
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
  padding: 6.5px;
  position: relative;
  top: 5px;
`;

const PlusContainer = styled.span`
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  margin-left: 12px;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const Component = styled.div`
  position: absolute;
  width: 100%;
  top: 45%;
  transform: scale(1.5);
  @media (min-width: 768px) {
    transform: scale(2.5);
  }
  @media (min-width: 1280px) {
    transform: scale(3.5);
  }
`;

const H3ForFullWidthCard = styled(H3)`
  @media (min-width: 1280px) {
    width: 35%;
  }
`;

const IndexPage = () => {
  const [currentHeight, setCurrentHeight] = useState(480);
  const [isClicked, setIsClicked] = useState(false);
  const [currentTopPosition, setCurrentTopPosition] = useState(0);
  const containerElement = useRef(null);

  const handleClick = () => {
    setIsClicked(true);
    // document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    disableBodyScroll(document.body);
  };

  const closeCards = () => {
    setIsClicked(false);
    enableBodyScroll(document.body);
    // document.getElementsByTagName('html')[0].style = '';
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
        <div style={{ backgroundColor: '#1E1F22' }}>
          <Nav>
            {' '}
            <Logo src="https://images.ctfassets.net/r0lccig03c53/3KaYO3nazk30Esi1vvoq3Q/70b2277694b956b0abf674b99d703b3b/White.svg?h=16" />
            <Asterix src="https://images.ctfassets.net/r0lccig03c53/1scOwQzmNMkQvbKlXIkjoa/f494150002197c5c04a1fa13ffed0cf5/White.svg?h=16" />
            <TagContainer>
              {['arrival.com', 'hmi'].map((item) => (
                <Tag
                  key={item}
                  name={item}
                  defaultColor={'rgba(243, 243, 243, 0.16)'}
                  color={'#f3f3f3'}
                  onClick={getCurrentValueOfTag}
                />
              ))}
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
            <FlexContainer>
              <Link>5&nbsp;posts</Link>
              <Img
                style={{ marginLeft: '24px' }}
                src="https://images.ctfassets.net/r0lccig03c53/2dQwP9vJi6krMhiqe4jB4k/d1639bedee751fad4931a6acd55af5d5/avafhfjkhskjfhsdkjhfkjsdhfkhskfhdshfshkfhfkshdkfhskhfkshdkhfksdhfksdhfkhskdfhkshfkshfkshtar_2.png?h=32"
              />
              <Img src="https://images.ctfassets.net/r0lccig03c53/2QJ3wqKYIZOucZDB684Fv1/323623dd80f42aa8efb4d4136e9928da/artem-tarasov.png?h=32" />
              <Img src="https://images.ctfassets.net/r0lccig03c53/22trzxbCuNJ1He0xKOhzyg/f6e14c85d4aa48bb03ea8e72b2f79b38/2020-06-25_15.36_1.png?h=32" />
            </FlexContainer>
          </Intro>
        </div>

        <MainDescription>
          <TextInside>
            Every idea worth discussion, every pixel matters. With these
            principles at the core, Design Lab meant to be a place to share
            design artefacts between Arrival teams, no matter how ready to be
            public they are.
          </TextInside>
        </MainDescription>

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
            <ExpendedCards
              src={
                'https://images.ctfassets.net/r0lccig03c53/1PY2A3gKsfQENpvDdCTgTz/47360646fcb582518f17ec2b542cb43a/image_167.jpg'
              }
              bgForImageContainer={'black'}
              objectFitProp={'cover'}
            />
          </Modal>
        </ExpendedCardsConatiner>

        <UploadBtn>
          <Link style={{ color: 'rgba(255,255,255,0.59)' }}>
            upload your latest designs
          </Link>
          <AddArtifact>
            add artifact
            <img src="https://images.ctfassets.net/r0lccig03c53/5IGT0AjIzRRUpw1GFqMoG8/a37edd10fd1932b5f157758b5d8ebf3a/Union.svg?h=16" />
          </AddArtifact>
        </UploadBtn>

        <GridContainer>
          <Card
            isClicked={isClicked}
            currentHeight={currentHeight}
            onClick={handleClick}
            background={
              'https://images.ctfassets.net/r0lccig03c53/2y4CubxVw5ZDXzbmxHeVup/a0a688db936de2e8abef63953c6122e9/Group_219196428.png'
            }
          >
            <UpContainer>
              <TextTag>Tag - Tag</TextTag>
              <ContainerAuthor>
                <TextTag>12:22</TextTag>
                <ImgAuthor src="https://images.ctfassets.net/r0lccig03c53/22trzxbCuNJ1He0xKOhzyg/f6e14c85d4aa48bb03ea8e72b2f79b38/2020-06-25_15.36_1.png?h=32" />
              </ContainerAuthor>{' '}
            </UpContainer>
            <H3>
              Short title or primary message.{' '}
              <span style={{ color: 'rgba(255,255,255,0.59)' }}>
                Description or short secondary message.
              </span>
              <PlusContainer>
                <Plus src="https://images.ctfassets.net/r0lccig03c53/qUVYo5MOqLcqBFWgbUix7/fea482e2a30a634ee8da1a66bbd812bd/Union.svg" />
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
                <TextTag>12:22</TextTag>
                <ImgAuthor src="https://images.ctfassets.net/r0lccig03c53/22trzxbCuNJ1He0xKOhzyg/f6e14c85d4aa48bb03ea8e72b2f79b38/2020-06-25_15.36_1.png?h=32" />
              </ContainerAuthor>{' '}
            </UpContainer>
            <H3>
              Short title or primary message.{' '}
              <span style={{ color: 'rgba(255,255,255,0.59)' }}>
                Description or short secondary message.
              </span>
              <PlusContainer>
                <Plus src="https://images.ctfassets.net/r0lccig03c53/qUVYo5MOqLcqBFWgbUix7/fea482e2a30a634ee8da1a66bbd812bd/Union.svg" />
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
                <TextTag>12:22</TextTag>
                <ImgAuthor src="https://images.ctfassets.net/r0lccig03c53/22trzxbCuNJ1He0xKOhzyg/f6e14c85d4aa48bb03ea8e72b2f79b38/2020-06-25_15.36_1.png?h=32" />
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
                <Plus src="https://images.ctfassets.net/r0lccig03c53/qUVYo5MOqLcqBFWgbUix7/fea482e2a30a634ee8da1a66bbd812bd/Union.svg" />
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
                <TextTag>12:22</TextTag>
                <ImgAuthor src="https://images.ctfassets.net/r0lccig03c53/22trzxbCuNJ1He0xKOhzyg/f6e14c85d4aa48bb03ea8e72b2f79b38/2020-06-25_15.36_1.png?h=32" />
              </ContainerAuthor>{' '}
            </UpContainer>
            <H3>
              Short title or primary message.{' '}
              <span style={{ color: 'rgba(255,255,255,0.59)' }}>
                Description or short secondary message.
              </span>
              <PlusContainer>
                <Plus src="https://images.ctfassets.net/r0lccig03c53/qUVYo5MOqLcqBFWgbUix7/fea482e2a30a634ee8da1a66bbd812bd/Union.svg" />
              </PlusContainer>
            </H3>
          </Card>
        </GridContainer>
        <CardFullWidth currentHeight={currentHeight}>
          <UpContainer>
            <TextTag>Tag - Tag</TextTag>
            <ContainerAuthor>
              <TextTag>12:22</TextTag>
              <ImgAuthor src="https://images.ctfassets.net/r0lccig03c53/7ewg9PVmotCo6UVohZ2LB7/67c30a590bb8a06276079d804b6e649d/Rectangle_240644582.svg?h=32" />
            </ContainerAuthor>{' '}
          </UpContainer>
          <H3ForFullWidthCard>
            Short title or primary message.{' '}
            <span style={{ color: 'rgba(255,255,255,0.59)' }}>
              Description or short secondary message
            </span>{' '}
            <PlusContainer>
              <Plus src="https://images.ctfassets.net/r0lccig03c53/qUVYo5MOqLcqBFWgbUix7/fea482e2a30a634ee8da1a66bbd812bd/Union.svg" />
            </PlusContainer>
          </H3ForFullWidthCard>
        </CardFullWidth>
      </Relative>
    </>
  );
};

export default IndexPage;
