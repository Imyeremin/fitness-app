import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import styled from "styled-components";

import { Link } from "react-router-dom";

import icon from "./images/icon.png";

function HeaderMenu({ text, setHeader }) {
  const Heading = styled.div`
    font-size: 30px;
    font-weight: bold;
    
  `;

const BtnLink = styled.button`
padding: 0;
border: none;
background: transparent;
transition: all 0.3s;
&:hover{
  transform: scale(1.2);
  transition: all 0.3s;
}
&:active{
  transform: scale(0.8);
  transition: all 0.1ms;
}
`;

  return (
    <Navbar className="fixed-top" bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand>
          <Heading> {text}</Heading>
        </Navbar.Brand>
        <Nav>
       
          
          <Nav.Link as={Link} to="http://localhost:3001/">
            Выход
          </Nav.Link>
        </Nav>
        
      </Container>
      <BtnLink onClick={() => setHeader("Главная")} as={Link} to="/">
            <img src={icon} alt="" />
          </BtnLink>
    </Navbar>
  );
}

export default HeaderMenu;
