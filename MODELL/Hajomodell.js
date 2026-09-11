import { HAJOLISTA } from "./Adatok.js"

export default class Hajomodell{
    #lista=[]
    #kosarlista
    constructor(){
        this.#lista=HAJOLISTA
    }
    getlista(){
        return this.#lista
    }
    rendezzlista(){
        //nevlista
        this.#lista.sort((a,b)=>{
            /*if(a.nev>b.nev){
                return -1
            }else{
                return 1
            }*/
           return a.nev>b.nev?1:-1;
        })
        return this.#lista
    }
    szurtlista(){
        const SZURT=this.#lista.filter((a)=>{
            return a.valodi==true
        })

        return SZURT
    }
    getadat(id){
        this.#lista.find((a)=>{
            return a.id==id
        })
    }
    getkosarlista(){
        return this.#kosarlista;
    }
}