import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
`;

export default function AvatarIcon({ url }) {
  return (
    <Image src={ url } alt="Avatar" />
  );
}

AvatarIcon.propTypes = {
  url: PropTypes.string.isRequired,
};
