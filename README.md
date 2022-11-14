## 🚩 Table of Contents

- [Introduction](#--introduction)
- [Installation](#--installation)
- [Development setup](#--development-setup)
- [Project structure](#--project-structure)
- [Features](#--features)
- [Packages](#-packages)
- [License](#-license)




## <img src="https://cdn-icons-png.flaticon.com/512/1436/1436664.png" width="25" height="25" style="padding-right:15px">  Introduction 

<p>
This repo is a simple project to demonstrate CRUD operations.

CRUD refers to the four basic operations a software application should be able to perform – Create, Read, Update, and Delete.

In such API, user must be able to create data, have access to the data in the UI by reading the data, update or edit the data, and delete the data.
</p>


## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  Installation 


### 🔘 Cloning repository
1. On GitHub.com, navigate to the main page of the repository.
2. Above the list of files, click  Code.
3. Copy the URL for the repository.
4. Open Terminal.
5. Change the current working directory to the location where you want the cloned directory.
6. Type git clone, and then paste the URL you copied earlier.
```
git clone github.com/Faris-abukhader/todo-API
```
Press Enter to create your local clone
```
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `todo-API`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```
<br/>


## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  Development setup

To set up this project you need to download NodeJs in your machine or if you have it make sure you have the latest version of it.

### 🔘 Checking up Node version
```
node -v
```

### 🔘 Downloading Node

> for Windows  


Download the windows installer from [NodeJs offical website](https://nodejs.org/en/download/) make sure you have download the latest version of NodeJs.
<br/>


> for Mac
- You can download NodeJs using brew CLI
```
brew install node
```
- You can download NodeJs mac version through [the offical website](https://nodejs.org/en/download/)
<br/>
<hr/>


### 🔘 Downloading the packages

Go to project direct where  <package.json> is exist and type in terminal :
```
npm install 
```
Now you need to create DB server connection , after you create it , create .gitignore file and type :
```
# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mysql://<USERNAME>:<YOUR_PASSWORD>@localhost:3306/<DB_NAME>?schema=public"

```
Now you need to step up Prisma ORM , type in your terminal :
```
cd prisma 
prisma generate
```

To run the project just type down in terminal :
```
npm run dev
```

<br/>
<hr/>


## <img src="https://cdn-icons-png.flaticon.com/512/535/535471.png" width="25" height="25" style="padding-right:15px">  Project structure  

```
📦todo API
 ┣ 📂controller
 ┃ ┗ 📜todo.js
 ┣ 📂prisma
 ┃ ┣ 📂migrations
 ┃ ┃ ┣ 📂20221111023938_init
 ┃ ┃ ┃ ┗ 📜migration.sql
 ┃ ┃ ┗ 📜migration_lock.toml
 ┃ ┗ 📜schema.prisma
 ┣ 📂public
 ┣ 📂route
 ┃ ┗ 📜todo.js
 ┣ 📂schema
 ┃ ┗ 📜todoSchema.js
 ┣ 📂util
 ┃ ┗ 📜docGeneratorOptions.js
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜app.js
 ┣ 📜package-lock.json
 ┗ 📜package.json
```


## <img src="https://cdn-icons-png.flaticon.com/512/535/535471.png" width="25" height="25" style="padding-right:15px">  Features  

- Simple rest API doc , generated using swagger library , you can check that out at :
```
http://localhost:4500/doc
```



## 📦 Packages


| Name | Description |
| --- | --- |
| [`@fastify/cors`](https://github.com/fastify/fastify-cors) | Fastify CORS |
| [`@fastify/static`](https://github.com/fastify/fastify-static) | Plugin for serving static files as fast as possible |
| [`@fastify/swagger`](https://github.com/fastify/fastify-swagger) | Swagger-compliant APIs entirely in Node.js |
| [`@prisma/client`](https://github.com/prisma/prisma) | Next-generation ORM for Node.js & TypeScript | PostgreSQL, MySQL server |
| [`prisma`](https://github.com/prisma/prisma) | Next-generation ORM for Node.js & TypeScript | PostgreSQL, MySQL server |
| [`bcrypt`](https://www.npmjs.com/package/bcrypt) | A library to help you hash passwords |
| [`fastify`](https://github.com/fastify/fastify) | Fast and low overhead web framework, for Node.js |
| [`nodemon`](https://github.com/remy/nodemon) | Simple monitor script for use during development of a Node.js app |


## 📜 License

This software is licensed under the [MIT](https://github.com/Faris-abukhader/we-work-backend/blob/master/LICENSE) © [FaRiS](https://github.com/Faris-abukhader).
