import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import imageKat from "./../../../../store/icon/profile.jpg";
import imageUlia from "./../../../../store/icon/profile3.jpeg";
import imageAlex from "./../../../../store/icon/profile2.jpg";

import { useEffect, useState } from "react";

function CardCast({ castomer, openCloseWork, openCloseNutriion }) {
  const [img, setImg] = useState("");

  const editImg = () => {
    if (castomer.imgProf === "imageKat") {
      setImg(imageKat);
    } else if (castomer.imgProf === "imageUlia") {
      setImg(imageUlia);
    } else {
      setImg(imageAlex);
    }
  };

  useEffect(() => {
    editImg();
  }, [castomer]);

  return (
    <Card style={{}}>
      <Card.Img className="rounded-circle" variant="top" src={img} />
      <Card.Body>
        <Card.Title>{castomer.name}</Card.Title>
        <div className=" border">
          <Card.Text>
            <tr>
              <th scope="row">Телефон:</th>
              <td>{castomer.tel}</td>
            </tr>
            <tr>
              <th scope="row">Возрст:</th>
              <td>{castomer.age}</td>
            </tr>
            <tr>
              <th scope="row">Рост/Вес:</th>
              <td>
                {castomer.height}/{castomer.weight}
              </td>
            </tr>
            <tr>
              <th scope="row">Цель:</th>
              <td>{castomer.goal}</td>
            </tr>
            <tr>
              <th scope="row">Расписание:</th>
              <td>
                {castomer.schedule.dayWeek[0]}: {castomer.schedule.time[0]}|{" "}
                {castomer.schedule.dayWeek[1]}: {castomer.schedule.time[1]}|{" "}
                {castomer.schedule.dayWeek[2]}: {castomer.schedule.time[2]}
              </td>
            </tr>
          </Card.Text>
          <Card.Text className="d-flex">
            <Button onClick={openCloseWork} className="m-1" variant="primary">
              Добавить тренеровку
            </Button>
            <Button
              onClick={openCloseNutriion}
              className="m-1"
              variant="primary"
            >
              Добавить питание
            </Button>
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardCast;
