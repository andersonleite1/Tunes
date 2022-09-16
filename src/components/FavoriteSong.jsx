import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';

import { addSong, removeSong } from '../services/favoriteSongsAPI';

const CheckboxContainer = styled.div`
  font-size: ${(props) => (props.checked ? '1.55rem' : '1.5rem')};
  margin-left: 1.5rem;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export default function FavoriteSong({ music, isChecked = false }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = async () => {
    setChecked(!checked);
    if (!checked) await addSong(music);
    if (checked) await removeSong(music);
  };

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  return (
    <CheckboxContainer
      checked={ checked }
      onClick={ handleCheckboxChange }
    >
      <HiddenCheckbox
        onChange={ handleCheckboxChange }
        checked={ checked }
      />
      { checked ? <FcLike /> : <FcLikePlaceholder /> }
    </CheckboxContainer>
  );
}

FavoriteSong.defaultProps = {
  isChecked: false,
};

FavoriteSong.propTypes = {
  music: PropTypes.shape({
    previewUrl: PropTypes.string,
    trackCensoredName: PropTypes.string,
  }).isRequired,
  isChecked: PropTypes.bool,
};
