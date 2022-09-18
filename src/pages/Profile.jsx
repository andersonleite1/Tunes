import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ContentText from '../components/ContentText';
import Header from '../components/Header';
import icon from '../images/avatar.png';

import { getUser } from '../services/userAPI';
import AvatarIcon from '../components/AvatarIcon';

import simulateNetworkRequest from '../services/simulateRequest';
import LoadingCycle from '../components/LoadingCycle';

const Div = styled.div`
  background-color: #fafafa;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

const Section = styled.section`
  display: table;
  margin: auto;
  margin-top: 5rem;
`;

const BoxInline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20rem;
  margin-bottom: 2rem;
`;

export default function Profile() {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);

  const fetchUserData = async () => {
    const userData = await getUser();
    setUser(userData);
  };

  useEffect(() => {
    fetchUserData();
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const navigate = useNavigate();

  return (
    <Div>
      <Header />
      { isLoading ? <LoadingCycle /> : (
        <Section>
          <BoxInline>
            <AvatarIcon url={ !user.image ? icon : user.image } />
            <Button
              variant="outline-primary"
              onClick={ () => navigate('/profile/edit') }
            >
              Editar perfil
            </Button>
          </BoxInline>
          <ContentText title="Nome" description={ user.name } />
          <ContentText title="E-mail" description={ user.email } />
          <ContentText title="Descrição" description={ user.description } />
        </Section>
      )}
    </Div>
  );
}
