export default function incrmentQueijo(){
  const h1 = document.getElementById("number-queijo");
    const h2 = document.getElementById("valor-queijo");
    const h3 = document.getElementById("total-valor-queijo");
    let numberString = h1.innerText;//Armazenando a o Texto do H1  => "String"
    let number = parseFloat(numberString);//CONVERSÃO DO TEXTO DO H1 PARA NUMÉRO
    const unitValue = 0.50;
    let formattedUnitValue = unitValue.toFixed(2);
    let formattedTotalValue = number === 1 ? unitValue.toFixed(2) : (unitValue * number).toFixed(2);//ATRIBUINDO O VALOR QUANDO CLICK E DADO UMA VEZ
    h1.innerText = `${number + 1}`;//SOMA A CADA CLICK
    number++; //INCREMENTNADO O VALOR DE NUMBER
    formattedTotalValue = (unitValue * number).toFixed(2); // RECALCULANDO O VALOR TOTAL
    h2.innerText = "Unidade R$:" + formattedUnitValue;
    h3.innerText = "TOTAL R$:" + formattedTotalValue;
}
export function decrementQueijo(){
  const h1  = document.getElementById("number-queijo");
    let numberString = h1.innerText; //Armazenando a o Texto do H1  => "String"
    let number = new Number(numberString);//CONVERSÃO DO TEXTO DO H1 PARA NUMÉRO
    h1.innerText =   number == 0 ? `${0}`: ` ${number - 1} `;
}