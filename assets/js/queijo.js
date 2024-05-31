import { sumValues } from "./sumTotal.js";
import { validNextButton } from "./valid.js";
import { validNextButtonDecrement } from "./valid.js";

export default function incrmentQueijo(){ 
  let numberQueijo = parseInt(document.getElementById("number-queijo").innerText);
  const unitValue = 0.50;
  const formattedUnitValue = unitValue.toFixed(2);
  document.getElementById("number-queijo").innerText = `${numberQueijo + 1}`;
  numberQueijo++; 
  const formattedTotalValue = numberQueijo === 1 ? unitValue.toFixed(2):(unitValue * numberQueijo).toFixed(2);
  document.getElementById("valor-queijo").innerText="Unidade R$:"+formattedUnitValue;
  document.getElementById("total-valor-queijo").innerText="R$:"+ formattedTotalValue;
  
  sumValues();
  const valid = validNextButton();
  if(valid==true){
    document.getElementById("buttonNext").style.display="block"; 
    document.getElementById("buttonNext").style.backgroundColor="#0047c9";
  }
}

export function decrementQueijo() {
 
  let number = parseFloat(document.getElementById("number-queijo").innerText);
  const unitValue = 0.50;
  const totalValulenot = 0.00.toFixed(2);
  let formattedUnitValue = unitValue.toFixed(2); 
  document.getElementById("number-queijo").innerText = number == 0 ? `${0}` : ` ${number - 1} `;
  number--; 
  let formattedTotalValue = number == -1 ? totalValulenot : (unitValue * number).toFixed(2);
  document.getElementById("valor-queijo").innerText = "Unidade R$:" + formattedUnitValue;
  document.getElementById("total-valor-queijo").innerText = "R$:" + formattedTotalValue;
  
  sumValues();
  const valid = validNextButtonDecrement();
  if(valid == false){
    document.getElementById("buttonNext").style.display="none";
  }
} 