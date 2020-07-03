import React, { useEffect, useState, useRef } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import Tag from '../components/tag';

import { GlobalStyle } from '../components/globalStyle';

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px 20px;
  @media (min-width: 768px) {
    padding: 32px;
  }
  @media (min-width: 1024px) {
    padding: 48px;
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
    padding: 75px 32px 32px 32px;
  }
  @media (min-width: 1024px) {
    padding: 75px 48px 32px 48px;
  }
`;

const Link = styled.div`
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
    padding: 32px 32px 96px 32px;
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
  @media (min-width: 1380px) {
    margin: 0 auto;
    padding-left: 0;
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
    margin-left: 24px;
    margin-right: 24px;
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
    grid-gap: 24px;
    padding: 24px;
    margin: 0;
  }
`;

const Card = styled.div`
  position: relative;
  background: #161718;
  display: flex;
  flex-shrink: 0;
  margin-bottom: 20px;
  background-image: url('https://images.ctfassets.net/r0lccig03c53/3TbgFCahXyC07hJ8aF11t7/fad5f8a6155c736e5befb1e5559d24cb/content-image-covered.jpg');
  background-position: center;
  background-size: cover;
  max-height: ${({ currentHeight }) => `${currentHeight}px`};

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

const CardFullWidth = styled.div`
  background: #161718;
  margin-bottom: 80px;
  position: relative;
  display: flex;
  flex-shrink: 0;
  max-height: ${({ currentHeight }) => `${currentHeight}px`};
  max-width: 1308px;
  background-image: url('https://images.ctfassets.net/r0lccig03c53/5Wx5srxjZuUVLnYwyyUD2D/1d621a723283f91a2a064ae0d3e39684/content-image-covered-big.jpg');
  background-position: center;
  background-size: cover;
  &:before {
    content: '';
    display: block;
    height: 0;
    width: 0;
    padding-bottom: calc(642 / 642 * 100%);
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
    margin: 0 auto;
  }
`;

const TextTag = styled(Link)`
  color: rgba(255, 255, 255, 0.59);
  padding-top: 27px;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 768px) {
    padding-top: 27px;
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

const IndexPage = () => {
  const [currentHeight, setCurrentHeight] = useState(window.innerWidth * 1.25);
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newHeightForCard = window.innerWidth;
      setCurrentHeight(newHeightForCard * 1.25);
      console.log(currentHeight);
    };

    window.addEventListener('resize', updateWindowDimensions);

    return () => window.removeEventListener('resize', updateWindowDimensions);
  });

  const getCurrentValueOfTag = () => {
    console.log('click');
  };
  return (
    <>
      <GlobalStyle />
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
          <Img src="https://images.ctfassets.net/r0lccig03c53/7ewg9PVmotCo6UVohZ2LB7/67c30a590bb8a06276079d804b6e649d/Rectangle_240644582.svg?h=32" />
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
              src="https://images.ctfassets.net/r0lccig03c53/7ewg9PVmotCo6UVohZ2LB7/67c30a590bb8a06276079d804b6e649d/Rectangle_240644582.svg?h=32"
            />
            <Img src="https://images.ctfassets.net/r0lccig03c53/7ewg9PVmotCo6UVohZ2LB7/67c30a590bb8a06276079d804b6e649d/Rectangle_240644582.svg?h=32" />
            <Img src="https://images.ctfassets.net/r0lccig03c53/7ewg9PVmotCo6UVohZ2LB7/67c30a590bb8a06276079d804b6e649d/Rectangle_240644582.svg?h=32" />
          </FlexContainer>
        </Intro>
      </div>

      <MainDescription>
        <TextInside>
          Every idea worth discussion, every pixel matters. With these
          principles at the core, Design Lab meant to be a place to share design
          artefacts between Arrival teams, no matter how ready to be public they
          are.
        </TextInside>
      </MainDescription>

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
        <Card currentHeight={currentHeight}>
          <TextTag>Tag - Tag</TextTag>
          <H3>
            Short title or primary message.{' '}
            <span style={{ color: 'rgba(255,255,255,0.59)' }}>
              Description or short secondary message
            </span>
          </H3>
        </Card>
        <Card currentHeight={currentHeight}>
          <TextTag>Tag - Tag</TextTag>
          <H3>
            Short title or primary message.{' '}
            <span style={{ color: 'rgba(255,255,255,0.59)' }}>
              Description or short secondary message
            </span>
          </H3>
        </Card>
        <Card currentHeight={currentHeight}>
          <TextTag>Tag - Tag</TextTag>
          <H3>
            Short title or primary message.{' '}
            <span style={{ color: 'rgba(255,255,255,0.59)' }}>
              Description or short secondary message
            </span>
          </H3>
        </Card>
        <Card currentHeight={currentHeight}>
          <TextTag>Tag - Tag</TextTag>
          <H3>
            Short title or primary message.{' '}
            <span style={{ color: 'rgba(255,255,255,0.59)' }}>
              Description or short secondary message
            </span>
          </H3>
        </Card>
      </GridContainer>
      <CardFullWidth currentHeight={currentHeight}>
        <TextTag>Tag - Tag</TextTag>
        <H3>
          Short title or primary message.{' '}
          <span style={{ color: 'rgba(255,255,255,0.59)' }}>
            Description or short secondary message
          </span>
        </H3>
      </CardFullWidth>
    </>
  );
};

export default IndexPage;
