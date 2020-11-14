
function solucionarHurwics(my_liste,coeficiente){
  console.log(my_liste)
  let sumValores=0;
  let temArray
  temArray = []


  my_liste.forEach(elementList => {
    let tempSumaPorcentajes = 0;
    let valorPesimista = 0;
    let valorOptimista = 0;
    valorPesimista = Math.min(...elementList);
    valorOptimista = Math.max(...elementList);

    tempSumaPorcentajes = valorOptimista*coeficiente + valorPesimista*(1-coeficiente)

    elementList.push(tempSumaPorcentajes)
    temArray.push(tempSumaPorcentajes)

  });
  sumValores = Math.max(...temArray)
  console.log( "solucionarHurwics: " + sumValores );
  return sumValores;
 }