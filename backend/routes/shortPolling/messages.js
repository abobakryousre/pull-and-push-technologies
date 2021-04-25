const express = require("express");
const Router = express.Router();
const url = require("url");

const messages = [];
Router.get("/", (req, res) => {
  const params = url.parse(req.url, true).query;
  const time = params.time;

  const response = messages.filter((message) => {
    return message.time > time;
  });

  console.log("response array", response);

  res.json(response);
});

Router.post("/", (req, res) => {
  console.log(req.body);
  messages.push(req.body);
  res.status(204).end();
});

module.exports = Router;
