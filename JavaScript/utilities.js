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


/********************************************************************************************/

/** comparar dos array y eliminar duplicados */

const months = ['Jan', 'March', 'April', 'June', 'Sept'];
const months2 = ['March'];

console.log(months);
// expected output: > Array ["Jan", "March", "April", "June", "Sept"]

const res = months.filter((m,index,data) => months2.indexOf(m) < 0)

console.log(res);
// expected output: > Array ["Jan", "April", "June", "Sept"]
