/* csv to json */
const express = require ('express');
const cjApp = express(); 

const http = require('http').Server(cjApp).listen(8009)
console.log('server started on port 8009')


cjApp.get('/', (req, res, next)=>{
  res.sendFile(__dirname+'/index.html')
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
