import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import auth from "../Firebase/FireBase";

export let ContextApi = createContext(null);

const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(true);

  const handleUserrCreate = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleUserrLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const handleGgoogleLogin = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success("Google Login SuccessFully", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch(() => {
        toast.error("Google Login not SuccessFully", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const logOut = () => {
    signOut(auth);
  };
  let objectInfo = {
    handleUserCreate: handleUserrCreate,
    handleUserLogin: handleUserrLogin,
    handleGgoogleLogin,
    user,
    logOut,
    loading,
  };
  return (
    <ContextApi.Provider value={objectInfo}>{children}</ContextApi.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
