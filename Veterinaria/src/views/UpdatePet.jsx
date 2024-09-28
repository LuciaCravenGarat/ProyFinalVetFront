import React from 'react';
import AddPet from '../components/AddPet';
import { updatePet } from "../utils/index";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const UpdatePet = () => {

  const { id } = useParams();

  const updateData = async (obj) => {
    try {
      let updatedPet = await updatePet(id, obj);
      console.log("mascota modificada", updatedPet);
      return updatedPet;
    } catch (error) {
      console.log(error);
    }
  };
    
    
  return (
    <>
    <h1>UpdatePet</h1>
    <AddPet updateData={updateData} isEdit={true}/>
    <br />
      <Link to={`/admin/pets`}>
        <Button>Ir a mascotas</Button>
      </Link>
    </>
    
  )
}

export default UpdatePet;