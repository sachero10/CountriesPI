![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# **COUNTRIES** | Proyecto Individual

## **📌 OBJETIVOS**

Crear una Single Page Application en la que se puede:
- Buscar países.
- Visualizar la información de los países.
- Filtrarlos.
- Ordenarlos.
- Crear actividades turísticas.

<br />

---

## **TECNOLOGIAS UTILIZADAS**

<ul>
  <li>JavaScript</li>
  <li>React.js</li>
  <li>Node.js</li>
  <li>Redux.js</li>
  <li>Express.js</li>
  <li>Sequelize.js</li>
  <li>PostgreSQL</li>
</ul>

<br />

---

## **📋 PARA COMENZAR...**

1. Deberás forkear este repositorio para tener una copia del mismo en tu cuenta personal de GitHub.

2. Clona el repositorio en tu computadora para comenzar a trabajar. Este repositorio contiene un **`BoilerPlate`** con la estructura general del proyecto, tanto del servidor como del cliente. El boilerplate cuenta con dos carpetas: **`server`** y **`client`**. En estas carpetas estará el código del back-end y el front-end respectivamente.

3. En la carpeta **`server`** deberás crear un archivo llamado: **`.env`** que tenga la siguiente forma:

   ```env
       DB_USER=usuariodepostgres
       DB_PASSWORD=passwordDePostgres
       DB_HOST=localhost
   ```

4. Reemplazar **`usuariodepostgres`** y **`passwordDePostgres`** con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

5. Adicionalmente será necesario que crees, **desde psql (shell o PGAdmin)**, una base de datos llamada **`countries`**. Si no realizas este paso de manera manual no podrás avanzar con el proyecto.

<br />

---

## **📁 INSTALACION**

Utilice el administrador de paquetes npm para instalar. (Recuerde usar este comando dentro de /client y dentro de /server)

   <h3>npm install</h3>


<br />

## **EJECUTAR LOCALMENTE**

-BackEnd: Dentro ./server:
   ```npm start```

-FrontEnd: Dentro ./client:
   ```npm run dev```

<br />

