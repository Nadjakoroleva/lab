import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Tag from './tag';

const Container = styled.div`
  background: white;
  width: 100%;
  height: 1000px;
  margin-bottom: 50px;
`;

const Img = styled.img`
  object-fit: contain;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
`;

const TagContainer = styled.div`
  padding-top: 64px;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 48px;
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
    padding-left: 48px;
  }
`;

const ImageContainer = styled.div`
  height: 50%;
  background: #0f1011;
  display: flex;
  padding: 96px;
`;

const Text = styled.p`
  color: #0f1011;
  padding: 48px;
  font-size: 24px;
  line-height: 32px;
  width: 55%;
  flex: 1 0 auto;
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  // min-height: 100%;
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
            Jessica Vance, a Prototype Engineer at Arrival, began life in a
            small village in County Donegal, Ireland but knew she was destined
            for bigger things. Now she is striving to make the planet a better
            place, leaving a legacy for future generations.
          </Text>
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
            <Tag
              name={'ARTEM&nbsp;TARADASH'}
              defaultColor={'rgba(35,38,44,0.06)'}
              color={'#23262C'}
            />
            <Tag
              name={'brand'}
              defaultColor={'rgba(35,38,44,0.06)'}
              color={'#23262C'}
            />
            <Tag
              name={'nadja&nbsp;koroleva'}
              defaultColor={'rgba(35,38,44,0.06)'}
              color={'#23262C'}
            />
            <Tag
              name={'lena&nbsp;shesterova'}
              defaultColor={'rgba(35,38,44,0.06)'}
              color={'#23262C'}
            />
            <Tag
              name={'connectivity'}
              defaultColor={'rgba(35,38,44,0.06)'}
              color={'#23262C'}
            />
          </TagContainer>
        </DescContainer>
      </Container>
    </>
  );
};

export default ExpendedCard;
