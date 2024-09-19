import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const PetCard = ({ pet }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pet.url} />
      <Card.Body>
        <Card.Title>`Nombre: {pet.name}`</Card.Title>
        <Card.Text>`Especie: {pet.specie}`</Card.Text>
        <Card.Text>`Raza: {pet.raza}`</Card.Text>

        <NavLink to={`/admin/petDetail/${pet.id}`}>
          <Button variant="primary">Ver ficha</Button>
        </NavLink>

        <NavLink to={`/admin/updatePet/${pet.id}`}>
          <Button variant="success"> Editar</Button>
        </NavLink>

        <NavLink>
          <Button variant="danger">Eliminar</Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
};

export default PetCard;
