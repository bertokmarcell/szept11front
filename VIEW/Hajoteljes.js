export default class Hajoteljes{
    //egy hajo megjelenitese
    #obj={}
    #szulelem=""
    constructor(obj,szulelem){
        this.#obj=obj;
        console.log(szulelem)
        this.#szulelem = szulelem
        this.megjelenit()
        this.button=document.querySelector(".adat:last-child button")
        
    }
    megjelenit(){
        const SZOVEG=`
            <div class="adat">
                <p>hajo kapitanya: ${this.#obj.leiras}</p>
                <button>kosarba</button>
            </div>
        `
        this.#szulelem.insertAdjacentHTML("beforeend",SZOVEG)
    }
    kosarbarkas(){
        this.button.addEventListener("click",()=>{
            //sajat esemenyt csinal
            const e = new CustomEvent("kosarba",{detail:this.#obj.id})
            window.dispatchEvent(e)
            console.log(this.#obj.id)
        })
    }
}