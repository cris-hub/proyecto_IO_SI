console.log("Funciona de 10!");
$(document).ready(function(){

	   function genera_tabla(){
	   	
		var numFilas = document.getElementById(num_filas);
		var numColumnas = document.getElementById(num_);

		var array = new Array[numFilasparseInt(num_filas)][numFilasparseInt(num_columnas)];

	  // Crea un elemento <table> y un elemento <tbody>
		var tabla   = document.createElement("table");
	  	var tblBody = document.createElement("tbody");

	  	// Crea un elemento <table> y un elemento <tbody>
	  var tabla   = document.createElement("table");
	  var tblBody = document.createElement("tbody");
	 
	  // Crea las celdas
	  for (var i = 0; i < 2; i++) {
	    // Crea las hileras de la tabla
	    var hilera = document.createElement("tr");
	 
	    for (var j = 0; j < 2; j++) {
	      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
	      // texto sea el contenido de <td>, ubica el elemento <td> al final
	      // de la hilera de la tabla
	      var celda = document.createElement("td");
	      var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
	      celda.appendChild(textoCelda);
	      hilera.appendChild(celda);
	    }
	 
	    // agrega la hilera al final de la tabla (al final del elemento tblbody)
	    tblBody.appendChild(hilera);
	  }
	 
	  // posiciona el <tbody> debajo del elemento <table>
	  tabla.appendChild(tblBody);
	  // appends <table> into <body>
	  body.appendChild(tabla);
	  // modifica el atributo "border" de la tabla y lo fija a "2";
	  tabla.setAttribute("border", "2");
	}

});