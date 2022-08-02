import React,{useState} from "react";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const Course = () => {
  if (localStorage.getItem("active") == 1) {
    console.log("active");
    console.log(localStorage.getItem("name"));
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("photo"));
  } else {
    window.location.replace("/signIn");
  }
  const [time, setTime] = useState(0);
    const { id } = useParams();
    const courseCode=id;
    const [result, setResult] = useState([]);
     const [blog, setBlog] = useState("");
     const [qna, setQna] = useState("");
    const [bloggerName,setBloggerName]=useState("Anshu Kumar");
    const [bloggerBatch,setBloggerBatch]=useState("CS@2020");
    const setitem = (data) => {
      setResult([
        {
          data: data,
        },
      ]);
    };
     async function getCourseDetail() {
       try {
         const response = await fetch(
           // "https://arcane-brushlands-01906.herokuapp.com/api/read",
           `http://localhost:3020/api/courseDetail/${id}`
         );
         const data = await response.json();
         setitem(data.result);
         console.log(data.result);
        //  const re = data.result;

         console.log(result[0].data);
       } catch (err) {
         console.log(err);
       }
     }
        if(time==0){
       getCourseDetail();
       setTime(1);
     }

     async function AddReview(event) {
       event.preventDefault();
       try {
         const response = await fetch(
           //    "https://arcane-brushlands-01906.herokuapp.com/api/register",
           "http://localhost:3020/api/courses/review/add",
           {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify({
               courseCode,
               blog,
               photo: localStorage.getItem("photo"),
               bloggerBatch:localStorage.getItem("email"),
               bloggerName:localStorage.getItem("name"),
             }),
           }
         );
         const data = await response.json();
        //  console.log(data.result[data.result.length - 1]);
         
         setBlog("");
         getCourseDetail();
       } catch (err) {
         console.log(err);
       }

     }
   
     async function AddForum(event) {
       event.preventDefault();
       try {
         const response = await fetch(
           //    "https://arcane-brushlands-01906.herokuapp.com/api/register",

           "http://localhost:3020/api/courses/forum/add",
           {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify({
               courseCode,
               blog: qna,
               photo: localStorage.getItem("photo"),
               bloggerName:localStorage.getItem("name"),
             }),
           }
         );
         const data = await response.json();
         console.log(data);
         
         setQna("");
         getCourseDetail();
       } catch (err) {
         console.log(err);
       }

     }
   



  return (
    <div className="">
      <NavBar />
      <div className="sm:p-10 p-5 text-white">
        <h3 className="text-center yell text-3xl">
          {result.length != 0 && <>{result[0].data[0].courseName} </>}
        </h3>
        <div className="flex justify-between">
          <div className="text-2xl content-between mt-10">
            <h3>
              course instructor : &nbsp;
              {result.length != 0 && <>{result[0].data[0].instructorName} </>}
            </h3>
            <h3 className="mt-10">course code : {courseCode}</h3>
          </div>
          {result.length!=0 && (
            <>
              <img
                src={result[0].data[0].photo}
                // src=""
                className="w-1/5    rounded-md"
              ></img>
            </>
          )}
        </div>
        <h2 className="text-3xl mt-10">About Course</h2>
        <p className="mt-5">
          
          {result.length != 0 && <>{result[0].data[0].about} </>}
        </p>

        <h2 className="text-3xl mt-10 ">Student Review</h2>

        <div className="flex flex-wrap mt-10  ">
          {result.length != 0 && (
            <>
              {result[0].data[0].review.map((value) => (
                <div
                  className="p-6 sm:w-2/5 mr-10 mt-5 overflow-hidden"
                  style={{ backgroundColor: "#292D2B" }}
                >
                  <p>{value.blog}</p>
                  <div className="flex mt-3">
                    <img className="w-10 rounded-full h-10" src={value.photo} />
                    <div className="ml-4">
                      <div className="flex justify-between ">
                        {value.bloggerName}
                      </div>
                      {value.bloggerBatch}
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="flex mt-10 ">
          <form onSubmit={AddReview}>
            <input
              placeholder="Give your review"
              className="w-72 border-2 h-20 border-zinc-400  p-3 bg-black rounded-lg"
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

        <h3 className="text-3xl mt-7"> Student Q & A</h3>
        <div className="bg-black p-5 mt-10 rounded-md">
          {result.length != 0 && (
            <>
              {result[0].data[0].forum.map((value) => (
                <div className="flex ml-4 mb-4">
                  <img className="w-10 rounded-full h-10" src={value.photo} />
                  <div>
                    <div className="flex justify-between ml-4">
                      {value.bloggerName} &nbsp;{value.date}
                    </div>
                    <h2 className="ml-4">{value.blog}</h2>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <form onSubmit={AddForum}>
          <div className="flex mt-4 justify-between">
            <input
              className="w-4/5 h-10 rounded-md p-3 text-black"
              placeholder="Q & A"
              value={qna}
              onChange={(e) => setQna(e.target.value)}
              type="text"
              required
            ></input>
            <button className="">
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="ml-2 text-xl bg-blue-500 p-3 rounded-full"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Course;
