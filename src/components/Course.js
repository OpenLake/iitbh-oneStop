import React from "react";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const Course = () => {
    const { id } = useParams();
  return (
    <div className="">
      <NavBar />
      <div className="p-10 text-white">
        <h3 className="text-center yell text-3xl">Operating Systems</h3>
        <div className="flex justify-between">
          <div className="text-2xl content-between mt-10">
            <h3>course instructor : Dr. Anand Baswade</h3>
            <h3 className="mt-10">course code : {id}</h3>
          </div>
          <img src="anandSir.png" className="w-1/5    rounded-md"></img>
        </div>
        <h2 className="text-3xl mt-10">About Course</h2>
        <p className="mt-5">
          Sagittis purus donec nam odio ornare dolor. Et nunc, faucibus nisl nam
          a leo auctor. Commodo non iaculis condimentum nec odio feugiat in
          risus. Quis ultrices at lacus, cras. In nulla at nullam mauris tellus
          et. Adipiscing libero malesuada vitae orci tellus.
        </p>

        <h2 className="text-3xl mt-10 ">Student Review</h2>

        <div className="flex flex-wrap mt-10  ">
          <div
            className="p-6 w-2/5 mr-10 mt-5"
            style={{ backgroundColor: "#292D2B" }}
          >
            <p>
              Lectus praesent orci nullam massa dictum quis. Tellus sed duis
              nunc amet ut eu eu. Sed nunc nullam integer est varius. Dolor
              consectetur ac risus, vulputate aliquam sapien aliquet duis. Eget
              ipsum nec
            </p>
            <div className="flex mt-3">
              <img
                className="w-10 rounded-full h-10"
                src="https://picsum.photos/200/300"
              />
              <div className="ml-4">
                <div className="flex justify-between ">Sanat Tudu</div>
                DSAI
              </div>
            </div>
          </div>
          <div
            className="p-6 w-2/5 mr-10 mt-5"
            style={{ backgroundColor: "#292D2B" }}
          >
            <p>
              Lectus praesent orci nullam massa dictum quis. Tellus sed duis
              nunc amet ut eu eu. Sed nunc nullam integer est varius. Dolor
              consectetur ac risus, vulputate aliquam sapien aliquet duis. Eget
              ipsum nec
            </p>
            <div className="flex mt-3">
              <img
                className="w-10 rounded-full h-10"
                src="https://picsum.photos/200/300"
              />
              <div className="ml-4">
                <div className="flex justify-between ">Sanat Tudu</div>
                DSAI
              </div>
            </div>
          </div>
          <div
            className="p-6 w-2/5 mr-10 mt-5"
            style={{ backgroundColor: "#292D2B" }}
          >
            <p>
              Lectus praesent orci nullam massa dictum quis. Tellus sed duis
              nunc amet ut eu eu. Sed nunc nullam integer est varius. Dolor
              consectetur ac risus, vulputate aliquam sapien aliquet duis. Eget
              ipsum nec
            </p>
            <div className="flex mt-3">
              <img
                className="w-10 rounded-full h-10"
                src="https://picsum.photos/200/300"
              />
              <div className="ml-4">
                <div className="flex justify-between ">Sanat Tudu </div>
                DSAI
              </div>
            </div>
          </div>
          <div
            className="p-6 w-2/5 mr-10 mt-5"
            style={{ backgroundColor: "#292D2B" }}
          >
            <p>
              Lectus praesent orci nullam massa dictum quis. Tellus sed duis
              nunc amet ut eu eu. Sed nunc nullam integer est varius. Dolor
              consectetur ac risus, vulputate aliquam sapien aliquet duis. Eget
              ipsum nec
            </p>
            <div className="flex mt-3">
              <img
                className="w-10 rounded-full h-10"
                src="https://picsum.photos/200/300"
              />
              <div className="ml-4">
                <div className="flex justify-between ">Sanat Tudu</div>
                DSAI
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-3xl mt-7"> Student Forum</h3>
        <div className="bg-black p-5 mt-10 rounded-md">
          <div className="flex ml-4 mb-4">
            <img
              className="w-10 rounded-full h-10"
              src="https://picsum.photos/200/300"
            />
            <div>
              <div className="flex justify-between ml-4">Sanat Tudu 17:20</div>
              <h2 className="ml-4">
                aesent orci nullam massa dictum quis. Tellus sed duis nunc amet
                ut eu eu. Sed nunc nullam integer est varius. Dolor consectetur
                ac risus, vulputate aliquam sapien aliquet duis. Eget ipsum nec
                aesent orci nullam massa dictum quis. Tellus sed duis nunc amet
                ut eu eu. Sed nunc nullam integer est varius. Dolor consectetur
                ac risus, vulputate aliquam sapien aliquet duis. Eget ipsum nec
                aesent orci nullam massa dictum quis. Tellus sed duis nunc amet
                ut eu eu. Sed nunc nullam integer est varius. Dolor consectetur
                ac risus, vulputate aliquam sapien aliquet duis. Eget ipsum nec
              </h2>
            </div>
          </div>
          <div className="flex ml-4 mb-4">
            <img
              className="w-10 rounded-full h-10"
              src="https://picsum.photos/200/300"
            />
            <div>
              <div className="flex justify-between ml-4">Sanat Tudu 17:20</div>
              <h2 className="ml-4">Message</h2>
            </div>
          </div>
          <div className="flex ml-4 mb-4">
            <img
              className="w-10 rounded-full h-10"
              src="https://picsum.photos/200/300"
            />
            <div>
              <div className="flex justify-between ml-4">Sanat Tudu 17:20</div>
              <h2 className="ml-4">Message</h2>
            </div>
          </div>
          <div className="flex ml-4 mb-4">
            <img
              className="w-10 rounded-full h-10"
              src="https://picsum.photos/200/300"
            />
            <div>
              <div className="flex justify-between ml-4">Sanat Tudu 17:20</div>
              <h2 className="ml-4">Message</h2>
            </div>
          </div>
        </div>
        <div className="flex mt-4 justify-between">
          <input
            className="w-4/5 h-10 rounded-md p-3 text-black"
            placeholder="message"
          ></input>
          <button className="">
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="ml-2 text-xl bg-blue-500 p-3 rounded-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
