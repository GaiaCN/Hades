// "use strict";
// var obj2 = { get x() { return 10; } };
// obj2.x = 1;
// console.log(obj2.x);

// function withValue(value) {
//   var d = withValue.d || (
//     withValue.d = {
//       enumerable: false,
//       writable: false,
//       configurable: false,
//       value: null
//     }
//   );
//   d.value = value;
//   return d;
// }
// console.log(withValue(10).value);

// var o = {};
// Object.defineProperty(o, 'a', { value: 1, enumerable: true });
// Object.defineProperty(o, 'b', { value: 2, enumerable: false });
// Object.defineProperty(o, 'c', { value: 3 }); // enumerable defaults to false
// o.d = 4; // enumerable defaults to true when creating a property by
// for (var i in o) {
//   console.log(i);
// }

var a = function() {
    this.__a = 1;
    console.log(this);
}

console.log(a())
