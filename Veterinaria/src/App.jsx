import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {getPets, getShifts} from "./utils/index"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  NavbarApp  from "./common/NavbarApp";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import SignIn from "./views/SignIn";
import Login from "./views/Login"
import ErrorScreen from './views/ErrorScreen';

function App() {
  
// getPets().then(data=>console.log(data))

// getShifts().then(data=>console.log(data))

  return (
    <BrowserRouter>
    <NavbarApp/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/signIn' element={<SignIn/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='*' element={<ErrorScreen/>}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
