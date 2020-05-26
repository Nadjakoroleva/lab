import React from 'react';
import styled, { keyframes } from 'styled-components';

const CardContainer = styled.div`
  width: 642px;
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
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Frame = styled.div`
  width: 514px;
  height: 528px;
  background-color: #00000;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itens: center;
`;
const Title = styled.p`
  font-size: 18px;
  line-height: 24px;
  width: 70%;
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  ${CardContainer}:hover & {
    opacity: 1;
  }
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
