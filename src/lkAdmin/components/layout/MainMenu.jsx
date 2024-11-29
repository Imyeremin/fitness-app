import { useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

function MainMenu({ setHeader, name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const onOpenPage = (text) => {
    handleClose();
    setHeader(text);
  };
  return (
    <>
      <Button
        variant="dark"
        onClick={toggleShow}
        className="h-100 fw-bold fs-6"
      >
        Navigate
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="h-90 fw-bold fs-1">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column">
          <Button
            onClick={() => onOpenPage("Клиенты")}
            as={Link}
            to="/castomers"
            className="p-3 fw-bold fs-5"
            variant="light"
          >
            Клиенты
          </Button>
          <Button
            onClick={() => onOpenPage("Питание")}
            as={Link}
            to="/nutrition"
            className="p-3 m-1 fw-bold fs-5"
            variant="light"
          >
            Питание
          </Button>
          <Button
            onClick={() => onOpenPage("Тренеровки")}
            as={Link}
            to="/coaching"
            className="p-3 fw-bold fs-5"
            variant="light"
          >
            Тренеровки
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MainMenu;
