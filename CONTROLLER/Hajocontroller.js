import Hajomodell from "../MODELL/Hajomodell.js"
import Hajok from "../VIEW/Hajok.js"

export default class Hajocontroller{
    #hajomodell={}
    #hajokView={}
    constructor(){
        //feladata: modell + view kozti kapcsolattartas
        //itt iratkozunk fel az eseménekre
        //+ peldanyositjuk a viewt es  modellt
        this.#hajomodell=new Hajomodell
        this.Artelem=document.querySelectorAll(".tarolo")[0]
        this.#hajokView=new Hajok(this.#hajomodell.getlista(),this.Artelem)
    }
}