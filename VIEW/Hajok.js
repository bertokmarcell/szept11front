import Hajo from "./Hajo.js"
export default class Hajok{
    #lista=[]
    #szulelem=""
    constructor(lista,szulelem){
        this.#lista=lista
        
        this.#szulelem=szulelem
        this.megjelenit()
    }
    megjelenit(){
        this.#lista.forEach((e,i) => {
            new Hajo(e,this.#szulelem)
        });
    }
}