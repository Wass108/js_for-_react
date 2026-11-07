const Etablissement = "GENIO"
class etudiant{
    constructor(nom,age){
        this.nom=nom;
        this.age=age
    }
}
function info(etudiant){
    return 'nom:${etudiant.nom} age:${etudiant.age}'
}
export default etudiant
export {Etablissement,info}