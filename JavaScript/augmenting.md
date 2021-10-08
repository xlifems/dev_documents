
# JavaScript Augmenting Pathern

The augmenting pather will permit us to add more method to the prototype of value

## Use Promises Instead of Callbacks

Patron aumento para definir funcion que busque los posibles coincidencias de unas palabras dentro de un string en cuention.

For example, if we want to run multiple ``` setTimeout ```callbacks without promises, then we have to nest them as follows:

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