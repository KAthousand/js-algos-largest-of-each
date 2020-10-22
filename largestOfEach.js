//LARGEST OF EACH ARRAY

const largestOfEach = (arr) => {
  let arr2 = [];
  arr.map((arr1) => {
    arr2.push(Math.max(...arr1));
    console.log(arr2);
    // return arr2;
  });
  return arr2;
};

console.log(
  largestOfEach([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

module.exports = {
  largestOfEach,
};
