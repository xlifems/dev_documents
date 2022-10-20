# Closures

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
In other words, a closure gives you access to an outer function's scope from an inner function. 
In JavaScript, closures are created every time a function is created, at function creation time.

## Example

```javascript

const generateObject = () => {
  let value = 0;
  return {
    increment: (inc) => {
      value += typeof inc === "number" ? inc : 1;
    },
    getValue: () => {
      return value;
    },
  };
};
const myObject = generateObject();

myObject.increment(2);
console.log(myObject.getValue()); // 2
myObject.increment(2);
console.log(myObject.getValue()); // 4

```
![image](https://user-images.githubusercontent.com/19802299/196961685-c6517a98-183d-4af0-b290-bfd90425ec36.png)
