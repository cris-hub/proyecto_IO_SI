
function solucionarPesimista(my_liste){
  console.log(my_liste)
  let numMayor ;
  my_liste.forEach(elementList => {
   elementList.forEach(element => {
    numMayor =  numMayor ? numMayor : element
     if ( numMayor > element ) {
       numMayor = element;
     }
   });
  });
  console.log( "numero mayor" + numMayor);
  return numMayor;
 }