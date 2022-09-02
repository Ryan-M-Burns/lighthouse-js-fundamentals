let numToPrint = 100;
while (numToPrint <= 200) {
  if (numToPrint % 3 === 0 && numToPrint % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (numToPrint % 3 === 0) {
    console.log("Loopy");
  } else if (numToPrint % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(numToPrint);
  }
  numToPrint++;
}