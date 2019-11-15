const moment = require('moment');


function temperatureModule()  {
    let recordId = 0; // Set the unique id
    let timesToExecute = 10; // Set the number of times the function should execute
    const frequency = 2000; // Set how frequently it should run in milliseconds
    const max = 26; //  max value for temperature
    let min = 0; // min value for temperature
    let reading =[];
    
    
// Main temperature function
    function temperatureSim() {
       /* console.log('This RUNS Temp sim Func');*/
        console.log('Times left to execute : ' + timesToExecute);
    if (timesToExecute !== 0) {
        /*console.log('This RUNS Temp sim Func if statement');*/
        let temp = randomNumber(max, min);
        let setStatus = statusSetter(temp);
        let timeStamp = moment().format('MMMM Do YYYY, h:mm:ss a'); // Month 10th 2019, 5:12:19 pm
        
        let temperatureParams = {
            id: recordId,
            time: timeStamp,
            temperature: temp,
            status: setStatus
        };
        reading.push(temperatureParams);
        temperaturePromise
            .then(() => { // Probably add a method here that allows interaction of various sensors data
                /*console.log('This RUNS on fulfilled promise statement');
                console.log('Reading(in promise)1 : ' + reading);*/
                console.log('CURRENT READING : ' + JSON.stringify(reading[0]));
                let jsonString = JSON.stringify(reading);
                console.log('ALL READINGS : ' + jsonString);
                module.exports.reading = reading;
            
            })
        
            .catch(function () {
               /* console.log('This RUNS catch');*/
            });
        
        timesToExecute--;
        recordId++;
        
        
        return reading;
    } else {
    
    
        
        clearInterval(tempTimer);
        console.log('Data finished.');
    }
    
    return reading;
}
// Generate random number
let randomNumber = (max, min) => {
    return Math.floor(Math.random() * max) + min;
};

// Set status alert
 async function statusSetter(temp) {
    let st;
    switch (true) {
        case temp <= 3 :
            st = "Red Alert Low temperature!";
            break;
        case temp > 3 && temp <= 9 :
            st = "Yellow advice Low temperature";
            break;
        case temp >= 10 && temp <= 18 :
            st = "Green keep your temperature between 9 & 18 degrees celsius";
            break;
        case temp >= 19 && temp <= 23 :
            st = "Yellow advice high temperature";
            break;
        case temp >= 24 :
            st = "Red Alert: high temperature";
            break;
        default:
            st = 'Cannot read data';
        
    }
    
    return st;
}

let temperaturePromise = new Promise(function (resolve, reject) {
    
    if (timesToExecute !== 0) {
        
        resolve('Promise resolved');
        console.log('Resolved');
    } else {
        reject();
    }
});
    const tempTimer = setInterval(temperatureSim, frequency);
    
}

 /*   *TO DO*
 // After tempTimer ^ runs I would like the returned values of reading Probably as both Json and an object available to be passed into another function.
 // I want the values of other probe readings to interact.
 // In practicality, high temperatures also makes ammonia more toxic to fish at lower levels..
 // This may/may not need to be built into the system but for my own clarity in interested in how to pass
    the 'reading' object array into other places
 *TO DO*
 Separate the alert function from the temp sim in order to enable people to select fish type.
 
 */


module.exports = temperatureModule;


