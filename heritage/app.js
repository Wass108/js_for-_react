class Etudiant{
    constructor(nom,age){
        this.nom=nom;
        this.age=age
    }

}
class Stagiaire extends Etudiant{
     constructor(nom,age,stage){
    super(nom,age);
     this.stage=stage; }
info(){return `Stagiaire nom:${this.nom} a pour
age:${this.age} stage:${this.stage}`
    }
}
let st1= new Stagiaire("Sami",23,"Dev")
let st2= new Stagiaire("Mohamed",21,"Marketing")
console.log(st1)
console.log(st2)
