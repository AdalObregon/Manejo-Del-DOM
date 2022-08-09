/*
DOM

Cuando aprendemos a crear paginas web, normalmente comenzamos con la construccion de sitios que estan estructurados con HTML y que tienen CSS como fuente de estilo. Hasta este momento, nuestras paginas son estaticas. Si nosotros queremos convertir estas paginas a paginas dinamicas, debemos agregar JavaScript a la ecuacion. Debemos recordar que cuando hablamos de paginas dinamicas, nos referimos a paginas que cambian de acuerdo a los datos que nos envie el usuario, esto con el fin de brindar una experiencias mucho mas completa, ademas de tener tareas o acciones que se puedan automatizar.

DOM significa Document Object Model, o modelo de objetos de documento. Podemos hacer una analogia con un arbol, donde el DOM es el arbol y cada una de las etiquetas del HTML es un nodo o rama, ademas de que cada nodo puede tener una propiedad o un atributo, que es lo que nos permite saber que es lo que esta dentro de ese nodo.

Cuando nos referimos al DOM, nos referimos a esta estructura de arbol, que podremos modificar de forma rapida y dinamica desde el propio JS y donde podremos agregar, eliminar, modificar y cambiar el contenido de nuestras paginas. Gracias a que usamos JS para estas modificaciones, vamos a poder automatizar tareas que se realicen cuando el usuario haga alguna tarea determinada, como mover el raton, pulsar un boton, hacer click en alguna parte del documento, escribir un texto, etc.

En resumen, DOM es lo que nos permite manejar HTML con JavaScript a traves del navegador y podemos visualizarlo como un gran arbol, donde cada etiqueta puede representar un nodo, y cada nodo puede tener una propiedad o un atributo (hojitas de arbol); es la representación de la página web en la memoria del navegador, a la que podemos acceder a través de JS. 


Por que se considera API?
Debemos recordar que una API es una interfaz que nos permite acceder a los datos que nos envie el usuario, como por ejemplo, el texto que escriba el usuario en un input, el texto que seleccione el usuario en un select, etc. Es por eso que el DOM se define como una API, porque tambien es una interfaz que nos permite acceder a los datos que nos envie el usuario.


Elementos del DOM
Cuando hablamos del DOM, estamos hablando de dos representaciones de nuestra página web, una de ellas es la representación del codigo fuente (la estructura del HTML) y otra de ellas es la representación visual (la estructura del DOM).

    Node: Es una unidad mas basica, que puede ser element o un nodo de texto. El texto dentro de un nodo elemento se considera un nuevo nodo hijo de un tipo texto.

        - Document: El nodo document es el nodo raiz, a partir del cual derivan el resto de nodos. Este objeto es el que nos permite acceder a todos los elementos del DOM (y que es representado como un arbol). Todos los nodos derivan del document.

        - Element: Son nodos definidos por etiquetas html. Por ejemplo, una etiqueta <div>, <h1>, <p>, etc.

        - Text: El texto dentro de un nodo element se considera un nuevo nodo hijo de un tipo texto. 
        Si nosotros tenemos una etiqueta <h1>Titulo</h1>, el h1 es un nodo elemento, y el texto Titulo es un nodo texto.

        - Atributos: Los atributos de las etiquetas definen nodos (en JS no los veremos como nodos, si no como informacion asociada al nodo de tipo element). No son nodos aparte, si no informacion asociada a un nodo.

        - Comentarios y otros: Los comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos HTML, generan nodos.


        Con JavaScript podemos cambiar:

        - Todos los elementos HTML de la pagina web.
        - Todos los atributos de la pagina web.
        - Todos los estilos CSS de la pagina web.
        - Eliminar elementos y atributos HTML existentes.
        - Agregar nuevos elementos y atributos HTML.
        - Reaccionar a todos los eventos HTML existentes en la pagina.
        - Crear nuevos eventos HTML en la pagina.


Seleccionar Elementos

    Sirven para realizar busquedas de elementos dentro del documento.

    -getElementById('IDElemento'); Buscar elementos por el ID.
    -getElementsbyClassName('nombreClase'): Busca elementos por la clase.
    -getElementsByTagName('p'): Buscar un elemento por su etiqueta.
    -getElementsByName(): Busca un elemento por su nombre

    Metodos Modernos

    -querySelector(); Buscar el primer elemento que coincida con el selector
    -querySelectorALL(); Busca todos los elementos que coinciden con el selector

*/

//getElementById()

const elementID = document.getElementById('parrafo1');

//getElementsbyClassName()

const elementClass = document.getElementsByClassName('parrafitos');

//getElementByTagName();

const elementTag = document.getElementsByTagName('h1');
const elementName = document.getElementsByName('primerParrafo');


//querySelector();
const querySelector = document.querySelector('#parrafo3');
const querySelector2 = document.querySelector('.parrafitos')

//querySelectorALL()
const querySelectorALL = document.querySelectorAll('.parrafitos');

/*
CREAR ELEMENTOS

 -createElement(): Crea un elemento EN MEMORIA del tipo element
 -createComment(): Crea un comentario
 -createTextNode(): Crea un nodo del tipo texto

 -cloneNode(): Clonar un elemento 
*/