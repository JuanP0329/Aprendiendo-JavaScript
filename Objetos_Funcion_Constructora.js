//Funcion Constructora

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
    
/*
undefined
auto
ƒ auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
*/
var autoNuevo = new auto("Tesla", "Model 3", 2020);

/*
undefined
autoNuevo
auto {marca: 'Tesla', modelo: 'Model 3', annio: 2020}
var autoNuevo2 = new auto("Tesla", "Model x", 2018);
undefined
var autoNuevo3 = new auto("Toyota", "Corola", 2020);
undefined
autoNuevo2
auto {marca: 'Tesla', modelo: 'Model x', annio: 2018}
autoNuevo3
auto {marca: 'Toyota', modelo: 'Corola', annio: 2020}
*/