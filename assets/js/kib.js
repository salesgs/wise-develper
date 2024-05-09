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
    let number = parseFloat(numberString);//CONVERSÃO DO TEXTO DO H1 PARA NUMÉRO
    const unitValue = 0.50;//PREÇO DA PEÇA
    let formattedUnitValue = unitValue.toFixed(2);//FORMATANDO O VALOR
    h1.innerText = `${number + 1}`;//SOMA A CADA CLICK
    number++; //INCREMENTNADO O VALOR DE NUMBER
    let formattedTotalValue = number === 1 ? unitValue.toFixed(2) : (unitValue * number).toFixed(2);//VALIDAÇÃO QUANDO CHEGAR A ZERO E DECREMENT DO VALOR TOTAL
    h2.innerText = "Unidade R$:" + formattedUnitValue;//ATRIBUINDO O VALOR NO HTML
    h3.innerText = "TOTAL R$:" + formattedTotalValue;//ATRIBUINDO VALOR TOTAL NO HTML

}

export function decrementKib() {
    const h1 = document.getElementById("number-kib");
    const h2 = document.getElementById("valor-kib");
    const h3 = document.getElementById("total-valor-kib");
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
}
