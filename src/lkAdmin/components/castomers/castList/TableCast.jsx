import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CastItem from "./CastItem";
import { openCardCastomer } from "../../../../store/castomersSlise";

function TableCast({castomers, onDataCard}) {
//   const castomers = useSelector((state) => state.castomers.castomers);
  return (
    <table class="table-dark table rounded-3">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Имя</th>
          <th scope="col">Телефон</th>
          <th scope="col">Profile</th>
        </tr>
      </thead>
      <tbody>
        {castomers.map((castomer) => (
          <CastItem castomer={castomer} openCardProfile={onDataCard} />
        ))}
      </tbody>
    </table>
  );
}

export default TableCast;
