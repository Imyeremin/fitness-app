import CastItem from "./CastItem";

function TableCast({ castomers, onDataCard }) {
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
