function solucionarSavage(my_liste){
var numMayor = 0;
var array = [];


	for(var i=0; i<my_liste.length; i++) {
	let maxColum = 0;
    //halla el numero mayor de cada columna
	    for(var j=0; j<my_liste[i].length; j++) {
	    	if(parseInt(my_liste[j][i])>maxColum){
	    		maxColum=parseInt(my_liste[j][i]);
	    	}
	    }
	//resta el numero mayor a cada elemento d ela columna
	    console.log(maxColum);
	    for(var j=0; j<my_liste[i].length; j++) {
	    	my_liste[j][i] = maxColum-parseInt(my_liste[j][i]);
	    	console.log(my_liste[j][i]);
	    }
	}
	//añade la nueva columna al arreglo
	for(var i=0; i<my_liste.length; i++){
		let max =0;
		for(var j=0; j<my_liste[i].length; j++){
			for(var j=0; j<my_liste[i].length; j++) {
	    	if(parseInt(my_liste[i][j])>max){
	    		max=parseInt(my_liste[i][j]);
	    		
	    	}
	    }
	    my_liste[i].push(max);
		}
	}
	console.log(my_liste);
	console.log(array);


 return array;
}