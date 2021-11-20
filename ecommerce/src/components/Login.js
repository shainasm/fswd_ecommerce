import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const Login = () => {
    const { token } = useSelector(state => state.auth)

    return token != null ? <Navigate to='/' /> : (
        <div>
            <h1>Login</h1>
            <div>
                This is the Login page
            </div>
        </div>
    );
}

export default Login;