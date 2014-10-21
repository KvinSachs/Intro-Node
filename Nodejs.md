#Intro NodeJs

##Refresh

jQuery != Javacript  

###Languages Serveurs

* PHP
* NodeJs
    * Cloud
        * Heroku
        * Nitrous.io
        * AWS
* Python (Django)
* Ruby On Rails
* JEE -> JSP -> Tomcat
* ASP.net

###Refresh Javascript

Javacript -> Parser le DOM.  

Le Javascript est un langage prototypé.

###Database

* MySQL
* SQLite
* PostgreSQL
* Microsoft & Database Server
* Oracle

* NoSQL (not only SQL)
    * Mapreduce (mapper et retrouver facilement nos fichiers)
    * MongoDB
    * CouchBase

##NPM Node Package Manager

Permet d'installer facilement des packages, framework pour NodeJs

#NodeJs

**Le javascript est mono threadé, un seul et unique coeur** 

Code NON BLOQUANT axé sur des listeners.

# NODEJS 

* JS côté serveur
* Monothreadé
* Motor V8
* Low Level
* Real Time
    * Socket
    * Ad
    * Pictionnary
    * File Upload Client
    * Chat
    * Real Time App


## API

```javascript
var server = require('http');
server.createServer().listen();
```
------------

# Modules

**Les modules sont chargés en cache**  
Avec un *require*, il est possible de charger le fichier index.js automatiquement en pointant seulement le dossier.

```javascript
// File ./exampleOne/index.js
var example = require('./exampleOne/');
```

Le fichier package.json permet de configurer le fichier de base (pour changer de index js)

```javascript
{"main" : "main.js"}
```
