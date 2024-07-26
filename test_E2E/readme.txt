Proyecto de Automatización de Pruebas
Este proyecto es un marco de automatización de pruebas utilizando Selenium WebDriver, Cucumber y JavaScript.
Está diseñado para automatizar pruebas de extremo a extremo (E2E) para realizar un flujo de compra en saucedemo.

Dependencias
Node.js:            Asegúrate de tener Node.js instalado en tu sistema. El proyecto es compatible con Node.js 20.
Selenium WebDriver: Automatización de navegadores web para aplicaciones.
Cucumber:           Marco de pruebas basado en Desarrollo Guiado por Comportamiento (BDD).
@cucumber/cucumber: Soporte para Javascript en CucumberJS.
  pretty-formatter: Soporte para el logging de los escenarios en la consola de ejecución
  html-reporter:    Creador de reporte en formato HTML con los resultados obtenidos en la prueba
Chai:               Biblioteca de aserciones para pruebas.
edgedriver:         Soporte para el driver de Microsoft Edge

##INSTALACION
Clona el repositorio:
    (Asegurate de tener git instalado en tu equipo)
    - Crea la carpeta donde quieres descargar el proyecto
    - Abre una nueva consola de git
    - envía el comando: git clone https://github.com/tu-usuario/tu-repo.git
Descarga el proyecto:
    - Selecciona la opción descargar zip
    - crea la carpeta donde quieres ubicar el proyecto
    - descomprime el archivo .zip que descargaste del repositorio.


Instala las dependencias del proyecto:
    - En la carpeta raiz (donde descomprimiste o clonaste el proyecto) abre una consola cmd.
    - Ejecuta el comando "npm install", este descargará las dependencias configuradas en el proyecto.


##EJECUCIÓN
El proyecto ya se encuentra configurado con un escenario que ejecuta el flujo de compra de 2 productos en saucedemo.

Luego de instalar las dependencias en el paso anterior, debes enviar el siguiente comando:
npm test
Este ejecutará el flujo automatizado y generará el reporte al finalizar la prueba.
