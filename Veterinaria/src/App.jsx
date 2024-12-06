import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  readPets,
  readShifts,
  updatePet,
  validateUser,
  createUser,
  userLogin,
} from "./utils/index";
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
import PetDetail from "./views/PetDetail";
import UpdatePet from "./views/UpdatePet";
import { UserContext } from "./components/UserContext";
import { useState, useEffect, useContext } from "react";
import { ShiftProvider } from "./components/ShiftContext";
import PrivateRoutes from "./routes/PrivateRoutes";
import ManageShifts from "./views/ManageShifts";

function App() {
  const uploadPets = async () => {
    try {
      let pets = await readPets();
      return pets;
    } catch (error) {
      console.log(error);
    }
  };

  const [user, setUser] = useState({
    id: 0,
    name: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    admin: true,
  });

  const [shifts, setShifts] = useState([]);
  //const [vet, setVet] = useContext(ShiftContext);

  useEffect(() => {
    const getShifts = async () => {
      const data = await readShifts();
      setShifts(data);
    };
    getShifts();
  }, []);

  const addShift = async (nuevoTurno) => {
    const addedShift = await createShift(nuevoTurno);
    setShifts([...shifts, addedShift.data]);
    console.log(shifts);
    
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ShiftProvider value={{ shifts, addShift }}>
        <BrowserRouter>
          <NavbarApp />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/signIn"
              element={
                <SignIn validateUser={validateUser} createUser={createUser} />
              }
            />
            <Route path="/login" element={<Login userLogin={userLogin} />} />
            <Route path="*" element={<ErrorScreen />} />

            {/* Rutas privadas */}
            <Route path="/admin" element={<PrivateRoutes />}>
              <Route path="pets" element={<Pets pets={uploadPets} />} />
              <Route path="managePets" element={<ManagePets />} />

              <Route path="manageShifts" element={<ManageShifts />} />

              <Route path="petDetail/:id" element={<PetDetail />} />
              <Route path="updatePet/:id" element={<UpdatePet />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ShiftProvider>
    </UserContext.Provider>
  );
}

export default App;
