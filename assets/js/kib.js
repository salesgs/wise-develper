import {sumValues} from "./sumTotal.js";
import { validNextButton } from "./valid.js";
import { validNextButtonDecrement } from "./valid.js";

export default function incrementKib() {
  let numberKib = parseInt(document.getElementById("number-kib").innerText);
  const unitValue = 0.50;
  const formattedUnitValue = unitValue.toFixed(2);
   
  numberKib++; 
  document.getElementById("number-kib").innerText  = `${numberKib}`;
  document.getElementById("valor-kib").innerText = "Unidade R$:" + formattedUnitValue;
  const formattedTotalValue=numberKib===1 ?unitValue.toFixed(2):(unitValue*numberKib).toFixed(2);
  document.getElementById("total-valor-kib").innerText= "R$:" + formattedTotalValue;
  sumValues();
    
  const valid = validNextButton();
  if(valid==true){ 
    document.getElementById("buttonNext").style.display="block";
    document.getElementById("buttonNext").style.backgroundColor="#0047c9";
  }
}
export function decrementKib() {
    
    let numberKib = parseInt( document.getElementById("number-kib").innerText );
    const unitValue = 0.50;
    const totalValulenot = 0.00.toFixed(2);
    const formattedUnitValue = unitValue.toFixed(2); 
    document.getElementById("number-kib").innerText = numberKib == 0 ? `${0}` : ` ${numberKib - 1} `;
    numberKib--;
    const formattedTotalValue = numberKib == -1 ? totalValulenot : (unitValue * numberKib).toFixed(2);
    document.getElementById("valor-kib").innerText = "Unidade R$:" + formattedUnitValue;
    document.getElementById("total-valor-kib").innerText = "R$:" + formattedTotalValue;
    
    sumValues();

  const valid = validNextButtonDecrement();
  if(valid==false){
    document.getElementById("buttonNext").style.display="none";
  }   
}
