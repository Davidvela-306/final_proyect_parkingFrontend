import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAllowed, redirectTo }) => {
    console.log("isAllowed:", isAllowed);
    if(!isAllowed) return <Navigate to={redirectTo} replace /> 

    return children?children: <Outlet />
};

export default ProtectedRoute;
