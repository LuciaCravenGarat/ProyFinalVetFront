import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { readOnePet } from "../utils";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

//AGREGAR BOTON DE VOLVER A MASCOTAS

const PetDetail = () => {
  const [pet, setPet] = useState({});
  const { id } = useParams();

  const getPet = async (id) => {
    try {
      let pet = await readOnePet(id);
      setPet(pet.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPet(id);
  }, []);

  return (
    <>
      <div>PetDetail</div>

      <Card>
        <Card.Img variant="top" src={pet.url} />
        <Card.Body>
          <Card.Title>`Nombre: {pet.name}`</Card.Title>
          <Card.Text>`Especie: {pet.specie}`</Card.Text>
          <Card.Text>`Raza: {pet.raza}`</Card.Text>
          <Card.Text>`Detalle: {pet.detail}`</Card.Text>

          <NavLink to={`admin/editarMascota/${pet.id}`}>
            <Button variant="success">Editar</Button>
          </NavLink>

          <NavLink>
            <Button variant="danger">Eliminar</Button>
          </NavLink>
        </Card.Body>
      </Card>
    </>
  );
};

export default PetDetail;
