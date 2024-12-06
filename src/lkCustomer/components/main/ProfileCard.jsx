import React from "react";
import { useState } from "react";

import { Container, Card, Button, Accordion, Table } from "react-bootstrap";

import styled from "styled-components";

import test from "./../../../store/icon/profile.jpg";

import WorkCard from "./workCard/WorkCard";
import NutriCard from "./nutrotionCard/NutriCard";
import UpdateProfile from "./UpdateProfile";
import { Link } from "react-router-dom";


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
  transition: all 0.2s ease-in-out;
  &:hover {
    background: linear-gradient(1000deg, #2a2d3e, #2a2d3e, #ff6a88);
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
    border: 1px solid #2a2d3e;
  }
`;
const AccordionStyle = styled.div`
  background-color: #2a2d3e;
  color: #ffffff;
  border: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  width: 100%;

  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  height: 240px;
`;

// Кнопка со стилем градиента
const GradientButton = styled(Button)`
  background: linear-gradient(45deg, #6a92ff, #8ba6ff);
  border: none;
  color: white;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: linear-gradient(45deg, #ff99ac, #ff6a88);
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

// Заголовок раздела
const SectionTitle = styled.h5`
  background-color: black;
  color: #bbb;
`;

const CardContainer = styled.div`
  width: 50%;
  margin: 30px;
`;

function ProfileCard({ data }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <GradientBackground>
      <Container className="d-flex ">
        <CardContainer>
          <StyledCard className="mb-4">
            <Card.Body>
              <Card.Title>My Workout</Card.Title>
              <Accordion bg="dark" defaultActiveKey="0">
                <Accordion.Item bg="dark" eventKey="1">
                  <Accordion.Header color="dark">
                    Вам назначена тренеровка
                  </Accordion.Header>
                  <Accordion.Body as={AccordionStyle} bg="dark">
                    {data.workout.map((x) => (
                      <WorkCard dataWork={x} />
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <p className="p-0 m-0 mt-1">
                +1-386-575-1232{" "}
                <span style={{ color: "green" }}>Available</span>
              </p>
              <p className="p-0 m-0">
                +1-844-699-4678{" "}
                <span style={{ color: "red" }}>Not Available</span>
              </p>
              <Button as={Link} to="/time" variant="danger" className="mt-2">
                Поехали!
              </Button>
            </Card.Body>
          </StyledCard>

          <StyledCard>
            <Card.Body>
              <Card.Title>My Nuitrion</Card.Title>
              <Accordion bg="dark" defaultActiveKey="0">
                <Accordion.Item bg="dark" eventKey="2">
                  <Accordion.Header color="dark">
                    Вам назначено питание
                  </Accordion.Header>
                  <Accordion.Body as={AccordionStyle} bg="dark">
                    {data.diet.map((x) => (
                      <NutriCard dataDish={x} />
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <p className="p-0 m-0 mt-1">
                +1-386-575-1232 - <span style={{ color: "green" }}>Paid</span>
              </p>
              <p className="p-0 m-0">
                +1-549-746-1365 - <span style={{ color: "red" }}>Not Paid</span>
              </p>
            </Card.Body>
          </StyledCard>
        </CardContainer>

        <CardContainer>
          <StyledCard className="mb-4">
            <Card.Body>
              <Card.Title>My Profile</Card.Title>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img
                  className="rounded-circle"
                  height="50%"
                  width="50%"
                  src={test}
                />
                <div className="m-3 text-center">
                  <Card.Title>{data.name}</Card.Title>
                  <span className="primary">{data.email}</span>
                </div>
                <span className="primary">
                  <b>Расписание:</b>
                </span>

                <Table variant="dark" striped bordered hover>
                  <tbody>
                    <tr>
                      <td className="table-success">
                        {data.schedule.dayWeek[0]}
                      </td>
                      <td className="table-success">{data.schedule.time[0]}</td>
                    </tr>
                    <tr>
                      <td className="table-danger">
                        {data.schedule.dayWeek[1]}
                      </td>
                      <td className="table-danger">{data.schedule.time[1]}</td>
                    </tr>
                    <tr>
                      <td className="table-warning">
                        {data.schedule.dayWeek[2]}
                      </td>
                      <td className="table-warning">{data.schedule.time[2]}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <Accordion bg="dark">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <b>INFO</b>
                  </Accordion.Header>
                  <Accordion.Body as={AccordionStyle}>
                    <Table variant="dark" striped bordered hover>
                      <tbody>
                        <tr>
                          <td>
                            <span style={{ color: "green" }}>
                              Телефон &#9742;:
                            </span>
                          </td>
                          <td>{data.tel}</td>
                        </tr>
                        <tr>
                          <td>
                            <span style={{ color: "green" }}>Возраст:</span>
                          </td>
                          <td>{data.age}</td>
                        </tr>
                        <tr>
                          <td>
                            <span style={{ color: "green" }}>Рост:</span>
                          </td>
                          <td>{data.height}</td>
                        </tr>
                        <tr>
                          <td>
                            <span style={{ color: "green" }}>Вес:</span>
                          </td>
                          <td>{data.weight}</td>
                        </tr>
                        <tr>
                          <td>
                            <span style={{ color: "red" }}>Цель:</span>
                          </td>
                          <td>{data.goal}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <UpdateProfile
                data={data}
                handleClose={handleClose}
                show={show}
              />
              <GradientButton onClick={handleShow} className="mt-3">
                Редактировать
              </GradientButton>
            </Card.Body>
          </StyledCard>
        </CardContainer>
      </Container>
    </GradientBackground>
  );
}

export default ProfileCard;
