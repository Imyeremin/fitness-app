import React from "react";

import { Button } from "react-bootstrap";

const CastItem = ({ castomer, openCardProfile }) => {
  return (
    <tr>
      <th scope="row">{castomer.id}</th>
      <td>{castomer.name}</td>
      <td>{castomer.tel}</td>
      <td>
        <Button
          onClick={() => openCardProfile(castomer.id)}
          className="m-2"
          variant="primary"
        >
          Profile
        </Button>
      </td>
    </tr>
  );
};

export default CastItem;
