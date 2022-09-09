import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';

import { createUser } from '../services/userAPI';

import logo from '../images/logo.png';

const Image = styled.img`
    max-width: 100%;
    width: 14rem;
    margin: 0 auto;
  `;

const Div = styled.div`
    background-color: #fafafa;
    width: 100vw;
    height: 100vh;
  `;

const rowStyle = {
  margin: '0 auto',
  marginTop: '4rem',
  maxWidth: '35rem',
  borderRadius: '20px',
  boxShadow: ' 2px 3px #b8b8b88d',

};

const formStyle = {
  padding: '4rem',
  backgroundColor: 'white',
  borderRadius: '20px',
};

const buttonStyle = { width: '100%' };

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const isNameValid = (name) => name.length > 2;

  const handleClick = async () => {
    await createUser({ name: username });
    navigate('/search');
  };

  return (
    <Div data-testid="page-login">
      <Row>
        <Image src={ logo } alt="Logo Trybe Tunes" />
      </Row>
      <Row style={ rowStyle }>
        <Form style={ formStyle }>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entre com nome"
              value={ username }
              onChange={ ({ target }) => setUsername(target.value) }
            />
          </Form.Group>
          <Button
            variant="primary"
            type="button"
            style={ buttonStyle }
            disabled={ !isNameValid(username) }
            onClick={ handleClick }
          >
            Entrar
          </Button>
        </Form>
      </Row>
    </Div>
  );
}
