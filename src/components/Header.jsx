import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { getUser } from '../services/userAPI';

import logo from '../images/logo-white.png';
import IconProfile from './IconProfile';
import Loading from './Loading';

const HeaderTop = styled.header`
  width: 100vw;
  min-height: 9vh;
  background-color: #023031;
`;

const iconProfileStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'end',
};

const Image = styled.img`
  width: 7rem;
  max-width: 100%;
`;

export default function Header() {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const { name, image } = await getUser();
      setUsername(name);
      setAvatar(image);
      setIsLoading(false);
    };

    fetchUserData();
  }, []);

  const data = () => (
    <HeaderTop>
      <Container>
        <Row>
          <Col xs lg="2">
            <Image src={ logo } alt="Logo Trybe Tunes" />
          </Col>
          <Col xs lg="8" />
          <Col xs lg="2" style={ iconProfileStyle }>
            <IconProfile username={ username } avatar={ avatar } />
          </Col>
        </Row>
      </Container>
    </HeaderTop>);

  return (
    <div>
      { isLoading ? <Loading /> : data() }
    </div>
  );
}
