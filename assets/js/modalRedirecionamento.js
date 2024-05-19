
export function activeLoadingModal() {
    const modalAtive = document.getElementById("janela_modal");//PEGANDO O MODAL
    const modalCheckout = document.getElementById("janela_modal_checkout")
    const time = 5000;// TIME DO LOADING
    modalAtive.style.display = "flex"; //ATIVANDO MODAL USANDO DISPLAY

    // FUNÇÃO DO REDIRECIONAMENTO DE MODAL
    function finishLoading() {
      modalCheckout.style.display = "flex";
      modalAtive.style.display = "none";
    }

    // CHAMA SET-TIMEOUT PARA FAZER PAGINA SER REDIRECIONADA DE ACORDO COM TIME
    setTimeout(finishLoading, time);
}
