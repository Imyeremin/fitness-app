import React from "react";
import { Card, Button } from "react-bootstrap";

const SmsChat = ({ sms, addName, addNameMessage }) => {

const addSms =(sms) =>{
  addName(sms)
  addNameMessage(sms, 'text')
}

  return (
    <Card className="mb-1 bg-light text-dark ">
      <Card.Body>
        <Card.Title className="fw-bold fs-6">{sms.name}</Card.Title>
        <Card.Subtitle className="mb-3 ">{sms.date}</Card.Subtitle>
        <Card.Text className="">{sms.text}</Card.Text>
        <Button onClick={() => addSms(sms.name + ", ")} variant="outline-success me-1">Ответить</Button>
      </Card.Body>
    </Card>
  );
};

export default SmsChat;
