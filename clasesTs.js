var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Las clases deben llevar el nombre del archivo
var Persona = /** @class */ (function () {
    function Persona() {
    }
    return Persona;
}());
var nuevaPersona = new Persona();
nuevaPersona.nombre = "vic";
nuevaPersona.apellido = "ayala";
nuevaPersona.edad = 2342;
nuevaPersona.gay = true;
console.log(nuevaPersona);
// La herencia en POO es el mecanismo por el cual una clase permite heredar las características (atributos y métodos) de otra clase.
// La clase hija es la clase que hereda de otra clase
// Para heredar el cuerpo de otra clase se utiliza la palabra reservada extends
var PersonaFea = /** @class */ (function (_super) {
    __extends(PersonaFea, _super);
    function PersonaFea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PersonaFea;
}(Persona));
var personaVai = new PersonaFea();
personaVai.nombre = "bea";
console.log(personaVai);
