function mapPolyfil() {
  // map
  // map take a callback and this callback is called with element, index and
  // the original array itself
  const a = [1, 2, 3, 4];

  let newArr = a.map((element, index, actualArray) => {
    return element * 10;
  });

  console.log(newArr);

  // polyfill for map
  Array.prototype.myMap = function f(cb) {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
      newArr.push(cb(this[i], i, this));
    }
    return newArr;
  };

  newArr = a.myMap((element, index) => element * index);
  console.log(newArr);
}

function filterPolyfil() {
  //filter polyfil
  // filter take a callback and this callback is called with element, index and
  // the original array itself
  const a = [1, 2, 3, 4];
  let newArr = a.filter((element, index, actualArray) => {
    return element % 2 === 0; //only even elements
  });
  console.log(newArr); // [2, 4]

  Array.prototype.myFilter = function f(cb) {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        newArr.push(this[i]);
      }
    }
    return newArr;
  };

  // it will not work because for arrow functions this is global or wondow object
  Array.prototype.myFilter1 = (cb) => {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        newArr.push(this[i]);
      }
    }
    return newArr;
  };

  newArr = a.myFilter((element, index) => element % 2 === 0);
  console.log(newArr);

  newArr = a.myFilter1((element, index) => element % 2 === 0);
  console.log(newArr);
}

function reducePolyfil() {
  //reudce polyfil
  // reduce take a callback and initialValue of the result,
  // this callback is called with initialResult, element, index and
  // the original array itself
  const a = [1, 2, 3, 4];
  let result = a.reduce((initialResult, element, index, actualArray) => {
    initialResult += element;
    return initialResult;
  }, 0);
  console.log(result); // 10

  Array.prototype.myReduce = function f(cb, initialValue) {
    let result = initialValue;

    for (let i = 0; i < this.length; i++) {
        // also need to check if initial value is provided or not
      result = result?cb(result, this[i], i, this):this[i];
    }
    return result;
  };

  result = a.myReduce((initialResult, element) => {
    initialResult += element;
    return initialResult;
  });
  console.log(result);
}

reducePolyfil();
