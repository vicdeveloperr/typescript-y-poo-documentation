// En typescript tiene un tipado fuerte es decir, debemos de definir que tipo de dato es este dato y no se permiten otro tipo de dato que no sea el designado.
// La sintaxis para las variables es la siguiente:
var nombreDeLaVariable: string = "dato";
// En este caso la variable solo aceptará strings

// Tipo de dato any, nos permite asignar cualquier tipo de dato a la variable
var cualquierTipoDeDato: any = 55;
cualquierTipoDeDato = "victor";
cualquierTipoDeDato = true; 

// Para los arrays, debemos de definir que tipo de dato le será asignado dentro de "<>" 
var arreglo: Array<string> = ["texto", "texto", "texto"];
var arreglo2: Array<any> = ["text", false, 10230];

// Typescript támbien nos permite asignar más de un tipo de dato
var variable: string | number = "string";
variable = 10934;
var dato: string | number | boolean = true;
dato = 541423 + "px";

// Támbien typescript nos permite crear un tipo de dato personalizado, usando la palabra reservada: type
type textoYbooleano = string | boolean;
type onlynumber = number;

var variable2: onlynumber = 3412;

var variable3: textoYbooleano = true;
variable3 = "texto";

// No se aplica unicamente a las variables el tipado fuerte sino a toda ejecución que pueda devovler un dato
function vickyflow(nombre:string):string{
    return `que onda ${nombre}`;
}
// En este caso la función vickyflow solamente podemos pasarle un string como argumento y solamente desvuelve un string
console.log(vickyflow("vic"));