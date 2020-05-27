import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  background-color: ${({ isClicked }) =>
    isClicked ? '#f3f3f3' : 'rgba(243, 243, 243, 0.16)'};
  transition: background-color 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  width: max-content;
  padding: 4px 12px 3px 12px;
  margin-left: 4px;
  margin-top: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 28px;
`;

const Text = styled.div`
  font-family: 'Arrival Mono';
  width: max-content;
  letter-spacing: 0.06em;
  font-size: 11px;
  line-height: 18px;
  text-transform: uppercase;
  transition: color 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  color: ${({ isClicked }) => (isClicked ? '#23262C' : '#f3f3f3')};
`;

const Img = styled.img`
  height: ${({ isClicked }) => (isClicked ? '12px' : '0')};
  display: ${({ isClicked }) => (isClicked ? 'block' : 'none')};
  padding-bottom: 2px;
  padding-left: 10px;
`;

const Tag = ({ name }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  return (
    <>
      <Container isClicked={isClicked} onClick={handleClick}>
        <Text
          isClicked={isClicked}
          dangerouslySetInnerHTML={{ __html: name }}
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
