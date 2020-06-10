import React, { useEffect, useState, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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

const Container = styled.div`
  color: #f3f3f3;
  background-color: #0f1011;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  max-width: 1680px;
  margin: 0 auto;
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

const CardContainer = styled.div`
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

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
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
            Jessica Vance, kfkfk a Prototype Engineer at Arrival, began life in
            a small village in County Donegal, Ireland but knew she was destined
            for bigger things. Now she is striving to make the planet a better
            place, leaving a legacy for future generations.
          </H2>
        </Desc>
      </Container>
      <CardContainer>
        <CardWithImage />
        <CardWithVideo videoSrc={VideoSrc3} />
        <CardWithVideo videoSrc={VideoSrc} />

        <CardWithComponents />
      </CardContainer>

      <FullWidthCard />

      <CardContainer>
        <CardWithVideo videoSrc={VideoSrc2} />
        <CardWithVideo videoSrc={VideoSrc5} />
      </CardContainer>

      <Footer />
    </>
  );
};

export default IndexPage;
