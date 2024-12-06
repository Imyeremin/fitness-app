import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import styled from "styled-components";

import { Link } from "react-router-dom";

function HeaderMenu({ text, setHeader }) {
  const Heading = styled.div`
    color: white;
    font-size: 30px;
    font-weight: bold;
    text-shadow: #00ff00 3px 0 15px;
  `;

  return (
    <Navbar className="fixed-top" bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand>
          <Heading> {text}</Heading>
        </Navbar.Brand>
        <Nav>
          <Nav.Link onClick={() => setHeader("Главная")} as={Link} to="/">
            Главная
          </Nav.Link>
          <Nav.Link as={Link} to="http://localhost:3001/">
            Выход
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HeaderMenu;
