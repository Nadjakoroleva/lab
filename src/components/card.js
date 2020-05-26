import React from 'react';
import styled, { keyframes } from 'styled-components';

const CardContainer = styled.div`
  width: 642px;
  height: 720px;
  background-color: #000000;
  padding: 28px 32px;
  margin-bottom: 32px;
  margin-right: 32px;
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

const Card = () => {
  return (
    <>
      <CardContainer>
        <TagContainer>
          <Tag>Ui motion - sales master - by LENA SHESTEROVA</Tag>
          <Tag>15 min ago</Tag>
        </TagContainer>
      </CardContainer>
    </>
  );
};

export default Card;
