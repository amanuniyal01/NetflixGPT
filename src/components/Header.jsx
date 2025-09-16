import React from "react";
import userImage from "../assets/user.png";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";


const Header = () => {
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const UserSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser)
      navigate("/")


      // Sign-out successful.
    }).catch((error) => {
      // An error happened.

    });
  }
  return (
    <div className="absolute flex items-center justify-between w-full bg-gradient-to-b from-black z-50 px-6 py-3">
      {/* Netflix Logo */}
      <img
        className="h-6 md:h-10"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />


      {/* Right Section: Button + User Avatar */}
      {user && (<div className="flex items-center gap-4">
        <button onClick={UserSignOut} className="bg-red-600 hover:bg-red-700 transition px-2 md:px-4 py-1 md:py-2 rounded-md text-white font-bold">
          Sign Out
        </button>
        <img
          className=" h-6 w-6 md:h-10 md:w-10 rounded-full border-2 border-white cursor-pointer"
          src={userImage}
          alt="User"
        />
      </div>)}

    </div>
  );
};

export default Header;
