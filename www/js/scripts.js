console.log("Funciona de 10!");
$(document).ready(function(){


});

function genera_tabla(){
		//verifica si ya hay una tabla y la borra
		tablaExiste = document.getElementById('tablita');
		if (!tablaExiste){

		} else {
			padre = tablaExiste.parentNode;
			padre.removeChild(tablaExiste);
		}
		//verifica el texto descriptivo de la tabla existe
		tituloExiste = document.getElementById('descripcionTabla');
		if (!tituloExiste){

		} else {
			padre = tituloExiste.parentNode;
			padre.removeChild(tituloExiste);
		}

		//verifica el boton para solucionar la matriz
		botonSol = document.getElementById('botonSolucionar');
		if (!botonSol){

		} else {
			padre = botonSol.parentNode;
			padre.removeChild(botonSol);
		}

		// Obtener el metodo a resolver
		var metodo = document.getElementById('metodos').value;
		// obtiene las dimensiones de la tabla con los input
		var numFilas = document.getElementById('num_filas').value;
		var numColumnas = document.getElementById('num_columnas').value;
		// obtiene el estado del checkbox
		var checkBox = document.getElementById("isRandom");
		//crea un boleano
		var aleatorio = new Boolean(false);
		//Modifica el boleano a partir del estado del checkbox
		if (checkBox.checked == true){
		    var aleatorio = true;
		  } else {
		    var aleatorio = false;
		  }

	  // Crea un elemento <table> y un elemento <tbody>

		var body = document.getElementById("Tabla");
		var tabla   = document.createElement("table");
	  	var tblBody = document.createElement("tbody");
	  	//crea un titulo para la matriz
	  	var texto = document.createElement("h3");
	  	texto.id = "descripcionTabla";
	  	texto.style.textAlign = "center";

	  	var caracteristicaMatriz="";

	  	// Crea un elemento <table> y un elemento <tbody>
	  var tabla = document.createElement("table");
	  tabla.id = "tablita";
	  tabla.className = "table";
	  tabla.style.marginTop ="0.5in";

	  var tblBody = document.createElement("tbody");
	  // Crea las celdas dependiendo del estado del boleano crea o no valores random

	  //Crea un boton para solucuionar la matriz
	var contenedorBotton = document.createElement("div");
	contenedorBotton.className ="col-md-12";
	contenedorBotton.id ="botonSolucionar";
	var bottonSolucionar = document.createElement("button");
	bottonSolucionar.className ="btn btn-alert";
	//La funcion del boton para solucionar la matriz
	bottonSolucionar.onclick = function(){
    	solucionar_tabla();
  	};
	var textoboton = document.createTextNode("Solucionar");
	bottonSolucionar.appendChild(textoboton);


	  if(aleatorio){
	  	//valores random desde 0 hasta 1000
		  	for (var i = 0; i < numFilas; i++) {
		    // Crea las hileras de la tabla
		    var hilera = document.createElement("tr");

			    for (var j = 0; j < numColumnas; j++) {
			      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
			      // texto sea el contenido de <td>, ubica el elemento <td> al final
			      // de la hilera de la tabla
			      var celda = document.createElement("td");
			      var textoCelda = document.createTextNode(Math.trunc((Math.random() * (1000 - 0) + 0)));
			      celda.appendChild(textoCelda);
			      hilera.appendChild(celda);
			      caracteristicaMatriz = "Su Matriz con valores Aleatorios entre 0 y 1000, resolver por: "+ metodo;
			    }

		    // agrega la hilera al final de la tabla (al final del elemento tblbody)
		    tblBody.appendChild(hilera);
		  }
	  }else{
	  	//solicita ingresar valores
		  	for (var i = 0; i < numFilas; i++) {
		    // Crea las hileras de la tabla añadiendoles un input
		    var hilera = document.createElement("tr");

			    for (var j = 0; j < numColumnas; j++) {
			      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
			      // texto sea el contenido de <td>, ubica el elemento <td> al final
			      // de la hilera de la tabla
			      var celda = document.createElement("td");
			      celda.contentEditable="true";
			      //var input = document.createElement("input");
				//	input.className = "form-control"; // set the CSS class
				//	input.id="valorCelda";
			      //celda.appendChild(input);
			      hilera.appendChild(celda);
			      caracteristicaMatriz = "Ingrese los valores de la matriz, resolver por: "+ metodo;
			    }
		    // agrega la hilera al final de la tabla (al final del elemento tblbody)
		    tblBody.appendChild(hilera);
		  	}
	  }
	  // posiciona el <tbody> debajo del elemento <table>
	  tabla.appendChild(tblBody);
	  // appends <table> into <body>
	  //muestra el titulo en la matriz
 	var textoTitulo = document.createTextNode(caracteristicaMatriz);
	texto.appendChild(textoTitulo);

	body.appendChild(texto)

	body.appendChild(tabla);
	contenedorBotton.appendChild(bottonSolucionar);

	body.appendChild(contenedorBotton);





	  // modifica el atributo "border" de la tabla y lo fija a "2";
	tabla.setAttribute("border", "2");

}

