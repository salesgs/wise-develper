export function sumValues(){
  
  const h3TotalKib = document.getElementById("total-valor-kib").innerText;
  const valorKib = parseFloat(h3TotalKib.slice(3));//convertendo string para float

 const h3TotalCoxinha = document.getElementById("total-valor-coxinha").innerText;
 const valorCoxinha = parseFloat(h3TotalCoxinha.slice(3));//convertendo string para float
 const h3TotalQueijo = document.getElementById("total-valor-queijo").innerText;
 const valorQueijo = parseFloat(h3TotalQueijo.slice(3));
 const h1Total = document.getElementById("valor-total");
 const totalValue  = valorKib + valorCoxinha + valorQueijo;
 
 h1Total.innerText=`R$: ${totalValue.toFixed(2)}`;
}
