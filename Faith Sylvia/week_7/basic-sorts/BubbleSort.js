function bubbleSort(array) {

  let needToIterate = true; //assume the worst

  let end = array.length - 1 // start at end of the array

  while (needToIterate) {
    needToIterate = false; // we haven't had to move anything yet

    for (let i = 0; i < end; i++) {
      if (array[i] > array[i+1]) {
        [ array[i], array[i+1] ] = [ array[i+1], array[i] ] //destructuring for parallel assignment
        // const copy = array[i];
        // array[i] = array[i + 1];
        // array[i+1] = copy;
        needToIterate = true
      }
    }
    end --; // we don't need to consider that last element anymore - it's bubbled up to the final sorting zone
  }

  return array;
}

module.exports = bubbleSort;
