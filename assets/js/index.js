

export default function incrementKib(){
   const h1 = document.getElementById("number-kib");
   let numberString = h1.innerText; 
   let number = new Number(numberString);//CONVERSÃO DO TEXTO DO H1 PARA NUMÉRO
    h1.innerText=` ${number + 1}`; //SOMA A CADA CLICK
  
}
