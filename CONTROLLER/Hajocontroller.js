import Hajomodell from "../MODELL/Hajomodell.js"
import Hajok from "../VIEW/Hajok.js"
import Hajoteljes from "../VIEW/Hajoteljes.js"

export default class Hajocontroller{
    #hajomodell={}
    #hajokView={}
    #objektumlista={}
    constructor(){
        //feladata: modell + view kozti kapcsolattartas
        //itt iratkozunk fel az eseménekre
        //+ peldanyositjuk a viewt es  modellt
        this.#hajomodell=new Hajomodell
        this.Artelem=document.querySelectorAll(".tarolo")[0]

        this.rendezz=document.getElementById("rendeznev")
        this.szur=document.getElementById("rendezszur")

        this.#hajokView=new Hajok(this.#hajomodell.getlista(),this.Artelem)
        console.log(this.#hajomodell.rendezzlista())
        console.log(this.#hajomodell.szurtlista())
        this.szuresrendezesesemenykezelo()
    }
    szuresrendezesesemenykezelo(){
        //when clicked -> sort
        this.rendezz.addEventListener("click",()=>{
            this.#hajomodell.rendezzlista();
            this.Artelem.innerHTML="";
            new Hajok(this.#hajomodell.rendezzlista(),this.Artelem)
        })
        this.szur.addEventListener("click",()=>{
            this.Artelem.innerHTML="";
            new Hajok(this.#hajomodell.szurtlista(),this.Artelem)
        })
        //igy jut el a controllerbe
        window.addEventListener("kivalaszt",(event)=>{
            console.log(event.detail)
            const adat=this.#hajomodell.getadat(event.detail)
            this.Artelem=""
            new Hajoteljes(adat,this.Artelem)
        })
        window.addEventListener("kosarba",(e)=>{
            const adat = this.#hajomodell.getadat(e.detail)
            this.#objektumlista+=adat;
            
        })
    }
}