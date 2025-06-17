const express = require("express");
const fs = require("fs");
const app = express();

app.get("/readFile", (req, res) => {
  const fileName = req.query.fileName;
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (!err) {
      res.json({
        data,
      })
    } else {
        res.status(400).send(err.message);
    }
  })
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000.");
});


