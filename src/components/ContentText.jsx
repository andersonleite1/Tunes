import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  max-width: 720px;
`;

const Header = styled.h4`
  font-size: 1.5rem;
  color: #3d495c;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #3d495c;
`;

export default function ContentText({ title, description }) {
  return (
    <Div>
      <Header>{ title }</Header>
      <Paragraph>{ description }</Paragraph>
    </Div>
  );
}

ContentText.defaultProps = { description: '' };

ContentText.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
