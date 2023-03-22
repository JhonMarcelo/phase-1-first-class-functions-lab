// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (drivers)=>{
const theDrivers = [drivers[0],drivers[1]];
return theDrivers
}
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers =(drivers)=>{
    const theDrivers =[drivers[drivers.length-2],drivers[drivers.length-1]];
    return theDrivers
}
console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    const product =(fair)=>fair*multiplier;
    return product;
}


const fareDoubler = (fare) => createFareMultiplier(2)(fare);
const fareTripler = (fare) => createFareMultiplier(3)(fare);

function selectDifferentDrivers(drivers,driverPicker){
    return driverPicker(drivers);
}