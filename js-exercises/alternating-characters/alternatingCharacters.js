function alternatingCharacters(arr) {
  let resultArrByIndex = [];
  for (let element of arr) {
    let iteration = 0,
      notAlternateCount = 0;
    while (iteration < element.length) {
      if (element[iteration] === element[iteration - 1]) {
        notAlternateCount++;
      }
      iteration++;
    }
    resultArrByIndex.push(notAlternateCount);
  }
  return resultArrByIndex;
}

export { alternatingCharacters };
