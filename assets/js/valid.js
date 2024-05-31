export function validNextButton(){
  let valid = false; 
  let numberCoxinha = new Number(document.getElementById("number-coxinha").innerText);
  let numberKib = new Number(document.getElementById("number-kib").innerText);
  let numberQueijo  = new Number(document.getElementById("number-queijo").innerText);
  
  if(numberKib>0 || numberCoxinha >0 || numberQueijo > 0){
   valid = true;
  }
 return valid;
}

export function validNextButtonDecrement(){
  let valid = true; 
  let numberCoxihna = new Number( document.getElementById("number-coxinha").innerText);
  let numberKib = new Number(document.getElementById("number-kib").innerText);
  let numberQueijo  = new Number(document.getElementById("number-queijo").innerText);
  if(numberKib== 0 && numberCoxihna == 0 && numberQueijo ==0){
    valid = false;
 }
 return valid;
}