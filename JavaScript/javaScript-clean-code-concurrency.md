# JavaScript Clean Code

Concurrency is an important part of most modern programs. To achieve this in JavaScript, we have to use asynchronous code, which is non-blocking.

In this article, we’ll look at how to write asynchronous code in a way that’s clean and easy to read and change.

## Use Promises Instead of Callbacks

Promises have been a standard object since ES6, so the previous asynchronous callbacks should all be replaced with promises.

Using callbacks is a real pain if we have any sequential code since we have to nest them on multiple levels.

For example, if we want to run multiple ``` setTimeout ```callbacks without promises, then we have to nest them as follows:

```typescript

setTimeout(() => {
  console.log('foo');
  setTimeout(() => {
    console.log('bar');
    setTimeout(() => {
      console.log('baz');
    }, 200)
  }, 200)
}, 200)

```

As we can see, we only have three callbacks and the nesting is already very ugly. We have to clean this up so that this is more pleasant to look at and easier to understand.

We can do this with promises as follows:


```typescript

const timeOutPromise = (str) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(str);
    }, 200)
  })
}
timeOutPromise('foo')
  .then((val) => {
    console.log(val);
    return timeOutPromise('bar');
  })
  .then((val) => {
    console.log(val);
    return timeOutPromise('baz');
  })
  .then((val) => {
    console.log(val);
  })

```

As we can see, with promises, we can chain them with the then method with a callback passed into it. We don’t have to nest callbacks except in the timeoutPromise function, and it’s only two levels of nesting instead of three or more.

We get the resolves value of a promise in the parameter of the callback that we pass into the then method.

To catch errors, we can use the catch method with a callback passed in as follows:

```typescript
const timeOutPromise = (str) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(str);
    }, 200)
  })
}
timeOutPromise('foo')
  .then((val) => {
    console.log(val);
    return timeOutPromise('bar');
  })
  .then((val) => {
    console.log(val);
    return timeOutPromise('baz');
  })
  .then((val) => {
    console.log(val);
  })
  .catch((err) => console.error(err))

```


## Async/Await Is a Cleaner Syntax for Chaining Promises

```typescript
const timeOutPromise = (str) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(str);
    }, 200)
  })
}(async () => {
  let val;
  val = await timeOutPromise('foo');
  console.log(val);
  val = await timeOutPromise('bar');
  console.log(val);
  val = await timeOutPromise('baz');
  console.log(val);
})();
```
It’s exactly the same as: 

```typescript
const timeOutPromise = (str) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(str);
    }, 200)
  })
}timeOutPromise('foo')
  .then((val) => {
    console.log(val);
    return timeOutPromise('bar');
  })
  .then((val) => {
    console.log(val);
    return timeOutPromise('baz');
  })
  .then((val) => {
    console.log(val);
  })
```
## Contributing
JavaScript Clean Code: Concurrency
## License
[medium.com](https://medium.com/better-programming/javascript-clean-code-concurrency-d5314cd856b2)
