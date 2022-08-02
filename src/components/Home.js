import React from "react";
import NavBar from "./NavBar";


const Home = () => {
  return (
    <div className="">
      <NavBar />
      <div className="flex p-10">
        <div className="w-2/5 mt-32 ml-32">
          <h3 className="text-white text-4xl ">
            Providing Students With All The <span className="yell">Help</span> They Need
          </h3>
          <div className="flex mt-10">
              <button className="text-black bg-yell rounded-md p-2 pl-4  pr-4" >Sign In</button>
              <button className="text-white bg-black rounded-md  p-2 pl-4  pr-4  ml-5">Sign Up</button>
          </div>
        </div>
        <img src="home.png" className="w-2/5"></img>
      </div>
    </div>
  );
};

export default Home;
