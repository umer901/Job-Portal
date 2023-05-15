const express = require("express");
const app = express();
const router = express.Router();
const bcrypt = require("bcryptjs");

require("../db/connection");
const User = require("../model/userSchema");
const Data = require("../model/postJob");

router.post("/", async (req, res) => {
  res.send("Connected to server");
  console.log("Hello World from the server!");
});

router.post("/signup", async (req, res) => {
  const { name, email, password, userType } = req.body;

  // res.send(req.body);

  if (!name || !email || !password || !userType) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist)
      return res.status(422).json({ error: "Email Already Exists" });

    const user = new User(req.body);

    const userRegister = await user.save();

    if (userRegister)
      res.status(201).json({ message: "User Registered Successfully" });
    else res.status(500).json({ error: "User failed to registered" });
  } catch (err) {
    (err) => console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // res.send(req.body);

    if (!email || !password) {
      return res.status(422).json({ error: "Please fill all the fields" });
    }

    const loginUser = await User.findOne({ email: email });

    if (loginUser) {
      const isMatch = await bcrypt.compare(password, loginUser.password);
      if (!isMatch)
        return res.status(400).json({ error: "Invalid Credentials" });
      else return res.status(201).json({ message: "Logged In" });
    }
  } catch (err) {
    (err) => console.log(err);
  }
});

router.post("/loginadmin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // res.send(req.body);

    if (!email || !password) {
      return res.status(422).json({ error: "Please fill all the fields" });
    }

    const loginUser = await User.findOne({ email: email });

    if (loginUser) {
      const isMatch = await bcrypt.compare(password, loginUser.password);
      if (!isMatch || loginUser.userType != "Admin")
        return res.status(400).json({ error: "Invalid Credentials" });
      else return res.status(201).json({ message: "Logged In" });
    }
  } catch (err) {
    (err) => console.log(err);
  }
});

router.get("/logout", (req, res) => {
  console.log("Hello my Logout Page");
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("User Logout");
});

router.get("/jobseeker", async (req, res) => {
  const allUser = await User.find({ userType: "Job Seeker" });
  res.send({ status: "OK", data: allUser });
});

router.get("/recruiter", async (req, res) => {
  const allUser = await User.find({ userType: "Recruiter" });
  res.send({ status: "OK", data: allUser });
});

router.get("/jobsdata", async (req, res) => {
  const allJobs = await Data.find();
  res.send({ status: "OK", data: allJobs });
});

router.post("/deleteUser", async (req, res) => {
  const { userid } = req.body;
  try {
    const deleteUser = await User.deleteOne({ _id: userid });
    res.send({ status: "Ok", data: "Deleted" });
  } catch (error) {
    console.log(error);
  }
});

router.post("/deleteJob", async (req, res) => {
  const { jobid } = req.body;
  try {
    const deleteJob = await Data.deleteOne({ _id: jobid });
    res.send({ status: "Ok", data: "Deleted" });
  } catch (error) {
    console.log(error);
  }
});

router.get("/alljobs", async (req, res) => {
  const allJobs = await Data.find()
    .then((jobs) => {
        res.send({ status: "OK", data: jobs });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
