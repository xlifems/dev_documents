function isPar(numero) {
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}


// Funcion para filtrar por valores unicos 

const calculateUnicos = (value, index, datas) => {
  return datas.indexOf(value) === index
}

const numbers = [25, 30, 30, 40, 25, 20, 25, 25, 10]
const unicosNumbers = numbers.filter(calculateUnicos)
console.log(uniqueAges)


var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

/********************************************************************************************/

/** Ordenar array de objetos*/
const datos = [
    {date: "2020-01-17 14:39:27", message_received: "llegada numero", seen: true } ,
    {date: "2020-01-16 15:25:24", message_received: "codigo2020", seen: true},
    {date: "2020-01-19 16:25:24", message_received: "codigo2020", seen: true}
];

/** comparar mayor por el atributo date */
function comparar(a, b) {
    if (Date.parse(a.date) > Date.parse(b.date)) {
        return -1;
    }
    if (Date.parse(a.date) < Date.parse(b.date)) {
        return 1;
    }
    return 0;
}

const datosOrdenados = Array.from(datos).sort(comparar);

/** Ordenar por el atributo id */

const data = [
    {id: 23456 , name: "user-23456"},
    {id: 23455 , name: "user-23455"},
    {id: 23454 , name: "user-23454"},
    {id: 23453 , name: "user-23453"},
    {id: 23451 , name: "user-23451"},
    {id: 23450 , name: "user-23450"},
    {id: 23446 , name: "user-23446"},
    {id: 23434 , name: "user-23434"},
    {id: 23425 , name: "user-23425"},
    {id: 23424 , name: "user-23424"},
    {id: 23414 , name: "user-23414"},
    {id: 23412 , name: "user-23412"},
    null
  ]

data
  .filter((element) => element?.id)
  .sort((a, b) => a.id - b.id)


/********************************************************************************************/

/** comparar dos array y eliminar duplicados */

const months = ['Jan', 'March', 'April', 'June', 'Sept'];
const months2 = ['March'];

console.log(months);
// expected output: > Array ["Jan", "March", "April", "June", "Sept"]

const res = months.filter((m,index,data) => months2.indexOf(m) < 0)

console.log(res);
// expected output: > Array ["Jan", "April", "June", "Sept"]
