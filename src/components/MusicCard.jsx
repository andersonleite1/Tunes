import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import FavoriteSong from './FavoriteSong';

const Card = styled.div`
  border-top: 1px solid #e1e5eb;
  padding: 1.5rem 0;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.p`
  color: #001813;
  letter-spacing: 1px;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
`;

const Image = styled.img`
  width: 3rem;
  border-radius: 1.5rem;
  margin-right: 2rem;
  margin-right: ${(props) => (props.showImage ? '4rem' : '1rem')};

`;

export default function MusicCard({ music, showImage, isFavorite }) {
  const card = () => (
    <Card>
      <Name>{ music.trackCensoredName }</Name>
      <Items>
        {showImage && (
          <Image
            src={ music.artworkUrl100 }
            alt={ music.trackCensoredName }
          />
        )}
        <audio data-testid="audio-component" src={ music.previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
        <FavoriteSong
          music={ music }
          isChecked={ isFavorite }
        />
      </Items>
    </Card>
  );

  return (
    <section>
      { music.trackCensoredName && card() }
    </section>

  );
}

MusicCard.defaultProps = {
  showImage: false,
  isFavorite: false,
};

MusicCard.propTypes = {
  music: PropTypes.shape({
    previewUrl: PropTypes.string,
    trackCensoredName: PropTypes.string,
    artworkUrl100: PropTypes.string,
  }).isRequired,
  showImage: PropTypes.bool,
  isFavorite: PropTypes.bool,
};
