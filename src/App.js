import React, { Component } from "react";
import Courses from "./components/Courses";
import Chats from "./components/Chats";
import Home from "./components/Home";
import LostFound from "./components/Lost&Found";
import Alumni from "./components/Alumnis";
import Course from "./components/Course";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div className="" style={{ backgroundColor: "#191C1B" }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/course/:id" element={<Course />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/chats" element={<Chats />} />
          <Route exact path="/alumni" element={<Alumni />} />
          <Route exact path="/lostfound" element={<LostFound />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
{/* <Link to={`blog/${id}`}>{title}</Link>; */}
// const { id } = useParams();