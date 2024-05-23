const buttonFinish = document.getElementById("buttonFinish");
buttonFinish.addEventListener("click",catchNumber);

function catchNumber(){
 const h1NumberGenerate = document.getElementById("numberGenerate").innerText;
 let newNumber = parseInt(h1NumberGenerate.slice(2));
 newNumber+=1;
 console.log(newNumber);
 document.getElementById("numberGenerate").innerText=`#0${newNumber}`;
 document.getElementById("janela_modal_checkout").style.display="none";
}