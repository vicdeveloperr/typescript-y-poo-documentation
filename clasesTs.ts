// Las clases deben llevar el nombre del archivo
class Persona{
    // Las clases en typescript funcionan un poco diferente al de javascript a la hora de crear objetos, en typescript las clases se utilizan como un objeto molde en el cual definimos las propiedades y su tipo de dato para luego modificarlo.
    apellido: string;
    nombre: string;
    edad: number;
    gay: boolean;
    // Y támbien podemos modificar el scope de las propiedades agregandolé las palabras reservas de public, private o protected
    public club: string;
    // public: no ajusta su scope es decir se pueden acceder a las propiedades desde cualquier lugar
    protected hijos: boolean;
    // protected: se pueden acceder a las propiedades desde la clase misma y las clases que la hereden.
    private horasCsgo: number;
    // private: solamente se pueden acceder a las propiedades y métodos desde la clase que los define
}

let nuevaPersona = new Persona();
nuevaPersona.nombre = "vic";
nuevaPersona.apellido = "ayala";
nuevaPersona.edad = 2342;
nuevaPersona.gay = true;
console.log(nuevaPersona);

// La herencia en POO es el mecanismo por el cual una clase permite heredar las características (atributos y métodos) de otra clase.
// La clase hija es la clase que hereda de otra clase
// Para heredar el cuerpo de otra clase se utiliza la palabra reservada extends
class PersonaFea extends Persona{
    public personaFea: boolean;
}

let personaVai = new PersonaFea();
personaVai.nombre = "bea";
console.log(personaVai);