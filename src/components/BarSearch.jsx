import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

const ContainerForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
`;

const buttonStyle = { marginBottom: '1rem', marginLeft: '1rem' };

export default function BarSearch() {
  const [artistName, setArtistName] = useState('');

  const isNameValid = (name) => name.length > 1;

  const handleClick = async () => {
    const data = await searchAlbumsAPI(artistName);
    localStorage.setItem('albums', JSON.stringify(data));
    setArtistName('');
  };

  return (
    <ContainerForm>
      <Form.Group className="mb-3" controlId="formArtistName">
        <Form.Control
          type="text"
          placeholder="Nome do Artista"
          value={ artistName }
          onChange={ ({ target }) => setArtistName(target.value) }
        />
      </Form.Group>
      <Button
        variant="primary"
        type="button"
        style={ buttonStyle }
        disabled={ !isNameValid(artistName) }
        onClick={ handleClick }
      >
        Procurar
      </Button>
    </ContainerForm>
  );
}
