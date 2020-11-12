let columnas = 10;
let filas = 10


let mapData = new Map();
let arrayData = new Array();

for (let indexColumna = 0; indexColumna < columnas; indexColumna++) {
  arrayData.push(Math.random())
  for (let indexFila = 0; indexFila < filas; indexFila++) {
    mapData.set(indexFila,arrayData)
  }
}





console.log(mapData)
console.log(arrayData)