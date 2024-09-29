const { Router } = require("express");

const userRouter = Router();

userRouter.post("/login", (req, res) => {
  res.status(200).json({
    message: "this route is not implemented yet",
  });
});

userRouter.post("/signup", (req, res) => {
  res.status(200).json({
    message: "this route is not implemented yet",
  });
});

userRouter.post("/course", (req, res) => {
  res.status(200).json({
    message: "this route is not implemented yet",
  });
});

userRouter.get("/purchases", (req, res) => {
  res.status(200).json({
    message: "this route is not implemented yet",
  });
});

module.exports = userRouter;
