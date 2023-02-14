# Useful Tricks for JavaScript Developers

## Method Parameter Validation

JavaScript allows you to set default values for your parameters. Using this, we can implement a neat trick to validate your method parameters.
For example, if we want to run multiple ``` setTimeout ```callbacks without promises, then we have to nest them as follows:

```typescript

  const isRequired = () => { throw new Error('param is required'); };
  const print = (num = isRequired()) => { console.log(`printing ${num}`) };
  print(2);//printing 2
  print()// error
  print(null)//printing null

```
## Merge Several Objects Together

Sometimes we have several instances of the object and we want to merge two or more of these, this can be done as follows

```typescript

const person = { 
 name: 'John Ludwig', 
 gender: 'Male' 
 };
 
const college = { 
 primary: 'Mani Primary School', 
 secondary: 'Lass Secondary School' 
 };
 
const skills = { 
 programming: 'Extreme', 
 swimming: 'Average', 
 sleeping: 'Pro' 
 };
const summary = {...user, ...college, ...skills};

````

## Destructuring some objects with Aliases

When we destructuring an object is necessary to use the same variable names than appear in the object but is possible to destructuring to assignment with alias names

```typescript

const object = { number: 10 };
// destructuring object in number
const { number } = object;
// destructuring object and renaming number as otherNumber
const { number: renamingNumber } = object;
console.log(renamingNumber); //10

```

## Validate if two JavaScript objects have the same properties

To validate if two JavaScript objects have the same properties, you can compare the arrays of keys from each object using the Object.keys() method and then compare the arrays using the Array.every() method. Here's an example:

```javascript

const obj1 = { name: "John", age: 30 };
const obj2 = { age: 30, name: "John" };

const keys1 = Object.keys(obj1);
const keys2 = Object.keys(obj2);

const haveSameProperties = keys1.length === keys2.length && keys1.every(key => keys2.includes(key));

console.log(haveSameProperties); // true

```

## Contributing
10 Super Useful Tricks for JavaScript Developers
## License
[medium.com](https://blog.bitsrc.io/10-super-useful-tricks-for-javascript-developers-f1b76691199b)
