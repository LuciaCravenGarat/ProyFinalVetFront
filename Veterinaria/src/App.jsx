import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { readPets, readShifts, updatePet , validateUser, createUser} from "./utils/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarApp from "./common/NavbarApp";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import SignIn from "./views/SignIn";
import Login from "./views/Login";
import ManagePets from "./views/ManagePets";
import Pets from "./views/Pets";;
import ErrorScreen from "./views/ErrorScreen";
import PetDetail from "./views/PetDetail";
import UpdatePet from "./views/UpdatePet";

import { UserContext } from './components/UserContext';
import { useState } from 'react';




function App() {
  const uploadPets = async () => {
    try {
      let pets = await readPets();
      return pets
    } catch (error) {
      console.log(error);
    }
  };
  
  const [user, setUser] = useState({
    "id": 0,
      "name": "",
      "lastName": "",
      "phone": "",
      "email": "",
      "password": "",
      "admin": false
  })

  return (

    <UserContext.Provider value={{user, setUser}}>
    <BrowserRouter>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signIn" element={<SignIn  validateUser={validateUser} createUser={createUser}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/pets" element={<Pets pets={uploadPets}/>} />
        <Route path="/admin/managePets" element={<ManagePets />} />
        <Route path="/admin/petDetail/:id" element={<PetDetail />} />
        <Route path="/admin/updatePet/:id" element={<UpdatePet/>} />
        <Route path="*" element={<ErrorScreen />} /> 
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;
