import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import icon from "./icon/chat.png";
import iconChat from "./icon/chatSport.png";
import sms from './icon/sms.png'
import { Card, InputGroup, Form } from "react-bootstrap";
import SmsChat from "./SmsChat";

import styles from "./test.module.css";
import "./test.module.css";

function FooterChat({ name, ...props }) {
  const [show, setShow] = useState(false);
  const [newSms, setNewSms] = useState(styles);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setNewSms(!styles);
  };

  const smss = [
    {
      name: "Иванова Екатерина",
      date: "10.10.2023 10:00",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum non voluptatem, porro repudiandae atque, est fugit libero eos facilis ullam ad nam doloribus facere quasi, eum nulla enim rerum? Laborum.",
    },
    {
      name: "Иванова Екатерина",
      date: "10.10.2023 10:00",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum non voluptatem, porro repudiandae atque, est fugit libero eos facilis ullam ad nam doloribus facere quasi, eum nulla enim rerum? Laborum.",
    },
    {
      name: "Иванова Екатерина",
      date: "10.10.2023 10:00",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum non voluptatem, porro repudiandae atque, est fugit libero eos facilis ullam ad nam doloribus facere quasi, eum nulla enim rerum? Laborum.",
    },
    {
      name: "Иванова Екатерина",
      date: "10.10.2023 10:00",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum non voluptatem, porro repudiandae atque, est fugit libero eos facilis ullam ad nam doloribus facere quasi, eum nulla enim rerum? Laborum.",
    },
  ]; // Тестовые данные

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
              <SmsChat sms={sms} />
            ))}
          </Card>
        </Offcanvas.Body>
        <div className="d-flex">
          <Button className="rounded-circle m-1 "  variant="outline-success">
            <img src={sms} width="30px" height="30px" alt="" />
          </Button>
          <InputGroup className="m-1">
            <Form.Control as="textarea" placeholder="What do you want to say?" aria-label="With textarea" />
          </InputGroup>
        </div>
      </Offcanvas>
    </>
  );
}

// function FooterChat() {
//   return (
//     <>
//       {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
//         <OffCanvasExample key={idx} placement={placement} name={placement} />
//       ))}
//     </>
//   );
// }

// render(<Footerchat />);

export default FooterChat;
