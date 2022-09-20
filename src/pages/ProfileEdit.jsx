import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AvatarIcon from '../components/AvatarIcon';
import Header from '../components/Header';
import icon from '../images/avatar.png';
import InputInfo from '../components/InputInfo';
import TextAreaInfo from '../components/TextAreaInfo';

import { updateUser } from '../services/userAPI';
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
  align-items: end;
`;

const Input = styled.input`
  margin-left: 1rem;
  margin-bottom: 0.3rem;
  padding: 0.5rem;
  width: 18rem;
  height: 2.7rem;
  font-size: 0.9rem;
  border: 1px solid #c4c4c4;
`;

const StyledButton = styled(Button)`
  margin: 2rem 0;
`;

export default function ProfileEdit() {
  const [isLoading, setLoading] = useState(true);
  const [isSaving, setSaving] = useState(false);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleUpdateUser = async () => updateUser({ name, email, image, description });

  const handleClick = () => setSaving(true);

  useEffect(() => {
    if (isSaving) {
      handleUpdateUser().then(() => {
        setSaving(false);
        return navigate('/profile');
      });
    }
  }, [isSaving]);

  useEffect(() => {
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
        <Section>
          <BoxInline>
            <AvatarIcon url={ !image ? icon : image } />
            <Input
              type="url"
              placeholder="Insira um link"
              value={ image }
              onChange={ ({ target }) => setImage(target.value) }
            />
          </BoxInline>
          <InputInfo
            title="Nome"
            description="Fique a vontade para usar seu nome social"
            placeholder="Insira seu nome"
            value={ name }
            stateChanger={ setName }
          />
          <InputInfo
            title="E-mail"
            description="Escolha um e-mail que consulte diariamente"
            placeholder="user@mail.com"
            value={ email }
            stateChanger={ setEmail }
          />
          <TextAreaInfo
            title="Descrição"
            placeholder="Sobre mim"
            value={ description }
            stateChanger={ setDescription }
          />
          <Stack gap={ 2 } className="col-md-5 mx-auto">
            <StyledButton
              variant="primary"
              size="lg"
              disabled={ isSaving }
              onClick={ !isSaving ? handleClick : null }
            >
              {isSaving ? 'Salvando…' : 'Salvar'}
            </StyledButton>
          </Stack>
        </Section>
      )}
    </Div>
  );
}
