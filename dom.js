console.log(document.title);
document.title ="Prueba de titulo";
console.log(document.title);
console.log(document.body);
let h1=document.getElementsByTagName("h1")
h1[0].innerHTML="prueba"
console.log(h1);
let boton= document.getElementById("boton")
console.log(boton);

boton.addEventListener("click",mensaje)
function mensaje(){
    alert("Mensaje");
}