import React, { useEffect, useState } from 'react';
import { Container, Button, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';
import AlbumNotFound from '../components/AlbumNotFound';
import CardAlbum from '../components/CardAlbum';
import Header from '../components/Header';
import LoadingCycle from '../components/LoadingCycle';
import LoadingMusic from '../components/LoadingMusic';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import simulateNetworkRequest from '../services/simulateRequest';

const Div = styled.div`
    background-color: #fafafa;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
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
  const [isLoading, setLoading] = useState(true);
  const [isSearching, setSearching] = useState(false);

  const isNameValid = (name) => name.length > 1;

  const handleClick = async () => {
    setAlbums([]);
    setSearching(true);
    const data = await searchAlbumsAPI(artistName);
    setAlbums(data);
    setSearching(false);
    setArtistName('');
  };

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      await handleClick();
    }
  };

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  return (
    <Div data-testid="page-search">
      <Header />
      { isLoading ? <LoadingCycle /> : (
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
          { isSearching && <LoadingMusic /> }
          { !albums.length && !isSearching && <AlbumNotFound /> }
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
      )}
    </Div>
  );
}
