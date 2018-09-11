/* csv to json */

const express = require ('express'),
      app = express(),
      http = require('http'),
      upload = require('express-fileupload'),
      fs = require('fs');
let jsonData = 'test';
app.use(upload());

app.get('/', (req, res, next)=>{
  res.sendFile(__dirname+'/index.html')
})

app.post('/file',(req, res)=>{
  res.send(jsonData);
})

function getcsv(csvfile) {
  console.log("csv data check" + csvfile);
  x = csvfile;
  document.getElementById('csvfiletoJson').value = x;

  return false;
}

function clearData() {
  console.log("data cleared");
}

function convertData() {
  console.log("convert data to json");
}

function formatData() {
  console.log("format data as per requirement");
}
http.Server(app).listen(8009)
console.log('server started on port 8009')