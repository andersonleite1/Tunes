import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Div = styled.div`
    background-color: #fafafa;
    width: 100vw;
    height: 100vh;
  `;

export default function Profile() {
  return (
    <Div>
      <Header />
    </Div>
  );
}
