//for loop: A simple and widely used way to loop through an array is to use a for loop. Here is an example:

const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


//for-of loop: Another way to loop through an array is to use a for-of loop. This loop iterates over the values of an iterable object, which an array is. Here is an example:

const arr2 = [1, 2, 3, 4, 5];

for (const element of arr2) {
  console.log(element);
}


//forEach method: Arrays in JavaScript have a built-in forEach method that can be used to loop through the array. Here is an example:

const arr3 = [1, 2, 3, 4, 5];

arr3.forEach((element) => {
  console.log(element);
});


//map method: The map method of an array can also be used to loop through the array and return a new array with transformed values. Here is an example:

const arr4 = [1, 2, 3, 4, 5];

const newArray = arr4.map((element) => {
  return element * 2;
});

console.log(newArray);


//filter method: The filter method of an array can be used to loop through the array and return a new array with only the elements that pass a certain condition. Here is an example:

const arr5 = [1, 2, 3, 4, 5];

const filteredArray = arr5.filter((element) => {
  return element % 2 === 0;
});

console.log(filteredArray);

//reduce method: The reduce method of an array can be used to loop through the array and return a single value that is the result of accumulating the values of the array. Here is an example:

const arr6 = [1, 2, 3, 4, 5];

const sum = arr6.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum);

