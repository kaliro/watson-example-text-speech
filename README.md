# watson-example-text-speech
Ejemplo basico de como usar texto a voz con IBM Watson con node js

## Pre requisitos

Instalar NodeJS y utitlizar algun editor

- [Node.js](https://nodejs.org/) v14+ como motor.
- Un editor como [VsCode](https://code.visualstudio.com/)
- Cuenta de IBM Cloud

## Paso 0 

Luego de que tengas instalado NodeJs y un editor de tu preferencia abre este proyecto y a continuaciom

- Copia el archivo .env.ejemplo a .env .
- Primero instala todas las dependencias.

```bash
# instalar dependencias
$ npm install
```

- una vez intalada toda las dependencias ejecuta el proyecto con:

```bash
# server con refresh automatico en localhost:3000
$ npm run local
```

- abre el explorador en http://localhost:3000

## Paso 1

Ahora vamos a crear las credenciales con las cuales podremos usar los servicios de IBM Watson existen muchas formas de autenticarse aqui puedes encontrar mas [info](https://github.com/watson-developer-cloud/node-sdk#authentication).

- Vamos a la pagina de IBM Cloud [Dashboard](https://cloud.ibm.com/).
- Luego crearemos un nuevo recurso en [**Crear Recurso > AI**](https://cloud.ibm.com/catalog?category=ai) y crea la instancia del servicio [Ejemplo](archivos_tutorial/Paso1_1_Ibm_cloud_resource.PNG).
- Una vez creado la instancia damos clik en **Administracion** y vemos la url y el API key. [Ejemplo](archivos_tutorial/Paso1_2_manage_api.PNG)
- Copiamos estos valores y los reemplazamos en nuestro archivo .env
- Una vez reemplazado los valores ejecuta.

```bash
# ejecutara y creara un archivo en el directorio base.
$ npm run prueba
```

- Una vez terminada la ejecucion buscamos en el directorio base un archivo llamado `hola_mundo.mp3` y reproducelo.
- Prueba explorando el archivo `prueba.js`.
- Cambia el texto y ejecutar nuevamente el comando `npm run prueba` y luego reproduce el archivo `hola_mundo.mp3`.
