export default function incrementKib(){
    /**
     * @version "1.0"
     * @author "Gabriel Sales" 
     * @since  " 07/05/24 "
     * @description:Esse método captura um elemento h1 pelo seu atributo ID. Logo após  o seu conteúdo de texto é aramzenado em uma variável. Esse valor em um primeiro momeento é uma string que breve será armazenada em uma let number com número.
     */
   const h1  = document.getElementById("number-kib");
   let numberString = h1.innerText; //Armazenando a o Texto do H1  => "String"
   let number = new Number(numberString);//CONVERSÃO DO TEXTO DO H1 PARA NUMÉRO
   h1.innerText = ` ${ number + 1} `; //SOMA A CADA CLICK
}

export function decrementKib(){
    const h1  = document.getElementById("number-kib");
    let numberString = h1.innerText; //Armazenando a o Texto do H1  => "String"
    let number = new Number(numberString);//CONVERSÃO DO TEXTO DO H1 PARA NUMÉRO
    h1.innerText =   number == 0 ? `${0}`: ` ${number - 1} `;
}
