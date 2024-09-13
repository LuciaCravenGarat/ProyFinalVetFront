import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { readPets, readShifts } from "./utils/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarApp from "./common/NavbarApp";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import SignIn from "./views/SignIn";
import Login from "./views/Login";
import ManagePets from "./views/ManagePets";
import Pets from "./views/Pets";
import ErrorScreen from "./views/ErrorScreen";

function App() {
  const uploadPets = async () => {
    try {
      let pets = await readPets();
      return pets
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BrowserRouter>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/pets" element={<Pets pets={uploadPets}/>} />
        <Route path="/admin/managePets" element={<ManagePets />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
