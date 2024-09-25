import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {getPets, getShifts, validateUser, createUser} from "./utils/index"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  NavbarApp  from "./common/NavbarApp";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import SignIn from "./views/SignIn";
import Login from "./views/Login";
import ErrorScreen from './views/ErrorScreen';


function App() {
  


  return (
    <BrowserRouter>
    <NavbarApp/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/signIn' element={<SignIn validateUser={validateUser} createUser={createUser}/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='*' element={<ErrorScreen/>}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
