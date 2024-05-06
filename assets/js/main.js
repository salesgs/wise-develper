 const imgsDecrement = document.querySelectorAll(".decrement");
 
 imgsDecrement.forEach((element)=>{
  element.addEventListener("click",function(){
    alert("Pegou - ");
  });
 });

 
 const imgsIncrement = document.querySelectorAll(".increment");
 imgsIncrement.forEach( (element) =>{
   element.addEventListener("click",function(){
    alert("Pegou o +");
   });
 });