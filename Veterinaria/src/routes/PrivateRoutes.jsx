import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from "../components/UserContext";


const PrivateRoutes = () => {

    const {user} = useContext(UserContext);

    if(user.admin) {
        return <Outlet/>
    } else {
        <Navigate to="/"/>
    }
}

export default PrivateRoutes