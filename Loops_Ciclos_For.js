// Loops ó Ciclos
//Cilco FOR(Para)

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
  console.log('Hola, $(estudiante)');
}

for(var i=0; i < estudiante.length; i++){
 console.log(estudiantes[i]);
}


//otra de las formas es:

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
  console.log('Hola, $(estudiante)');
}

for(var estudiante of estudiantes){
   saludarEstudiantes(estudiante);
}