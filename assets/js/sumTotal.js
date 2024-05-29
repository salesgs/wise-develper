export function sumValues(){

const valorKib = parseFloat(
  document.getElementById("total-valor-kib").innerText.slice(3)
);

 const valorCoxinha = parseFloat(
  document.getElementById("total-valor-coxinha").innerText.slice(3)
);
 
 const valorQueijo = parseFloat( 
  document.getElementById("total-valor-queijo").innerText.slice(3)
);
 
 const totalValue = valorKib + valorCoxinha + valorQueijo;
 
 document.getElementById("valor-total").innerText=`R$: ${totalValue.toFixed(2)}`;
}