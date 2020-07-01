import React, { useEffect, useState, useRef } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import Tag from '../components/tag';

import { GlobalStyle } from '../components/globalStyle';

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px 64px;
`;

const TagContainer = styled.div`
  display: flex;
`;

const Intro = styled.div`
  padding: 75px 64px 32px 64px;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.div`
  font-family: 'Arrival Mono';
  font-size: 11.25px;
  line-height: 18px;
  text-transform: uppercase;
`;

const Text = styled.div`
  width: 35%;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img``;

const MainDescription = styled.div`
  padding: 48px 64px 200px 64px;
  font-size: 24px;
  line-height: 32px;
  width: 42%;
`;

const UploadBtn = styled.div`
  background-color: #0c62f3;
  margin-left: 32px;
  margin-right: 32px;
  padding: 36px 32px;
`;
const AddArtifact = styled(Link)`
  padding-top: 104px;
  height: 64px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const GridContainer = styled.div`
  padding: 32px;
  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(max-content, 642px));
    grid-gap: 32px;
  }
`;

const Card = styled.div`
  background: blue;
  display: flex;
  flex-shrink: 0;
  margin-bottom: 24px;
  &:before {
    content: '';
    display: block;
    height: 0;
    width: 0;
    padding-bottom: calc(642 / 642 * 100%);
  }
  @media (min-width: 769px) {
    margin-bottom: 0;
  }
`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <div style={{ backgroundColor: '#1E1F22' }}>
        <Nav>
          {' '}
          <img src="https://images.ctfassets.net/r0lccig03c53/3KaYO3nazk30Esi1vvoq3Q/70b2277694b956b0abf674b99d703b3b/White.svg?h=16" />
          <TagContainer>
            {' '}
            <Tag
              name={'arrival.com'}
              defaultColor={'rgba(243, 243, 243, 0.16)'}
              color={'#f3f3f3'}
            />
            <Tag
              name={'hmi'}
              defaultColor={'rgba(243, 243, 243, 0.16)'}
              color={'#f3f3f3'}
            />
          </TagContainer>
          <img src="https://images.ctfassets.net/r0lccig03c53/7ewg9PVmotCo6UVohZ2LB7/67c30a590bb8a06276079d804b6e649d/Rectangle_240644582.svg?h=48" />
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
              style={{ paddingLeft: '24px' }}
              src="https://images.ctfassets.net/r0lccig03c53/7ewg9PVmotCo6UVohZ2LB7/67c30a590bb8a06276079d804b6e649d/Rectangle_240644582.svg?h=48"
            />
            <Img src="https://images.ctfassets.net/r0lccig03c53/7ewg9PVmotCo6UVohZ2LB7/67c30a590bb8a06276079d804b6e649d/Rectangle_240644582.svg?h=48" />
            <Img src="https://images.ctfassets.net/r0lccig03c53/7ewg9PVmotCo6UVohZ2LB7/67c30a590bb8a06276079d804b6e649d/Rectangle_240644582.svg?h=48" />
          </FlexContainer>
        </Intro>
      </div>
      <MainDescription>
        Every idea worth discussion, every pixel matters. With these principles
        at the core, Design Lab meant to be a place to share design artefacts
        between Arrival teams, no matter how ready to be public they are.
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
        <Card>hello</Card>
        <Card>hello</Card>
        <Card>hello</Card>
        <Card>hello</Card>
      </GridContainer>
    </>
  );
};

export default IndexPage;
