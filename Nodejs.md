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
## Require à connaître

* http
* util
    * util.dir()
    * util.inspect()
* events

## Streams

Types de stream
 * Stream Read
 * Stream Write
 * Stream Duplex

## FS

File System -> Lire et écrire des fichiers

### Flags
 * 'r' -> ouverture d'un fichier en lecture seule, le fichier doit exister
 * 'r+' -> lecture et écriture d'un fichier, le fichier doit exister
 * 'w' -> ouverture du fichier en écriture seule, le fichier est créé si il n'existe pas, écraser si il existe
 * 'w+' -> lecture et ecriture, le fichier est créé ou écrasé
 * 'a' -> ouverture du fichier en mode ajout, créé si il existe pas et sinon il sera modifié
 * 'a+' -> ouverture du fichier en lecture et en ajout, créé si il n'existe pas il est créé, sinon il est modifié

```js
var doc = fs.open('file', 'flag', callback(err, fileDescriptor));
fs.close(doc, callback);
```

#### Lecture complète

* readFile(filename, [options], callback)
* readFileSync(filename,)

#### Lecture partielle

* read(fileDescriptor, buffer, offsetBuffer, length, position, callback(err, bytesRead, data))
* readSync(fileDescriptor, buffer, offsetBuffer, length, position)

renvoie un buffer d'octet, utiliser toString() pour le convertir en string


## TCP/UDP

* TCP -> Transmission Control Protocol
* UDP -> User Datagram Protocol

TCP envoie en chaîne de manière chronologique

UDP envoie tout de façon assez anarchique et aléatoire

Les streams sont très importants, ce sont eux qui permettent l'échange de données.

Un stream représente soit la lecture, soit l'écriture de données, soit les 2 (bidirectionnels).

## HTTP

* necessite le module http
* permet de creer un serveur
* instance de events qui est instance de stream en lecture

`http.createServer(function(req, res) {}).listen(80);`

C'est à partir de cette requête que l'on récupère les headers, la méthode http (GET, POST, PUT, DELETE); le status code (doit être absolument gérer par nous), il va falloir spécifié le Content-Type.

* request -> class http.incomingMessage, stream readable, correspond aux arguments transmis par le client http, pour que le serveur puisse traiter cette même requête
* response -> class http.serverResponse, stream writable, contient la réponse envoyée au client

La construction de la réponse est majoritairement du HTML mais également du JSON. On y accède avec localhost:[portUtilisé], et quelque soit le port utiliser, la suite de la querystring n'a pas d'importance parce qu'on ne peut pas parser l'url directement (localhost:[portUtilisé]/toto).

### Requete

Quelques méthode de l'objet request. Si l'url est passé directement dans la barre d'url c'est du GET.

* request.url
* request.header
* request.client (class net.socket, le client TCP qui va se connecter au serveur)

### Response

* response.write()
* response.end() (ferme le stream en écriture)

```javascript
var index = fs.createReadStream('index.html');
index.pipe(response); // ferme le stream par defaut, pas de réponse.end() donc
```
