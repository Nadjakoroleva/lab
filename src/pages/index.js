import React, { useEffect, useState, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { GlobalStyle } from '../components/globalStyle';
import Tag from '../components/tag';
import HorizontalCard from '../components/card';
import FullWidthCard from '../components/fullWidthCard';
import '../components/fonts.css';

const Container = styled.div`
  color: #f3f3f3;
  padding-left: 64px;
  padding-right: 64px;
  padding-top: 64px;
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
  width: 45%;
  padding-bottom: 48px;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: rgba(243, 243, 243, 0.16);
  margin-bottom: 32px;
`;

const Desc = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 128px;
`;

const H2 = styled.h2`
  font-size: 24px;
  line-height: 32px;
  width: 50%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 32px;
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
          <Tag name={'ARTEM TARADASH'} />
          <Tag name={'brand'} />
          <Tag name={'nadja koroleva'} />
          <Tag name={'lena shesterova'} />
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
        />
        <HorizontalCard
          src={
            'https://images.ctfassets.net/r0lccig03c53/4K3fi7jYXuAwtLgbUX5A3E/8bac474b7f6d601431d6725ce5a90425/Apple_iPad_Pro_11__Silver_-_Landscape_2.jpg'
          }
        />
        <HorizontalCard
          src={
            'https://images.ctfassets.net/r0lccig03c53/Yz4LqJsPozpkvhAP0ABky/bae6291ac9a0f39d1f84fcb8ed6deeed/Apple_iPad_Pro_11__Silver_-_Landscape_3.jpg'
          }
        />
        <HorizontalCard
          src={
            'https://images.ctfassets.net/r0lccig03c53/5T9jsxBYHX8k4rBF02WG8a/cda88a7d7c121c4b84a2b2116a7d2212/__________________________2020-05-18____11.36_1.jpg'
          }
        />
        <FullWidthCard
          src={
            'https://images.ctfassets.net/r0lccig03c53/2dnacQi4IIOtlJAyIUxVrA/fbcb1c588cdf52917b0dcbe9ed5021d3/__________________________2020-05-20____12.13_1.jpg'
          }
        />
        <HorizontalCard
          src={
            'https://images.ctfassets.net/r0lccig03c53/74VHuj4XMToKQI9wigNDhF/284b8c01e944c25016c956e2decc9c7f/__________________________2020-05-20____17.46_1.jpg'
          }
        />
        <HorizontalCard
          src={
            'https://images.ctfassets.net/r0lccig03c53/4SD90iq0AfUVzv06lrKDcu/23e0a3796ea4a8fb1f077e39fd96f33b/Apple_iPad_Pro_11__Silver_-_Landscape_4.jpg'
          }
        />
        <FullWidthCard
          src={
            'https://images.ctfassets.net/r0lccig03c53/4uM9HHoljSFYMQxbhnLU11/c4fa376034e426656ab105b4bb0b1d86/Apple_iPad_Pro_11__Silver_-_Landscape_5.jpg'
          }
        />
      </CardContainer>
    </>
  );
};

export default IndexPage;
