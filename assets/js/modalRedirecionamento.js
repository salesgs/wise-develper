export function activeLoadingModal() {
  const modalAtive = document.getElementById("janela_modal");//PEGANDO O MODAL
  const modalCheckout = document.getElementById("janela_modal_checkout")
  const time = 3000;// TIME DO LOADING
  modalAtive.style.display = "flex"; //ATIVANDO MODAL USANDO DISPLAY
  // FUNÇÃO DO REDIRECIONAMENTO DE MODAL
  function finishLoading() {
    modalCheckout.style.display = "flex";
    modalAtive.style.display = "none";
    valueTotalItems(); 
  }
  // CHAMA SET-TIMEOUT PARA FAZER PAGINA SER REDIRECIONADA DE ACORDO COM TIME
  setTimeout(finishLoading, time); 
}

/** Funções para atualização de preço de tabela */
function valueTotalItems(){
  const h1  = document.getElementById("valor-total");
  const h1TotalModal = document.getElementById("valueTotal");
  h1TotalModal.innerText ='R$: ' + h1.innerText.slice(3); 
  
  /** VALORES DE KIB   */
  const h1NumberKib = document.getElementById("number-kib");
  const trQuantityKib = document.getElementById("quantityKib");
  trQuantityKib.innerText= h1NumberKib.innerText;
  const totalKib = document.getElementById("total-valor-kib");
  const priceKib = document.getElementById("priceKib");
  
  priceKib.innerText ='R$: ' + totalKib.innerText.slice(3);
  /*============================================== */
  /** VALORES DE COXINHA   */
  const h1NumberCoxinha = document.getElementById("number-coxinha");
  const trQuantityCoxinha = document.getElementById("quantityCoxinha");
  trQuantityCoxinha.innerText = h1NumberCoxinha.innerText;
  const totalCoxinha = document.getElementById("total-valor-coxinha");
  const priceCoxinha = document.getElementById("priceCoxinha");
  priceCoxinha.innerText ='R$: ' + totalCoxinha.innerText.slice(3);
 /*==============================================*/
  /** VALORES DE QUEIJO   */
  const h1NumberQueijo = document.getElementById("number-queijo");
  const trQuantityBolinho = document.getElementById("quantityBolinhoQueijo");
  trQuantityBolinho.innerText = h1NumberQueijo.innerText;
  const totalQueijo = document.getElementById("total-valor-queijo");
  const priceQuejo = document.getElementById("priceQueijo");
  priceQuejo.innerText ='R$: ' + totalQueijo.innerText.slice(3);  
}