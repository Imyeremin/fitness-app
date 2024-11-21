import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

function News({ news }) {
  return (
    <Card className="bg-dark bg-opacity-75 text-white ">
      <Card.Header>{news.author}</Card.Header>
      <Card.Body>
        <Card.Title>{news.description}</Card.Title>
        <Card.Text>{news.content} </Card.Text>
        <Button variant="primary">Перейти к источнику</Button>
      </Card.Body>
    </Card>
  );
}

export default News;
