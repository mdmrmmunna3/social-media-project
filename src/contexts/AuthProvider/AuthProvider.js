import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // signup with google 
    const googleProvider = new GoogleAuthProvider();

    const googleSignup = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    }

    // signOut 
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // create user email and password 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // update user profile
    const updateUser = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    }

    // login with email and password

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unsubsrcibe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('user');
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubsrcibe();
    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        googleSignup,
        logOut,
        setUser,
        createUser,
        updateUser,
        logIn,
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;