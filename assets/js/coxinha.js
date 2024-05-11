import { arrayPriceCoxinha } from "./statusPedido.js";
import {sumValueTotalKib} from "./kib.js";
import {sumValueTotalQueijo} from "./queijo.js"
//ORIENTAÇÃO OBJETO
class Coxinha {
  priceCoxinha;
  setPriceCoxinha(price){
   this.priceCoxinha = price;
   arrayPriceCoxinha.push(this.priceCoxinha);
   
  }

}

export function incrementCoxinha() {
  const h1 = document.getElementById("number-coxinha");
  const h2 = document.getElementById("valor-coxinha");
  const h3 = document.getElementById("total-valor-coxinha");
  let numberString = h1.innerText;//Armazenando a o Texto do H1  => "String"
  
  let numberCoxinha = parseInt(numberString);//CONVERSÃO DO TEXTO DO H1 PARA NUMÉRO
  const unitValue = 0.50;//PREÇO DA PEÇA
  let formattedUnitValue = unitValue.toFixed(2);//FORMATANDO O VALOR
  numberCoxinha++;
  h1.innerText = `${numberCoxinha}`;//SOMA A CADA CLICK
  let formattedTotalValue = numberCoxinha === 1 ? unitValue.toFixed(2) : (unitValue * numberCoxinha).toFixed(2);//VALIDAÇÃO QUANDO CHEGAR A ZERO E DECREMENT DO VALOR TOTAL
  h2.innerText = "Unidade R$:" + formattedUnitValue;//ATRIBUINDO O VALOR NO HTML
  h3.innerText = "TOTAL R$:" + formattedTotalValue;//ATRIBUINDO VALOR TOTAL NO HTML
  
   let coxinhaPrice = new Coxinha();
  coxinhaPrice.setPriceCoxinha(formattedTotalValue);
  //VALIDAÇÃO PARA LIBERAR O BOTÃO 
    
  let numberStringQueijo = document.getElementById("number-queijo").innerText;
  let numberStringKib  = document.getElementById("number-kib").innerText;
    
  let numberQueijo  = new Number(numberStringQueijo);
  let numberKib = new Number(numberStringKib);
  if(numberKib>0 || numberCoxinha>0 || numberQueijo>0){
   let button = document.getElementById("buttonNext");
   button.style.display="block";
  }
  sumValueTotalCoxinha();

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
  h3.innerText = "TOTAL R$:" + formattedTotalValue;//ATRIBUINDO O VALOR TOTAL NO HTML


  let numberStringQueijo = document.getElementById("number-queijo").innerText;
  
  let numberQueijo  = new Number(numberStringQueijo);
  let numberStringKib  = document.getElementById("number-kib").innerText;
  let numberKib = new Number(numberStringKib);
  
  if((numberKib == 0 && numberCoxinha == 0 ) && ( numberQueijo == 0)){
   let button = document.getElementById("buttonNext");
   button.style.display="none";
  }
}

export function sumValueTotalCoxinha(){
  const h1ValorTotal = document.getElementById("total-valor-coxinha").innerText;
  let valorNumber = parseFloat(h1ValorTotal.slice(9));
   
   const totalKib = sumValueTotalKib();
   const totalQueijo = sumValueTotalQueijo();
   const total = (valorNumber + totalKib + totalQueijo);
   h1ValorTotal.innerText =`${total.toFixed(2)}`;

  return valorNumber;

}