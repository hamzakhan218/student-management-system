import React from 'react'
import { Navigate } from 'react-router';

function ProtectedRoutes({children}) {
    const isAuth = localStorage.getItem('auth') || undefined;
    return isAuth ? children : <Navigate to="/login" />
}

export default ProtectedRoutes
