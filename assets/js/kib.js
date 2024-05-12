import { arrayPriceKib } from "./statusPedido.js";
import {sumValues} from "./sumTotal.js";
// import { subractionValues } from "./sumTotal.js";
class Kib{
    priceKib;
    setPriceKib(price){
        this.setPriceKib = price;
        arrayPriceKib.push(this.setPriceKib);
    }
}


export default function incrementKib() {
    /**
     * @version "1.0"
     * @author "Gabriel Sales" 
     * @since  " 07/05/24 "
     * @description:Esse método captura um elemento h1 pelo seu atributo ID. Logo após  o seu conteúdo de texto é aramzenado em uma variável. Esse valor em um primeiro momeento é uma string que breve será armazenada em uma let number com número.
     */
    const h1 = document.getElementById("number-kib");
    const h2 = document.getElementById("valor-kib");
    const h3 = document.getElementById("total-valor-kib");
    let numberString = h1.innerText;//Armazenando a o Texto do H1  => "String"
    let numberKib = parseInt(numberString);//CONVERSÃO DO TEXTO DO H1 PARA NUMÉRO
    const unitValue = 0.50;//PREÇO DA PEÇA
    let formattedUnitValue = unitValue.toFixed(2);//FORMATANDO O VALOR
    numberKib++; //INCREMENTNADO O VALOR DE NUMBER
    h1.innerText = `${numberKib}`;//SOMA A CADA CLICK
    h2.innerText = "Unidade R$:" + formattedUnitValue;//ATRIBUINDO O VALOR NO HTML
    let formattedTotalValue = numberKib === 1 ? unitValue.toFixed(2) : (unitValue * numberKib).toFixed(2);//VALIDAÇÃO QUANDO CHEGAR A ZERO E DECREMENT DO VALOR TOTAL
    h3.innerText = "TOTAL R$:" + formattedTotalValue;//ATRIBUINDO VALOR TOTAL NO HTML
    sumValues();
        //===============================
   
 let kibPrice = new Kib();
 kibPrice.setPriceKib(formattedTotalValue);
    //VALIDAÇÃO PARA LIBERAR O BOTÃO 
  // Validação para liberar o botão
  let numberStringCoxinha= document.getElementById("number-coxinha").innerText;
  let numberCoxihna = new Number(numberStringCoxinha);
  
  let numberStringQueijo = document.getElementById("number-queijo").innerText;
  let numberQueijo  = new Number(numberStringQueijo);
  if(numberKib>0 || numberCoxihna >0 || numberQueijo > 0){
   let button = document.getElementById("buttonNext");
   button.style.display="block";
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
    h3.innerText = "TOTAL R$:" + formattedTotalValue;//ATRIBUINDO O VALOR TOTAL NO HTML
//   subractionValues();
   sumValues();
// VALIDAÇÃO BOTÃO 

let numberStringCoxinha= document.getElementById("number-coxinha").innerText;
let numberCoxihna = new Number(numberStringCoxinha);

let numberStringQueijo = document.getElementById("number-queijo").innerText;
let numberQueijo  = new Number(numberStringQueijo);

if((numberKib==0 && numberCoxihna == 0 ) && ( numberQueijo == 0)){
 let button = document.getElementById("buttonNext");
 button.style.display="none";
}

}

