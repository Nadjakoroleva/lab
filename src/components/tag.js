import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  background-color: rgba(243, 243, 243, 0.16);
  width: max-content;
  padding: 4px 12px 3px 12px;
  margin-left: 4px;
  margin-top: 4px;
`;

const Text = styled.div`
  font-family: 'Arrival Mono';
  font-size: 11px;
  line-height: 18px;
  text-transform: uppercase;
  color: #f3f3f3;
`;

const Tag = ({ name }) => {
  return (
    <>
      <Container>
        <Text>{name}</Text>
      </Container>
    </>
  );
};

export default Tag;
