import React from "react";
import AddPet from "../components/AddPet";
import { createPet } from "../utils/index";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ManagePets = () => {
  const uploadData = async (obj) => {
    try {
      let pet = await createPet(obj);
      console.log("mascota creada", pet);
      return pet;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <AddPet uploadData={uploadData} />
      <br />
      <Link to={`/admin/pets`}>
        <Button>Ir a mascotas</Button>
      </Link>
    </div>
  );
};

export default ManagePets;
