import React from 'react';
import styled from 'styled-components';
import loadingGif from '../images/loading-cycle.gif';

const Div = styled.div`
  width: 100vw;
  display: flex;
`;

const Image = styled.img`
  margin: 4rem auto;
  width: 8rem;
  max-width: 100%;
  border-radius: 50%;
`;

export default function LoadingCycle() {
  return (
    <Div>
      <Image src={ loadingGif } alt="Carregando" />
    </Div>
  );
}
