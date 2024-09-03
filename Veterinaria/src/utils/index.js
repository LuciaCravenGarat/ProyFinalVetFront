const urlUsers = "http://localhost:3000/users";
const urlPets = "http://localhost:3000/pets";
const urlTurnos = "http://localhost:3000/turnos";
import axios from "axios";

//----------------CRUD PETS-----------

export const getPets = async () => {
  try {
    let pets = await fetch(urlPets);
    return pets.json();
  } catch (error) {
    console.log(error);
  }
};

export const updatePet = async (id, obj) => {
  console.log(id);
  console.log(obj);

  try {
    let pet = await axios.put(`${urlPets}/${id}`, obj);
    return pet;
  } catch (error) {
    console.log(error);
  }
};

// updatePet(2, {
//   id: 2,
//   name: "loli",
//   specie: "can",
//   raza: "indefinida",
// });

export const createPet = async (obj) => {
  try {
    let pet = await axios.post(`${urlPets}`, obj);
    return pet;
  } catch (error) {
    console.log(error);
    
  }
};

// createPet({
//   id: 3,
//   name: "Micha",
//   specie: "can",
//   raza: "caniche",
// });

export const deletePet = async (id) => {
    try {
      let pet = await axios.delete(`${urlPets}/${id}`);
      return pet
    } catch (error) {
        console.log(error);
    }
  };

  //deletePet("3");



//----------------CRUD USERS-----------

// const getUsers = async ()=> {
//     try {

//     } catch (error) {

//     }
// }
