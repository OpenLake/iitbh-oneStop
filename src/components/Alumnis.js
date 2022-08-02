import React, { useState } from "react";
import NavBar from "./NavBar";

const Alumni = () => {
  if (localStorage.getItem("active") == 1) {
    console.log("active");
    console.log(localStorage.getItem("name"));
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("photo"));
  } else {
    window.location.replace("/signIn");
  }
  const [alumniName, setAlumniName] = useState("");
  const [placedAt, setPlacedAt] = useState("");
  const [about, setAbout] = useState("");
  const [blog, setBlog] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [time, setTime] = useState(0);
  const [time2, setTime2] = useState(0);
  const [result, setResult] = useState([]);
  const [resultBlog, setResultBlog] = useState([]);
  async function AddBlog(event) {
    var f = 0;
    event.preventDefault();
    var ph;
    result[0].data.map((v) => {
      if (
        v.email == localStorage.getItem("email") ||
        localStorage.getItem("email") == "anshukumar@iitbhilai.ac.in"
      ) {
        f = 1;
      }
    });
    if (f) {
      try {
        const response = await fetch(
          //    "https://arcane-brushlands-01906.herokuapp.com/api/register",
          "http://localhost:3020/api/alumni/blog/add",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              alumniName: localStorage.getItem("name"),
              message: blog,
              photo: localStorage.getItem("photo"),
            }),
          }
        );
        const data = await response.json();
        //  console.log(data.result[data.result.length - 1]);

        setBlog("");
        getBlog();
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Only Alumni can add blog here");
      setBlog("");
    }
  }
  const setitem = (data) => {
    setResult([
      {
        data: data,
      },
    ]);
  };
  const setitem2 = (data) => {
    setResultBlog([
      {
        data: data,
      },
    ]);
  };
  async function getAlumniDetail() {
    try {
      const response = await fetch(
        // "https://arcane-brushlands-01906.herokuapp.com/api/read",
        `http://localhost:3020/api/alumni/read`
      );
      const data = await response.json();
      setitem(data.result);
      console.log(data.result);
      //  const re = data.result;

      // console.log(result[0].data);
    } catch (err) {
      console.log(err);
    }
  }
  if (time == 0) {
    getAlumniDetail();
    setTime(1);
  }
  async function getBlog() {
    var f = 0;

    try {
      const response = await fetch(
        // "https://arcane-brushlands-01906.herokuapp.com/api/read",
        `http://localhost:3020/api/alumni/blog/read`
      );
      const data = await response.json();
      setitem2(data.result);
      console.log(data.result);
      //  const re = data.result;

      // console.log(result[0].data);
    } catch (err) {
      console.log(err);
    }
  }
  if (time2 == 0) {
    getBlog();
    setTime2(1);
  }
  return (
    <div className="">
      <NavBar />

      <body>
        <div className="imageContainer">
          <img src="alumni.png" />

          <div className="caption center">IIT BHILAI JEMS</div>
        </div>

        <div className="container">
          <div className="team">
            {result.length != 0 && (
              <>
                {result[0].data &&
                  result[0].data.map((alumni) => (
                    <>
                      <div className="member">
                        <img
                          src={
                            "http://localhost:3020/image/" +
                            alumni.photo
                          }
                        ></img>
                        <h3 style={{ color: "#fff" }}>{alumni.alumniName}</h3>
                        <span>{alumni.placedAt}</span>
                        <p>{alumni.about}</p>

                        <a
                          className="text-black bg-white p-3 rounded-md"
                          href={alumni.linkedInUrl}
                        >
                          Connect
                        </a>
                      </div>
                    </>
                  ))}
              </>
            )}
          </div>
        </div>
        <div className="sm:p-16 p-5">
          <div className="flex flex-wrap mt-10  ">
            {resultBlog.length != 0 && (
              <>
                {resultBlog[0].data.map((value) => (
                  <div
                    className="p-6 sm:w-2/5 mr-10 mt-5 overflow-hidden"
                    style={{ backgroundColor: "#292D2B" }}
                  >
                    <p>{value.message}</p>
                    <div className="flex mt-3">
                      <img
                        className="w-10 rounded-full h-10"
                        src={value.photo}
                      />
                      <div className="ml-4">
                        <div className="flex justify-between ">
                          {value.alumniName}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="flex mt-10 ">
            <form onSubmit={AddBlog}>
              <input
                placeholder="Add blogs(for alumni only)"
                className="w-72 border-2 h-20 border-zinc-400  p-3 bg-black rounded-lg text-white"
                value={blog}
                onChange={(e) => setBlog(e.target.value)}
                type="text"
                required
              ></input>
              <button
                type="submit"
                className="bg-yell mt-6 p-3 pl-4 pr-4 text-black sm:ml-10 rounded-full "
              >
                POST
              </button>
            </form>
          </div>
        </div>
        {(localStorage.getItem("email") == "anshukumar@iitbhilai.ac.in" ||
          localStorage.getItem("email") == "shivendu@iitbhilai.ac.in" ||
          localStorage.getItem("email") == "sudhirsharma@iitbhilai.ac.in") && (
          <>
            <div className="p-10 ">
              <h1 class="text-white text-2xl ml-15">
                Add Alumni
                <p className="text-sm"></p>
              </h1>
              <form
                action="http://localhost:3020/upload/alumni"
                method="POST"
                enctype="multipart/form-data"
              >
                <div class=" ">
                  <input name="url" value={window.location.href} hidden></input>

                  <input
                    className="p-3 bg-black text-white rounded-md border-2 border-gray-600 h-12 mt-3 sm:mt-10 w-3/4 sm:w-1/3"
                    name="alumniName"
                    value={alumniName}
                    onChange={(e) => setAlumniName(e.target.value)}
                    type="text"
                    placeholder="Name"
                    required
                  ></input>

                  <input
                    className="p-3 bg-black text-white rounded-md border-2 border-gray-600 h-12 sm:mt-10 mt-3 w-3/4 sm:w-1/3 sm:ml-4"
                    name="placedAt"
                    value={placedAt}
                    onChange={(e) => setPlacedAt(e.target.value)}
                    type="text"
                    placeholder="Placed At"
                    required
                  ></input>
                  <br></br>
                  <input
                    className="p-3 bg-black text-white rounded-md border-2 border-gray-600 h-12 sm:mt-10 mt-3 w-3/4 sm:w-1/3 "
                    name="about"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    type="text"
                    placeholder="About"
                    required
                  ></input>
                  <input
                    className="p-3 bg-black text-white rounded-md border-2 border-gray-600 h-12 sm:mt-10 mt-3 w-3/4 sm:w-1/3 sm:ml-4"
                    name="linkedInUrl"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    type="text"
                    placeholder="LinkedIn URL"
                    required
                  ></input>
                  <br></br>
                  <input
                    className="p-3 bg-black text-white rounded-md border-2 border-gray-600 h-12 mt-3 sm:mt-10 w-3/4 sm:w-1/3"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    required
                  ></input>

                  <div className=" mt-7 sm:ml-5 ">
                    <label for="file" className="text-white text-xl  ml-3">
                      Upload Image
                    </label>
                    <br></br>
                    <input
                      className="text-white sm:ml-3 mt-2"
                      type="file"
                      name="file"
                      id="file"
                      required
                    />
                  </div>
                </div>
                <button
                  className="bg-yell mt-6 text-lg flex  text-black pl-3 pr-3 p-1 rounded-xl"
                  type="submit"
                >
                  ADD
                </button>
              </form>
            </div>
          </>
        )}
        {!(
          localStorage.getItem("email") == "anshukumar@iitbhilai.ac.in" ||
          localStorage.getItem("email") == "shivendu@iitbhilai.ac.in" ||
          localStorage.getItem("email") == "sudhirsharma@iitbhilai.ac.in"
        ) && (
          <>
            <div className="p-10 opacity-20 ">
              <h1 class="text-white text-2xl ml-15">
                Add Alumni
                <p className="text-sm">
                  (*You must have authentication for adding new alumni)
                </p>
              </h1>
              <form
                action="http://localhost:3020/upload/alumni"
                method="POST"
                enctype="multipart/form-data"
              >
                <div class=" ">
                  <input name="url" value={window.location.href} hidden></input>
                  <input
                    className="p-3 bg-black text-white rounded-md border-2 border-gray-600 h-12 mt-3 sm:mt-10 w-3/4 sm:w-1/3"
                    name="alumniName"
                    value={alumniName}
                    onChange={(e) => setAlumniName(e.target.value)}
                    type="text"
                    placeholder="Name"
                    required
                    disabled
                  ></input>

                  <input
                    className="p-3 bg-black text-white rounded-md border-2 border-gray-600 h-12 sm:mt-10 mt-3 w-3/4 sm:w-1/3 sm:ml-4"
                    name="placedAt"
                    value={placedAt}
                    onChange={(e) => setPlacedAt(e.target.value)}
                    type="text"
                    placeholder="Placed At"
                    required
                    disabled
                  ></input>
                  <br></br>
                  <input
                    className="p-3 bg-black text-white rounded-md border-2 border-gray-600 h-12 sm:mt-10 mt-3 w-3/4 sm:w-1/3 "
                    name="about"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    type="text"
                    placeholder="About"
                    required
                    disabled
                  ></input>
                  <input
                    className="p-3 bg-black text-white rounded-md border-2 border-gray-600 h-12 sm:mt-10 mt-3 w-3/4 sm:w-1/3 sm:ml-4"
                    name="linkedInUrl"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    type="text"
                    placeholder="LinkedIn URL"
                    required
                    disabled
                  ></input>
                  <br></br>
                  <input
                    className="p-3 bg-black text-white rounded-md border-2 border-gray-600 h-12 mt-3 sm:mt-10 w-3/4 sm:w-1/3"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    required
                  ></input>

                  <div className=" mt-7 sm:ml-5 ">
                    <label for="file" className="text-white text-xl  ml-3">
                      Upload Image
                    </label>
                    <br></br>
                    <input
                      className="text-white sm:ml-3 mt-2"
                      type="file"
                      name="file"
                      id="file"
                      required
                      disabled
                    />
                  </div>
                </div>
                <button
                  className="bg-yell mt-6 text-lg flex  text-black pl-3 pr-3 p-1 rounded-xl"
                  type="submit"
                  disabled
                >
                  ADD
                </button>
              </form>
            </div>
          </>
        )}
      </body>
    </div>
  );
};

export default Alumni;
