import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import icon from "./icon/chat.png";
import iconChat from "./icon/chatSport.png";
import sms from "./icon/sms.png";
import { Card, InputGroup, Form } from "react-bootstrap";
import SmsChat from "./SmsChat";
import { addMessage } from "../../../../store/todoSlise";
import styles from "./test.module.css";
import "./test.module.css";
import { useDispatch, useSelector } from "react-redux";

function FooterChat({ name, ...props }) {
  const [show, setShow] = useState(false);
  const [newSms, setNewSms] = useState(styles);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setNewSms(!styles);
  };
  const [messages, setMessages] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const smss = useSelector((state) => state.todos.messages);

  const dispatch = useDispatch();

  const handleMassege = (value, key) => {
    setMessages({
      name: "Ваш тренер",
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
      <Button variant="dark" onClick={handleShow} className={newSms.background}>
        <img src={icon} alt="" width="50px" height="50px" />
        <div>Chat</div>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
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
              <SmsChat addNameMessage={handleMassege} addName={setNameMessage} key={sms.date} sms={sms} />
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
