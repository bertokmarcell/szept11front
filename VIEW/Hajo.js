export default class Hajo{
    //egy hajo megjelenitese
    #obj={}
    #szulelem=""
    constructor(obj,szulelem){
        this.#obj=obj;
        console.log(szulelem)
        this.#szulelem = szulelem
        this.megjelenit()
        
    }
    megjelenit(){
        const SZOVEG=`
            <div class="adat">
                <h2>hajo neve: ${this.#obj.nev}</h2>
                <p>hajo szine: ${this.#obj.szin}</p>
                <p>hajo kapitanya: ${this.#obj.kapitany}</p>
            </div>
        `
        this.#szulelem.insertAdjacentHTML("beforeend",SZOVEG)
    }
}