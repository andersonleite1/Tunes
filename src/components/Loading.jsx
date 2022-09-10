import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #023031;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 0.1rem;
`;

export default function Loading() {
  return (
    <Title>Carregando...</Title>
  );
}
