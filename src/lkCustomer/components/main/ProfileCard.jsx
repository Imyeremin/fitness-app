import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import test from "./../../../store/icon/profile.jpg";

// Фон с градиентом
const GradientBackground = styled.div`
  background: linear-gradient(45deg, #ff9a8b, #ff6a88, #ff99ac);
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  height: 100%;
`;

// Стиль для карточек
const StyledCard = styled(Card)`
  background-color: #2a2d3e;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

// Кнопка со стилем градиента
const GradientButton = styled(Button)`
  background: linear-gradient(45deg, #ff6a88, #ff9a8b);
  border: none;
  color: white;
  &:hover {
    background: linear-gradient(45deg, #ff99ac, #ff6a88);
  }
`;

// Заголовок раздела
const SectionTitle = styled.h5`
  color: #bbb;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  width: 50%;
  margin: 30px;
`;

function ProfileCard() {
  return (
    <GradientBackground>
      <Container className="d-flex ">
        <CardContainer>
          {/* My Accounts Section */}

          <StyledCard className="mb-4">
            <Card.Body>
              <Card.Title>My Accounts</Card.Title>
              <Form.Control
                type="text"
                placeholder="Filter by..."
                className="mb-3"
                style={{
                  backgroundColor: "#3a3f50",
                  color: "#fff",
                  border: "none",
                }}
              />
              <p>
                +1-386-575-1232{" "}
                <span style={{ color: "green" }}>Available</span>
              </p>
              <p>
                +1-844-699-4678{" "}
                <span style={{ color: "red" }}>Not Available</span>
              </p>
            </Card.Body>
          </StyledCard>

          {/* My Profile Section */}

          <StyledCard>
            <Card.Body>
              <Card.Title>My Bills</Card.Title>
              <Form.Control
                type="text"
                placeholder="Filter by..."
                className="mb-3"
                style={{
                  backgroundColor: "#3a3f50",
                  color: "#fff",
                  border: "none",
                }}
              />
              <p>
                +1-386-575-1232 - <span style={{ color: "green" }}>Paid</span>
              </p>
              <p>
                +1-549-746-1365 - <span style={{ color: "red" }}>Not Paid</span>
              </p>
            </Card.Body>
          </StyledCard>
        </CardContainer>

        {/* My Bills Section */}
        <CardContainer>
          <StyledCard className="mb-4">
            <Card.Body>
              <Card.Title>My Profile</Card.Title>
              <img height="10%" alt="" />
              <p>Debra.wy01@gmail.com</p>
              <p>+1-386-575-1232</p>
              <p>Buffalo, US</p>
              <Form.Group controlId="sms-alerts">
                <Form.Check
                  type="switch"
                  label="SMS Alerts Activated"
                  defaultChecked
                />
              </Form.Group>
              <GradientButton className="mt-3">Save</GradientButton>
            </Card.Body>
          </StyledCard>
        </CardContainer>
      </Container>
    </GradientBackground>
  );
}

export default ProfileCard;
