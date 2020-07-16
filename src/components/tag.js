import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

const Container = styled.button`
  background-color: ${({ isClicked, defaultColor }) =>
    isClicked ? '#f3f3f3' : `${defaultColor}`};
  transition: background-color 0.3s cubic-bezier(0.76, 0, 0.24, 1),
    width 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  border: none;
  padding: 4px 12px 3px 12px;
  margin-left: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 28px;
  width: 100px;
  border-radius: 2px;
  width: ${({ isClicked, currentWidth, newWidth }) =>
    isClicked ? `${newWidth}px` : `${currentWidth}px`};
  width: 120px;
`;

const Text = styled.div`
  font-family: 'Arrival Mono';
  width: max-content;
  letter-spacing: 0.07em;
  font-size: 11px;
  line-height: 18px;
  text-transform: uppercase;
  transition: color 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  color: ${({ isClicked, color }) => (isClicked ? '#23262C' : `${color}`)};
`;

const opacity = keyframes`
0% {
  opacity: 0;
  transform: scale(0);
}
100% {
  opacity: 1;
  transform: scale(1);
}
`;
const Img = styled.img`
  transition: opacity 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  display: ${({ isClicked }) => (isClicked ? 'block' : 'none')};
  padding-bottom: 2px;
  // padding-left: 10px;
  animation: ${({ isClicked }) =>
    isClicked
      ? css`
          ${opacity} 300ms linear forwards
        `
      : ''};
`;

const Tag = ({ name, defaultColor, color }) => {
  const [isClicked, setIsClicked] = useState(true);
  const [currentWidth, setCurrentWidth] = useState('auto');
  const tagElement = useRef(null);
  const newWidth = currentWidth + 20;
  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };
  useEffect(() => {
    setCurrentWidth(tagElement.current.offsetWidth);
  }, []);

  return (
    <>
      <Container
        currentWidth={currentWidth}
        ref={tagElement}
        newWidth={newWidth}
        isClicked={isClicked}
        onClick={handleClick}
        defaultColor={defaultColor}
      >
        <Text
          isClicked={isClicked}
          dangerouslySetInnerHTML={{ __html: name }}
          color={color}
        />
        <Img
          isClicked={isClicked}
          src="https://images.ctfassets.net/r0lccig03c53/4eEUWUbTwf6gwKOp2OYDxy/b2690adff8155fb435d542b4b44150cb/Union.svg?h=12"
        />
      </Container>
    </>
  );
};

export default Tag;
