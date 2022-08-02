import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { authentication } from "../firebase/Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const SignIn = () => {
   const [isAuthenticated, setIsAuthenticated] = useState(0);
   const [isFailed, setIsFailed] = useState(0);
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [photo, setPhoto] = useState("");
  const authenticate = (user) =>{
    setIsAuthenticated(1);
    setIsFailed(0);
    console.log(user);
    setName(user.displayName);
    setEmail(user.email);
    setPhoto(user.photoURL);
    localStorage.setItem("active",1);
    localStorage.setItem("name",user.displayName);
    localStorage.setItem("email",user.email);
    localStorage.setItem("photo", user.photoURL);
    
    console.log("authenticted");
    window.location.replace("/");   

  }
  const loginWithFirebase =()=>{
      const provider = new GoogleAuthProvider();
      signInWithPopup(authentication,provider)
      .then((result)=>{
        console.log(result.user.displayName);
         const regex1 = /@iitbhilai.ac.in/;
         const email = result.user.email;

         console.log(email.match(regex1));
         if((email.match(regex1))||1){
           authenticate(result.user);
         }
         else{
           setIsFailed(1);
         }


       })
      .catch((err)=>{
        console.log(err);
      })
  }
 
  
  return (
    <div className="">
      <Link to="/">
        <h6 className="yell text-3xl ml-6 mt-7 font-bold ">IIT BHILAI</h6>
      </Link>
      <div className="center text-white bg-black sm:w-1/3 sm:h-1/3 rounded-lg p-3">
        <div className="flex justify-between">
          <div>
            <h3>Welcome</h3>
            <h3 className="text-2xl text-white">Sign In</h3>
          </div>
          <Link to="/">
            <FontAwesomeIcon
              icon={faXmark}
              className="text-2xl  mb-10 text-white "
            />
          </Link>
        </div>

        <form className="p-2 mt-10 ">
          {/* <input
            placeholder="Phone Number"
            type="number"
            className="w-full h-10 bg-black mb-5 text-white border-2 border-white text-sm rounded-lg p-3 "
          ></input>
          <input
            placeholder="Password"
            type="password"
            className="w-full h-10 bg-black text-white border-2 border-white text-sm rounded-lg p-3"
          ></input>
          <Link to="" className="">
            <h2 className="text-right mt-2 font-light">Forgot password?</h2>
          </Link>
          <button
            type="submit"
            className="bg-yell w-full text-black border-white h-10 rounded-md mt-3"
          >
            Continue
          </button> */}
          <button
            type="button"
            onClick={loginWithFirebase}
            className="bg-blue-900 w-full text-white border-2 border-white sm:h-10 rounded-md mt-3"
          >
            Login with google
          </button>
          {isFailed == 1 && (
            <>
              <h2 className="text-red-500 mt-5">*Please Login only with IIT BHILAI account</h2>
            </>
          )}
        </form>
        {/* <div className="p-2">
          <h2 className="text-center ">Don't have an account?</h2>
          <button
            type="button"
            className="bg-yell w-full text-black border-white h-10 rounded-md mt-3"
          >
            Sign Up
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default SignIn;
