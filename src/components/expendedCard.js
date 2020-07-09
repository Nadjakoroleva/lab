import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Tag from './tag';

const Container = styled.div`
  background: white;
  width: 100%;
  height: 100vh;

  margin-bottom: 80px;
  @media (min-width: 768px) {
    height: 110vh;
    min-height: 1500px;
  }
  @media (min-width: 1280px) {
    min-height: 1500px;
  }
`;

const TagContainer = styled.div`
  // padding-top: 64px;
  display: flex;
  flex-wrap: wrap;
  background: white;
  flex: 0 0 auto;
  background-color: #f8f8f8;
  padding: 10px 20px;
  @media (min-width: 768px) {
    padding: 24px 48px;
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 1380px) {
  }
`;

const ImageContainer = styled.div`
  height: 60%;
  background: ${({ bgForImageContainer }) => `${bgForImageContainer}`};
  display: flex;
  @media (min-width: 1380px) {
    height: 70%;
  }
`;

const Img = styled.img`
  object-fit: ${({ objectFitProp }) => `${objectFitProp}`};
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
`;

const Text = styled.p`
  color: #0f1011;
  flex: 1 0 auto;
  font-size: 24px;
  line-height: 32px;
  padding-top: 20px;
  padding-left: 20px;
  @media (min-width: 768px) {
    width: 80%;
    padding-top: 48px;
    padding-left: 48px;
  }
  @media (min-width: 1380px) {
    width: 60%;
  }
  @media (min-width: 1680px) {
    width: 48%;
  }
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  color: #0f1011;
  // padding: 48px 48px 24px 48px;
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
  padding-left: 20px;
  @media (min-width: 768px) {
    padding-left: 48px;
  }
`;

const Avatar = styled.img`
  height: 32px;
  width: 32px;
  margin-right: 20px;
`;

const ExpendedCard = ({ src, bgForImageContainer, objectFitProp }) => {
  const [currentHeightOfImage, setCurrentHeightOfImage] = useState('100%');
  const image = useRef(null);
  useEffect(() => {
    console.log(image.current.offsetHeight);
  });
  return (
    <>
      <Container>
        <ImageContainer bgForImageContainer={bgForImageContainer}>
          <Img
            ref={image}
            currentHeightOfImage={currentHeightOfImage}
            src={src}
            objectFitProp={objectFitProp}
          />
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
              <Avatar src="https://images.ctfassets.net/r0lccig03c53/22trzxbCuNJ1He0xKOhzyg/f6e14c85d4aa48bb03ea8e72b2f79b38/2020-06-25_15.36_1.png?h=32" />
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
