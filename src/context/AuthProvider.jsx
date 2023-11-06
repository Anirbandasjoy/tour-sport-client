import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import auth from "../config/firebase.config";
import axios from "axios";
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLoginUser = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
            if (currentUser) {
                console.log(loggedUser)
                axios.post("http://localhost:5000/jwt", loggedUser, { withCredentials: true })
                    .then(() => { });
            } else {

                axios.post("/http://localhost:5000/logout", loggedUser, { withCredentials: true })
                    .then(() => { });
            }
        });
        return () => {
            unSubscribe();
        };
    }, [user?.email]);


    const authInformation = {
        user,
        loading,
        registerUser,
        loginUser,
        googleLoginUser,
        logOut
    }


    return <AuthContext.Provider value={authInformation}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
