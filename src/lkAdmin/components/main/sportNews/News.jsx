import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';



function News({news}) {
  return (
    <Card  className="bg-dark bg-opacity-75 text-white ">
      <Card.Header>{news.typeSport}</Card.Header>
      <Card.Body>
        <Card.Title>{news.event}</Card.Title>
        <Card.Text>
         {news.desc}  </Card.Text>
        <Button variant="primary">Перейти к источнику</Button>
      </Card.Body>
    </Card>
  );
}

export default News;