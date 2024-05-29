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
    const h1 = document.getElementById("number-kib");
    const h2 = document.getElementById("valor-kib");
    const h3 = document.getElementById("total-valor-kib");
    let numberString = h1.innerText;//Armazenando a o Texto do H1  => "String"
    let numberKib = parseFloat(numberString);//CONVERSÃO DO TEXTO DO H1 PARA NUMÉRO
    const unitValue = 0.50;//PREÇO DA PEÇA
    const totalValulenot = 0.00.toFixed(2);//PREÇO RESERT DE DECREMENT
    let formattedUnitValue = unitValue.toFixed(2);//FORMATANDO VALOR 
    h1.innerText = numberKib == 0 ? `${0}` : ` ${numberKib - 1} `;//VALIDAÇÃO ACORAGEM NO ZERO
    numberKib--; //INCREMENTNADO O VALOR DE NUMBER
    let formattedTotalValue = numberKib == -1 ? totalValulenot : (unitValue * numberKib).toFixed(2);//VALIDAÇÃO ACORAGEM NO ZERO E DECREMENT DO VALOR TOTAL
    h2.innerText = "Unidade R$:" + formattedUnitValue;//ATRIBUINDO O VALOR NO HTML
    h3.innerText = "R$:" + formattedTotalValue;//ATRIBUINDO O VALOR TOTAL NO HTML
    sumValues();
  const valid = validNextButtonDecrement();
  if(valid==false){
    let button = document.getElementById("buttonNext");
    button.style.display="none"; 
  }   
}
