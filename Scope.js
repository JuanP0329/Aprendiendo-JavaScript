//Que es el Scope: Es el alcance que tienen las variables, depende mucho de donde declares la variable.

// hay 2 tipos de Scope (global y Local)

/*
global:
var miNombre = "Juan";
undefined
.
.
.

local:
 function nombre(){
... var miApellido = "Benjumea";
... console.log(miNombre + " " + miApellido);
... }
undefined

nota: desde los locales podemos acceder a los globales, pero desde los globales no podemos acceder a los locales

*/