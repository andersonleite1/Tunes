import React, { useEffect, useState } from 'react';
import { Container, Button, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';
import AlbumNotFound from '../components/AlbumNotFound';
import CardAlbum from '../components/CardAlbum';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

const Div = styled.div`
    background-color: #fafafa;
    width: 100vw;
    height: 100vh;
  `;

const ContainerForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
  `;

const buttonStyle = { marginBottom: '1rem', marginLeft: '1rem' };

export default function Search() {
  const [artistName, setArtistName] = useState('');
  const [albums, setAlbums] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isShow, setShow] = useState(false);

  const isNameValid = (name) => name.length > 1;

  const handleClick = async () => {
    setLoading(true);
    const data = await searchAlbumsAPI(artistName);
    setAlbums(data);
    setLoading(false);
    setArtistName('');
  };

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      await handleClick();
    }
  };

  useEffect(() => {
    setShow(true);
  }, [isShow]);

  return (
    <Div data-testid="page-search">
      <Header />
      <Container>
        <ContainerForm>
          <Form.Group className="mb-3" controlId="formArtistName">
            <Form.Control
              type="text"
              placeholder="Nome do Artista"
              value={ artistName }
              onKeyDown={ handleKeyDown }
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
        { isLoading && <Loading /> }
        { !albums.length && !isLoading && <AlbumNotFound /> }
        <Row
          xs={ 1 }
          md={ 3 }
          className="g-4"
          style={ { marginTop: '2rem' } }
        >
          {
            albums.map((album) => (
              albums.length && <CardAlbum
                key={ album.collectionId }
                image={ album.artworkUrl100 }
                title={ album.collectionName }
                artist={ album.artistName }
                releaseDate={ album.releaseDate }
                id={ album.collectionId }
              />
            ))
          }
        </Row>
      </Container>
    </Div>
  );
}
