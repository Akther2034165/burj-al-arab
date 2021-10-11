import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  FacebookAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signInUsingFacebook = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  const createUser = () => {
    if (password.length < 6) {
      setError("Password must be at least 6 character!");
      return;
    } else {
      return createUserWithEmailAndPassword(auth, email, password);
    }
  };
  //observe whether user auth state changed or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  return {
    user,
    signInUsingGoogle,
    logOut,
    signInUsingFacebook,
    handleEmailChange,
    handlePasswordChange,
    error,
    createUser,
  };
};
export default useFirebase;
