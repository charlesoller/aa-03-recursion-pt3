/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  // Your code here 
  // base case
  // if(!arr.length) {
  //   return arr
  // }

  // let currArr = []
  // // recursive step
  // // let test = arr.pop()
  // if(Array.isArray(arr[0])) {
  //   currArr.push(...flatten(arr.shift()))
  // }

  //recursive case
  // return currArr

  const flat = [];

  arr.forEach(item => {
    if (Array.isArray(item)){ //base
      flat.push(...flatten(item)) //recursive
    } else { //base
      flat.push(item);
    }
  })

  return flat
}

// 
// 1 , f(arr)


console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
  