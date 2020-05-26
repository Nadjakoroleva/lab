import React from 'react';
import styled, { keyframes } from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
  height: 720px;
  background-color: #000000;
  padding: 28px 32px;
  margin-bottom: 32px;
  margin-right: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const Tag = styled.p`
  font-family: 'Arrival Mono';
  font-size: 11px;
  line-height: 18px;
  text-transform: uppercase;
  color: #f3f3f3;
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Frame = styled.div`
  width: 1060px;
  height: 448px;
  background-color: red;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itens: center;
`;
const Title = styled.p`
  font-size: 18px;
  line-height: 24px;
  width: 28%;
`;
const Img = styled.img`
  object-fit: contain;
  height: 100%;
`;

const Card = ({ src }) => {
  return (
    <>
      <CardContainer>
        <TagContainer>
          <Tag>Ui motion - sales master - by LENA SHESTEROVA</Tag>
          <Tag>15 min ago</Tag>
        </TagContainer>
        <Frame>
          <Img src={src} />
        </Frame>
        <Title>
          Blurred image for uploading blurred image Hello from the outside At
          least I can say{' '}
        </Title>
      </CardContainer>
    </>
  );
};

export default Card;
