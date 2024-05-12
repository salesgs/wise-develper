
export function activeLoadingModal() {
    const modalAtive = document.getElementById("janela_modal");//PEGANDO O MODAL
    const time = 5000;// TIME DO LOADING
    modalAtive.style.display = "flex"; //ATIVANDO MODAL USANDO DISPLAY

    // FUNÇÃO DO REDIRECIONAMENTO DE PAGINA
    function finishLoading() {
        window.location.href = 'gerenciar-pedido.html';
    }

    // CHAMA SET-TIMEOUT PARA FAZER PAGINA SER REDIRECIONADA DE ACORDO COM TIME
    setTimeout(finishLoading, time);
}