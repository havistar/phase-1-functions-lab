// Code your solution in this file!
const hq = 42
const feet = 264

function distanceFromHqInBlocks(destination){
  if (destination > 42){return destination - hq}
  else if (destination < 42) {return hq - destination}
 }

 function distanceFromHqInFeet(destination){
   return distanceFromHqInBlocks(destination)*feet
 }

 function distanceTravelledInFeet(start, end) {
    const destination = Math.abs(start-end)
    return destination * 264;
 }
 
 function calculatesFarePrice (start, destination) {
    const traveled = distanceTravelledInFeet(start, destination);
    if (traveled > 400 && traveled < 2000){
            console.log(traveled)
            return (traveled - 400) * .02
      } else if (traveled > 2000 && traveled < 2500) {
        return 25;
      } else if (traveled < 400) {
        return 0;
      } else if (traveled > 2500) {
        return "cannot travel that far";
      }
  }
