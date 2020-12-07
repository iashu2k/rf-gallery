import React, { useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "./config";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  function googleSignUp() {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        
        setUser(result.user);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);

      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    user,

    googleSignUp,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
