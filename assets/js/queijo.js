export default function incrmentQueijo() {
  const h1 = document.getElementById("number-queijo");
  const h2 = document.getElementById("valor-queijo");
  const h3 = document.getElementById("total-valor-queijo");
  let numberString = h1.innerText;//Armazenando a o Texto do H1  => "String"
  let numberQueijo = parseFloat(numberString);//CONVERSÃO DO TEXTO DO H1 PARA NUMÉRO
  const unitValue = 0.50;//PREÇO DA PEÇA
  let formattedUnitValue = unitValue.toFixed(2);//FORMATANDO O VALOR
  h1.innerText = `${numberQueijo + 1}`;//SOMA A CADA CLICK
  numberQueijo++; //INCREMENTNADO O VALOR DE NUMBER
  let formattedTotalValue = numberQueijo === 1 ? unitValue.toFixed(2) : (unitValue * numberQueijo).toFixed(2);//VALIDAÇÃO QUANDO CHEGAR A ZERO E DECREMENT DO VALOR TOTAL
  h2.innerText = "Unidade R$:" + formattedUnitValue;//ATRIBUINDO O VALOR NO HTML
  h3.innerText = "TOTAL R$:" + formattedTotalValue;//ATRIBUINDO VALOR TOTAL NO HTML

   //VALIDAÇÃO PARA LIBERAR O BOTÃO 
  // Validação para liberar o botão
  let numberStringCoxinha= document.getElementById("number-coxinha").innerText;
  let numberCoxihna = new Number(numberStringCoxinha);
  let numberStringKib  = document.getElementById("number-kib").innerText;
  let numberKib = new Number(numberStringKib);
  
  
  
  if(numberKib>0 || numberCoxihna || numberQueijo > 0){
   let button = document.getElementById("buttonNext");
   button.style.display="block";
  }


}

export function decrementQueijo() {
  const h1 = document.getElementById("number-queijo");
  const h2 = document.getElementById("valor-queijo");
  const h3 = document.getElementById("total-valor-queijo");
  let numberString = h1.innerText;//Armazenando a o Texto do H1  => "String"
  let number = parseFloat(numberString);//CONVERSÃO DO TEXTO DO H1 PARA NUMÉRO
  const unitValue = 0.50;//PREÇO DA PEÇA
  const totalValulenot = 0.00.toFixed(2);//PREÇO RESERT DE DECREMENT
  let formattedUnitValue = unitValue.toFixed(2);//FORMATANDO VALOR 
  h1.innerText = number == 0 ? `${0}` : ` ${number - 1} `;//VALIDAÇÃO ACORAGEM NO ZERO
  number--; //INCREMENTNADO O VALOR DE NUMBER
  let formattedTotalValue = number == -1 ? totalValulenot : (unitValue * number).toFixed(2);//VALIDAÇÃO ACORAGEM NO ZERO E DECREMENT DO VALOR TOTAL
  h2.innerText = "Unidade R$:" + formattedUnitValue;//ATRIBUINDO O VALOR NO HTML
  h3.innerText = "TOTAL R$:" + formattedTotalValue;//ATRIBUINDO O VALOR TOTAL NO HTML

  // VALIDAÇÃO BOTÃO 

let numberStringCoxinha= document.getElementById("number-coxinha").innerText;
let numberCoxinha = new Number(numberStringCoxinha);

let numberStringQueijo = document.getElementById("number-queijo").innerText;
let numberQueijo  = new Number(numberStringQueijo);

  let numberStringKib  = document.getElementById("number-kib").innerText;
  let numberKib = new Number(numberStringKib);
  

if((numberKib==0 && numberCoxinha == 0 ) && ( numberQueijo == 0)){
 let button = document.getElementById("buttonNext");
 button.style.display="none";
}


}