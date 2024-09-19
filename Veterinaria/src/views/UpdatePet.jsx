import React from 'react';
import AddPet from '../components/AddPet';
import { updatePet } from "../utils/index";
import { useParams } from "react-router-dom";


const UpdatePet = () => {

  const { id } = useParams();

  const updateData = async (obj) => {
    try {
      let updatedPet = await updatePet(id, obj);
      console.log("mascota modificada", updatedPet);
      return pet;
    } catch (error) {
      console.log(error);
    }
  };
    
    
  return (
    <>
    <div>UpdatePet</div>
    <AddPet updateData={updateData} isEdit={true}/>
    </>
    
  )
}

export default UpdatePet;