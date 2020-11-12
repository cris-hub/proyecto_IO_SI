console.log("Funciona de 10!");
$(document).ready(function(){

	  
});

function genera_tabla(){

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

	  	// Crea un elemento <table> y un elemento <tbody>
	  var tabla = document.createElement("table");
	  var tblBody = document.createElement("tbody");
	  // Crea las celdas dependiendo del estado del boleano crea o no valores random

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
			      var input = document.createElement("input");
					input.type = "text";
					input.className = "css-class-name"; // set the CSS class
			      celda.appendChild(input);
			      hilera.appendChild(celda);
			    }
		    // agrega la hilera al final de la tabla (al final del elemento tblbody)
		    tblBody.appendChild(hilera);
		  	}
	  }
	  // posiciona el <tbody> debajo del elemento <table>
	  tabla.appendChild(tblBody);
	  // appends <table> into <body>
	  body.appendChild(tabla);
	  // modifica el atributo "border" de la tabla y lo fija a "2";
	  tabla.setAttribute("border", "2");


	}