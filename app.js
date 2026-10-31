class Etudiant{
    constructor(nom,age){
        this.nom=nom;
        this.age=age
    }
    info(){
        return `Etudiant nom:${this.nom} a pour 
    age:${this.age}`
    }
}


let et1= new Etudiant("Rami",23)
let et2= new Etudiant("Mohamed",21)
console.log(et1)
console.log(et2)
