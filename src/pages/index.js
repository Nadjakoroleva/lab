import React, { useEffect, useState, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { GlobalStyle } from '../components/globalStyle';
import Tag from '../components/tag';
import HorizontalCard from '../components/card';
import CardBg from '../components/cardBg';
import FullWidthCard from '../components/fullWidthCard';
import '../components/fonts.css';

const Container = styled.div`
  color: #f3f3f3;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  max-width: 1680px;
  margin: 0 auto;
  @media (min-width: 1024px) {
    padding-left: 48px;
    padding-right: 48px;
  }
  @media (min-width: 1280px) {
    padding-left: 64px;
    padding-right: 64px;
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  padding-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  max-width: 1680px;
  margin: 0 auto;
  @media (min-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  }
  @media (min-width: 768px) {
    padding-left: 24px;
    grid-template-columns: repeat(auto-fit, minmax(642px, 1fr));
  }
  @media (min-width: 1024px) {
    padding-left: 24px;
    grid-template-columns: repeat(auto-fit, minmax(476px, 1fr));
  }
  @media (min-width: 1280px) {
    padding-left: 32px;
  }
  @media (min-width: 1320px) {
    grid-template-columns: repeat(auto-fit, minmax(642px, 1fr));
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
          <Tag name={'arrival.com'} />
          <Tag name={'brand'} />
          <Tag name={'connectivity'} />
          <Tag name={'ARTEM&nbsp;TARADASH'} />
          <Tag name={'brand'} />
          <Tag name={'nadja&nbsp;koroleva'} />
          <Tag name={'lena&nbsp;shesterova'} />
          <Tag name={'connectivity'} />
        </TagContainer>
        <Divider />
        <Desc>
          <H2>Design Lab</H2>
          <H2>
            Jessica Vance, a Prototype Engineer at Arrival, began life in a
            small village in County Donegal, Ireland but knew she was destined
            for bigger things. Now she is striving to make the planet a better
            place, leaving a legacy for future generations.
          </H2>
        </Desc>
      </Container>
      <CardContainer>
        <HorizontalCard
          src={
            'https://images.ctfassets.net/r0lccig03c53/W4fdiBa5wG9IZh1H30mYM/3e5f83b93049061dcf3671ff1ab0bd4e/__________________________2020-05-18____12.26_1.jpg'
          }
          srcSet={
            'https://images.ctfassets.net/r0lccig03c53/57CZhkXTxJGtrw5zbIK3a/501f0767616ed77c03f507279f096b4a/1x2x_1.jpg 2x'
          }
        />
        <HorizontalCard
          src={
            'https://images.ctfassets.net/r0lccig03c53/6WacoMsTi8ggCOVuUq6W5w/70483a7d57f6d3303039b2ec114b90c0/2-1x.png'
          }
          srcSet={
            'https://images.ctfassets.net/r0lccig03c53/1GfuJRaGy6BqZiuMORhgtb/0a16be7c7152dfd2fc85ce6b8b084c19/2-2x.png 2x'
          }
        />
        <CardBg />
        <HorizontalCard
          src={
            'https://images.ctfassets.net/r0lccig03c53/6JGYDfr4uVgoqa5p3Wdfvd/4df7326398669bd3de7b8119bbe27a38/__________________________2020-05-26____17.31_1.svg'
          }
        />
      </CardContainer>
      <FullWidthCard
        src={
          'https://images.ctfassets.net/r0lccig03c53/21MO0tZlDPebyNDfSFeFeP/306b60ab02f0c0e360273ad4f7d75298/4x1x.jpg'
        }
        srcSet={
          'https://images.ctfassets.net/r0lccig03c53/3htYRjgQqCHI62sL0EX0no/cb78249f3eea66b19c370cae2e97720f/4x2x.jpg 2x'
        }
      />
      <CardContainer>
        <HorizontalCard
          src={
            'https://images.ctfassets.net/r0lccig03c53/1VdUWGLywceAMoqGnRwyr2/dac93f22766294259ea7090a6b15b4dd/5x2x.jpg'
          }
          srcSet={
            'https://images.ctfassets.net/r0lccig03c53/baqlIiqdELBWOVnn73Gwh/6838b289970ee318e2387c290ccfdb01/5x2x.png 2x'
          }
        />
        <HorizontalCard
          src={
            'https://images.ctfassets.net/r0lccig03c53/2NN29KhY190ZeZ83ZtYjwh/c4a6195c57a15608b83c37b564a6e6ec/6x1x.png'
          }
          srcSet={
            'https://images.ctfassets.net/r0lccig03c53/baqlIiqdELBWOVnn73Gwh/6838b289970ee318e2387c290ccfdb01/6x2x.png 2x'
          }
        />
      </CardContainer>
      <FullWidthCard
        src={
          'https://images.ctfassets.net/r0lccig03c53/4KxRFvBRHK2e2mE88GnvIK/3dfb184915288de1858e91681daecb60/7x1x.png'
        }
        srcSet={
          'https://images.ctfassets.net/r0lccig03c53/40prqUyZTKFwRKePezv2AN/663f17b99fe487e5dc12523ddddbda98/7x2x.png 2x'
        }
      />
      <Footer />
    </>
  );
};

export default IndexPage;
