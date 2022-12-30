import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const Header = styled.h4`
  font-size: 1.3rem;
  color: #3d495c;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Span = styled.span`
  display: block;
  font-size: 0.9rem;
  font-weight: 400;
  font-style: italic;
  color: #3d495c;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  margin-bottom: 0.3rem;
  padding: 0.7rem;
  width: 25rem;
  height: 2.7rem;
  font-size: 1rem;
  background-color: #fafafa;
  outline: 0;
  border-color: #4e4e4e;
  border-width: 0 0 1px;
  &:focus {
    border-color: #023031;
    border-width: 0 0 2px;
    background-color: #f0f2f5;
  }
`;

export default function InputInfo(props) {
  const { title, description, placeholder, value, stateChanger } = props;
  return (
    <div>
      <Header>{ title }</Header>
      <Span>{ description }</Span>
      <Input
        type="text"
        placeholder={ placeholder }
        value={ value }
        onChange={ ({ target }) => stateChanger(target.value) }
      />
    </div>
  );
}

InputInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  stateChanger: PropTypes.func.isRequired,
};
