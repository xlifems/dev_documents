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
