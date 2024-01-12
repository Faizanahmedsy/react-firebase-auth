import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthProvider({ children }) {
  const [user, setUser] = useState({});

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);

      setUser(currentuser);
      // if (user) {
      //   setUser(user);
      //   console.log("user is logged in");
      // } else {
      //   console.log("user is logged out");
      // }
    });
    return () => unsubscribe();
  }, []);

  return (
    <userAuthContext.Provider value={{ user, signUp, login }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
