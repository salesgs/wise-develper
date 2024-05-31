import {sumValues}from "./sumTotal.js";
import { validNextButton } from "./valid.js";
import { validNextButtonDecrement } from "./valid.js";

export function incrementCoxinha() {  
  let numberCoxinha = parseInt(document.getElementById("number-coxinha").innerText);
  const unitValue = 0.50;  
  const formattedUnitValue = unitValue.toFixed(2);
  numberCoxinha++;
  document.getElementById("number-coxinha").innerText = `${numberCoxinha}`;
  const formattedTotalValue = numberCoxinha === 1 ? unitValue.toFixed(2):(unitValue * numberCoxinha).toFixed(2);
  document.getElementById("valor-coxinha").innerText = "Unidade R$:" + formattedUnitValue;
  document.getElementById("total-valor-coxinha") .innerText = "R$:" + formattedTotalValue;
  sumValues();
   
  const valid = validNextButton();
  if(valid==true){
    document.getElementById("buttonNext").style.display="block";
    document.getElementById("buttonNext").style.backgroundColor="#0047c9";
  }
}

export function decrementCoxinha() {
  
  let numberCoxinha = parseInt( document.getElementById("number-coxinha").innerText );
  const unitValue = 0.50;
  const totalValulenot = 0.00.toFixed(2);
  let formattedUnitValue = unitValue.toFixed(2);
  document.getElementById("number-coxinha").innerText = numberCoxinha == 0 ? `${0}` : ` ${numberCoxinha - 1} `;
  numberCoxinha--; 
  let formattedTotalValue = numberCoxinha == -1 ? totalValulenot:(unitValue * numberCoxinha).toFixed(2);
  document.getElementById("valor-coxinha").innerText = "Unidade R$:" + formattedUnitValue;
  document.getElementById("total-valor-coxinha").innerText = "R$:" + formattedTotalValue;

  sumValues();
    
  const valid = validNextButtonDecrement();
  if(valid==false){
    document.getElementById("buttonNext").style.display="none";
  }
  
}