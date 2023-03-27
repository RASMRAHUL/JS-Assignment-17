const arr1 = ["a", "b", "c", "d"];
const arr2 = ["e", "f", "g", "h", "a", "i", "j"];

const iterator1 = arr1.values();
const iterator2 = arr2.values();

let match;

for (const val1 of iterator1) {
  for (const val2 of iterator2) {
    if (val1 === val2) {
      match = val1;
      break;
    }
  }
  if (match) {
    break;
  }
}

console.log(`The matching element is ${match}`);
