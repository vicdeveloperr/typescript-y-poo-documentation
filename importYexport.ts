// Los exports nos permite exportar, se exporta agregando la palabra reservada export.
export class Clase{
    public nombre: string;
}

// Y al exportarlo podemos acceder desde otro archivo al exportado, gracias al import. Que como su nombre nos dice nos permite importar, y se utiliza la siguiente sintaxis:
import { Clase } from "./importYexport";
// Dentro del corchete debemos de definir el objeto, clase, variable, etc. que queremos importar, y seguido de from definimos su ubicación.