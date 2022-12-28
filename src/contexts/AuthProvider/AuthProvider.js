import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'

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
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }

    // signOut 
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // create user signup


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