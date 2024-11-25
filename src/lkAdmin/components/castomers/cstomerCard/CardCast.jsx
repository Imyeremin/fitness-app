import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import iconProf from "./icon/profile.jpg";
import { useSelector } from "react-redux";

function CardCast({castomer}) {

    // const castomer = useSelector(state => state.castomers.castomers)
  return ( 
    //    castomer:[{
    // id: 1,
    //   tel: '+79100000001',
    //   name: "Иванова Екатерина",
    //   age: 18,
    //   height: 163,
    //   weight: 65,
    //   goal: 'Похудеть к лету',
    //   schedule:{
    //      dayWeek:['ПН','ПН', 'ПН'],  
    //      time:['10:00', '12:30', '13:00'] 
    //   }
    <Card style={{}}>
      <Card.Img className="rounded-circle" variant="top" src={iconProf} />
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
              <td>{castomer.height}/{castomer.weight}</td>
            </tr>
            <tr>
              <th scope="row">Цель:</th>
              <td>{castomer.goal}</td>
            </tr>
            <tr>
              <th scope="row">Расписание:</th>
              <td>{castomer.schedule.dayWeek[0]}: {castomer.schedule.time[0]}| {castomer.schedule.dayWeek[1]}: {castomer.schedule.time[1]}| {castomer.schedule.dayWeek[2]}: {castomer.schedule.time[2]}</td>
            </tr>
          </Card.Text>
          <Card.Text className="d-flex">
            <Button className="m-1" variant="primary">
              Добавить тренеровку
            </Button>
            <Button className="m-1" variant="primary">
              Добавить питание
            </Button>
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardCast;
