
function solucionarModeloLaplace(my_liste){
  console.log(my_liste)
  let porcentaje = 1/my_liste.length;
  let sumValores=0;

  my_liste.forEach(elementList => {
    let tempSumaPorcentajes = sumValores;
   elementList.forEach(element => {
    tempSumaPorcentajes = element * porcentaje

   });
   elementList.push(tempSumaPorcentajes)
   if (tempSumaPorcentajes > sumValores) {
    sumValores = tempSumaPorcentajes;
  }
  });
  console.log( "numero mayor" + sumValores);
  return sumValores;
 }