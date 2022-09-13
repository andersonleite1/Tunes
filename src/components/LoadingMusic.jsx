import React from 'react';
import styled from 'styled-components';
import loadingGif from '../images/loading.gif';

const Div = styled.div`
  width: 80vw;
  display: flex;
`;

const Image = styled.img`
  margin: auto;
  width: 12rem;
  max-width: 100%;
  border-radius: 50%;
`;

export default function LoadingMusic() {
  return (
    <Div>
      <Image src={ loadingGif } alt="Carregando" />
    </Div>
  );
}
