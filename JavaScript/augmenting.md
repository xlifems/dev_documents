
# JavaScript Augmenting Pattern

The augmenting pather will permit us to add more method to the prototype of value

```javascript
    Function.prototype.method = function (name, func) {
        this.prototype[name] = func;
        return this;
    };

    Number.method('integer', function () {
        return Math[this < 0 ? 'ceil' : 'floor'](this);
    });

    // transfor to string in mayus string 
    String.method('mayus', function () {
        return this.toUpperCase();
    });
    
    console.log("hola".mayus()); // "HOLA"
```

## Use Augmenting Pattern

For example,  ``` augmenting pattern  ```  if we want to find some matches multiple words inside of one in question  in other string:

```typescript
    String.prototype.findWords = function (...args) {
      var some = args.some(str => this === str)
      return some;
    };

    // Use
    const str = "king xlifems"
    const foundWord = str.findWords('monkey','xlifems','roronoa')
    console.log(foundWord) // true
```