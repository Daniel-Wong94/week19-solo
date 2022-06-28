const express = require("express");

const app = express();
const port = 5001;

app.get("/status", (req, res) => {
  res.send("server live");
});

app.listen(port, () => console.log(`listening on port: ${port}`));
