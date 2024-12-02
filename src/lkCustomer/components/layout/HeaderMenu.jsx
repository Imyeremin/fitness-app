import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import styled from "styled-components";

import { Link } from "react-router-dom";

import test from "./../../../store/icon/profile.jpg";

function HeaderMenu({ text, setHeader }) {
  const Heading = styled.div`
    font-size: 30px;
    font-weight: bold;
  `;

  return (
    <Navbar className="fixed-top" bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand>
          <Heading> {text}</Heading>
        </Navbar.Brand>
        <Nav>
       
          <Nav.Link onClick={() => setHeader("Главная")} as={Link} to="/main">
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
