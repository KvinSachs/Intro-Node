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

Le fichier package.json permet de configurer le fichier de base (pour changer de index js), de charger les dependances, de définir pleins de metas liées au package

```javascript
{"main" : "main.js"}
```

Pour utiliser des modules, il faut creer un dossier *node_modules* et ensuite on peut utiliser `var example = require('exampleOne');` en utilisant soit index.js soit un autre nom et un package.json  

Pour exporter des fonctions d'un module on utilise `module.export.fn = fn`

# NPM

Pour installer un packet node on utilise :

```
npm install nom_package // locally
npm install nom_package -g  // globally
npm search
npm info
npm uninstall
npm ls // liste des modules en local
npm ls -g // liste des modules globaux
npm ll // plus d'infos sur les modules
console.log(module)
```

## REPL -> Read - Eval - Print - Loop

# Évènements

* Émetteur (Emitter)
* Écoutants (Listener)

Pour utiliser les evenements il faut faire un require de la library **events** 

```javascript
var events = require('events');
var objet1 = events.EventEmitter();
objet1.addListener(str, fn);
objet1.on(str, fn);
objet1.once(str, fn); // Ecoute un evenement une seule fois
objet1.removeListener(str);
objet1.removeAllListener();
objet1.Listeners(str); // Retourne tout les objets qui écoutent cet évènement
objet1.emmit(str);
objet1.setMaxListener(int); // Change le nombre de listener (10 par défaut)
```