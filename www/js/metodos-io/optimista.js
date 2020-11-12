
function solucionarOptimista(my_liste){
 console.log(my_liste)
 let numMayor = 0;
 my_liste.forEach(elementList => {
  elementList.forEach(element => {
    if (element > numMayor) {
      numMayor = element;
    }
  });
 });
 console.log( "numero mayor" + numMayor);
 return numMayor;
}