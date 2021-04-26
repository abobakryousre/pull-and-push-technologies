const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });
const clients = [];
io.on("connection", (socket) => {
  console.log("socket Connected ", socket.id);
  socket.on("message", (data) => {
    console.log("boradcast ", data);
    socket.broadcast.emit("boradCast", data);
  });
});

// io.on("connection", (socket) => {
//   console.log("socket Connected ", socket.id);
//   // adding new connedted client
//   clients.push(socket.id);

//   socket.on("message", (socketId, message) => {
//     socket.to(socketId).emit("new-messsage", message);
//   });
// });

app.get("/clients", (req, res) => {
  res.json(clients);
});
server.listen(3001, (err) => {
  if (err) return console.log(err);
  console.log("Server Running on port 3001");
});
