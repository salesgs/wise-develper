const buttonFinish = document.getElementById("buttonFinish");
buttonFinish.addEventListener("click",catchNumber);

function catchNumber(){
 const h1NumberGenerate = document.getElementById("numberGenerate").innerText;
 let newNumber = parseInt(h1NumberGenerate.slice(2));
 newNumber+=1;
 
 document.getElementById("numberGenerate").innerText=`#0${newNumber}`;

 //FECHANDO A TABELA MODAL E TRAZENDO MODAL SUCESSO
 const modalChekout = document.getElementById("janela_modal_checkout");
 const modalSucesso = document.getElementById("janela_modal_sucesso");
 const time = 12000;

 modalChekout.style.display = "none"

 if (modalChekout.style.display === "none") {

    modalSucesso.style.display = "flex"
 }

 function finishLoading(){
  modalSucesso.style.display = "none"
 }
 setTimeout(finishLoading, time);
 
 //ZERANDO NÚMERO DOS ITENS
 document.getElementById("number-kib").innerText="0";
 document.getElementById("number-coxinha").innerText="0";
 document.getElementById("number-queijo").innerText="0";

 //ZERANDO VALORES DOS PEDIDOS
 document.getElementById("total-valor-kib").innerText="R$:0.00"
 document.getElementById("total-valor-coxinha").innerText="R$:0.00";
 document.getElementById("total-valor-queijo").innerText="R$:0.00";
 document.getElementById("valor-total").innerText="R$:0.00";
 document.getElementById("buttonNext").style.display="none";
}