import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
        <Navbar.Brand as={Link} to="/">
          <Heading> {text}</Heading>
        </Navbar.Brand>
        <Nav>
          <Nav.Link onClick={() => setHeader('Главная')} as={Link} to="/">
            Главная
          </Nav.Link>
          <Nav.Link>Выход</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HeaderMenu;
