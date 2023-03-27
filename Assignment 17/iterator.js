function createIterator(items) {
    let i = 0;
    return {
      next: function() {
        if (i >= items.length) {
          return { done: true };
        }
        else {
          return { value: items[i++], done: false };
        }
      }
    };
  }
  
  const myIterator = createIterator(['apple', 'banana', 'orange']);
  
  console.log(myIterator.next()); // { value: 'apple', done: false }
  console.log(myIterator.next()); // { value: 'banana', done: false }
  console.log(myIterator.next()); // { value: 'orange', done: false }
  console.log(myIterator.next()); // { done: true }
  