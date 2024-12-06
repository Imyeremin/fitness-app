import Offcanvas from "react-bootstrap/Offcanvas";
import { Table, Form } from "react-bootstrap";
import test from "./../../../store/icon/profile.jpg";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useState } from "react";

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
function UpdateProfile({ name, show, handleClose, data, ...props }) {
  const UpdateClose = () => {
    handleClose();
  };
  const [dayWeek, setDayWeek] = useState()
  const [upData, setUpData] = useState({
    email: "",
    imgProf: "",
    tel: "",
    name: "",
    age: "",
    height: "",
    weight: "",
    goal: "",
    schedule: {
      dayWeek: "",
      time: "",
    },
  });

  const onDataClick = () => {
    setUpData();
  };

  return (
    // {
    //   id: 0,
    //   email: "customer@email.ru",
    //   imgProf: "imageKat",
    //   tel: "+79100000001",
    //   name: "Иванова Екатерина",
    //   age: 18,
    //   height: 163,
    //   weight: 65,
    //   goal: "Похудеть к лету",
    //   schedule: {
    //     dayWeek: ["ВТ", "ЧТ", "СБ"],
    //     time: ["9:00", "16:30", "20:00"],
    //   },
    <>
      <Offcanvas
        variant="light"
        show={show}
        onHide={handleClose}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Редактировать профиль</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mb-4">
            <div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img
                  className="rounded-circle"
                  height="50%"
                  width="50%"
                  src={test}
                />
                <div className="m-3 text-center">
                  <div>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Имя/Фамилия"
                      defaultValue={data.name}
                    />
                  </div>
                  <span className="primary">
                    <Form.Control
                      required
                      type="text"
                      placeholder="email"
                      defaultValue={data.email}
                    />
                  </span>
                </div>
                <span className="primary">
                  <b>Расписание:</b>
                </span>

                <Table variant="dark" striped bordered hover>
                  <tbody>
                    <tr>
                      <td className="table-success">
                        <Form.Control
                          required
                          type="text"
                          placeholder="День"
                          defaultValue={data.schedule.dayWeek[0]}
                        />
                      </td>
                      <td className="table-success">
                        <Form.Control
                          required
                          type="text"
                          placeholder="Время"
                          defaultValue={data.schedule.time[0]}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="table-danger">
                        <Form.Control
                          required
                          type="text"
                          placeholder="День"
                          defaultValue={data.schedule.dayWeek[1]}
                        />
                      </td>
                      <td className="table-danger">
                        <Form.Control
                          required
                          type="text"
                          placeholder="Время"
                          defaultValue={data.schedule.time[1]}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="table-warning">
                        <Form.Control
                          required
                          type="text"
                          placeholder="День"
                          defaultValue={data.schedule.dayWeek[2]}
                        />
                      </td>
                      <td className="table-warning">
                        <Form.Control
                          required
                          type="text"
                          placeholder="Время"
                          defaultValue={data.schedule.time[2]}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div bg="dark">
                <div eventKey="0">
                  <div>
                    <b>INFO</b>
                  </div>
                  <div>
                    <Table variant="dark" striped bordered hover>
                      <tbody>
                        <tr>
                          <td>
                            <span style={{ color: "green" }}>
                              Телефон &#9742;:
                            </span>
                          </td>
                          <td>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Телефон"
                              defaultValue={data.tel}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span style={{ color: "green" }}>Возраст:</span>
                          </td>
                          <td>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Возраст"
                              defaultValue={data.age}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span style={{ color: "green" }}>Рост:</span>
                          </td>
                          <td>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Рост"
                              defaultValue={data.height}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span style={{ color: "green" }}>Вес:</span>
                          </td>
                          <td>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Вес"
                              defaultValue={data.weight}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span style={{ color: "red" }}>Цель:</span>
                          </td>
                          <td>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Цель"
                              defaultValue={data.goal}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>

              <GradientButton onClick={UpdateClose}>
                {" "}
                Редактировать
              </GradientButton>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default UpdateProfile;
