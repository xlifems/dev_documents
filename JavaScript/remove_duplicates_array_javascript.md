## How to remove duplicates from a JavaScript array with Set()

  1. [Deleting](#asyncawayt)
  
## Deleting 

  <a name="types--primitives"></a><a name="1.1"></a>
   - [1.1](#types--primitives) **Set**: Aplicación.
   
  En el ejemplo veremos como funciona con tipos de datos primitivos como numbers or strings

```javascript

const numbers = [1, 2, 2, 3, 4, 4, 3, 5];

```
A continuación nos apoyamos en el operador destructured y las nuevas estructuras de datos itroducidas
en ES6 en 2015, la cual tiene como principal caracteristica evitar datos repetidos en un mismo Set

```javascript
const uniqueNumbers = [...new Set(numbers)];
```
Imprimimos 

```javascript
console.log(uniqueList());

>> [1, 2, 3, 4, 5]
```

A continuación eliminaremos duplicados en array de objetos

```javascript
let arr1 = [
  { id: 1, username: 'lorem' },
  { id: 2, username: 'ipsum' }
];
let arr2 = [
  { id: 1, username: 'lorem' },
  { id: 3, username: 'dolor' }
];
undefined
let arr3 = arr1.concat( arr2.filter( element => arr1.find(e => e.id === element.id) === undefined ) )
```

