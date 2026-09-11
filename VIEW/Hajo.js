export default class Hajo{
    //egy hajo megjelenitese
    #obj={}
    #szulelem=""
    constructor(obj,szulelem){
        this.#obj=obj;
        console.log(szulelem)
        this.#szulelem = szulelem
        this.megjelenit()
        this.buttonelem=document.querySelector(".hajo:last-child button")
        console.log(this.buttonelem)
        this.esemenykezelo()
        
    }
    megjelenit(){
        const SZOVEG=`
            <div class="hajo">
                <h2>hajo neve: ${this.#obj.nev}</h2>
                <p>hajo szine: ${this.#obj.szin}</p>
                <p>hajo kapitanya: ${this.#obj.kapitany}</p>
                <button>Kivalaszt</button>
            </div>
            
        `
        this.#szulelem.insertAdjacentHTML("beforeend",SZOVEG)
    }
    esemenykezelo(){
        this.buttonelem.addEventListener("click",()=>{
            //sajat esemenyt csinal
            const e = new CustomEvent("kivalaszt",{detail:this.#obj.id})
            window.dispatchEvent(e)
            console.log(this.#obj.id)
        })
    }
    
}