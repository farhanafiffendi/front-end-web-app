import { Outlet, Navigate } from "react-router-dom";

// create component here
const PrivateRoute = () => {
    const isLogin = true

    return (
        isLogin ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoute