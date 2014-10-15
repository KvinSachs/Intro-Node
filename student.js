var etudiant = {
    pseudo : "Krakepoulpe",
    ecole : "SUPDEWEB",
    inscription : new Date(2012, 6, 21),
    langages : ['ruby','javascript','node','php','html5','CSS3'],
    passe : true,
    age : 26
}

var phrase = "L'étudiant " + etudiant.pseudo + ", " + etudiant.age + " ans, inscrit depuis le " + etudiant.inscription + " à l'école " + etudiant.ecole + ".";

console.log(phrase);
console.log("En cours pour apprendre des langages : ");
etudiant.langages.forEach(function(i) {
    console.log(i);
});
console.log('Est ce qu\'il roxe : ' + etudiant.passe);

function Person(name, surname, age, state) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.state = state;

    this.sayHello = function() {
        console.log("Hello, my name is " + this.surname + " " + this.name + ", and I'm a " + this.state + "!");
    }
}

var hunter = new Person("Winchester", "Dean", 32, "Demon");

hunter.sayHello();