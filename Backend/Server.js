const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbConfig = require('./config/db.config');
const tasksRoute = require('./routes/tasks.route');
const userRoute = require('./routes/user.route');

const corsOptions = {
  origin: true,
  credentials: true,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

//
const { connectionString, portNo } = dbConfig;

async function attemptConnection() {
    await mongoose.connect(connectionString);
  }

attemptConnection()
  .then(() => console.log("Connected to MongoDB"))
  .catch((e) => console.log("error connecting to MongoDB: " + e.message));

app.get("/", (req, res) => {
    res.json({ message: "API is Live!" });
  });
  
  app.use("/auth", userRoute);
  app.use("/task", tasksRoute);
  
  app.listen(portNo, () => {
    console.log(`Server running on ${portNo}`);
  });