import React, { useState } from "react";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const Chats = () => {
  // var result=[{personName:"aa"}];
  if (localStorage.getItem("active") == 1) {
    console.log("active");
    console.log(localStorage.getItem("name"));
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("photo"));
  } else {
    window.location.replace("/signIn");
  }
  const [personName, setPersonName] = useState("Anshu kumar");

  const [message, setMessage] = useState("");
  const [result, setResult] = useState([]);
  const [time, setTime] = useState(0);
  const setitem = (data) => {
    setResult([
      {
        data: data,
      },
    ]);
  };
  async function SendMassage(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        //    "https://arcane-brushlands-01906.herokuapp.com/api/register",
        "http://localhost:3020/api/common/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            personName: localStorage.getItem("name"),
            message,
            photo: localStorage.getItem("photo"),
          }),
        }
      );
      const data = await response.json();
      console.log(data.result[data.result.length - 1]);
      getMassage();
      setMessage("");
    } catch (err) {
      console.log(err);
    }

    // const data = await response.json()
    // console.log(data)
  }
  async function getMassage() {
    try {
      const response = await fetch(
        // "https://arcane-brushlands-01906.herokuapp.com/api/read",
        "http://localhost:3020/api/common/read"
      );
      const data = await response.json();
      setitem(data.result);
      console.log(result[0].data);
      const re = data.result;

      // console.log(typeof(re));
    } catch (err) {
      console.log(err);
    }
  }
  if (time == 0) {
    getMassage();
    setTime(1);
  }

  // getMassage();
  return (
    <div className="">
      <NavBar />
      {/* <button onClick={() => setitem({name:"pp"})}>set</button> */}

      <div className="sm:p-16 pl-6 pt-0 text-white  ">
        <h2 className="text-3xl">Chat with your Freinds</h2>
        <div className="flex mt-10 ">
          <form onSubmit={SendMassage}>
            <input
              placeholder="Message"
              className="w-72 border-2 border-zinc-400  p-3 bg-black rounded-lg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              required
            ></input>
            <button
              type="submit"
              className="bg-yell pl-4 pr-4 pt-2 pb-2 mt-2 text-black sm:ml-10 rounded-full "
            >
              <FontAwesomeIcon
                icon={faCircleArrowUp}
                className="mr-2 text-xl"
              />
              SEND
            </button>
          </form>
        </div>
        <button
          onClick={getMassage}
          className="bg-yell pl-4 pr-4 pt-2 pb-2 text-black mt-10 rounded-full "
        >
          <FontAwesomeIcon icon={faArrowsRotate} className="mr-2 text-xl" />
          Refresh
        </button>
        <h3 className="text-xl mt-7"> Recent Activity</h3>
        <div className="bg-yell p-5 mt-10  rounded-md">
          {result.length != 0 && (
            <>
              {result[0].data.map((value) => (
                <div className=" sm:flex mb-5 bg-gray-700 p-3 rounded-t-md text-white">
                  <img className="w-10 rounded-full h-10" src={value.photo} />
                  <div>
                    <div className="sm:flex justify-between ml-4">
                      <p>{value.personName}</p>
                      <p className="sm:ml-10 text-sm sm:absolute sm:right-32">
                        {value.date}
                      </p>
                    </div>
                    <h2 className="ml-4 overflow-hidden ">{value.message}</h2>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chats;
