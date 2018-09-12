/* csv to json */

const express = require("express"),
  app = express(),
  upload = require("express-fileupload"),
  csvtojson = require("csvtojson"),
  fs = require("fs");
let jsonData = "test";
app.use(upload());

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/file", (req, res) => {
  jsonData = req.files.csvfile.data.toString('utf8');
  return csvtojson().fromString(jsonData).then(json => {
    res.status(201).json({ ...json
    })
  })
});

app.listen(process.env.PORT || 4000, function(){
  console.log('Your node js server is running');
});