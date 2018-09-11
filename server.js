/* csv to json */

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
