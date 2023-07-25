//Ciclo While
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

	function saludarEstudiantes(){
		console.log('Hola, $(estudiante)');
	
	}

	while(estudiantes.length > 0){
		console.log(estudiantes);
		var estudiante = estudiantes.shift();
		saludarEstudiantes(estudiante);
	}