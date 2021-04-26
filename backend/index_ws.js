const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: { origin: "*", methods: "*" },
});
const ids = [];
io.on("connection", (socket) => {
  console.log("Connected id ", socket.id);
  ids.push(socket.id);
  socket.emit("updateIds", ids);
  socket.broadcast.emit("updateIds", ids);
  socket.on("sendToTarget", (data) => {
    console.log("sendToTarget the following  ", data);
    socket.to(data.targetID).emit("recevieMessage", data.message);
  });

  socket.on("joinGroup", (group) => {
    console.log("join", group);
    socket.join(group);
  });

  socket.on("sendToGroup", (data) => {
    socket.to(data.group).emit("messageToGroup", data.message);
  });
});

server.listen(3001, (err) => {
  if (err) return console.log(err);
  console.log("Server Running on port 3001");
});
