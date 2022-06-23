// Las interfaz nos permite definir que métodos y/o propiedades deben existir en una clase. Esto nos sirve para crear un codigo más exacto se podría decir
// Una interfaz se crea con la palabra reservada "interface" y sigue la siguiente estructura:
interface nombreInterfaz{
    funcion1();
    funcion2();
    nombre;
// Definimos que las clases que tengan está interfaz deben llevar los métodos funcion1 y funcion2.
}
// Y para implementar una interfaz en una clase se utiliza la palabra reservada implements, y si no agregamos todos los métodos y propiedades que require la interfaz, devolverá un error.
class Clase implements nombreInterfaz{
    funcion1() {
    }
    funcion2() {
        
    }
    nombre: string;
}
