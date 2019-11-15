
// Setup node server
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`LISTENING on port ${port}`));
let temperatureModule = require('./temperatureSim');


temperatureModule();
// So this fires off but returns undefined... another promise maybe?
console.log("FROM THE SERVER FILE: " + temperatureModule.reading);
let readingPromise = new Promise(function (resolve, reject) {
  // if (reading)
});
 let variablr1 = await