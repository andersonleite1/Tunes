import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';

import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import simulateNetworkRequest from '../services/simulateRequest';
import LoadingCycle from '../components/LoadingCycle';

const Div = styled.div`
  background-color: #fafafa;
  height: 100vh;
  overflow-x: hidden;
`;

const Title = styled.h3`
  color: #001813;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 1px;
  margin: 7rem 0 2.3rem 0;
`;

export default function Favorites() {
  const [musics, setMusics] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchFavoritesSongs = async () => {
    const songs = await getFavoriteSongs();
    setMusics(songs);
  };

  useEffect(() => {
    fetchFavoritesSongs();
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  return (
    <Div>
      <Header />
      { isLoading ? <LoadingCycle /> : (
        <Container>
          <Row>
            <Title>Músicas favoritas:</Title>
          </Row>
          <Row>
            {
              musics.map((music) => (
                <MusicCard
                  key={ music.trackId }
                  music={ music }
                  showImage="true"
                  isFavorite="true"
                />
              ))
            }
          </Row>
        </Container>
      )}
    </Div>
  );
}
