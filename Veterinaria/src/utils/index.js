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

<<<<<<< HEAD
=======

>>>>>>> delete-pet
export const createPet = async (obj) => {
  try {
    await axios.post(`${urlPets}`, obj);
    return true;
  } catch (error) {
    console.log(error);
    false
  }
};

<<<<<<< HEAD
=======

>>>>>>> delete-pet
export const deletePet = async (id) => {
  try {
    let pet = await axios.delete(`${urlPets}/${id}`);
    return pet;
  } catch (error) {
    console.log(error);
  }
};

<<<<<<< HEAD
=======


>>>>>>> delete-pet
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

<<<<<<< HEAD
=======


>>>>>>> delete-pet
export const createShift = async (obj) => {
  try {
    let shift = await axios.post(`${urlShifts}`, obj);
    return shift;
  } catch (error) {
    console.log(error);
  }
};

<<<<<<< HEAD
=======


>>>>>>> delete-pet
export const deleteShift = async (id) => {
  try {
    let shift = await axios.delete(`${urlShifts}/${id}`);
    return shift;
  } catch (error) {
    console.log(error);
  }
};

<<<<<<< HEAD
//--------------CRUD users--------------

export const validateUser = async (email) => {
  try {
    let users = await axios.get(urlUsers);
    let { data } = users;
    let result = data.find(user => user.email == email);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (obj) => {
  try {
    let newUser = await axios.post(urlUsers, obj);
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async() => {

}
=======
//-------------------CRUD users--------------
>>>>>>> delete-pet
