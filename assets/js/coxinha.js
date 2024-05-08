export function incrementCoxinha(){
  const h1 = document.getElementById("number-coxinha");
  let numberString = h1.innerText;
  let numero = new Number(numberString);
  h1.innerText= `${numero + 1}`;
}

export function decrementCoxinha(){
  const h1  = document.getElementById("number-coxinha");
  let numberString = h1.innerText; //Armazenando a o Texto do H1  => "String"
  let number = new Number(numberString);//CONVERSÃO DO TEXTO DO H1 PARA NUMÉRO
  h1.innerText =   number == 0 ? `${0}`: ` ${number - 1} `;
}

