import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Courses = () => {
  if (localStorage.getItem("active") == 1) {
    console.log("active");
    console.log(localStorage.getItem("name"));
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("photo"));
  } else {
    window.location.replace("/signIn");
  }
  const [time, setTime] = useState(0);
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const setitem = (data) => {
    setResult([
      {
        data: data,
      },
    ]);
  };
  async function getCourses() {
    try {
      const response = await fetch(
        // "https://arcane-brushlands-01906.herokuapp.com/api/read",
        "http://localhost:3020/api/courses/read"
      );
      const data = await response.json();
      console.log(data);
      setitem(data.result);
      console.log(result[0].data);
      const re = data.result;

      // console.log(typeof(re));
    } catch (err) {
      console.log(err);
    }
  }
  if (time == 0) {
    getCourses();
    setTime(1);
  }

  return (
    <div className="">
      <NavBar />
      <div className="sm:p-20 p-8 text-white  ">
        <input
          className="p-2 pl-3 w-3/4 sm:w-1/2 rounded-lg border-2 bg-white text-black border-slate-500"
          type="search"
          name="search"
          placeholder="Search your Course"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={getCourses}
          className="bg-yell sm:ml-4 text-black p-2 mt-3 pl-3 pr-3  rounded-md "
        >
          Search
        </button>
        <h1 className="text-4xl font-semibold mt-10">Computer Science</h1>
        <div className="flex flex-wrap">
          {result.length != 0 && (
            <>
              {result[0].data.map((value) => (
                <>
                  {value.courseCode[0] == "C" && value.courseCode[1] == "S" && (
                    <>
                      {(value.courseName
                        .toLocaleLowerCase()
                        .replace(/\s/g, "")
                        .match(search.toLocaleLowerCase()) != null ||
                        value.courseCode
                          .toLocaleLowerCase()
                          .replace(/\s/g, "")
                          .match(search.toLocaleLowerCase()) != null) && (
                        <>
                          <div
                            style={{ backgroundColor: "#292D2B" }}
                            className="p-4 pl-6 pb-10 mt-10 mr-10 sm:w-1/4 rounded-md"
                          >
                            <h4 className="text-3xl  mt-8 mb-3 w-1/2">
                              {value.courseName}
                            </h4>
                            <div className="flex">
                              <h3>
                                {value.courseCode} | Credits : {value.credits}
                              </h3>
                              <Link to={`/course/${value.courseCode}`}>
                                <button className="bg-black rounded-lg pl-2 pr-2 ml-4 border-2 ">
                                  Explore
                                </button>
                              </Link>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </>
              ))}
            </>
          )}
        </div>
        <h1 className="text-4xl font-semibold mt-10">Electrical Engineering</h1>
        <div className="flex flex-wrap">
          {result.length != 0 && (
            <>
              {result[0].data.map((value) => (
                <>
                  {value.courseCode[0] == "E" && value.courseCode[1] == "E" && (
                    <>
                      {(value.courseName
                        .toLocaleLowerCase()
                        .replace(/\s/g, "")
                        .match(search.toLocaleLowerCase()) != null ||
                        value.courseCode
                          .toLocaleLowerCase()
                          .replace(/\s/g, "")
                          .match(search.toLocaleLowerCase()) != null) && (
                        <>
                          <div
                            style={{ backgroundColor: "#292D2B" }}
                            className="p-4 pl-6 pb-10 mt-10 mr-10 sm:w-1/4 rounded-md"
                          >
                            <h4 className="text-3xl  mt-8 mb-3 w-1/2">
                              {value.courseName}
                            </h4>
                            <div className="flex">
                              <h3>
                                {value.courseCode} | Credits : {value.credits}
                              </h3>
                              <Link to={`/course/${value.courseCode}`}>
                                <button className="bg-black rounded-lg pl-2 pr-2 ml-4 border-2 ">
                                  Explore
                                </button>
                              </Link>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </>
              ))}
            </>
          )}
        </div>
        <h1 className="text-4xl font-semibold mt-10">
          Data Science and Artificial Intelligence
        </h1>
        <div className="flex flex-wrap">
          {result.length != 0 && (
            <>
              {result[0].data.map((value) => (
                <>
                  {value.courseCode[0] == "D" && value.courseCode[1] == "S" && (
                    <>
                      {(value.courseName
                        .toLocaleLowerCase()
                        .replace(/\s/g, "")
                        .match(search.toLocaleLowerCase()) != null ||
                        value.courseCode
                          .toLocaleLowerCase()
                          .replace(/\s/g, "")
                          .match(search.toLocaleLowerCase()) != null) && (
                        <>
                          <div
                            style={{ backgroundColor: "#292D2B" }}
                            className="p-4 pl-6 pb-10 mt-10 mr-10 sm:w-1/4 rounded-md"
                          >
                            <h4 className="text-3xl  mt-8 mb-3 w-1/2">
                              {value.courseName}
                            </h4>
                            <div className="flex">
                              <h3>
                                {value.courseCode} | Credits : {value.credits}
                              </h3>
                              <Link to={`/course/${value.courseCode}`}>
                                <button className="bg-black rounded-lg pl-2 pr-2 ml-4 border-2 ">
                                  Explore
                                </button>
                              </Link>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </>
              ))}
            </>
          )}
        </div>
        <h1 className="text-4xl font-semibold mt-10">Mechanical Engineering</h1>
        <div className="flex flex-wrap">
          {result.length != 0 && (
            <>
              {result[0].data.map((value) => (
                <>
                  {value.courseCode[0] == "M" && value.courseCode[1] == "E" && (
                    <>
                      {(value.courseName
                        .toLocaleLowerCase()
                        .replace(/\s/g, "")
                        .match(search.toLocaleLowerCase()) != null ||
                        value.courseCode
                          .toLocaleLowerCase()
                          .replace(/\s/g, "")
                          .match(search.toLocaleLowerCase()) != null) && (
                        <>
                          <div
                            style={{ backgroundColor: "#292D2B" }}
                            className="p-4 pl-6 pb-10 mt-10 mr-10 sm:w-1/4 rounded-md"
                          >
                            <h4 className="text-3xl  mt-8 mb-3 w-1/2">
                              {value.courseName}
                            </h4>
                            <div className="flex">
                              <h3>
                                {value.courseCode} | Credits : {value.credits}
                              </h3>
                              <Link to={`/course/${value.courseCode}`}>
                                <button className="bg-black rounded-lg pl-2 pr-2 ml-4 border-2 ">
                                  Explore
                                </button>
                              </Link>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </>
              ))}
            </>
          )}
        </div>
        <h1 className="text-4xl font-semibold mt-10">Institute Course</h1>
        <div className="flex flex-wrap">
          {result.length != 0 && (
            <>
              {result[0].data.map((value) => (
                <>
                  {value.courseCode[0] == "I" && value.courseCode[1] == "C" && (
                    <>
                      {(value.courseName
                        .toLocaleLowerCase()
                        .replace(/\s/g, "")
                        .match(search.toLocaleLowerCase()) != null ||
                        value.courseCode
                          .toLocaleLowerCase()
                          .replace(/\s/g, "")
                          .match(search.toLocaleLowerCase()) != null) && (
                        <>
                          <div
                            style={{ backgroundColor: "#292D2B" }}
                            className="p-4 pl-6 pb-10 mt-10 mr-10 sm:w-1/4 rounded-md"
                          >
                            <h4 className="text-3xl  mt-8 mb-3 w-1/2">
                              {value.courseName}
                            </h4>
                            <div className="flex">
                              <h3>
                                {value.courseCode} | Credits : {value.credits}
                              </h3>
                              <Link to={`/course/${value.courseCode}`}>
                                <button className="bg-black rounded-lg pl-2 pr-2 ml-4 border-2 ">
                                  Explore
                                </button>
                              </Link>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </>
              ))}
            </>
          )}
        </div>
        <h1 className="text-4xl font-semibold mt-10">Create Art</h1>
        <div className="flex flex-wrap">
          {result.length != 0 && (
            <>
              {result[0].data.map((value) => (
                <>
                  {value.courseCode[0] == "C" && value.courseCode[1] == "A" && (
                    <>
                      {(value.courseName
                        .toLocaleLowerCase()
                        .replace(/\s/g, "")
                        .match(search.toLocaleLowerCase()) != null ||
                        value.courseCode
                          .toLocaleLowerCase()
                          .replace(/\s/g, "")
                          .match(search.toLocaleLowerCase()) != null) && (
                        <>
                          <div
                            style={{ backgroundColor: "#292D2B" }}
                            className="p-4 pl-6 pb-10 mt-10 mr-10 sm:w-1/4 rounded-md"
                          >
                            <h4 className="text-3xl  mt-8 mb-3 w-1/2">
                              {value.courseName}
                            </h4>
                            <div className="flex">
                              <h3>
                                {value.courseCode} | Credits : {value.credits}
                              </h3>
                              <Link to={`/course/${value.courseCode}`}>
                                <button className="bg-black rounded-lg pl-2 pr-2 ml-4 border-2 ">
                                  Explore
                                </button>
                              </Link>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </>
              ))}
            </>
          )}
        </div>
        <h1 className="text-4xl font-semibold mt-10">Libral Art</h1>
        <div className="flex flex-wrap">
          {result.length != 0 && (
            <>
              {result[0].data.map((value) => (
                <>
                  {value.courseCode[0] == "L" && value.courseCode[1] == "A" && (
                    <>
                      {(value.courseName
                        .toLocaleLowerCase()
                        .replace(/\s/g, "")
                        .match(search.toLocaleLowerCase()) != null ||
                        value.courseCode
                          .toLocaleLowerCase()
                          .replace(/\s/g, "")
                          .match(search.toLocaleLowerCase()) != null) && (
                        <>
                          <div
                            style={{ backgroundColor: "#292D2B" }}
                            className="p-4 pl-6 pb-10 mt-10 mr-10 sm:w-1/4 rounded-md"
                          >
                            <h4 className="text-3xl  mt-8 mb-3 w-1/2">
                              {value.courseName}
                            </h4>
                            <div className="flex">
                              <h3>
                                {value.courseCode} | Credits : {value.credits}
                              </h3>
                              <Link to={`/course/${value.courseCode}`}>
                                <button className="bg-black rounded-lg pl-2 pr-2 ml-4 border-2 ">
                                  Explore
                                </button>
                              </Link>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </>
              ))}
            </>
          )}
        </div>
        {/* <button className="bg-yell mt-10 text-black text-xl pl-7 pr-7 pt-4 pb-4 rounded-full">
          Load More
        </button> */}
      </div>
    </div>
  );
};

export default Courses;
