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
  const h1 = document.getElementById("number-coxinha");
  const h2 = document.getElementById("valor-coxinha");
  const h3 = document.getElementById("total-valor-coxinha");
  let numberString = h1.innerText;//Armazenando a o Texto do H1  => "String"
  let numberCoxinha = parseFloat(numberString);//CONVERSÃO DO TEXTO DO H1 PARA NUMÉRO
  const unitValue = 0.50;//PREÇO DA PEÇA
  const totalValulenot = 0.00.toFixed(2);//PREÇO RESERT DE DECREMENT
  let formattedUnitValue = unitValue.toFixed(2);//FORMATANDO VALOR 
  h1.innerText = numberCoxinha == 0 ? `${0}` : ` ${numberCoxinha - 1} `;//VALIDAÇÃO ACORAGEM NO ZERO
  numberCoxinha--; //INCREMENTNADO O VALOR DE NUMBER
  let formattedTotalValue = numberCoxinha == -1 ? totalValulenot : (unitValue * numberCoxinha).toFixed(2);//VALIDAÇÃO ACORAGEM NO ZERO E DECREMENT DO VALOR TOTAL
  h2.innerText = "Unidade R$:" + formattedUnitValue;//ATRIBUINDO O VALOR NO HTML
  h3.innerText = "R$:" + formattedTotalValue;//ATRIBUINDO O VALOR TOTAL NO HTML

  sumValues();
    
  const valid = validNextButtonDecrement();
  if(valid==false){
      let button = document.getElementById("buttonNext");
      button.style.display="none";
  }
  
  }