import PropTypes from "prop-types";
import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const PribetRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    useEffect(() => {
        localStorage.setItem("location", location.pathname);
    }, [location]);
    if (loading) {
        return <Loading />
    }
    else if (!user) {
        return <Navigate to="/login" />
    }
    return children
}

PribetRoutes.propTypes = {
    children: PropTypes.node.isRequired,
};


export default PribetRoutes