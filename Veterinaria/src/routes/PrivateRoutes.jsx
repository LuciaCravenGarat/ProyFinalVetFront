import React, { useContext } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { UserContext } from "../components/UserContext";


const PrivateRoutes = () => {

    const {user} = useContext(UserContext);
    console.log(user.admin);
    const navigate = useNavigate();
    

    if(user.admin) {
        return <Outlet/>
    } else {
        navigate("/")
    }
}

export default PrivateRoutes