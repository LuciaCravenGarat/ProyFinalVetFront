const urlUsers = "http://localhost:3000/users";
const urlPets = "http://localhost:3000/pets";
const urlShifts = "http://localhost:3000/shifts";
import axios from "axios";

//----------------CRUD PETS-----------

export const readPets = async () => {
  try {
    let pets = await fetch(urlPets);
    return pets.json();
  } catch (error) {
    console.log(error);
  }
};

export const readOnePet = async (id) => {
  try {
    let pet = await axios.get(`${urlPets}/${id}`);
    return pet;
  } catch (error) {
    console.log(error);
  }
}

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


export const createPet = async (obj) => {
  try {
    let pet = await axios.post(`${urlPets}`, obj);
    return pet;
  } catch (error) {
    console.log(error);
  }
};


export const deletePet = async (id) => {
  try {
    let pet = await axios.delete(`${urlPets}/${id}`);
    return pet;
  } catch (error) {
    console.log(error);
  }
};



//----------------CRUD SHIFTS-----------

export const readShifts = async () => {
  try {
    let shifts = await fetch(urlShifts);
    return shifts.json();
  } catch (error) {
    console.log(error);
  }
};

export const updateShift = async (id, obj) => {
  console.log(id);
  console.log(obj);

  try {
    let shift = await axios.put(`${urlShifts}/${id}`, obj);
    return shift;
  } catch (error) {
    console.log(error);
  }
};

// updateShift("8eed",{
//     detail: "peluqueria",
//     vet: "Juan",
//     pet: "Pepo",
//     date: "25/8",
//     time: "15:30"
//   })

export const createShift = async (obj) => {
  try {
    let shift = await axios.post(`${urlShifts}`, obj);
    return shift;
  } catch (error) {
    console.log(error);
  }
};

// createShift( {
//     detail: "control",
//     vet: "Antonia",
//     pet: "Luna",
//     date: "15/8",
//     time: "16:30"
//   });

export const deleteShift = async (id) => {
  try {
    let shift = await axios.delete(`${urlShifts}/${id}`);
    return shift;
  } catch (error) {
    console.log(error);
  }
};

//deleteShift("e185");