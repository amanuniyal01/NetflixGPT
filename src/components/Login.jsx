import React, { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const ToggleSignUp = () => setIsOpen(!isOpen);

  const handleButtonClick = () => {
  

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (!message) {
      if (isOpen) {
        // Sign Up
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
          
          })
          .catch((error) => {
            setErrorMessage(error.code + " " + error.message);
          });
      } else {
        // Sign In
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
     
          })
          .catch((error) => {
            setErrorMessage(error.code + " " + error.message);
          });
      }
    }
  };

  return (
    <div className="relative flex items-center flex-col justify-center">
      <div className="h-[100vh] w-[100vw] relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_small.jpg"
          alt="Netflix Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Auth Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        opacity-65 bg-black text-white flex flex-col md:p-15 p-10 md:w-[60%] md:h-[75%] w-[90%] max-w-md rounded-lg shadow-lg"
      >
        <h1 className="my-4 font-bold text-3xl">{isOpen ? "Sign Up" : "Sign In"}</h1>

        {isOpen && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-2 p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email or phone number"
          className="my-2 p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-2 p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />

        {errorMessage && (
          <div
            role="alert"
            className="flex items-center gap-2 my-3 p-3 rounded-md bg-red-100 border border-red-400 text-red-700 animate-fadeIn"
          >
            <span className="font-bold">⚠️ Error:</span>
            <span>{errorMessage}</span>
          </div>
        )}

        <button
          type="button"
          onClick={handleButtonClick}
          className="bg-red-600 hover:bg-red-700 transition my-6 h-12 rounded-md w-full font-semibold"
        >
          {isOpen ? "Sign Up" : "Sign In"}
        </button>

        <p className="text-gray-400 md:mt-10 mt-6 text-sm">
          {isOpen ? (
            <span>
              Already a user?{" "}
              <a onClick={ToggleSignUp} className="text-white hover:underline cursor-pointer">
                Sign In Now
              </a>
            </span>
          ) : (
            <span>
              New to Netflix?{" "}
              <a onClick={ToggleSignUp} className="text-white hover:underline cursor-pointer">
                Sign Up Now
              </a>
            </span>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
