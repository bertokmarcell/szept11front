//article elemben cardokat szeretnék

import Hajocontroller from "./CONTROLLER/Hajocontroller.js";

/*
import { HAJOLISTA } from "./MODELL/Adatok.js"
import Hajo from "./VIEW/Hajo.js"
import Hajok from "./VIEW/Hajok.js"

// hajókról
const Articleelem=document.querySelectorAll(".tarolo")[0]
console.log(Articleelem)

new Hajok(HAJOLISTA,Articleelem)*/
new Hajocontroller();
/* 
gomb hajo osztalyban X easy
hajo osztalyban esemenykezelo amely kiválaszt egy saját eseményt X tedious customevent
kiválasztott eseményre feliratkozunk controllerben 
megjelenítjuk articleben
*/
/*
legyen egy gomb hajoteljesben ami azt okozza hogy belemegy egy kosárba
-hojoteljes gomb amire kattintva, kivált egy sajat esemenyt = kosarba
-controller feliratkozik rá a kosarba esemenyre
-modellben kell egy lista amibe bele kerül a kivalasztott adat - modellben kell egy kosarba tagfüggveny
-modellbe kell egy getkosar függveny
-controller lekeri a modellből a kosar tartalmat egy peldanyositja a kosar tartamát. (hajok osztaly)
*/