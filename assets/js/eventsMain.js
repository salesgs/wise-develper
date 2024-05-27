/** Arquivo "principal" */
import  incrementKib  from "./kib.js";
import  { decrementKib } from  "./kib.js";
import {incrementCoxinha} from "./coxinha.js";
import { decrementCoxinha } from "./coxinha.js";
import incrmentQueijo from "./queijo.js";
import { decrementQueijo } from "./queijo.js";
import { activeLoadingModal } from "./modalRedirecionamento.js";
import { disableModalCheckout } from "./modalCheckout.js";

document.getElementById("incrementKibImg").addEventListener("click",incrementKib);  document.getElementById("decrementKibImg").addEventListener("click",decrementKib);

document.getElementById("incrmenetCoxinha").addEventListener("click",incrementCoxinha);
document.getElementById("decrementCoxinha").addEventListener("click",decrementCoxinha);

document.getElementById("incrmentQueijoImg").addEventListener("click",incrmentQueijo);
document.getElementById("decrementQueijoImg").addEventListener("click",decrementQueijo);

document.getElementById("buttonNext").addEventListener("click", activeLoadingModal); document.getElementById("button_exit").addEventListener("click", disableModalCheckout);
