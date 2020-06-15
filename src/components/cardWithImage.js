import React, { useEffect, useState, useRef, useContext } from 'react';
import styled, { keyframes, css } from 'styled-components';
import ExpendedCards from './expendedCard';
import { store } from './store.js';

const blur = keyframes`
from {
    filter: blur(50px);
 }
 to {
     filter: blur(0px);
 }
`;

const scale = keyframes`
{
    from {transform: scale(1.5)}
    to {transform: scale(1)}
  }`;

const CardContainer = styled.div`
  position: relative;
  z-index: 1;
  min-height: 580px;
  background-color: #000000;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 20px;
  margin-right: 20px;
  @media (min-width: 768px) {
    min-height: 629px;
    margin-right: 24px;
    margin-top: 24px;
  }
  @media (min-width: 1280px) {
    min-height: 720px;
    margin-right: 32px;
    margin-bottom: 32px;
    margin-top: 0;
  }
  &:hover {
    box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.95);
  }
`;

const Tag = styled.p`
  font-family: 'Arrival Mono';
  letter-spacing: 0.06em;
  font-size: 11px;
  line-height: 18px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.59);
  opacity: 1;
  transition: opacity 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  @media (min-width: 1280px) {
    opacity: 0;
  }
  // ${CardContainer}:hover & {
  //   opacity: 1;
  // }
`;

const Date = styled(Tag)`
  padding-left: 28px;
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Frame = styled.div`
  width: 514px;
  height: 340px;
  overflow: hidden;
  background-color: #00000;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itens: center;
  @media (max-width: 1320px) {
    width: 428px;
    height: 437px;
  }
  @media (max-width: 1030px) {
    width: 380px;
  }
  @media (max-width: 480px) {
    width: 227px;
    height: 232px;
  }
`;
const Title = styled.p`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: #f8f8f8;
  opacity: 1;
  transition: opacity 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 80%;
  }
  @media (min-width: 1280px) {
    opacity: 0;
    width: 70%;
  }
  // ${CardContainer}:hover & {
  //   opacity: 1;
  // }
`;

const Img = styled.img`
  object-fit: contain;
  height: 100%;
  overflow: hidden;
  ${CardContainer}:hover & {
    animation: ${blur} 4s cubic-bezier(0.76, 0, 0.24, 1) forwards,
      ${scale} 4s cubic-bezier(0.76, 0, 0.24, 1) forwards;
  }
`;

const ExpendedCardsConatiner = styled.div`
  cursor: pointer;
  position: absolute;
  top: 8vh;
  right: 0;
  width: 90vw;
  height: 100%;

  z-index: ${({ isClicked }) => (isClicked ? `10` : ``)};
  opacity: ${({ isClicked }) => (isClicked ? 1 : 0)};
  transform: ${({ isClicked }) =>
    isClicked ? `translateY(0)` : `translateY(100px)`};
  transition: opacity 0.3s cubic-bezier(0.76, 0, 0.24, 1),
    transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
`;

const Modal = styled.div``;

const Card = ({}) => {
  const [isClicked, setIsClicked] = useState(false);
  const globalState = useContext(store);
  const { dispatch, state } = globalState;
  // const [isCardClicked, setIsCardClicked] = useState(state);

  // useEffect(() => {
  //   dispatch({ type: 'IS_CARD_CLICKED' });
  // }, []);
  console.log('CardInnerGlobalState', globalState.state);
  // console.log('isCardClicked', isCardClicked.isClicked);

  const handleClick = () => {
    setIsClicked(true);
    dispatch({ type: 'IS_CARD_CLICKED' });
    // setIsCardClicked(true);
  };

  const closeCards = () => {
    setIsClicked(false);
  };
  return (
    <>
      <ExpendedCardsConatiner isClicked={isClicked} onClick={closeCards}>
        <Modal isClicked={isClicked}>
          <ExpendedCards />
          <ExpendedCards />
          <ExpendedCards />
          <ExpendedCards />
          <ExpendedCards />
          <ExpendedCards />
          <ExpendedCards />
        </Modal>
      </ExpendedCardsConatiner>
      <CardContainer onClick={handleClick}>
        <TagContainer>
          <Tag>Ui motion - sales master - by LENA SHESTEROVA</Tag>
          <Date>15&nbsp;min&nbsp;ago</Date>
        </TagContainer>
        <Frame>
          <Img src="https://images.ctfassets.net/r0lccig03c53/p9ewUrhvGBNL0LJVfzDfM/a475c9306b7557a4898831dec8b31a69/Img.jpg" />
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
