const cors = require("cors");
const express = require("express");
const app = express();
const shorPollingRouter = require("./routes/shortPolling/messages");
const longPollingRouter = require("./routes/longPolling/messages");

app.use(cors());

// parsing the body
app.use(express.json());

// for shorPolling
// app.use("/messages", shorPollingRouter);

// for long polling
app.use("/messages", longPollingRouter);

app.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log("Server Running on porst 300");
});
