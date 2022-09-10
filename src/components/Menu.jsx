import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';

const linkStyle = {
  textAlign: 'center',
  backgroundColor: '#f0f2f5',
  color: '#2fc18c',
  fontSize: '1.3rem',
  fontWeight: '600',
};

const linkSelectedStyle = {
  textAlign: 'center',
  backgroundColor: '#036b52',
  color: '#fff',
  fontSize: '1.3rem',
  fontWeight: '600',
};

const navStyle = { flexDirection: 'column', width: '100vw' };
const navBarStyle = { padding: '0', boxShadow: ' 1px 2px #b8b8b88d' };
const colStyle = { padding: '0 0.2rem' };

export default function Menu() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState();

  const currentLinkStyle = (path, link) => {
    if (path === link) return linkSelectedStyle;
    return linkStyle;
  };

  useEffect(() => {
    setCurrentPath(location.pathname.replace('/', ''));
  }, [location]);

  return (
    <Navbar
      bg="light"
      variant="light"
      style={ navBarStyle }
    >
      <Nav className="me-auto" style={ navStyle }>
        <Row>
          <Col xs lg="4" style={ colStyle }>
            <Nav.Link
              href="/search"
              style={ currentLinkStyle(currentPath, 'search') }
            >
              Pesquisa
            </Nav.Link>
          </Col>
          <Col xs lg="4" style={ colStyle }>
            <Nav.Link
              href="/favorites"
              style={ currentLinkStyle(currentPath, 'favorites') }
            >
              Favoritas
            </Nav.Link>
          </Col>
          <Col xs lg="4" style={ colStyle }>
            <Nav.Link
              href="/profile"
              style={ currentLinkStyle(currentPath, 'profile') }
            >
              Perfil
            </Nav.Link>
          </Col>
        </Row>
      </Nav>
    </Navbar>
  );
}
