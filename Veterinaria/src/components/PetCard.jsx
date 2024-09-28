import { Button, Card } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import { deletePet } from "../utils";
import Swal from "sweetalert2";



const PetCard = ({ pet }) => {
  const { id } = useParams();

  const deleteP =  (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: `¿Estás segura de que querés eliminar a ${pet.name}?`,
      text: "Esta operación es irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí. eliminar!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deletePet(id);
        swalWithBootstrapButtons.fire({
          title: "Eliminada!",
          text: `La mascota ${pet.name} ha sido eliminada con éxito.`,
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Operación cancelada",
          text: "La mascota está a salvo",
          icon: "error"
        });
      }
    });
    
  };

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
          <Button variant="danger" onClick={() => deleteP(pet.id)}>
            Eliminar
          </Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
};

export default PetCard;
