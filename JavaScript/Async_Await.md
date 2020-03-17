## A Beginner’s Guide to Async/Await in JavaScript

  1. [Async/Await](#asyncawayt)
  1. [References](#references)
  
## Async/Await

  <a name="types--primitives"></a><a name="1.1"></a>
   - [1.1](#types--primitives) **Old vs. New**: Escribiendo la formas viejas y nuevas.
   
   Let’s write a simple query using .then. You can run this code by copying it into your browser’s console. If CORS gives you trouble, try going to jsonplaceholder itself and running it there

```javascript

const getFirstUser = () => {
  const url = 'https://jsonplaceholder.typicode.com/users/1';
  fetch(url)
    .then(response => response.json())
    .then(json => console.log(json));
}

```
This is the old way of doing it, but how would this look with Async/Await? Pretty similar, honestly:

```javascript
const getSecondUser = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users/2';
  const response = await fetch(url);
  console.log(await response.json());
}
```

<a name="types--primitives"></a><a name="1.2"></a>
   - [1.2](#types--primitives) **Breaking it down**: Escribiendo la formas viejas y nuevas.
   
 
 ```javascript
const response = await fetch(url);
// also valid: 
await fetch(url);
}
```

<a name="types--primitives"></a><a name="1.2"></a>
   - [1.2](#types--primitives) **Async return values**: Escribiendo la formas viejas y nuevas.

 ```javascript
const getThirdUser = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users/3';
  const response = await fetch(url);
  const json = await response.json();
  return json;
}
console.log(getThirdUser());
```

