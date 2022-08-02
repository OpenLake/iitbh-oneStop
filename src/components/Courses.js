import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="">
      <NavBar />
      <div className="p-20 text-white  ">
        <h1 className="text-4xl font-semibold">Computer Science</h1>
        <div className="flex flex-wrap">
          <div
            style={{ backgroundColor: "#292D2B" }}
            className="p-4 pl-6 pb-10 mt-10 mr-10 w-1/4 rounded-md"
          >
            <h4 className="text-3xl  mt-8 mb-3 w-1/2">Operating Systems</h4>
            <div className="flex">
              <h3>CS250 | Credits : 6</h3>
              <Link to={`/course/${"CS250"}`}>
                <button className="bg-black rounded-lg pl-2 pr-2 ml-4 border-2 ">
                  Explore
                </button>
              </Link>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#292D2B" }}
            className="p-4 pl-6 pb-10 mt-10 mr-10 w-1/4 rounded-md"
          >
            <h4 className="text-3xl  mt-8 mb-3 w-1/2">Operating Systems</h4>
            <div className="flex">
              <h3>CS250 | Credits : 6</h3>
              <button className="bg-black rounded-lg pl-2 pr-2 ml-4 border-2 ">
                {" "}
                Explore
              </button>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#292D2B" }}
            className="p-4 pl-6 pb-10 mt-10 mr-10 w-1/4 rounded-md"
          >
            <h4 className="text-3xl  mt-8 mb-3 w-1/2">Operating Systems</h4>
            <div className="flex">
              <h3>CS250 | Credits : 6</h3>
              <button className="bg-black rounded-lg pl-2 pr-2 ml-4 border-2 ">
                {" "}
                Explore
              </button>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#292D2B" }}
            className="p-4 pl-6 pb-10 mt-10 mr-10 w-1/4 rounded-md"
          >
            <h4 className="text-3xl  mt-8 mb-3 w-1/2">Operating Systems</h4>
            <div className="flex">
              <h3>CS250 | Credits : 6</h3>
              <button className="bg-black rounded-lg pl-2 pr-2 ml-4 border-2 ">
                {" "}
                Explore
              </button>
            </div>
          </div>
        </div>
        <button className="bg-yell mt-10 text-black text-xl pl-7 pr-7 pt-4 pb-4 rounded-full">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Courses;
