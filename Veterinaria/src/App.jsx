import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  NavbarApp  from "./common/NavbarApp";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import SignIn from "./views/SignIn";

function App() {
  

  return (
    <BrowserRouter>
    <NavbarApp/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/signIn' element={<SignIn/>}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
