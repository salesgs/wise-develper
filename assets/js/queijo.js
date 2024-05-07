export default function incrmentQueijo(){
  const h1 = document.getElementById("number-queijo");
  let numberString = h1.innerText;
  let number = new Number(numberString);//CONVERSÃO DO TEXTO DO H1 PARA NUMÉRO
  h1.innerText = ` ${ number + 1} `; //SOMA A CADA CLICK
}
export function decrementQueijo(){
  const h1  = document.getElementById("number-queijo");
    let numberString = h1.innerText; //Armazenando a o Texto do H1  => "String"
    let number = new Number(numberString);//CONVERSÃO DO TEXTO DO H1 PARA NUMÉRO
    h1.innerText =   number == 0 ? `${0}`: ` ${number - 1} `;
}