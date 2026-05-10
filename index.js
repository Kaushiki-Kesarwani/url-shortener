const express = require("express");
const mongodb = require("./config/db");
const url = require("./routes/routeurl");
const port = 4000;
const app = express();
app.use(express.json());
mongodb();
app.use("/url", url);
app.listen(port, () => {
  console.log(`app is listening at ${port} port.`);
});
