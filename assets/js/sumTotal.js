//Essa função irá acessar o valor dos três pedidos somar seus valores e atualizalos. Ela será executada em cada click de increment dos pedidos.
//O métod slice() irá pegar o a string a partir da "9" "posição".
//SOMA
export function sumValues(){
  
 const h3TotalKib = document.getElementById("total-valor-kib").innerText;
  const valorKib = parseFloat(h3TotalKib.slice(9));//convertendo string para float
 
 const h3TotalCoxinha = document.getElementById("total-valor-coxinha").innerText;
 const valorCoxinha = parseFloat(h3TotalCoxinha.slice(9));//convertendo string para float
 const h3TotalQueijo = document.getElementById("total-valor-queijo").innerText;
 const valorQueijo = parseFloat(h3TotalQueijo.slice(9));
 
 const h1Total = document.getElementById("valor-total");
 const totalValue  = valorKib + valorCoxinha + valorQueijo;
 
 h1Total.innerText=`Total: R$ ${totalValue.toFixed(2)}`;
}




//SUBTRAÇÃO
// export function subractionValues(){
  
//  const h3TotalKib = document.getElementById("total-valor-kib").innerText;
//  const valorKib = parseFloat(h3TotalKib.slice(9));//convertendo string para float
 
//  const h3TotalCoxinha = document.getElementById("total-valor-coxinha").innerText;
//  const valorCoxinha = parseFloat(h3TotalCoxinha.slice(9));//convertendo string para float
//  const h3TotalQueijo = document.getElementById("total-valor-queijo").innerText;
//  const valorQueijo = parseFloat(h3TotalQueijo.slice(9));
 
//  const h1Total = document.getElementById("valor-total");
//  const totalValue  = ((valorKib + valorCoxinha) + valorQueijo); 
//  h1Total.innerText=`Total: R$ ${totalValue.toFixed(2)}`;
//  }