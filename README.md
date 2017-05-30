# Magroplate HTML #

Módulo en **NodeJS** para crear un templete (*boilerplate*) para desarrollos en **HTML5**, usando **Bootstrap** como plantilla de estilos; **GULP** como gestor de tareas para minificar archivos Javascript y Sass y **Browser-Sync** para levantar un servidor web y  sincronizar diferentes navegadores conectados a tu red interna, ideal para probar versiones responsivas.

Además de contar con varios *scripts* dentro de ```package.json``` para automatizar tareas, como subir actualizaciones a repositorios remotos GIT, subir archivos a un servidor FTP mediante **Git-FTP**, correr **Browser-Sync**, etc.

Contiene un sistema de archivos (*scaffolding*) predeterminado que uso siempre para iniciar proyectos sencillos que solo necesite HTML5 y Javascript. Desde luego que esta estructura de archivos puede ir cambiando conforme las necesidades del proyecto, pero es un buen comienzo, de ahí que este módulo sea un *boilerplate* personalizado.

## Desarrollo ##

* Autor: Fernando Magrosoto V. [@fmagrosoto](https://twitter.com/fmagrosoto)
* Historia: Mayo de 2017

## Dependencias ##

* Bootstrap 3.+
* Jquery 3.+
* Gulp 3.9.+
* Browser-sync 2.18.+

## Instalar Magroplate HTML ##

Al clonar este repositorio tienes que hacer tres cosas importantes.
Primero, tienes que redireccionar tu repositorio GIT:

```
git remote add origin <URL de tu repo>
git push -u origin --all && git push -u origin --tags
```

Luego, debes de instalar las dependencias:

```
npm run instalar
```

Y por último, pasar los archivos de las dependencias, como jQuery, fuentes Glyphicon y archivos JS de Bootstrap a tu carpeta de distribución *www*.

```
npm run compilar
```

## Iniciar tareas ##

Este proyecto utiliza [**Browser-Sync**](https://www.browsersync.io/) para levantar un servidor web y sincronizar los navegadores donde tengas abierta la página de desarrollo. Para eso deberás de instalar la dependencia de manera global:

```
npm install -g browser-sync
```

También utiliza una gestión de tareas en **Gulp** que se instala de manera local con ```npm run instalar```. Esta gestión de tareas sirve para minificar archivos Javascript y Sass. Puedes correr un observador (*watch*) con ```gulp watch``` pero la mejor manera de correr el servidor web y las tareas de **Gulp** es usando el comando:

```
npm start
```

Con esto, levantas el servidor web con **Browser-sync**, iniciar el gestor de tareas con **Gulp** y pones un observador para que cada vez que hagas cambios en páginas HTML, Javascript y Sass, el servidor sincronice los cambios en los navegadores.

## Comenzar a usar el templete ##

Una vez que tengas coriendo las tareas y el servidor web, puedes empezar a modificar y crear archivos HTML, JS y CSS.

Los archivos HTML se encuentran en la raíz de la carpeta de distribución *www*.

Para los archivos Javascript, debes de crearlos en la carpeta *source/js*, el gestor de tareas detectará cuando los grabes y los minificará, renombrará y los pasará a la carpeta *www/js*.

Para los archivos Sass, debes de crearlos en la carpeta *source/scss*, el gestor de tareas detectará cuando los grabes y los compilará, minificará, renombrará y los pasará a la carpeta *www/css*.

Puedes hacer cualquier modificación en las tareas, inclusive extenderlas, a través del archivo *gulpfile.js*.
