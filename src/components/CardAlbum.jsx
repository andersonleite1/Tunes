import React from 'react';
import { PropTypes } from 'prop-types';
import { Card, Col, NavLink } from 'react-bootstrap';

export default function CardAlbum({ image, title, artist, releaseDate, id }) {
  const timestamp = Date.parse(releaseDate);
  const date = new Date(timestamp);
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  return (
    <Col>
      <NavLink href={ `/album/${id}` }>
        <Card style={ { textDecoration: 'none' } }>
          <Card.Img variant="top" src={ image } />
          <Card.Body>
            <Card.Title>{ title }</Card.Title>
            <Card.Text>
              { artist }
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Data de lançamento:
              {' '}
              { formattedDate }
            </small>
          </Card.Footer>
        </Card>
      </NavLink>
    </Col>
  );
}

CardAlbum.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
