import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Div = styled.div`
    background-color: #fafafa;
    width: 100vw;
    height: 100vh;
  `;

export default function Search() {
  return (
    <Div data-testid="page-search">
      <Header />
    </Div>
  );
}
