// Code your solution in this file!
const scuber= ['Antonia', 'Nuru', 'Amari', 'Mo'] 
const returnFirstTwoDrivers=function(scuber ){
    return scuber.slice(0,2)
    
}
function returnLastTwoDrivers(scuber){
    return scuber.slice(-2)

}
const  selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]
    function createFareMultiplier(x )
{
    return function (value){
    return x * value
}}
const fareDoubler=createFareMultiplier(2)
const fareTripler =createFareMultiplier(3)
function selectDifferentDrivers(scuber,returnFirstTwoDrivers){
return returnFirstTwoDrivers(scuber)
}