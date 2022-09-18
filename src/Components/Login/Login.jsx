import React, { useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import firebaseConfig from "../../config/firebase.config";
import { userContext } from "../../Context/UserProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import SignUp from "./../Form/SignUp";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const user = auth.currentUser;

const Login = () => {
  const [user, setUser] = useContext(userContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();
  const [register, setRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Get redirect location or provide fallback
  const from = location.state?.from || "/";

  useEffect(() => {
    user && user.isAuthenticated && navigate(from);
  }, [from, navigate, user]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(!loading);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const googleUser = userCredential.user;
        const newUser = {
          isAuthenticated: true,
          name: googleUser.displayName,
          email: googleUser.email,
        };
        setUser(newUser);
        window.localStorage.setItem("user", JSON.stringify(newUser));
        setLoading(!loading);
        navigate(from);

        // ...
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    // const user = {
    //   email,
    //   password,
    // };
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    setLoading(!loading);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const googleUser = userCredential.user;
        updateName(auth.currentUser, name);
        const newUser = {
          isAuthenticated: true,
          name: name,
          email: googleUser.email,
        };
        setUser(newUser);
        window.localStorage.setItem("user", JSON.stringify(newUser));
        setLoading(!loading);
        navigate(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(!loading);
        // ..
      });
  };
  const updateName = (currentUser, Name) => {
    updateProfile(currentUser, {
      displayName: Name,
    })
      .then(() => {
        return true;
      })
      .catch((error) => {
        return false;
      });
  };

  const handleGoogleSignUp = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const googleUser = result.user;
        const newUser = {
          isAuthenticated: true,
          name: googleUser.displayName,
          email: googleUser.email,
        };
        setUser(newUser);
        window.localStorage.setItem("user", JSON.stringify(newUser));
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="col-6 offset-3 mt-5">
      <SignUp
        user={user}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        register={register}
        handleSubmit={handleSubmit}
        handleSignUp={handleSignUp}
        setEmail={setEmail}
        setPassword={setPassword}
        setConfirmPassword={setConfirmPassword}
        setRegister={setRegister}
        name={name}
        setName={setName}
        loading={loading}
        setLoading={setLoading}
        handleGoogleSignUp={handleGoogleSignUp}
      />
    </div>
  );
};

export default Login;
