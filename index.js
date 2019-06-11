
const express = require('express');


let times = 10;
function temperatureSim() {
    
    if (times > 0) {
        console.log('Data');
        console.log(times);
        return  times --;
        
    }else{
        console.log('Finished generating data');
        clearInterval(tempTimer);
    }
    console.log(times);
}

const tempTimer = setInterval(temperatureSim, 2000);
