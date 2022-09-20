import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const Header = styled.h4`
  font-size: 1.3rem;
  color: #3d495c;
  margin-top: 1.5rem;
`;

const TextArea = styled.textarea`
  margin-bottom: 0.3rem;
  padding: 0.7rem;
  width: 25rem;
  height: 6rem;
  font-size: 1rem;
  outline: 0;
  border-width: 0 0 1px;
  background-color: #fafafa;
  border-color: #4e4e4e;
  &:focus {
    border-color: #023031;
    border-width: 0 0 2px;
    background-color: #f0f2f5;
  }
`;

export default function TextAreaInfo(props) {
  const { title, placeholder, value, stateChanger } = props;
  return (
    <div>
      <Header>{ title }</Header>
      <TextArea
        type="text"
        placeholder={ placeholder }
        value={ value }
        onChange={ ({ target }) => stateChanger(target.value) }
      />
    </div>
  );
}

TextAreaInfo.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  stateChanger: PropTypes.func.isRequired,
};
