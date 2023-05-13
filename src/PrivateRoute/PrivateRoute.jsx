import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { Navigate, useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="w-fit mx-auto min-h-[55vh] flex items-center">
            <RotatingLines
                strokeColor="#f87272"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;

};

export default PrivateRoute;