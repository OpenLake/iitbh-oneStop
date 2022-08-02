import React from "react";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const Chats = () => {
    async function getMassage() {
      try {
        const response = await fetch(
          // "https://arcane-brushlands-01906.herokuapp.com/api/read",
          "http://localhost:3020/api/read"
        );
        const data = await response.json();

      console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
  return (
    <div className="">
      <NavBar />
      <div className="p-16 text-white  ">
        <h2 className="text-3xl">Chat with your Freinds</h2>
        <div className="flex mt-10 ">
          <input
            placeholder="Message"
            className="w-72 border-2 border-zinc-400  p-3 bg-black rounded-lg"
          ></input>
          <button className="bg-yell pl-4 pr-4 text-black ml-10 rounded-full ">
            <FontAwesomeIcon icon={faCircleArrowUp} className="mr-2 text-xl" />
            SEND
          </button>
        </div>
        <button className="bg-yell pl-4 pr-4 pt-2 pb-2 text-black mt-10 rounded-full ">
          <FontAwesomeIcon icon={faArrowsRotate} className="mr-2 text-xl" />
          Refresh
        </button>
        <h3 className="text-xl mt-7"> Recent Activity</h3>
        <div className="bg-black p-5 mt-10 rounded-md">
          <div className="flex">
            <img
              className="w-10 rounded-full h-10"
              src="https://picsum.photos/200/300"
            />
            <div>
            <div className="flex justify-between ml-4">
                Sanat Tudu
                17:20
            </div>
            <h2 className="ml-4">Message</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
