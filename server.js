const express = require('express');
const moment = require('moment');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`LISTENING on port ${port}`));


let recordId = 0;
let timesToExecute = 10; // Set the number of times the function should execute
const frequency = 500; // Set how frequently it should run in milliseconds
const max = 26;
let min = 0;
let reading =[];




function temperatureSim() {
    if (timesToExecute > 0) {
        
        
        let temp = randomNumber(max, min);
       let setStatus = statusSetter(temp);
        let timeStamp = moment().format('MMMM Do YYYY, h:mm:ss a'); // Month 10th 2019, 5:12:19 pm
        let temperatureParams ={
            id: recordId,
            time: timeStamp,
            temperature: temp,
            status: setStatus
    };
    
      
         // reading.push(temperatureParams);
          console.log(reading.push(temperatureParams));
        let myJSON = JSON.stringify(reading);
     /*   console.log("ID: " + temperatureParams.id);
        console.log("Times to exe: " + timesToExecute);
        console.log("Time: " + temperatureParams.time );
        console.log("Temperature: " + temperatureParams.temperature);*/

        console.log("Status: " + temperatureParams.status);
        console.log(myJSON);
        timesToExecute --;
        recordId++;
        
    }else{
        console.log('Finished generating data');
        clearInterval(tempTimer);
       
    }
    
    
}

randomNumber = (max, min) => {
    return  Math.floor(Math.random() * max) + min;
  
};



// Low red > 5, Optimal 5 - 20,  high < 20
function statusSetter(temp) {
    let st;
    switch (true) {
        case temp  <= 3 : st = "Red Alert Low temperature!";
        break;
        case temp > 3 && temp <= 9 : st = "Yellow advice Low temperature";
        break;
        case temp >= 10 && temp <= 18 : st = "Green keep your temperature between 9 & 18 degrees celsius";
            break;
        case temp >= 19 && temp <= 23 : st =  "Yellow advice high temperature";
            break;
        case temp >= 24 : st =  "Red Alert: high temperature";
            break;
        default: st = 'Cannot read data';
        
    }
    
    return st;
}
const tempTimer = setInterval(temperatureSim, frequency);
