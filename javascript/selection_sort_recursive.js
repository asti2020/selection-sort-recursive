function selectionSortRecursive(arr) {
  const sorted = [];

  while (arr.length > 0){
    const min = Math.min(...arr);
    const idx = arr.indexOf(min);
    sorted.push(arr.splice(idx, 1)[0]);
    // sorted.push(min);
    // arr.splice(idx, 1);
  }
 
  return sorted; // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