function createTable(list){
  var tabla = document.createElement("table");
  tabla.id = "tablita";
  tabla.className = "table";
  tabla.style.marginTop ="0.5in";
  var body = document.getElementById("Tabla");
  var tblBody = document.createElement("tbody");
	  	//valores random desde 0 hasta 1000
      for (var i = 0; i < list.length; i++) {
		    // Crea las hileras de la tabla
		    var hilera = document.createElement("tr");

			    for (var j = 0; j < list[i].length; j++) {
			      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
			      // texto sea el contenido de <td>, ubica el elemento <td> al final
			      // de la hilera de la tabla
			      var celda = document.createElement("td");
			      var textoCelda = document.createTextNode(list[i][j]);
			      celda.appendChild(textoCelda);
			      hilera.appendChild(celda);
			    }

		    // agrega la hilera al final de la tabla (al final del elemento tblbody)
		    tblBody.appendChild(hilera);
      }
      tabla.appendChild(tblBody);
      body.appendChild(tabla);
}
function solucionar_tabla(){

	var numFilas = document.getElementById('num_filas').value;
		var numColumnas = document.getElementById('num_columnas').value;

		if(numFilas==""){
			alert("Ingrese todos los campos");
		}
		if(numColumnas==""){
			alert("Ingrese todos los campos");
	}

	//en este array se guardaran los datos de la tabla
	my_liste = []

	//obtener filas de la tabla
	myData = document.getElementById('tablita').rows
	//llenar arreglo con informacion de la tabla:
		for (var i = 0; i < myData.length; i++) {
		            el = myData[i].children
		            my_el = []
		        for (var j = 0; j < el.length; j++) {
		                my_el.push(el[j].innerText);
		            }
		my_liste.push(my_el)

	}

	for(var i=0; i<my_liste.length; i++) {
    //Bucle que recorre el array que está en la posición i
	    for(var j=0; j<my_liste[i].length; j++) {
	        console.log(my_liste[i][j]);
	    }
	}


	// Obtener el metodo a resolver
		var metodo = document.getElementById('metodos').value;
		switch (metodo) {
		  case 'modelo de laplace':
        console.log('Solucionar por '+metodo);
        let sumValores = solucionarModeloLaplace(my_liste);
        this.createTable(my_liste)
        $("#solucion").html('<div class="panel panel-default"> <div class="panel-body">La solucion más ' + metodo + ' : ' + sumValores + '</div> </div>')
		    	//ingrese aqui el metodo que realiza el metodo y envie la matriz que se llenó
		    break;
		  case 'optimista':
		    console.log('Solucionar por '+metodo);
        //ingrese aqui el metodo que realiza el metodo y envie la matriz que se llenó
        let numMayor = solucionarOptimista(my_liste);
        $("#solucion").html('<div class="panel panel-default"> <div class="panel-body">La solucion más ' + metodo + ' : ' + numMayor + '</div> </div>')
		    break;
		  case 'pesimista':
		    console.log('Solucionar por '+metodo);
          //ingrese aqui el metodo que realiza el metodo y envie la matriz que se llenó
        let numMenor = solucionarPesimista(my_liste);
        $("#solucion").html('<div class="panel panel-default"> <div class="panel-body">La solucion más ' + metodo + ' : ' + numMenor + '</div> </div>')
		    break;
		  case 'hurwicz':
        console.log('Solucionar por '+metodo);

		    	//ingrese aqui el metodo que realiza el metodo y envie la matriz que se llenó
		    break;
		  case 'savage':
		    console.log('Solucionar por '+metodo);
		   		//ingrese aqui el metodo que realiza el metodo y envie la matriz que se llenó
		    break;
		  default:
		    alert("Seleccione un metodo");
	}
}