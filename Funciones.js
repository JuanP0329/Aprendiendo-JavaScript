//Que es una Funcion: son un conjunto de sentencias que podemos utilizar para generar acciones con los valores que guardamos anteriormente en las variables.

// hay 2 tipos de funciones(Declarativas y Expresion).

//Declarativas
function miFuncion(){
    return 3;
}

miFuncion();

//Expresion
var miFuncion = function(a,b){
    return a + b; 
}

miFuncion();

/* 
Ejm 1:
function saludarEstudiantes(estudiante){
... console.log("Hola "+ estudiante);
... }
undefined
> saludarEstudiantes("Juan")
Hola Juan

Ejm 2:
function sumar(a,b){
... var resultado = a + b;
... }
undefined
> function sumar(a,b){
... var resultado = a + b;
... return resultado;
... }
undefined
> sumar(1,2);
3
*/