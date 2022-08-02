const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const { Blogs } = require("./models/userSchema");
const { Lost } = require("./models/userSchema");
const { Courses } = require("./models/userSchema");
const { CommonRoom } = require("./models/userSchema");
const { AlumniInteraction } = require("./models/userSchema");
app.use(cors());
app.use(express.json());
dotenv.config({ path: "../config.env" });
const port = process.env.PORT || 3020;
require("./db/conn");

/// courses #################################################################33
app.post("/api/courses/register", async (req, res) => {
  try {
    no = await Courses.find({ courseCode: req.body.courseCode }).count();
    if (no != 0) {
      res.json({ messege: "duplicate entry" });
    } else {
      try {
        const course = await Courses.create({
          courseName: req.body.courseName,
          courseCode: req.body.courseCode,
          instructorName: req.body.instructorName,
          topicsIncluded: req.body.topicsIncluded,
        });

        result = await Courses.find({});
        res.json({ status: "ok", result: result });
        try {
          const blog = await Blogs.create({
            courseCode: req.body.courseCode,
            courseName: req.body.courseName,
            instructorName: req.body.instructorName,
            about: req.body.about,
            review: [],
            forum: [],
          });
        } catch (err) {
          console.log(err);
          res.send(err);
        }
      } catch (err) {
        console.log(err);
        res.send(err);
      }
    }
  } catch (err) {
    res.send(err);
  }
});
app.get("/api/courses/read", async (req, res) => {
  try {
    result = await Courses.find({});
    res.json({ status: "ok", result: result });
  } catch (err) {
    res.send(err);
  }
});

app.post("/api/courses/review/add", async (req, res) => {
  var code = req.body.courseCode;
  try {
    const course = await Blogs.update(
      { courseCode: code },
      {
        $push: {
          review: {
            bloggerBatch: req.body.bloggerBatch,
            blog: req.body.blog,
            bloggerName: req.body.bloggerName,
          },
        },
      }
    );

    result = await Blogs.find({});
    res.json({ status: "ok", result: result });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
app.post("/api/courses/forum/add", async (req, res) => {
  var code = req.body.courseCode;
  try {
    const course = await Blogs.update(
      { courseCode: code },
      {
        $push: {
          forum: {
            date: req.body.date,
            blog: req.body.blog,
            bloggerName: req.body.bloggerName,
          },
        },
      }
    );

    result = await Blogs.find({});
    res.json({ status: "ok", result: result });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
app.get("/api/courses/blog/read/:code", async (req, res) => {
  var code = req.params.code;

  try {
    result = await Blogs.find({ courseCode: code });
    res.json({ status: "ok", result: result });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

/// lost and found ###################################################################3333

app.post("/api/lost&found/add", async (req, res) => {
  try {
    const lost = await Lost.create({
      itemName: req.body.itemName,
      date: req.body.date,
      isReceived: false,
      founderName: req.body.founderName,
      receiverName: "",
    });

    result = await Lost.find({});
    res.json({ status: "ok", result: result });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
app.patch("/api/lost&found/update/:id", async (req, res) => {
  try {
    const lost = await Lost.update({
      _id: req.params.id,
     
    },{
      $set:{
        isReceived:true,
        receiverName:req.body.receiverName
      }
    });

    result = await Lost.find({});
    res.json({ status: "ok", result: result });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

/// Common room ######################################################################3333
app.post("/api/common/add", async (req, res) => {
  try {
    const common = await CommonRoom.create({
     personName: req.body.personName,
  messege: req.body.messege,
  date:req.body.date
    });

    result = await CommonRoom.find({});
    res.json({ status: "ok", result: result });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
app.get("/api/common/read", async (req, res) => {
  try {
   
    result = await CommonRoom.find({});
    res.json({ status: "ok", result: result });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

/// Alumni interaction  ######################################################################3333
app.post("/api/alumni/add", async (req, res) => {
  try {
    const alumni = await AlumniInteraction.create({
     alumniName: req.body.alumniName,
  messege: req.body.messege,
  date:req.body.date
    });

    result = await AlumniInteraction.find({});
    res.json({ status: "ok", result: result });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});


app.get("/hello", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`connection is setup at http://localhost:${port}`);
});
