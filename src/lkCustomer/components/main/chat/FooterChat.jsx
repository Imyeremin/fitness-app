import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SmsChat from "./SmsChat";
import { Card, InputGroup, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./test.module.css";
import "./test.module.css";

import icon from "./icon/chat.png";
import iconChat from "./icon/chatSport.png";
import sms from "./icon/sms.png";

import { addMessage } from "../../../../store/messageSlise";
import styled from "styled-components";

const BtnChat = styled.button`
  z-index: 2;
  height: 100vh;
  background-color: #2a2d3e;
  color: #ffffff;
`;

function FooterChat({ name, ...props }) {
  const [show, setShow] = useState(false);
  const [newSms, setNewSms] = useState(styles);
  const [messages, setMessages] = useState("");
  const [nameMessage, setNameMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setNewSms(!styles);
  };

  const smss = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();

  const handleMassege = (value, key) => {
    setMessages({
      name: "Иванова Екатерина",
      [key]: value,
    });
  };

  const addMessageChat = () => {
    dispatch(addMessage(messages));
    setMessages({
      name: "",
      text: "",
    });
  };
  return (
    <>
      <BtnChat onClick={handleShow} className={newSms.background}>
        <img src={icon} alt="" width="50px" height="50px" />
        <div>
          <b>Chat</b>
        </div>
      </BtnChat>
      <Offcanvas
        variant="dark"
        show={show}
        onHide={handleClose}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div>
              CHAT <img src={iconChat} alt="" width="30px" height="30px" />
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Card className="mb-1 p-3  text-light ">
            {smss.map((sms) => (
              <SmsChat
                addNameMessage={handleMassege}
                addName={setNameMessage}
                key={sms.date}
                sms={sms}
              />
            ))}
          </Card>
        </Offcanvas.Body>
        <div className="d-flex">
          <Button
            onClick={addMessageChat}
            className="rounded-circle m-1 "
            variant="outline-success"
          >
            <img src={sms} width="30px" height="30px" alt="" />
          </Button>
          <InputGroup className="m-1">
            <Form.Control
              value={messages.text}
              onChange={(e) => handleMassege(e.target.value, "text")}
              as="textarea"
              placeholder="What do you want to say?"
              aria-label="With textarea"
            />
          </InputGroup>
        </div>
      </Offcanvas>
    </>
  );
}

export default FooterChat;
