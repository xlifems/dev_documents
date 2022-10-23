# Memoization

In programming, memoization is an optimization technique that makes applications more efficient and hence faster. It does this by storing computation results in cache, and retrieving that same information from the cache the next time it's needed instead of computing it again. 

## Example

```javascript

/**
 * ? Memoization example
 * TODO: The next function return the multiplication of number got a params in in the internal function, if the
 * value is present in the cache object
 * @returns Function
 * @param { Number }
 */
function multiplicationMemo() {
  const resultCache = {};

  return function (params) {
    if (Object.hasOwn(resultCache, params)) {
      return resultCache[params];
    } else {
      let result = params * 4;
      resultCache[params] = result;
      return result;
    }
  };
}

const multiplication = multiplicationMemo();
console.log(multiplication(5)); // 20
console.log(multiplication(5)); // 20

```


![image](https://user-images.githubusercontent.com/19802299/197400538-46f13bf9-1340-4fd6-9a40-c0aab7daa7b5.png)

