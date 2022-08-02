import React, { useState } from "react";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

const LostFound = () => {
  if (localStorage.getItem("active") == 1) {
    console.log("active");
    console.log(localStorage.getItem("name"));
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("photo"));
  } else {
    window.location.replace("/signIn");
  }
  const [time, setTime] = useState(0);
  const [lostItem, setLostItem] = useState("");
  const [contact1, setContact1] = useState("");
  const [contact2, setContact2] = useState("");
  const [foundItem, setFoundItem] = useState("");
  const [result, setResult] = useState([]);
  const setitem = (data) => {
    console.log(data);
    setResult([
      {
        data: data,
      },
    ]);
    console.log(result);
  };
  async function getImages() {
    try {
      const response = await fetch(
        // "https://arcane-brushlands-01906.herokuapp.com/api/read",
        `http://localhost:3020/`
      );
      const data = await response.json();
      setitem(data.result);
      console.log(data);
      //  const re = data.result;

      console.log(result[0].data);
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteItem(key) {
    console.log("deleting");
    try {
      const response = await fetch(
        // "https://arcane-brushlands-01906.herokuapp.com/api/read",
        `http://localhost:3020/delete/${key}`
      );
      const data = await response.json();

      console.log(data);
      getImages();
      //  const re = data.result;
    } catch (err) {
      console.log(err);
    }
  }
  if (time == 0) {
    getImages();
    setTime(1);
  }
  const itemDone = (key, email) => {
    console.log("clicking");
    console.log(key);
    console.log(email);

    if (email == localStorage.getItem("email")) {
      deleteItem(key);
    } else {
      alert("The post must me posted by you!");
    }
  };
  return (
    <div className="">
      <NavBar />

      <div className="sm:p-10 p-3">
        <h1 class="text-white text-2xl ml-15">LOST ITEM</h1>
        <form
          action="http://localhost:3020/upload"
          method="POST"
          enctype="multipart/form-data"
        >
          <div class=" sm:flex">
            <input name="url" value={window.location.href} hidden></input>

            <input
              name="photo"
              value={localStorage.getItem("photo")}
              hidden
            ></input>
            <input
              name="receiverName"
              value={localStorage.getItem("name")}
              hidden
            ></input>
            <input name="founderName" value={""} hidden></input>
            <input
              name="email"
              value={localStorage.getItem("email")}
              hidden
            ></input>
            <input
              className="p-3 bg-black text-white rounded-md border-2 border-gray-600 h-12 mt-3 sm:mt-10 w-3/4 sm:w-1/3"
              name="item"
              value={lostItem}
              onChange={(e) => setLostItem(e.target.value)}
              type="text"
              placeholder="Item name & description"
              required
            ></input>
            <input
              className="p-3 bg-black text-white rounded-md border-2 border-gray-600 h-12 sm:mt-10 mt-3 w-3/4 sm:w-1/5 sm:ml-4"
              name="phone"
              value={contact2}
              onChange={(e) => setContact2(e.target.value)}
              type="number"
              placeholder="Your Contact"
              required
            ></input>

            <div className=" mt-7 sm:ml-5 ">
              <label for="file" className="text-white text-xl  ml-3">
                Upload an Image
              </label>
              <br></br>
              <input
                className="text-white sm:ml-3 mt-2"
                type="file"
                name="file"
                id="file"
              />
            </div>
          </div>
          <button
            className="bg-yell mt-6 text-lg flex  text-black pl-3 pr-3 p-1 rounded-xl"
            type="submit"
          >
            <FontAwesomeIcon icon={faCircleArrowUp} className="mr-2 mt-1 " />{" "}
            POST
          </button>
        </form>
        <h1 class="text-white text-2xl ml-15 mt-9 sm:mt-20">FOUND ITEM</h1>
        <form
          action="http://localhost:3020/upload"
          method="POST"
          enctype="multipart/form-data"
        >
          <div class=" sm:flex">
            <input name="url" value={window.location.href} hidden></input>
            <input
              name="email"
              value={localStorage.getItem("email")}
              hidden
            ></input>

            <input
              name="photo"
              value={localStorage.getItem("photo")}
              hidden
            ></input>
            <input
              name="founderName"
              value={localStorage.getItem("name")}
              hidden
            ></input>
            <input name="receiverName" value={""} hidden></input>
            <input
              className="p-3 bg-black text-white rounded-md border-2 border-gray-600 h-12 mt-5  sm:mt-10 w-3/4 sm:w-1/3"
              name="item"
              value={foundItem}
              onChange={(e) => setFoundItem(e.target.value)}
              type="text"
              placeholder="Item name & description"
              required
            ></input>
            <input
              className="p-3 bg-black text-white rounded-md border-2 border-gray-600 h-12 sm:mt-10 sm:w-1/5 sm:ml-4 w-3/4 mt-3"
              name="phone"
              value={contact1}
              onChange={(e) => setContact1(e.target.value)}
              type="number"
              placeholder="Your Contact"
              required
            ></input>

            <div className=" mt-7 sm:ml-5 ">
              <label for="file" className="text-white text-xl  ml-3">
                Upload an Image
              </label>
              <br></br>
              <input
                className="text-white sm:ml-3 mt-2"
                type="file"
                name="file"
                id="file"
              />
            </div>
          </div>
          <button
            className="bg-yell mt-6 text-lg flex  text-black pl-3 pr-3 p-1 rounded-xl"
            type="submit"
          >
            <FontAwesomeIcon icon={faCircleArrowUp} className="mr-2 mt-1 " />{" "}
            POST
          </button>
        </form>
        {result[0] && (
          <>
            {result[0].data.map((file) => (
              <>
                {file.isReceived == false && (
                  <>
                    <div className="bg-gray-300 sm:flex p-3 m-2 mt-5 sm:h-40 mb-10 rounded-sm">
                      <button
                        onClick={() => itemDone(file.itemPhoto, file.email)}
                        className="bg-green-500 p-3 rounded-md text-white h-10 "
                      >
                        Done
                      </button>
                      <img
                        className="h-35"
                        src={
                          "http://localhost:3020/image/" +
                          file.itemPhoto
                        }
                      ></img>
                      <h2 className="text-white text-xl bg-sky-700 mb-4 p-2 rounded-md  sm:mt-10 ml-6">
                        Item name & Desc <br></br>
                        {file.itemName}
                      </h2>
                      {file.founderName != "" && (
                        <>
                          <div className="bg-yellow-500 p-2 text-sm h-14 rounded-full sm:absolute sm:right-16 text-white">
                            <p className="ml-3"> Found on</p>
                            <p className="text-white  ml-3 ">{file.date}</p>
                          </div>
                        </>
                      )}
                      {file.receiverName != "" && (
                        <>
                          <div className="bg-red-500 p-2 text-sm h-14 rounded-full sm:absolute sm:right-16 text-white">
                            <p className="ml-3"> Lost on</p>
                            <p className="text-white  ml-3 ">{file.date}</p>
                          </div>
                        </>
                      )}

                      <div className="flex sm:absolute sm:right-16 mt-5 sm:mt-20 ml-10 bg-gray-700 p-3 h-16  rounded-md text-black">
                        <img
                          className="w-10 rounded-full h-10"
                          src={file.photo}
                        />
                        <div>
                          <p className="text-white  ml-3 ">
                            {file.receiverName == "" && <>{file.founderName}</>}
                            {file.founderName == "" && <>{file.receiverName}</>}
                          </p>

                          <p className="text-white text-sm ml-3 ">
                            {file.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default LostFound;
