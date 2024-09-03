const urlUsers = "http://localhost:3000/users"
const urlPets = "http://localhost:3000/pets"
const urlTurnos = "http://localhost:3000/turnos"
import axios from "axios";

//----------------CRUD PETS-----------

export const getPets = async()=> {
    try {
        let pets = await fetch(urlPets)
        return pets.json()
    } catch (error) {
        console.log(error);
        
    }
}

export const updatePet = async ()=>{
    try {
        let pet = await axios.put()
    } catch (error) {
        
    }
}



//----------------CRUD USERS-----------

// const getUsers = async ()=> {
//     try {
        
//     } catch (error) {
        
//     }
// }