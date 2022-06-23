// En typescript tiene un tipado fuerte es decir, debemos de definir que tipo de dato es este dato y no se permiten otro tipo de dato que no sea el designado.
// La sintaxis para las variables es la siguiente:
var nombreDeLaVariable = "dato";
// En este caso la variable solo aceptará strings
// Tipo de dato any, nos permite asignar cualquier tipo de dato a la variable
var cualquierTipoDeDato = 55;
cualquierTipoDeDato = "victor";
cualquierTipoDeDato = true;
// Para los arrays, debemos de definir que tipo de dato le será asignado dentro de "<>" 
var arreglo = ["texto", "texto", "texto"];
var arreglo2 = ["text", false, 10230];
// Typescript támbien nos permite asignar más de un tipo de dato
var variable = "string";
variable = 10934;
var dato = true;
dato = 541423 + "px";
var variable2 = 3412;
var variable3 = true;
variable3 = "texto";
// No se aplica unicamente a las variables el tipado fuerte sino a toda ejecución que pueda devovler un dato
function vickyflow(nombre) {
    return "que onda ".concat(nombre);
}
// En este caso la función vickyflow solamente podemos pasarle un string como argumento y solamente desvuelve un string
console.log(vickyflow("vic"));
