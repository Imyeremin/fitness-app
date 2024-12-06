import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function Resault({ addResault, handleClose, handleShow, show }) {
  return (
    <>
      <Offcanvas
        className="d-flex align-items-center"
        show={show}
        onHide={handleClose}
        placement="bottom"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fs-1">
            Вы закончили? Отправить результат тренеру ?
          </Offcanvas.Title>
        </Offcanvas.Header>
        <div>
          <Button
            onClick={addResault}
            as={Link}
            to="/custmain"
            className="m-2 p-3 fs-3"
            variant="success"
          >
            Отправить
          </Button>
          <Button
            onClick={handleClose}
            className="m-2 p-3 fs-3"
            variant="danger"
          >
            Отмена
          </Button>
        </div>
      </Offcanvas>
    </>
  );
}
export default Resault;
