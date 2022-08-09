/*
Cuando hablamos del DOM, estamos hablando de dos representaciones de nuestra pagina: una de ellas en la representación del codigo fuente (la estructura del HTML) y la otra es la representación visual (la estructura del DOM).
Nodo
Es la unidad mas basica que puede ser modificada, solo puede ser una etiqueta o element o un nodo de texto
<h1>// papa
    HOLA GENERATION // hijo o nodo de texto
</h1>
Document
El nodo raiz a partir del cual se derivan los demas nodos. Este objeto es e que nos permite acceder a todos los elementos del DOM. Todos los nodos derivan del document.
Element
Son los nodos definidos por la etiqueta html. Por ejemplo, una etiqueta dividida
Con JavaScript podemos cambiar:
- Todos los elementos HTML de una pagina web
- Todos los atributos de la pagina web
- Todos los estilos CSS de la pagina web
- Eliminar elementos y atributos ya existentes
- Agregar nuevos elementos y atributos
- Reaccionar a todos los eventos HTML que existan en la pagina
- Crear nuevos eventos HTML en la pagina
Metodos de seleccion de elementos
Son elementos que nos van a permitir seleccionar unno o varios elementos o grupos de elementos del DOM. Estos metodos se utilizan en el document, por eso se agrega antesl del get.
*/

const cambioDeParrafo = document.getElementById("parrafo2").innerHTML = "Quiero chilaquiles verdes";