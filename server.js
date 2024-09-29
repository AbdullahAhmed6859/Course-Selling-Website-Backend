require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");

const { userRouter } = require("./routers/userRouter");
const { courseRouter } = require("./routers/courseRouter");
const { adminRouter } = require("./routers/adminRouter");

const app = express();
app.use(express.json());

app.use("api/v1/user", userRouter);
app.use("api/v1/admin", adminRouter);
app.use("api/v1/course", courseRouter);

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000);
    console.log("App started on port 3000");
  } catch (err) {
    console.log(err);
  }
}

main();
