// Que es un Hoisting: es cuando las variables y las funciones se declaran ó procesan antes que se procece cualquier tipo de codigo.

// hay 2 estados donde se da el Hoisting en JavaScript

// 1er estado (Variables)

console.log(miNombre);

var miNombre = "Juan";

// 2do estado (Funciones)

hey();

function hey(){
    console.log("Hola "+ miNombre);
}