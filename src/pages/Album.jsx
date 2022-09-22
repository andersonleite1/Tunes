import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

const Div = styled.div`
    background-color: #fafafa;
    overflow: hidden;
  `;

const Image = styled.img`
  width: 15vw;
  border-radius: 10px;
  padding-right: 1rem;
`;

const AlbumName = styled.h2`
  font-size: 1.8rem;
  color: #023031;
  margin: 1rem 0.3rem;
`;

const ArtistName = styled.h2`
  font-size: 1rem;
  color: #023031;
  margin: 0 0.3rem;
  font-weight: 300;
  letter-spacing: 1px;
`;

export default function Album() {
  const location = useLocation();
  const [musics, setMusics] = useState([]);
  const [isShow, setShow] = useState(false);

  const fetchMusics = async (id) => {
    try {
      const data = await getMusics(id);
      setMusics(data);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(musics);
  useEffect(() => {
    const albumId = location.pathname.replace('/album/', '');
    fetchMusics(albumId);
  }, [location]);

  const musicsAlbum = (data) => (
    <Row>
      <Col xs lg="4" style={ { marginTop: '2rem' } }>
        <Image src={ data[0].artworkUrl100 } alt="" />
        <AlbumName>{ data[0].collectionName }</AlbumName>
        <ArtistName>{ data[0].artistName }</ArtistName>
      </Col>
      <Col xs lg="5">
        {
          data.map((music) => (
            <MusicCard
              key={ music.trackId }
              music={ music }
            />
          ))
        }
      </Col>
      <Col xs lg="3" />
    </Row>
  );

  return (
    <Div>
      <Header />
      <Container style={ { marginTop: '7rem' } }>
        { isShow && musicsAlbum(musics) }
      </Container>
    </Div>
  );
}
