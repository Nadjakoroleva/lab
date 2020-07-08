import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Tag from './tag';

const Container = styled.div`
  background: white;
  width: 100%;
  height: 150vh;
  margin-bottom: 80px;
  @media (min-width: 768px) {
    height: 110vh;
  }
`;

const Img = styled.img`
  object-fit: contain;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
`;

const TagContainer = styled.div`
  // padding-top: 64px;
  display: flex;
  flex-wrap: wrap;
  background: white;
  flex: 0 0 auto;
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

const ImageContainer = styled.div`
  height: 60%;
  background: #0f1011;
  display: flex;
  padding: 0 32px;
  @media (min-width: 1380px) {
    height: 70%;
  }
`;

const Text = styled.p`
  color: #0f1011;
  flex: 1 0 auto;
  font-size: 24px;
  line-height: 32px;

  @media (min-width: 768px) {
    width: 80%;
  }
  @media (min-width: 1380px) {
    width: 60%;
  }
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  color: #0f1011;
  padding: 48px 48px 24px 48px;
  @media (min-width: 1380px) {
    height: 30%;
  }
`;

const Author = styled.div`
  font-family: 'Arrival Mono';
  font-size: 11.25px;
  line-height: 18px;
  text-transform: uppercase;
  color: #85878a;
  padding-bottom: 32px;
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  height: 32px;
  width: 32px;
  margin-right: 20px;
`;

const ExpendedCard = ({ src }) => {
  return (
    <>
      <Container>
        <ImageContainer>
          <Img src={src} />
        </ImageContainer>
        <DescContainer>
          <Text>
            It is simple but powerful. It didn’t have the same level of
            interactivity as the WorldWideWeb browser, but the fact that it
            could be run on any machine meant that the web was now accessible to
            everyone.
          </Text>
          <div>
            <Author>
              <Avatar src="https://images.ctfassets.net/r0lccig03c53/7ewg9PVmotCo6UVohZ2LB7/67c30a590bb8a06276079d804b6e649d/Rectangle_240644582.svg?h=32" />
              <div>
                by Alexander Lovyagin - 15 min ago - london, uk - expires on
                12.10
              </div>
            </Author>
            <TagContainer>
              <Tag
                name={'arrival.com'}
                defaultColor={'rgba(35,38,44,0.06)'}
                color={'#23262C'}
              />
              <Tag
                name={'brand'}
                defaultColor={'rgba(35,38,44,0.06)'}
                color={'#23262C'}
              />
              <Tag
                name={'connectivity'}
                defaultColor={'rgba(35,38,44,0.06)'}
                color={'#23262C'}
              />
            </TagContainer>
          </div>
        </DescContainer>
      </Container>
    </>
  );
};

export default ExpendedCard;
