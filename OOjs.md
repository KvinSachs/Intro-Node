# JavaScript

Pas de classes à proprement parler, on va utiliser les :  

* Types Primitif
* Reférence (objets)

-------------

### Les Types Primitifs

* String (chaîne de caractères)
* Number (entier ou nombre à virgule flotante)
* Boolean (true | false)
* Null (seulement une valeur possible : null)
* Undefined (seulement une valeur : undefined | variable non initialisée) (var undefined;)

Tous les types primitifs ont une représentation litérale (valeur non stockée dans une variable)

Javascript est un langage non typé (possibilité de switcher entre les types de primitifs de façon assez simple)


### Les Références

Reference Type -> Reference Instance  
Classe -> Objets  

```javascript
var bebeECSSDW = new Person();
bebeECSSDW = null; // Détruit l'objet
```

#### Reference Type

* Array
* Object
* Function
* Date
* Error
* RegExp (pour tester les [regexp](http://regexr.com))

JSON  

```json
var bebe = {
    papa : "sdw",
    maman : "ecs",
    name: "k"
};
// Or
var bebe = new Object();
bebe.papa = "sdw";
bebe.maman = ...
```