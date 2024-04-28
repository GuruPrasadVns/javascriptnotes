// Speed Limit = 70;
// For every 5 km extra speed limit -> 1 points.
// 12 points -> license suspended.

function checkSpeed(speed){
  let points = 0;
  const speedLimit = 70;
  const kmPerPoint = 5;

  if(speed > speedLimit){
      const excessSpeed = speed - speedLimit;
      points = Math.floor(excessSpeed / kmPerPoint);
  }

  if(points < 1)
      return 'OK';

  if(points < 12)
      return points;

  return 'License Suspended';
}

console.log(checkSpeed(50));
console.log(checkSpeed(70));
console.log(checkSpeed(71));

console.log(checkSpeed(75));
console.log(checkSpeed(77));
console.log(checkSpeed(80));

console.log(checkSpeed(130));