/** Arquivo "principal" */
import  incrementKib  from "./kib.js";
import  { decrementKib } from  "./kib.js";
import {incrementCoxinha} from "./coxinha.js";
import { decrementCoxinha } from "./coxinha.js";
import incrmentQueijo from "./queijo.js";

import { decrementQueijo } from "./queijo.js";

// KIB
const incrementKibImg = document.getElementById("incrementKibImg");
const decrementKibImg = document.getElementById("decrementKibImg");
decrementKibImg.addEventListener("click",decrementKib);
incrementKibImg.addEventListener("click",incrementKib);
//----------------------------------------------------------

// Coxinha
const incrementCoxinhaImg = document.getElementById("incrmenetCoxinha");
const decrementCoxinhaImg = document.getElementById("decrementCoxinha");

incrementCoxinhaImg.addEventListener("click",incrementCoxinha);
decrementCoxinhaImg.addEventListener("click", decrementCoxinha);
//----------------------------------------------------------

// Queijo
const incrementQueijoImg = document.getElementById("incrmentQueijoImg");
const decrementQueijoImg = document.getElementById("decrementQueijoImg");

incrementQueijoImg.addEventListener("click",incrmentQueijo);
decrementQueijoImg.addEventListener("click",decrementQueijo)
//----------------------------------------------------------