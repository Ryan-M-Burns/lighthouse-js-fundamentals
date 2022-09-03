const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(move) {
  let finalCoords = [0,0];
  let xCoord = 0;
  let yCoord = 0;
  for (const steps of move) {
    switch (steps) {
      case "north":
        yCoord++;
        console.log(yCoord);
        break;
      case "south":
        yCoord--;
        break;
      case "east":
        xCoord++;
        break;
      case "west":
        xCoord--;
        break;
    }
  }
  finalCoords = [xCoord, yCoord];
  return finalCoords;
}

console.log(finalPosition(moves));