Trabajo Práctico N.º 2 – Programación 3

Año: 2025

Profesor: Matías Sebastián Chocobar

Carrera: Tecnicatura Universitaria en Programación

Tema: Sitio de Presentación Grupal con React JS + Git y GitHub colaborativo

Objetivos

Profundizar el uso de componentes React con estructura padre-hijo.

Aplicar useState, props, arrays de objetos y métodos de renderizado dinámico como .map().

Fomentar el trabajo colaborativo mediante el uso de Git y GitHub.

Practicar la creación de formularios en React para manipulación de datos.

Consigna

El presente trabajo práctico deberá ser realizado forma grupal.
Cada grupo desarrollará una página web de presentación grupal utilizando React JS.

Requisitos Generales

Grupal: Cada integrante deberá subir el proyecto completo a su propio repositorio GitHub.

Un solo integrante enviará por mail al profesor el link al repositorio compartido.

En el archivo App.js, al inicio del componente, se debe incluir un comentario con:

Nombre completo y legajo de todos los integrantes del grupo.

Estructura del Proyecto

src/

components/

Header.jsx

Main.jsx

Footer.jsx

Nosotros.jsx

View.jsx

pages/

HomePages.jsx

LoginPages.jsx

NosotrosPages.jsx

ViewPages.jsx

App.js

index.js

styles/

App.css

Funcionalidad
Componente Principal: App.js

Declarar un array de objetos, cada uno representando un integrante del grupo:

{
  nombre: "Juan",
  apellido: "Pérez",
  legajo: "12345",
  github: "https://github.com/juanperez",
  foto: "url_foto"
}


Este array se debe pasar como prop al componente Main.

Componente Main.jsx

Debe desestructurar las props recibidas.

Debe pasar el array de integrantes como prop al componente Nosotros.

Además, incluir un formulario para agregar un nuevo integrante (nuevo objeto) al array.

Componente Nosotros.jsx

Recibe el array y lo recorre con .map() para mostrar:

Foto

Nombre completo

Legajo

Link a su GitHub

Componentes adicionales

Header.jsx: Encabezado con título y navegación.

Footer.jsx: Enlaces o datos de contacto.

View.jsx: Puede servir para ver detalle de algún integrante (opcional).

Las páginas HomePages, NosotrosPages, etc., deben renderizar los componentes anteriores.

Tecnologías y Técnicas

React con Create React App (CRA).

Componentes funcionales.

useState, spread operator, props, .map(), arrays y objetos.

Git y GitHub: mínimo 5 commits significativos por integrante.

Uso de rama secundaria al menos una vez durante el desarrollo.

Estética

El proyecto debe tener una apariencia visual cuidada, clara y agradable.

Se pueden utilizar estilos con CSS tradicional.

Se valorará especialmente la creatividad, originalidad en la presentación, y el uso de componentes adicionales o ideas innovadoras que enriquezcan el proyecto. ¡Sean creativos!

Entrega

Cada integrante debe tener su repo individual.

Un solo alumno de cada grupo enviará por mail la URL del repositorio de GitHub antes del: Sábado 26-04-2025 hasta las 18:00 hs.
