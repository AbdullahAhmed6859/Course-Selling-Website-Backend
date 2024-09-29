const { Router } = require("express");

const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {
  res.status(200).json({
    message: "This route has not been implemented yet",
  });
});

courseRouter.get("/preview", (req, res) => {
  res.status(200).json({
    message: "This route has not been implemented yet",
  });
});

module.exports = courseRouter;
