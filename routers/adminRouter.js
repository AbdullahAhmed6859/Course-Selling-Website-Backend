const { Router } = require("express");

const adminRouter = Router();

adminRouter.post("/login", (req, res) => {
  res.status(200).json({
    message: "this route is not implemented yet",
  });
});

adminRouter.post("/signup", (req, res) => {
  res.status(200).json({
    message: "this route is not implemented yet",
  });
});

adminRouter.post("/course", (req, res) => {
  res.status(200).json({
    message: "this route is not implemented yet",
  });
});

adminRouter.delete("/course", (req, res) => {
  res.status(200).json({
    message: "this route is not implemented yet",
  });
});

adminRouter.patch("/course", (req, res) => {
  res.status(200).json({
    message: "this route is not implemented yet",
  });
});

module.exports = adminRouter;
