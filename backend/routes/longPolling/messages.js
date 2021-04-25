const express = require("express");
const Router = express.Router();

const subscribers = {};
Router.get("/", (req, res) => {
  const id = Math.ceil(Math.random() * 1000);
  subscribers[id] = res;
  console.log("subscirber", id);
  req.on("close", () => {
    delete subscribers[id];
  });
});

Router.post("/", (req, res) => {
  console.log("Server Recevied A Message", req.body);
  Object.entries(subscribers).forEach(([id, res]) => {
    res.json(req.body);
    delete subscribers[id];
  });
  res.status(204).end();
});

module.exports = Router;
