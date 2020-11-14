
$(document).ready(function(){
  init()
});
function init(){
  $("#containerCcoeficionte").hide()
  $("#tablas").hide()
  $("#coeficionte").attr({
    "max" : 1,
    "min" : 0
 });
};

function onSelectChange(event){
  $("#tablas").hide()
event.target.value == "hurwicz" ? $("#containerCcoeficionte").show() : $("#containerCcoeficionte").hide()
}

function genera_tabla(){
  $("#tablas").show()
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
  $("#tablaProblemaBody").html("")
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
        $("#tablaProblemaBody").append(hilera).appendTo("tablaProblema").appendTo("tablas")

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
			    }
		    // agrega la hilera al final de la tabla (al final del elemento tblbody)
        $("#tablaProblemaBody").append(hilera).appendTo("tablaProblema").appendTo("tablas")
		  	}
	  }

}

function createTable(list){
  $("#tableSolucion").show();
  $("#tableSolucionBody").html("")	//valores random desde 0 hasta 1000
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
        $("#tableSolucionBody").append(hilera).appendTo("tableSolucion").appendTo("tablas")
      }
}
function solucionar_tabla(){
  $("#tableSolucion").hide();
  $("#tablas").show()
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
	myData = document.getElementById('tablaProblemaBody').rows
	//llenar arreglo con informacion de la tabla:
		for (var i = 0; i < myData.length; i++) {
		            el = myData[i].children
		            my_el = []
		        for (var j = 0; j < el.length; j++) {
		                my_el.push(el[j].innerText);
		            }
		my_liste.push(my_el)

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
        let coeficionte = document.getElementById('coeficionte').value
        let solucionarHurwi =  solucionarHurwics(my_liste,coeficionte)
        this.createTable(my_liste)
        $("#solucion").html('<div class="panel panel-default"> <div class="panel-body">La solucion más ' + metodo + ' : ' + solucionarHurwi + '</div> </div>')
		    break;
		  case 'savage':
		    console.log('Solucionar por '+metodo);
			let savage = solucionarSavage(my_liste,numColumnas,numFilas);
      this.createTable(my_liste);
      $("#solucion").html('<div class="panel panel-default"> <div class="panel-body">La solucion más ' + metodo + ' : ' + savage + '</div> </div>')
		   		//ingrese aqui el metodo que realiza el metodo y envie la matriz que se llenó
		    break;
		  default:
		    alert("Seleccione un metodo");
	}

}