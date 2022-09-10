import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import styled from 'styled-components';

import icon from '../images/avatar.png';

const Section = styled.section`
  margin: auto;
  width: 12rem;
  height: 2.3rem;
  background-color: white;
  border-radius: 5rem;
  cursor: pointer;
`;

const Avatar = styled.img`
  width: 2.3rem;
  max-width: 100%;
  border-radius: 50%;
`;

const Name = styled.span`
  color: #111111;
  padding-right: 1rem;
  margin-left: 0.5rem;
`;

export default function IconProfile({ avatar, username }) {
  const navigate = useNavigate();

  return (
    <Section onClick={ () => navigate('/profile') }>
      <Avatar src={ !avatar ? icon : avatar } alt="Avatar" />
      <Name>{ username }</Name>
    </Section>
  );
}

IconProfile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

IconProfile.defaultProps = { avatar: undefined };
