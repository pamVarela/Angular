# Angular
Se usa Angular para la parte del front-end y NodeJS con MongoDB para la parte del back-end, esto con el fin de crear funciones CRUD.

## Instalación 

1. Se debe de tener las últimas versiones de Node y NPM para el uso del proyecto de Angular en versión 10 esto se haría con los siguientes comandos 

               npm install -g npm@latest
                
               npm cache clean --force
                
2. También se debe de instalar y desinstalar el Angular CLI.

               npm uninstall -g angular-cli
                
               npm uninstall -g @angular/cli
                
               npm install -g @angular/cli@latest
                
## Configuración
 1. Clonar el proyecto.
 2. Para ello se instalan los paquetes del **node_modules** en el servidor a partir de **/prueba-Tecnica-Angular** con el comando
 
                npm install
                
 3. También se hace escribe el mismo comando del paso #2 para el lado del cliente en la ubicación **/prueba-Tecnica-Angular/client**.
 
## Despliegue de proyecto
1. Se despliega el proyecto por medio del siguiente comando en la dirección **/prueba-Tecnica-Angular**:
                
                npm run start
                
2. Se corre el servidor de forma local con el puerto 3000 **http://localhost:3000** y el cliente en el **http://localhost:4200**
